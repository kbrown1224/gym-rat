# from __future__ import annotations
import uuid
from datetime import datetime

from sqlmodel import Field, Relationship

from backend.models import SQLModelBase

SQLModelBase.metadata.schema = "swole"


class Program(SQLModelBase, table=True):
    __tablename__ = "programs"

    id: int = Field(primary_key=True)
    created_at: datetime = Field(default_factory=datetime.now)
    name: str

    workouts: list["Workout"] = Relationship(back_populates="program")


class WorkoutGroup(SQLModelBase, table=True):
    __tablename__ = "workout_groups"

    id: int = Field(primary_key=True)
    created_at: datetime = Field(default_factory=datetime.now)
    name: str

    muscle_groups: "MuscleGroup" = Relationship(back_populates="workout_group")


class MuscleGroup(SQLModelBase, table=True):
    __tablename__ = "muscle_groups"

    id: int = Field(primary_key=True)
    created_at: datetime = Field(default_factory=datetime.now)
    name: str
    workout_group_id: int = Field(foreign_key="workout_groups.id")

    exercises: list["Exercise"] = Relationship(back_populates="muscle_group")
    workout_group: WorkoutGroup = Relationship(back_populates="muscle_groups")


class Exercise(SQLModelBase, table=True):
    __tablename__ = "exercises"

    id: int = Field(primary_key=True)
    created_at: datetime = Field(default_factory=datetime.now)
    name: str
    primary_lift: bool
    muscle_group_id: int = Field(foreign_key="muscle_groups.id")

    lifts: list["Lift"] = Relationship(back_populates="exercise")
    muscle_group: MuscleGroup = Relationship(back_populates="exercises")


class LiftBase(SQLModelBase):
    exercise_id: int = Field(foreign_key="exercises.id")


class Lift(LiftBase, table=True):
    __tablename__ = "lifts"

    id: int = Field(primary_key=True)
    created_at: datetime = Field(default_factory=datetime.now)
    workout_id: int = Field(foreign_key="workouts.id", index=False)

    workout: "Workout" = Relationship(back_populates="lifts")
    sets: list["Set"] = Relationship(back_populates="lift")
    exercise: Exercise = Relationship(back_populates="lifts")


class LiftRead(LiftBase):
    sets: list["SetCreate"] | None = None
    exercise: Exercise | None = None
    exercise_id: int | None = None


class SetBase(SQLModelBase):
    set_number: int
    repetitions_goal: int
    repetitions: int
    weight: int


class Set(SetBase, table=True):
    __tablename__ = "sets"

    id: int = Field(primary_key=True)
    lift_id: int = Field(foreign_key="lifts.id", index=False)

    created_at: datetime = Field(default_factory=datetime.now)

    lift: Lift = Relationship(back_populates="sets")


class SetRead(SetBase):
    id: int | None = None


class SetCreate(SetBase):
    pass


class WorkoutBase(SQLModelBase):
    start_dttm: datetime = Field(default_factory=datetime.now)
    end_dttm: datetime | None
    workout_group_id: int
    program_id: int = Field(foreign_key="programs.id", index=False)
    workout_number: int
    user_id: uuid.UUID


class Workout(WorkoutBase, table=True):
    __tablename__ = "workouts"

    id: int = Field(primary_key=True)
    created_at: datetime = Field(default_factory=datetime.now)

    program: Program = Relationship(back_populates="workouts")
    lifts: list[Lift] = Relationship(back_populates="workout")


class WorkoutCreate(WorkoutBase):
    created_at: datetime
    lifts: list[LiftRead]


# class SetBase(SQLModelBase):
#     lift_id: int
#     set_number: int
#     repetitions_goal: int
#     repetitions: int
#     weight: int

# class Set(SetBase):
#     id: int = Field(primary_key=True)
#     created_at: datetime = Field(default_factory=datetime.now)


# # class WorkoutCreate(UserBase):
# #     password: str


# Program.update_forward_refs()
LiftRead.update_forward_refs()
