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
  const success = authStore.login(email.value, password.value);

  if (success) {
    router.push({ name: "home" });
  } else {
    $q.notify({
      color: "negative",
      textColor: "white",
      icon: "warning",
      message: "Something went wrong",
    });
  }
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
        <q-card class="glassy">
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

<style scoped>
.glassy {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.gradient-bg {
  background: rgb(48, 71, 94);
  background: linear-gradient(
    45deg,
    rgba(48, 71, 94, 1) 0%,
    rgba(132, 20, 45, 1) 76%,
    rgba(240, 84, 84, 1) 100%
  );
}
</style>
