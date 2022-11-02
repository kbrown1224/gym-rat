from sqlalchemy import create_engine
from sqlmodel import Session

from backend.config import get_settings

settings = get_settings()
engine = create_engine(settings.db.SA_DB_URI)


def get_session():
    with Session(engine) as session:
        yield session
