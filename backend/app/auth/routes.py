from fastapi import APIRouter, Depends, status
from fastapi.security import OAuth2PasswordRequestForm
from loguru import logger
from sqlalchemy.exc import IntegrityError, NoResultFound
from sqlmodel import Session

from backend.db.session import get_session

from .exceptions import credentials_exception, existing_user_exception
from .models import User, UserCreate, UserRead
from .schemas import Token, TokenData
from .service import add_user, authenticate, create_access_token
from .utils import get_password_hash

router = APIRouter(tags=["Auth"])


@router.post("/register", status_code=status.HTTP_201_CREATED, response_model=UserRead)
async def register(user: UserCreate, session: Session = Depends(get_session)):
    db_user = User.from_orm(
        user, update={"hashed_password": get_password_hash(user.password)}
    )

    try:
        add_user(db_user, session)
    except IntegrityError as e:
        logger.error("User {email} already exists", email=user.email)
        raise existing_user_exception from e

    return db_user


@router.post("/token")
async def get_access_token(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: Session = Depends(get_session),
):
    try:
        user = authenticate(form_data.username, form_data.password, session)
    except NoResultFound as e:
        raise credentials_exception from e

    token_data = TokenData(
        email=user.email, first_name=user.first_name, last_name=user.last_name
    )
    access_token = create_access_token(token_data)

    return Token(access_token=access_token, token_type="bearer")
