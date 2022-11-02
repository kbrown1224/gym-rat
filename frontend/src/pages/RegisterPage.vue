<script setup>
import { ref, computed } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const $q = useQuasar();
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const repeatPassword = ref("");
const router = useRouter();

const bulletPoints = [
  {
    title: "Progression",
    text: "TODO",
  },
  {
    title: "Analysis",
    text: "TODO",
  },
  {
    title: "Its Cool",
    text: "TODO",
  },
];

// Function for resetting the form
function resetForm() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  password.value = "";
  repeatPassword.value = "";
}

const passwordMismatch = computed(() => {
  return password.value != repeatPassword.value;
});

function submitRegistration() {
  if (passwordMismatch.value) {
    $q.notify({
      color: "negative",
      textColor: "white",
      icon: "warning",
      message: "Passwords do not match",
    });

    password.value = "";
    repeatPassword.value = "";
  } else {
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    };

    const success = true;

    if (success) {
      router.push({ name: "landing" });
    } else {
    }
  }
}
</script>

<template>
  <q-page class="q-py-xl gradient-bg">
    <div class="row q-mt-xl items-stretch">
      <div class="col-4 offset-1">
        <div class="page-break">
          <div v-for="bullet in bulletPoints" :key="bullet.title">
            <div class="text-h6 text-bold">{{ bullet.title }}</div>
            <p>{{ bullet.text }}</p>
          </div>
        </div>
      </div>
      <div class="col-4 offset-2">
        <q-card class="glassy">
          <q-card-section>
            <div class="text-h3">Register</div>
          </q-card-section>
          <q-card-section>
            <q-form @submit="submitRegistration" @reset="resetForm">
              <q-input v-model="email" type="email" hint="Email" />

              <q-input v-model="firstName" hint="First Name" />
              <q-input v-model="lastName" hint="Last Name" />

              <q-input v-model="password" type="password" hint="Password" />
              <q-input
                v-model="repeatPassword"
                type="password"
                hint="Repeat Password"
              />

              <q-separator class="q-my-md" />

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
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
    rgba(240, 84, 84, 1) 0%,
    rgba(132, 20, 45, 1) 20%,
    rgba(48, 71, 94, 1) 100%
  );
}

.page-break {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
