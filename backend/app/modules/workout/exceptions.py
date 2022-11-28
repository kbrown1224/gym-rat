from fastapi import HTTPException, status

workout_not_found_error = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="Workout not found"
)

workout_group_not_found_error = HTTPException(
    status_code=status.HTTP_404_NOT_FOUND, detail="Not a valid workout group id"
)

user_not_owned_error = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED, detail="Workout not owned"
)
