<script setup>
import { onBeforeMount, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useWorkoutStore } from "../stores/workout-store.js";
import StopWatch from "../components/StopWatch.vue";
import { useQuasar } from "quasar";

import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const workoutStore = useWorkoutStore();

const chartData = computed(() => {
  return {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        backgroundColor: ["#41B883", "transparent"],
        borderColor: ["white", "transparent"],
        data: [
          workoutStore.setsPctComplete,
          100 - workoutStore.setsPctComplete,
        ],
      },
    ],
  };
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const tab = ref("one");
const confirm = ref(false);
const stopWatch = ref(null);

function getToday() {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return date;
}

const today = getToday();

onBeforeMount(async () => {
  await workoutStore.getWorkout(route.params.muscleGroupId);
  tab.value = workoutStore.workout.lifts[0].id;
});

function finishWorkout() {
  workoutStore.saveWorkout();
  router.push({ name: "home" });
}

function showHistory(lift) {
  console.log(lift);
}

function setsCompleted(sets) {
  let completed = 0;
  sets.forEach(function (set) {
    if (set.repetitions > 0) {
      completed++;
    }
  });

  return completed;
}

function setsIncomplete(sets) {
  return sets.length - setsCompleted(sets);
}
</script>

<template>
  <q-page padding v-if="workoutStore.workout">
    <div class="row">
      <div class="col-9 q-pr-md">
        <div class="row">
          <q-card class="glowing-border" style="width: 100%; height: 585px">
            <q-tabs v-model="tab" class="text-secondary" align="left">
              <q-tab
                v-for="lift in workoutStore.workout.lifts"
                :key="lift.id"
                :label="lift.exercise.name"
                :name="lift.id"
              />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel
                v-for="lift in workoutStore.workout.lifts"
                :key="lift.id"
                :name="lift.id"
              >
                <div v-for="set in lift.sets" :key="set.id">
                  <div class="row">
                    <div class="col-3 q-pr-md">
                      <q-input
                        v-model.number="set.weight"
                        :step="5"
                        type="number"
                        filled
                        style="max-width: 200px"
                      >
                        <template v-slot:before> Weight: </template>
                      </q-input>
                    </div>
                    <div class="col-9">
                      <q-slider
                        v-model="set.repetitions"
                        :min="0"
                        :max="set.repetitionsGoal"
                        :step="1"
                        snap
                        marker-labels
                        track-size="10px"
                        thumb-color="black"
                        markers
                        color="positive"
                      />
                    </div>
                  </div>
                </div>
                <div class="q-pt-xl">
                  <q-input
                    v-model="lift.notes"
                    filled
                    type="textarea"
                    label="Notes"
                  />
                </div>
                <div class="q-pt-md">
                  <q-btn
                    class="q-mt-sm"
                    outline
                    color="positive"
                    label="Show History"
                    @click="showHistory(lift)"
                  />
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
      <div class="col-3">
        <q-card class="glowing-border" style="width: 100%; height: 500px">
          <div class="text-h4 text-secondary text-weight-thin text-center">
            {{ workoutStore.workout.muscleGroupName }} Workout
          </div>

          <div class="text-h6 text-secondary text-weight-thin text-center">
            {{ today }}
          </div>
          <q-separator class="q-my-sm" />

          <stop-watch ref="stopWatch" class="digits text-center text-h5" />

          <q-separator class="q-my-md" />

          <div class="text-h6 text-center">
            {{ Math.round(workoutStore.setsPctComplete) }}% Complete
          </div>
          <Doughnut
            :chart-options="chartOptions"
            :chart-data="chartData"
            chart-id="chartId"
            :height="175"
          />

          <q-separator class="q-my-md" />

          <div class="q-px-md">
            <div>
              <span class="text-h6 text-weight-thin"
                >Total Sets Completed -
              </span>
              <span class="text-bold text-h6 align-right">{{
                workoutStore.setsCompleted
              }}</span>
            </div>

            <div>
              <span class="text-h6 text-weight-thin"
                >Total Reps Completed -
              </span>
              <span class="text-bold text-h6 align-right">{{
                workoutStore.repsCompleted
              }}</span>
            </div>

            <div>
              <span class="text-h6 text-weight-thin">Total Weight - </span>
              <span class="text-bold text-h6 align-right">{{
                workoutStore.totalWeight
              }}</span>
            </div>
          </div>
        </q-card>
        <q-btn
          class="full-width q-mt-sm"
          color="positive"
          label="Finish Workout"
          @click="confirm = true"
        />
        <q-btn
          class="full-width q-mt-sm"
          color="negative"
          label="Cancel Workout"
        />
      </div>
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card class="glassy" style="width: 600px">
        <q-card-section class="row items-center">
          <div class="text-h2">All Done?</div>
        </q-card-section>

        <hr />

        <q-card-section>
          <ul>
            <li
              v-for="lift in workoutStore.workout.lifts"
              :key="lift.id"
              :name="lift.id"
            >
              <div>
                {{ lift.exercise.name }} -
                <span
                  :class="{
                    'text-positive':
                      setsCompleted(lift.sets) === lift.sets.length,
                    'text-warning':
                      setsCompleted(lift.sets) !== lift.sets.length,
                  }"
                  >{{ setsCompleted(lift.sets) }}</span
                >
                Completed,
                <span
                  :class="{
                    'text-warning':
                      setsIncomplete(lift.sets) === lift.sets.length,
                    'text-positive':
                      setsIncomplete(lift.sets) !== lift.sets.length,
                  }"
                  >{{ setsIncomplete(lift.sets) }}</span
                >
                Incomplete
              </div>
            </li>
          </ul>
        </q-card-section>

        <q-space />

        <q-card-actions align="right">
          <q-btn label="Cancel" outline color="white" v-close-popup />
          <q-btn label="Confirm" color="positive" @click="finishWorkout" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
  <q-page
    v-else
    class="window-height window-width row justify-center items-center"
  >
    <q-spinner-cube color="positive" size="6em" :thickness="10" />
  </q-page>
</template>

<style lang="scss">
.center {
  width: 200px;
  border: 1px solid #2d2d2d;
  display: flex;
  justify-content: center;
  align-items: center;
}

.glowing-border {
  box-shadow: 0 0 30px $positive;
}
</style>
