<template>
  <router-view />
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "src/stores/auth-store";

export default defineComponent({
  name: "App",
  setup() {
    const $q = useQuasar();

    $q.dark.set(true);

    onMounted(async () => {
      if ($q.cookies.has("gym-rat")) {
        const authStore = useAuthStore();

        const token = $q.cookies.get("gym-rat");
        authStore.loadUser(token);
      }
    });
  },
});
</script>
