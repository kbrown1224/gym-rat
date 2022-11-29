from functools import lru_cache
from pathlib import Path

from pydantic import BaseSettings

root = Path(__file__).parent.parent


class UISettings(BaseSettings):
    DIST_DIR: Path = root / "frontend" / "dist" / "spa"


class DocumentationSettings(BaseSettings):
    SHOW: bool = True
    VERSION: str = "0.1.0"
    TOS_PATH: str | None = None


class ServerSettings(BaseSettings):
    HOST: str = "0.0.0.0"
    PORT: int = 8000


class CookieSettings(BaseSettings):
    SECRET_KEY: str = "MYSECRET"
    ALGO: str = "HS256"


class DBSettings(BaseSettings):
    SYNC_DB_URI: str = (
        "postgresql+pg8000://svc_gym_rat:g3tSw0l3@192.168.4.37:5432/thegymrat"
    )
    ASYNC_DB_URI: str = (
        "postgresql+asyncpg://svc_gym_rat:g3tSw0l3@192.168.4.37:5432/thegymrat"
    )


class Settings(BaseSettings):
    docs: DocumentationSettings = DocumentationSettings()
    server: ServerSettings = ServerSettings()
    ui: UISettings = UISettings()
    cookie: CookieSettings = CookieSettings()
    db: DBSettings = DBSettings()


@lru_cache
def get_settings() -> Settings:
    return Settings()
