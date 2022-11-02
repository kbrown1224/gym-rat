from datetime import date
from random import sample

from fastapi import APIRouter, Depends, HTTPException, status
from rich import print
from sqlalchemy.exc import NoResultFound
from sqlalchemy.orm import subqueryload
from sqlmodel import Session, select

from backend.app.auth.dependencies import get_current_user
from backend.app.auth.models import User
from backend.db.session import get_session

from .models import Exercise, Lift, Set, Workout, WorkoutCreate, WorkoutGroup

router = APIRouter(tags=["Workout"])


@router.get("/past-workouts", response_model=list[Workout])
async def get_past_workouts(
    *,
    start_date: date | None = None,
    end_date: date | None = None,
    workout_group_id: int | None = None,
    session: Session = Depends(get_session)
):
    query = select(Workout)

    if start_date is not None:
        query = query.where(Workout.start_dttm >= start_date)

    if end_date is not None:
        query = query.where(Workout.start_dttm <= end_date)

    if workout_group_id is not None:
        query = query.where(Workout.workout_group_id == workout_group_id)

    return session.exec(query).all()


@router.get("/id/{workout_id}")
async def get_workout_by_id(
    *,
    workout_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    query = select(Workout).where(
        Workout.id == workout_id, Workout.user_id == current_user.id
    )
    try:
        return session.exec(query).one()
    except NoResultFound as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Workout not found"
        ) from e


def get_workout_group(workout_group_id: int, session: Session):
    return session.exec(
        select(WorkoutGroup)
        .where(WorkoutGroup.id == workout_group_id)
        .options(subqueryload(WorkoutGroup.muscle_groups))
    ).one()


def get_exercises(muscle_group_id: int, session: Session):
    return session.exec(
        select(Exercise).where(Exercise.muscle_group_id == muscle_group_id)
    ).all()


# for muscle_group in workout_group.muscle_groups:
#         exercises = get_exercises(muscle_group.id, session)

#         primary_exercise = [exercise for exercise in exercises if exercise.primary_lift]
#         secondary_exercises = sample([exercise for exercise in exercises if not exercise.primary_lift], k=2)

#         set_pattern = {
#             0: {"sets": 4, "reps": 5},
#             1: {"sets": 3, "reps": 8},
#             2: {"sets": 3, "reps": 12},
#         }
#         for index, exercise in enumerate(primary_exercise + secondary_exercises):
#             n_sets = set_pattern[index]["sets"]
#             n_reps = set_pattern[index]["reps"]
#             sets = [
#                 Set(
#                     set_number=i + 1,
#                     repetitions_goal=n_reps,
#                     repetitions=0,
#                     weight=get_weight_goal()
#                 )
#                 for i in range(n_sets)
#             ]
#             lifts.extend(
#                 Lift(
#                     exercise=exercise,
#                     exercise_id=exercise.id,
#                     sets=sets
#                 )
#             )


@router.get("/next/{workout_group_id}", response_model=WorkoutCreate)
async def get_next_workout_by_workout_group_id(
    *,
    workout_group_id: int,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):

    workout_group = get_workout_group(workout_group_id, session)
    lifts = []
    for muscle_group in workout_group.muscle_groups:
        exercises = get_exercises(muscle_group.id, session)

        primary_exercise = [exercise for exercise in exercises if exercise.primary_lift]
        secondary_exercises = sample(
            [exercise for exercise in exercises if not exercise.primary_lift], k=2
        )

        lifts.extend(
            [
                Lift(
                    exercise=exercise,
                    exercise_id=exercise.id,
                    sets=[
                        Set(set_number=1, repetitions_goal=5, repetitions=5, weight=50)
                    ],
                )
                for exercise in primary_exercise + secondary_exercises
            ]
        )

    workout = Workout(
        end_dttm=None,
        workout_group_id=workout_group_id,
        program_id=3,
        workout_number=9,
        user_id=current_user.id,
        lifts=lifts,
    )

    print([l.exercise for l in workout.lifts])
    print([l.exercise for l in lifts])

    return workout


# @router.put("/")
# async def save_workout(
#     *,
#     workout: Workout
# ):
#     return {"ping": "pong"}
