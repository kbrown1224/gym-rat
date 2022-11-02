import pendulum
from pydantic import BaseModel, EmailStr, Field


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: EmailStr | None = None
    first_name: str | None = None
    last_name: str | None = None
    exp: pendulum.Date | None = Field(
        default_factory=lambda: pendulum.now().add(minutes=30)
    )
