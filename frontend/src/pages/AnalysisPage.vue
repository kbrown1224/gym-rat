<script setup>
import TrendChart from "../components/charts/TrendChart.vue";
import DistributionChart from "../components/charts/DistributionChart.vue";
</script>

<template>
  <q-page class="q-pa-xl">
    <div class="row">
      <div class="col-6 q-pr-md">
        <q-card class="glowing-border glassy">
          <q-card-section>
            <div class="text-h3 text-center text-accent">Workouts per Week</div>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <TrendChart />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6 q-pl-md">
        <q-card class="glowing-border glassy">
          <q-card-section>
            <div class="text-h3 text-center text-accent">Workouts per Week</div>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <DistributionChart />
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
