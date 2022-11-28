<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useAuthStore } from "src/stores/auth-store";

const $q = useQuasar();
const email = ref("");
const password = ref("");
const router = useRouter();
const authStore = useAuthStore();

const emptyCredential = computed(() => {
  return email.value === "" || password.value === "";
});

function onLogin() {
  authStore
    .login(email.value, password.value)
    .then(() => {
      router.push({ name: "home" });
    })
    .catch(() => {
      $q.notify({
        color: "negative",
        textColor: "white",
        icon: "warning",
        message: "Something went wrong",
      });
    });
}

onMounted(() => {
  if (authStore.isLoggedIn) {
    router.push({ name: "home" });
  }
});
</script>

<template>
  <q-page class="q-pa-xl gradient-bg">
    <div class="row">
      <div class="col-4 offset-4">
        <q-card class="glassy glowing-border">
          <q-card-section>
            <div class="text-h3">Login</div>
          </q-card-section>
          <q-separator class="q-my-lg" />
          <q-card-section>
            <q-input v-model="email" label="Email" type="email" />
            <q-input v-model="password" label="Password" type="password" />
          </q-card-section>
          <q-separator class="q-my-lg" />
          <q-card-section>
            <q-btn
              class="full-width q-mb-sm"
              color="positive"
              label="Login"
              @click="onLogin"
              :disable="emptyCredential"
            />
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
