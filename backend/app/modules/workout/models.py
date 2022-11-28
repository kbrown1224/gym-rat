# from __future__ import annotations
import uuid
from datetime import date, datetime

from pydantic import root_validator
from sqlmodel import Field, Relationship

from backend.models import PydanticBaseModel, SQLModelBase

SQLModelBase.metadata.schema = "swole"


class Counts(PydanticBaseModel):
    year: int
    month: int
    week: int


class Trend(PydanticBaseModel):
    dates: list[str]
    counts: list[int]


class Distribution(PydanticBaseModel):
    workouts: list[str]
    counts: list[int]


class WorkoutStatistics(PydanticBaseModel):
    counts: Counts
    trend: Trend
    distribution: Distribution


class LastWorkout(PydanticBaseModel):
    workout_group_id: int
    workout_group_name: str
    last_date: date | None
    days_ago: int | None


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
    workouts: list["Workout"] = Relationship(back_populates="workout_group")


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
    notes: str | None


class Lift(LiftBase, table=True):
    __tablename__ = "lifts"

    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    created_at: datetime = Field(default_factory=datetime.now)
    workout_id: uuid.UUID = Field(foreign_key="workouts.id", index=False)

    workout: "Workout" = Relationship(back_populates="lifts")
    sets: list["Set"] = Relationship(back_populates="lift")
    exercise: Exercise = Relationship(back_populates="lifts")


class LiftRead(LiftBase):
    id: uuid.UUID | None = None
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

    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    lift_id: uuid.UUID = Field(foreign_key="lifts.id", index=False)

    created_at: datetime = Field(default_factory=datetime.now)

    lift: Lift = Relationship(back_populates="sets")


class SetRead(SetBase):
    id: uuid.UUID | None = None


class SetCreate(SetBase):
    id: uuid.UUID | None = None


class WorkoutBase(SQLModelBase):
    start_dttm: datetime = Field(default_factory=datetime.now)
    end_dttm: datetime | None
    workout_group_id: int = Field(foreign_key="workout_groups.id", index=False)
    program_id: int = Field(foreign_key="programs.id", index=False)
    workout_number: int
    user_id: uuid.UUID


class Workout(WorkoutBase, table=True):
    __tablename__ = "workouts"

    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    created_at: datetime = Field(default_factory=datetime.now)

    program: Program = Relationship(back_populates="workouts")
    lifts: list[Lift] = Relationship(back_populates="workout")
    workout_group: WorkoutGroup = Relationship(back_populates="workouts")


class WorkoutCreate(WorkoutBase):
    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
    created_at: datetime
    lifts: list[LiftRead]


class WorkoutRead(WorkoutBase):
    id: uuid.UUID = Field(primary_key=True)
    created_at: datetime
    lifts: list[LiftRead]
    workout_date: date | None
    workout_group: WorkoutGroup

    @root_validator
    def derive_workout_date(cls, values):
        if values["start_dttm"] is not None:
            values["workout_date"] = values["start_dttm"].date()
        return values


class WorkoutReadSimple(WorkoutBase):
    id: uuid.UUID = Field(primary_key=True)
    created_at: datetime
    workout_date: date | None
    workout_group: WorkoutGroup

    @root_validator
    def derive_workout_date(cls, values):
        if values["start_dttm"] is not None:
            values["workout_date"] = values["start_dttm"].date()
        return values


class WorkoutUpdate(WorkoutBase):
    id: uuid.UUID = Field(primary_key=True, default_factory=uuid.uuid4)
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
