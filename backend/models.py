from pydantic import BaseModel
from sqlmodel import SQLModel


def snake_to_camel(value: str) -> str:
    """Snake case to camel case"""

    strings = value.split("_")
    first_word = strings[0].lower()
    remaining_words = "".join([value.title() for value in strings[1:]])
    return first_word + remaining_words


class SQLModelBase(SQLModel):
    class Config:
        alias_generator = snake_to_camel
        allow_population_by_field_name = True


class PydanticBaseModel(BaseModel):
    class Config:
        alias_generator = snake_to_camel
        allow_population_by_field_name = True
