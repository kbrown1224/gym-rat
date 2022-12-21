from fastapi import APIRouter, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from loguru import logger
from sqlalchemy.exc import IntegrityError, NoResultFound
from sqlalchemy.ext.asyncio import AsyncSession

from backend.app.auth.dependencies import get_current_user
from backend.db.session import get_async_session

from .exceptions import credentials_exception, existing_user_exception
from .models import User, UserCreate, UserRead
from .schemas import Token, TokenData
from .service import add_user, authenticate, create_access_token
from .utils import get_password_hash

router = APIRouter(tags=["Auth"], prefix="/auth")


@router.post(
    "/register",
    status_code=status.HTTP_201_CREATED,
    response_model=UserRead,
    description="Creates a new user in our system with the given email and password",
    response_description="Returns the created user object after successful creation",
    summary="Register a new user to the Gym Rat application",
)
async def register(
    user: UserCreate, session: AsyncSession = Depends(get_async_session)
):
    db_user = User.from_orm(
        user, update={"hashed_password": get_password_hash(user.password)}
    )

    try:
        add_user(db_user, session)
    except IntegrityError as e:
        logger.error("User {email} already exists", email=user.email)
        raise existing_user_exception from e

    return db_user


@router.post(
    "/token",
    status_code=status.HTTP_200_OK,
    response_model=Token,
    description="Login user in our system with the given email and password",
    response_description="Returns the access token for the user that authenticated",
    summary="Log in user to the Gym Rat application",
)
async def get_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: AsyncSession = Depends(get_async_session),
):
    try:
        user = await authenticate(form_data.username, form_data.password, session)
    except NoResultFound as e:
        raise credentials_exception from e

    token_data = TokenData(
        email=user.email, first_name=user.first_name, last_name=user.last_name
    )
    access_token = create_access_token(token_data)

    return Token(access_token=access_token, token_type="bearer")


@router.get(
    "/me",
    status_code=status.HTTP_200_OK,
    response_model=UserRead,
    response_description="Returns the logged in user's data",
    summary="Get user profile data",
    description="""
    Get the data for the logged in user for the user with
    the provided access token
    """,
)
async def get_me(current_user: User = Depends(get_current_user)):
    return current_user
