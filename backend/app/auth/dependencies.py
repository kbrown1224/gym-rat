from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.ext.asyncio import AsyncSession

from backend.config import get_settings
from backend.db.session import get_async_session

from .exceptions import credentials_exception
from .models import User
from .schemas import TokenData
from .service import get_user

settings = get_settings()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/auth/token")


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    session: AsyncSession = Depends(get_async_session),
) -> User:
    try:
        payload = jwt.decode(
            token, key=settings.cookie.SECRET_KEY, algorithms=[settings.cookie.ALGO]
        )
    except JWTError as e:
        raise credentials_exception from e

    token_data = TokenData.parse_obj(payload)
    return await get_user(token_data.email, session)
