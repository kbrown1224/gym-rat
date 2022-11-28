import uuid
from datetime import date

from sqlalchemy.orm import subqueryload
from sqlmodel import Session, select

from backend.app.auth.models import User

from .models import Exercise, Lift, Set, Workout, WorkoutGroup


def get_workout_by_id(workout_id: uuid.UUID, session: Session) -> Workout:
    return session.exec(select(Workout).where(Workout.id == workout_id)).one()


def search_workouts(
    *,
    start_date: date | None = None,
    end_date: date | None = None,
    workout_group_id: int | None = None,
    session: Session,
    user: User
):
    query = select(Workout).where(Workout.user_id == user.id)

    if start_date is not None:
        query = query.where(Workout.start_dttm >= start_date)

    if end_date is not None:
        query = query.where(Workout.start_dttm <= end_date)

    if workout_group_id is not None:
        query = query.where(Workout.workout_group_id == workout_group_id)

    query = query.options().options(subqueryload(Workout.workout_group))

    return session.exec(query).all()


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


def get_weight_goal():
    return 50


def generate_workout(session: Session, workout_group_id: int, user_id: uuid.UUID):
    workout = Workout(
        end_dttm=None,
        workout_group_id=workout_group_id,
        program_id=3,
        workout_number=9,
        user_id=user_id,
    )
    session.add(workout)
    session.commit()
    session.refresh(workout)

    return workout


def generate_lift(session: Session, exercise: Exercise, workout: Workout):
    lift = Lift(exercise_id=exercise.id, exercise=exercise, workout_id=workout.id)
    session.add(lift)
    session.commit()
    session.refresh(lift)
    return lift


def generate_set(session: Session, lift: Lift, set_number: int, n_reps: int):
    set_ = Set(
        lift_id=lift.id,
        set_number=set_number,
        repetitions_goal=n_reps,
        repetitions=0,
        weight=get_weight_goal(),
    )
    session.add(set_)
    session.commit()
    session.refresh(set_)

    return set_
