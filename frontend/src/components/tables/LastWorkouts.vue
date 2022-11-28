<script setup>
import { onMounted, ref } from "vue";
import { api } from "../../boot/axios";

import { useRouter } from "vue-router";

const router = useRouter();
function startWorkout(workoutGroupId) {
  router.push({
    name: "workout",
    params: {
      muscleGroupId: workoutGroupId,
    },
  });
}

const lastWorkouts = ref([]);
const loaded = ref(false);
onMounted(async () => {
  const lastWorkoutResponse = await api.get("/api/workout/last-workouts");
  lastWorkouts.value = lastWorkoutResponse.data;
  loaded.value = true;
});

const tableColumns = [
  {
    label: "Workout",
    name: "workoutGroupName",
    field: "workoutGroupName",
    align: "left",
  },
  {
    label: "Last Workout",
    name: "lastDate",
    field: "lastDate",
    align: "center",
  },
  { label: "Days Ago", name: "daysAgo", field: "daysAgo", align: "center" },
  {
    label: "Start Workout",
    name: "startWorkout",
    field: "startWorkout",
    align: "center",
  },
];
</script>

<template>
  <q-table
    class="glassy"
    title="Last Workouts"
    :rows="lastWorkouts"
    :columns="tableColumns"
    hide-bottom
  >
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-td key="workoutGroupName" :props="props">{{
          props.row.workoutGroupName
        }}</q-td>
        <q-td key="lastDate" :props="props">{{ props.row.lastDate }}</q-td>
        <q-td key="daysAgo" :props="props">{{ props.row.daysAgo }}</q-td>

        <q-td key="startWorkout" :props="props">
          <q-btn
            push
            class="text-black"
            color="positive"
            label="start"
            @click="startWorkout(props.row.workoutGroupId)"
          />
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>
