<script setup>
import { api } from "../boot/axios";
import { onMounted, ref } from "vue";
import LastWorkouts from "../components/tables/LastWorkouts.vue";

const lastWorkouts = ref([]);
const stats = ref({});
const loaded = ref(false);

onMounted(async () => {
  const lastWorkoutResponse = await api.get("/api/workout/last-workouts");
  const statisticsResponse = await api.get("/api/workout/statistics");
  lastWorkouts.value = lastWorkoutResponse.data;
  stats.value = statisticsResponse.data;
  loaded.value = true;
});
</script>

<template>
  <q-page class="q-py-md q-px-xl" v-if="loaded">
    <div class="row q-my-md">
      <div class="col-12">
        <LastWorkouts class="glowing-border" />
      </div>
    </div>
    <div class="row justify-between q-pt-md">
      <div class="col-4 q-pr-lg">
        <q-card class="glassy glowing-border">
          <q-card-section>
            <div class="text-h3 text-center text-accent">This Year</div>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <div class="text-h1 text-center">{{ stats.counts.year }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 q-px-lg">
        <q-card class="glassy glowing-border">
          <q-card-section>
            <div class="text-h3 text-center text-accent">This Month</div>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <div class="text-h1 text-center">{{ stats.counts.month }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-4 q-pl-lg">
        <q-card class="glassy glowing-border">
          <q-card-section>
            <div class="text-h3 text-center text-accent">This Week</div>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <div class="text-h1 text-center">{{ stats.counts.week }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.glowing-border {
  box-shadow: 0 0 30px $positive;
}
</style>
