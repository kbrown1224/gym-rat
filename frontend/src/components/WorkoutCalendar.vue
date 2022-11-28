<script setup>
import { QCalendarMonth } from "@quasar/quasar-ui-qcalendar/src/index.js";
import "@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass";
import "@quasar/quasar-ui-qcalendar/src/QCalendarMonth.sass";
import { api } from "../boot/axios";
import WorkoutDetail from "./WorkoutDetail.vue";

import { computed, onMounted, ref } from "vue";

const pastWorkouts = ref([]);
const loading = ref(true);
const info = ref(false);
const selectedWorkout = ref({});

onMounted(async () => {
  const pastWorkoutsResponse = await api.get(
    "/api/workout/past-workouts?start_date=2022-11-01&end_date=2022-12-01"
  );
  pastWorkouts.value = pastWorkoutsResponse.data;
  loading.value = false;
});

function badgeClasses(workout) {
  let bgClass;
  switch (workout.workoutGroup.id) {
    case 27:
      bgClass = "bg-positive";
      break;

    case 28:
      bgClass = "bg-negative";
      break;

    case 29:
      bgClass = "bg-accent";
      break;

    case 30:
      bgClass = "bg-primary";
      break;

    default:
      bgClass = "bg-grey";
      break;
  }

  return {
    [`text-white ${bgClass}`]: true,
    "rounded-border": true,
  };
}

function showWorkoutInfo(workout) {
  console.log(workout);
  selectedWorkout.value = workout;
  info.value = true;
}

const workoutsMap = computed(() => {
  const map = {};
  if (pastWorkouts.value.length > 0) {
    pastWorkouts.value.forEach((workout) => {
      (map[workout.workoutDate] = map[workout.workoutDate] || []).push(workout);
    });
  }
  return map;
});
</script>

<template>
  <div class="subcontent" v-if="!loading">
    <div class="row justify-center">
      <div style="display: flex; width: 100%">
        <q-calendar-month
          ref="calendar"
          animated
          bordered
          focusable
          hoverable
          no-active-date
          class="calendar glowing-border"
          :day-min-height="60"
          :day-height="0"
        >
          <template #day="{ scope: { timestamp } }">
            <template
              v-for="workout in workoutsMap[timestamp.date]"
              :key="workout.id"
            >
              <div
                :class="badgeClasses(workout)"
                class="my-event"
                @click="showWorkoutInfo(workout)"
              >
                <div class="title q-calendar__ellipsis">
                  {{ workout.workoutGroup.name }}
                </div>
              </div>
            </template>
          </template>
        </q-calendar-month>
      </div>
    </div>
    <q-dialog v-model="info" persistent>
      <WorkoutDetail :workout="selectedWorkout" />
    </q-dialog>
  </div>
  <q-page
    v-else
    class="window-height window-width row justify-center items-center"
  >
    <q-spinner-cube color="positive" size="6em" :thickness="10" />
  </q-page>
</template>

<style lang="scss" scoped>
.calendar {
  border-radius: 10px;
  --calendar-background-dark: "#ffffff";
  --calendar-current-background-dark: "#ffffff";
}

.my-event {
  position: relative;
  font-size: 12px;
  width: 100%;
  margin: 1px 0 0 0;
  justify-content: center;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}

.title {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
