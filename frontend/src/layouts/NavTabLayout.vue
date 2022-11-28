<script setup>
import { useAuthStore } from "src/stores/auth-store";
import { computed } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const displayName = computed(() => {
  if (authStore.user) {
    return authStore.user.lastName + ", " + authStore.user.firstName;
  } else {
    return "";
  }
});

function onLogout() {
  authStore.logout();
  router.push("/login");
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-primary text-white border-positive"
      height-hint="98"
    >
      <q-toolbar>
        <q-toolbar-title class="text-weight-thin">
          <q-avatar>
            <img
              alt="Gym Rat Logo"
              src="~assets/logo.png"
              style="border-color: white"
            />
          </q-avatar>
          Gym Rat
        </q-toolbar-title>
        <q-space />
        <q-btn @click="onLogout" label="Logout" flat />
        <div class="text-h5 text-weight-thin">
          {{ displayName }}
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/calendar" label="Calendar" />
        <q-route-tab to="/analysis" label="Analysis" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
