import uuid

from fastapi import Depends, Path
from sqlalchemy.exc import NoResultFound
from sqlmodel import Session

from backend.app.auth.dependencies import get_current_user
from backend.app.auth.models import User
from backend.db.session import get_sync_session

from .exceptions import (
    user_not_owned_error,
    workout_group_not_found_error,
    workout_not_found_error,
)
from .models import Workout
from .service import get_workout_by_id, get_workout_group


def valid_workout_id(
    workout_id: uuid.UUID, session: Session = Depends(get_sync_session)
):
    try:
        return get_workout_by_id(workout_id, session)
    except NoResultFound as e:
        raise workout_not_found_error from e


def valid_owned_workout(
    workout: Workout = Depends(valid_workout_id),
    current_user: User = Depends(get_current_user),
):
    if workout.user_id != current_user.id:
        raise user_not_owned_error

    return workout


def valid_workout_group_id(
    workout_group_id: int = Path(default=..., title="Workout Group Id", example=27),
    session: Session = Depends(get_sync_session),
):
    try:
        return get_workout_group(workout_group_id, session)
    except NoResultFound as e:
        raise workout_group_not_found_error from e
