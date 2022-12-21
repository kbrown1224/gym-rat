from functools import lru_cache
from os import getenv
from pathlib import Path

from dotenv import load_dotenv
from pydantic import BaseSettings

root = Path(__file__).parent.parent
load_dotenv(root.joinpath(".env"))


class UISettings(BaseSettings):
    DIST_DIR: Path = root / "frontend" / "dist" / "spa"


class DocumentationSettings(BaseSettings):
    SHOW: bool = getenv("DOCS_SHOW", False)
    VERSION: str = getenv("DOCS_VERSION")
    TOS_PATH: str | None = None


class ServerSettings(BaseSettings):
    HOST: str = getenv("SERVER_HOST", "127.0.0.1")
    PORT: int = getenv("SERVER_PORT", 8000)


class CookieSettings(BaseSettings):
    SECRET_KEY: str = getenv("COOKIE_SECRET_KEY")
    ALGO: str = getenv("COOKIE_ALGO")


class DBSettings(BaseSettings):
    SYNC_DB_URI: str = getenv("DB_SYNC_URI")
    ASYNC_DB_URI: str = getenv("DB_ASYNC_URI")


class Settings(BaseSettings):
    docs: DocumentationSettings = DocumentationSettings()
    server: ServerSettings = ServerSettings()
    ui: UISettings = UISettings()
    cookie: CookieSettings = CookieSettings()
    db: DBSettings = DBSettings()


@lru_cache
def get_settings() -> Settings:
    return Settings()
