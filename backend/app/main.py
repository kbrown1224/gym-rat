from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from loguru import logger

from backend.app import ui_server
from backend.app.auth.routes import router as auth_router
from backend.app.extensions import middleware
from backend.app.modules.workout.routes import router as workout_router
from backend.config import get_settings

settings = get_settings()


def create_app(dev: bool = False):
    """Create application factory"""

    def init_routers(app_: FastAPI):
        """Add APIRouters to main application"""
        logger.info("Initializing Routers")

        api_router = APIRouter()
        api_router.include_router(auth_router)
        api_router.include_router(workout_router)

        app_.include_router(api_router, prefix="/api")

        if not dev:
            app_.include_router(ui_server.router)

    def init_mounts(app_: FastAPI):
        """Mount static file directories"""
        logger.info("Initializing Mounts")

        app_.mount(
            "/",
            StaticFiles(
                # directory="/Users/kip/Desktop/Projects/gym-rat/frontend/dist/spa"
                directory=settings.ui.DIST_DIR
            ),
            name="ui_root",
        )

    def init_middleware(app_: FastAPI):
        """Add middlewares to application"""
        logger.info("Initializing Middleware")

        app_.add_middleware(middleware.TimeHeaderMiddleware)
        app_.add_middleware(middleware.VersionHeaderMiddleware)
        app_.add_middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_methods=["*"],
            allow_headers=["*"],
        )

    app = FastAPI(
        title="Gym Rat",
        description="Web server for the gym rat application",
        version="0.1.0",
        docs_url=("/docs" if settings.docs.SHOW else None),
        redoc_url=None,
        terms_of_service=None,
        swagger_ui_parameters={"docExpansion": "none"},
        openapi_tags=[
            {"name": "Auth", "description": "Authentication and Authorization"},
            {"name": "UI", "description": "UI Server"},
            {"name": "Workout", "description": "Operations for workouts"},
        ],
    )

    init_routers(app)
    init_mounts(app)
    init_middleware(app)

    return app
