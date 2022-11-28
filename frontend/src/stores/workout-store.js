import { defineStore } from "pinia";
import {
  getNextWorkout,
  saveWorkoutPut,
  getLastWorkouts,
  getPastWorkouts,
} from "src/services/backend";

export const useWorkoutStore = defineStore("workout", {
  state: () => ({
    workout: null,
    lastWorkouts: null,
    pastWorkouts: null,
  }),
  getters: {
    setsCompleted(state) {
      if (state.workout) {
        let completed = 0;
        state.workout.lifts.forEach(function (lift) {
          lift.sets.forEach(function (set) {
            if (set.repetitions > 0) {
              completed++;
            }
          });
        });
        return completed;
      } else {
        return 0;
      }
    },
    repsCompleted(state) {
      if (state.workout) {
        let completed = 0;
        state.workout.lifts.forEach(function (lift) {
          lift.sets.forEach(function (set) {
            completed = completed + set.repetitions;
          });
        });
        return completed;
      } else {
        return 0;
      }
    },
    totalWeight(state) {
      if (state.workout) {
        let total = 0;
        state.workout.lifts.forEach(function (lift) {
          lift.sets.forEach(function (set) {
            total = total + set.repetitions * set.weight;
          });
        });
        return total;
      } else {
        return 0;
      }
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
    async saveWorkout() {
      await saveWorkoutPut(this.workout).then((response) => {
        if (response.status != 200) {
          console.log(response.data.message);
        }
      });
    },
    async getWorkout(workoutGroupId) {
      this.workout = await getNextWorkout(workoutGroupId);
    },
  },
});
