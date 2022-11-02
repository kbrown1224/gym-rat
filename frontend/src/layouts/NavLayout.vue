<script setup>
import { useAuthStore } from "src/stores/auth-store";

const authStore = useAuthStore();
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
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
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
