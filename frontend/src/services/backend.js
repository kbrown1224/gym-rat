import { api } from "../boot/axios";

function register(email, firstName, lastName, password) {
  return api.post("/api/auth/register", {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  });
}

async function getToken(email, password) {
  const response = await api.post(
    "/api/auth/token",
    new URLSearchParams({
      username: email,
      password: password,
    })
  );
  return response;
}

async function getMe() {
  const response = await api.get("/api/auth/me");
  return response.data;
}

async function getNextWorkout(workoutGroupId) {
  const response = await api.get(`/api/workout/next/${workoutGroupId}`);
  return response.data;
}

async function getPastWorkouts() {
  const response = await api.get(
    `/api/workout/past-workouts?start_date=2022-01-01&end_date=2022-12-25`
  );
  return response;
}

function getWorkoutById(workoutId) {
  return api.get(`/api/workout/id/${workoutId}`);
}

async function getLastWorkouts() {
  const response = api.get("/api/workout/last-workouts");
  return response.data;
}

async function saveWorkoutPut(workout) {
  const response = api.put("/api/workout/", JSON.stringify(workout), {
    headers: { "Content-Type": "application/json" },
  });
  return response;
}

export {
  register,
  getToken,
  getMe,
  getPastWorkouts,
  getWorkoutById,
  getLastWorkouts,
  getNextWorkout,
  saveWorkoutPut,
};
