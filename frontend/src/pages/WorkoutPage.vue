<script setup>
import { onMounted, onBeforeMount, ref, computed } from "vue";
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

onBeforeMount(() => {
  workoutStore.getWorkout(route.params.muscleGroupId);
  tab.value = workoutStore.workout.lifts[0].name;
});
onMounted(() => {
  stopWatch.value.start();
  console.log(workoutStore.workout.startDttm);
  workoutStore.setStartDttm();
  console.log(workoutStore.workout.startDttm);
});

function finishWorkout() {
  stopWatch.value.stop();
  workoutStore.setEndDttm();
  console.log(workoutStore.workout.endDttm);
  workoutStore.saveWorkout();

  router.push({ name: "home" });
}
</script>

<template>
  <q-page padding v-if="workoutStore.workout">
    <div class="row">
      <div class="col-9 q-pr-md">
        <div class="row">
          <q-card style="width: 100%; height: 500px">
            <q-tabs v-model="tab" class="text-secondary" align="left">
              <q-tab
                v-for="lift in workoutStore.workout.lifts"
                :key="lift.name"
                :label="lift.name"
                :name="lift.name"
              />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel
                v-for="lift in workoutStore.workout.lifts"
                :key="lift.name"
                :name="lift.name"
              >
                <div v-for="set in lift.sets" :key="set.rank">
                  <div class="row">
                    <div class="col-3 q-pr-md">
                      <q-input
                        v-model.number="set.weight"
                        type="number"
                        filled
                        style="max-width: 200px"
                      >
                        <template v-slot:before> Weight: </template>
                      </q-input>
                    </div>
                    <div class="col-9">
                      <q-slider
                        v-model="set.actualReps"
                        :min="0"
                        :max="set.targetReps"
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
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
        <div class="row">
          <q-btn
            class="full-width q-mt-sm"
            color="primary"
            label="Finish Workout"
            @click="confirm = true"
          />
        </div>
      </div>
      <div class="col-3">
        <q-card class="my-card" style="width: 100%; height: 500px">
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
        </q-card>
      </div>
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">All Done?</span>
        </q-card-section>

        <q-card-section> Summary of workout here </q-card-section>

        <q-space />

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Finish" color="primary" @click="finishWorkout" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
