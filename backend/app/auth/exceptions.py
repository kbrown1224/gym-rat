from fastapi import HTTPException, status

credentials_exception = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Could not validate credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


existing_user_exception = HTTPException(
    status_code=status.HTTP_400_BAD_REQUEST,
    detail="Username already exists",
)
