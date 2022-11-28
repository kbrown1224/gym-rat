<script setup>
import { useAuthStore } from "src/stores/auth-store";

const authStore = useAuthStore();
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white border-positive">
      <q-toolbar>
        <q-toolbar-title class="text-weight-thin">
          <q-avatar>
            <img
              alt="Gym Rat Logo"
              src="~assets/logo.png"
              style="border-color: white; width: 100%"
            />
          </q-avatar>
          Gym Rat
        </q-toolbar-title>
        <q-space />
        <div class="text-h5 text-weight-thin">
          {{ authStore.user.firstName }}
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
