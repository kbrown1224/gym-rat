from sqlalchemy import create_engine
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlmodel import Session

from backend.config import get_settings

settings = get_settings()
sync_engine = create_engine(settings.db.SYNC_DB_URI)
async_engine = create_async_engine(str(settings.db.ASYNC_DB_URI), future=True)
async_session = sessionmaker(async_engine, class_=AsyncSession, expire_on_commit=False)


def get_sync_session() -> Session:
    with Session(sync_engine) as session:
        yield session


async def get_async_session() -> AsyncSession:
    async with async_session() as session:
        yield session
