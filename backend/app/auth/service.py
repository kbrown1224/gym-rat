from jose import jwt
from loguru import logger
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import Session, select

from backend.config import get_settings

from .exceptions import credentials_exception
from .models import User
from .schemas import TokenData
from .utils import verify_password

settings = get_settings()


async def get_user(email: str, session: AsyncSession) -> User:
    """Load User by email"""
    logger.debug("Loading user with email {email}", email=email)
    results = await session.execute(select(User).where(User.email == email))
    return results.scalars().one()


def add_user(user: User, session: Session) -> None:
    """Add User to the database"""
    session.add(user)
    session.commit()
    session.refresh(user)


async def authenticate(email: str, password: str, session: AsyncSession) -> User:
    """Authenticate user, raise exception if user doesn't exist or incorrect password"""
    user = await get_user(email, session)

    if not user or user and not verify_password(password, user.hashed_password):
        raise credentials_exception

    return user


def create_access_token(token_data: TokenData):
    """Create JWT access token"""
    logger.debug("Creating user token for {email}", email=token_data.email)
    return jwt.encode(
        token_data.dict(),
        key=settings.cookie.SECRET_KEY,
        algorithm=settings.cookie.ALGO,
    )
