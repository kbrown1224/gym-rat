<script setup>
import { useAuthStore } from "src/stores/auth-store";

const authStore = useAuthStore();
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-weight-thin">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Gym Rat
        </q-toolbar-title>
        <q-space />
        <div class="text-h5 text-weight-thin">
          {{ authStore.userData.displayName }}
        </div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/calendar" label="Calendar" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
