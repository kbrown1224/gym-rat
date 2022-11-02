import { defineStore } from "pinia";

function getNow() {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  return dateTime;
}

export const useWorkoutStore = defineStore("workout", {
  state: () => ({
    workout: null,
  }),
  getters: {
    setsCompleted(state) {
      if (state.workout) {
        let completed = 0;
        state.workout.lifts.forEach(function (lift) {
          lift.sets.forEach(function (set) {
            if (set.actualReps > 0) {
              completed++;
            }
          });
        });
        return completed;
      }
      return 0;
    },
    repsCompleted(state) {
      return 20;
    },
    totalWeight(state) {
      return 200;
    },
    totalSets(state) {
      if (state.workout) {
        let total = 0;
        state.workout.lifts.forEach(function (lift) {
          total += lift.sets.length;
        });
        return total;
      }
      return 0;
    },
    setsPctComplete() {
      return (this.setsCompleted / this.totalSets) * 100;
    },
  },
  actions: {
    setStartDttm() {
      this.workout.startDttm = getNow();
    },
    setEndDttm() {
      this.workout.endDttm = getNow();
    },
    saveWorkout() {
      console.log(this.workout);
    },
    getWorkout(muscleGroupId) {
      this.workout = {
        muscleGroupId: muscleGroupId,
        muscleGroupName: "Chest",
        startDttm: null,
        endDttm: null,
        lifts: [
          {
            name: "Barbell Bench",
            sets: [
              { rank: 1, targetReps: 5, actualReps: 0, weight: 25 },
              { rank: 2, targetReps: 5, actualReps: 0, weight: 25 },
              { rank: 3, targetReps: 5, actualReps: 0, weight: 25 },
              { rank: 4, targetReps: 5, actualReps: 0, weight: 25 },
            ],
          },
          {
            name: "Dumbell Bench",
            sets: [
              { rank: 1, targetReps: 8, actualReps: 0, weight: 25 },
              { rank: 2, targetReps: 8, actualReps: 0, weight: 25 },
              { rank: 3, targetReps: 8, actualReps: 0, weight: 25 },
            ],
          },
          {
            name: "Incline Bench",
            sets: [
              { rank: 1, targetReps: 12, actualReps: 0, weight: 25 },
              { rank: 2, targetReps: 12, actualReps: 0, weight: 25 },
            ],
          },
          {
            name: "Pushups",
            sets: [
              { rank: 1, targetReps: 15, actualReps: 0, weight: 25 },
              { rank: 2, targetReps: 15, actualReps: 0, weight: 25 },
            ],
          },
        ],
      };
    },
  },
});
