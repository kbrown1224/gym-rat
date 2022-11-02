import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    userData: null,
  }),
  actions: {
    login(email, password) {
      const success = true;

      if (success) {
        this.userData = {
          email: email,
          displayName: "Kip",
        };
        this.isLoggedIn = true;
        return true;
      } else {
        this.userData = null;
        this.isLoggedIn = false;
        return false;
      }
    },
  },
});
