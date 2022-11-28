from fastapi import APIRouter
from fastapi.responses import FileResponse

from backend.config import get_settings

settings = get_settings()


router = APIRouter(tags=["UI"])


@router.get("/")
async def get_root():
    return FileResponse(settings.ui.DIST_DIR.joinpath("index.html"))
