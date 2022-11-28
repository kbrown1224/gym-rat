from datetime import date, datetime
from random import sample

from fastapi import APIRouter, Depends, Query, status
from rich import print
from sqlmodel import Session, select

from backend.app.auth.dependencies import get_current_user
from backend.app.auth.models import User
from backend.app.modules.workout.models import (
    Counts,
    Distribution,
    LastWorkout,
    Lift,
    Set,
    Trend,
    Workout,
    WorkoutCreate,
    WorkoutGroup,
    WorkoutRead,
    WorkoutStatistics,
    WorkoutUpdate,
)
from backend.db.session import get_sync_session

from .dependencies import valid_owned_workout, valid_workout_group_id
from .exceptions import user_not_owned_error
from .service import (
    generate_lift,
    generate_set,
    generate_workout,
    get_exercises,
    get_workout_by_id,
    search_workouts,
)

router = APIRouter(tags=["Workout"], prefix="/workout")


@router.get(
    "/past-workouts",
    response_model=list[WorkoutRead],
    status_code=status.HTTP_200_OK,
    description="Search for past workouts by date and workout group",
    response_description="Returns a list of workouts given the search criteria",
    summary="Search your past workouts",
)
async def get_past_workouts(
    *,
    start_date: date
    | None = Query(
        default=None,
        title="Start Date",
        description="Earliest date to search workouts (inclusive)",
        example="2022-11-28",
    ),
    end_date: date
    | None = Query(
        default=None,
        title="End Date",
        description="Latest date to search workouts (inclusive)",
        example="2022-12-25",
    ),
    workout_group_id: int
    | None = Query(
        default=None,
        title="Workout Group Id",
        description="id for the desired Workout Group",
        example=27,
    ),
    session: Session = Depends(get_sync_session),
    current_user: User = Depends(get_current_user)
):
    return search_workouts(
        start_date=start_date,
        end_date=end_date,
        workout_group_id=workout_group_id,
        session=session,
        user=current_user,
    )


@router.get(
    "/id/{workout_id}",
    response_model=WorkoutRead,
    status_code=status.HTTP_200_OK,
    description="Get a workout by the workout's Id",
    response_description="Returns a workout with the provided workout Id",
    summary="Get a workout",
)
async def get_workout(*, workout: Workout = Depends(valid_owned_workout)):
    return workout


@router.get(
    "/next/{workout_group_id}",
    response_model=WorkoutCreate,
    status_code=status.HTTP_200_OK,
    description="Get the next workout for a given workout group",
    response_description="Returns a new workout with the provided workout Id",
    summary="Get a new workout",
)
async def get_next_workout_by_workout_group_id(
    *,
    workout_group: WorkoutGroup = Depends(valid_workout_group_id),
    session: Session = Depends(get_sync_session),
    current_user: User = Depends(get_current_user)
):
    workout = generate_workout(session, workout_group.id, current_user.id)

    lifts = []
    for muscle_group in workout_group.muscle_groups:
        exercises = get_exercises(muscle_group.id, session)

        primary_exercise = [exercise for exercise in exercises if exercise.primary_lift]
        secondary_exercises = sample(
            [exercise for exercise in exercises if not exercise.primary_lift], k=2
        )

        set_pattern = {
            0: {"sets": 4, "reps": 5},
            1: {"sets": 3, "reps": 8},
            2: {"sets": 3, "reps": 12},
        }
        for index, exercise in enumerate(primary_exercise + secondary_exercises):
            lift = generate_lift(session, exercise, workout)
            n_sets = set_pattern[index]["sets"]
            n_reps = set_pattern[index]["reps"]

            sets = []
            for i in range(n_sets):
                set_ = generate_set(session, lift, i + 1, n_reps)

                sets.append(set_)

            lift.sets = sets
            lifts.append(lift)

    workout.lifts = lifts

    return workout


@router.get(
    "/last-workouts",
    response_model=list[LastWorkout],
    status_code=status.HTTP_200_OK,
    description="Get the next workout for a given workout group",
    response_description="Returns a new workout with the provided workout Id",
    summary="Get a new workout",
)
async def get_last_workouts(
    session: Session = Depends(get_sync_session),
    current_user: User = Depends(get_current_user),
):
    # TODO - query by user
    query = """
    select workout_group_id, workout_group_name, last_date, days_ago
    from swole.last_workouts;
    """
    results = session.exec(query)
    results = list(results)
    last_workouts = [
        {
            "workout_group_id": data[0],
            "workout_group_name": data[1],
            "last_date": data[2],
            "days_ago": data[3],
        }
        for data in results
    ]

    if any(w["days_ago"] is not None for w in last_workouts):
        done_before = [w for w in last_workouts if w["days_ago"] is not None]
        not_done_before = [w for w in last_workouts if w["days_ago"] is None]

        done_before = sorted(done_before, key=lambda w: w["days_ago"], reverse=True)
        last_workouts = done_before + not_done_before

    return last_workouts


@router.get(
    "/statistics",
    response_model=WorkoutStatistics,
    status_code=status.HTTP_200_OK,
    description="Get workout statistics for current user",
    response_description="Returns workout counts, trends, and distributions",
    summary="Get workout statistics",
)
async def get_workout_statistics(
    *,
    session: Session = Depends(get_sync_session),
    current_user: User = Depends(get_current_user)
):
    query = """
    with workout_dates as (
        select
            start_dttm,
            date_trunc('year', start_dttm) as start_year,
            date_trunc('month', start_dttm) as start_month,
            date_trunc('week', start_dttm) as start_week
        from swole.workouts
        where user_id = 'f2121411-1915-4d18-b08c-5d89a6683bea'
    ), this_year as (
        select count(*) as this_year
        from workout_dates
        where start_year = date_trunc('year', current_date)
    ), this_month as (
        select count(*) as this_month
        from workout_dates
        where start_month = date_trunc('month', current_date)
    ), this_week as (
        select count(*) as this_week
        from workout_dates
        where start_week = date_trunc('week', current_date)
    )
    select * from this_year, this_month, this_week;
    """

    results = session.exec(query)
    results = list(results)
    result = results[0]

    return WorkoutStatistics(
        counts=Counts(year=result[0], month=result[1], week=result[2]),
        trend=Trend(
            dates=["8/1", "8/8", "8/15", "8/22", "8/29", "9/5", "9/12", "9/19"],
            counts=[4, 3, 4, 4, 2, 5, 4, 4],
        ),
        distribution=Distribution(
            workouts=["Chest", "Arms", "Legs", "Back & Shoulders"], counts=[10, 9, 8, 7]
        ),
    )


@router.put("/")
async def save_workout(
    *,
    workout: WorkoutUpdate,
    session: Session = Depends(get_sync_session),
    current_user: User = Depends(get_current_user)
):
    db_workout = get_workout_by_id(workout.id, session)
    if db_workout.user_id != current_user.id:
        raise user_not_owned_error

    db_workout.end_dttm = datetime.now()

    session.add(db_workout)

    for lift in workout.lifts:
        db_lift = session.exec(select(Lift).where(Lift.id == lift.id)).one()
        db_lift.notes = lift.notes
        session.add(db_lift)
        for set_ in lift.sets:
            print(set)
            db_set = session.exec(select(Set).where(Set.id == set_.id)).one()
            db_set.repetitions = set_.repetitions
            db_set.weight = set_.weight
            session.add(db_set)

    session.commit()
    session.refresh(db_workout)

    return {"message": "Update Successful"}
