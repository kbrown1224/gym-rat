<template>
  <q-page class="gradient-bg">
    <div class="row">
      <img
        alt="Barbell"
        src="~assets/barbel.svg"
        style="border-color: white; width: 100%"
      />
    </div>
    <div class="row q-mt-xl q-pt-xl">
      <div class="col-6 flex flex-center">
        <p>
          Gym Rat is an application for better workouts. Track your progress.
          Push through plateaus. Reach your goals.
        </p>
      </div>
      <div class="col-6 q-pr-xl flex flex-center">
        <q-btn
          class="full-width q-mb-sm"
          color="primary"
          label="Login"
          to="login"
        />
        <q-btn
          class="full-width"
          color="secondary"
          label="Sign Up"
          to="register"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandigPage",
});
</script>

<style scoped>
.title {
  font-size: 80px;
}
</style>
