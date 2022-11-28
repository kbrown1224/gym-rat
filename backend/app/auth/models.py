import uuid

from pydantic import EmailStr
from sqlmodel import Field

from backend.models import SQLModelBase

SQLModelBase.metadata.schema = "swole"


class UserBase(SQLModelBase):
    email: EmailStr = Field(unique=True)
    first_name: str
    last_name: str


class User(UserBase, table=True):
    __tablename__ = "users"

    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    hashed_password: str


class UserCreate(UserBase):
    password: str

    class Config:
        schema_extra = {
            "example": {
                "email": "user@example.com",
                "firstName": "Dwayne",
                "lastName": "Johnson",
                "password": "G3tSw0le",
            }
        }


class UserRead(UserBase):
    id: uuid.UUID
