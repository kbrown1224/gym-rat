import { defineStore } from "pinia";
import { getMe, getToken } from "src/services/backend";
import { api } from "src/boot/axios";
import { Cookies } from "quasar";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    // user: JSON.parse(localStorage.getItem('user')),
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => state.user != null,
  },
  actions: {
    async loadUser(token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const user = await getMe(token);
      this.user = user;
    },
    async login(email, password) {
      await getToken(email, password).then(async (response) => {
        if (response.status === 200) {
          console.log("successful login");
          const tokenData = response.data;

          Cookies.set("gym-rat", tokenData.access_token);
          await this.loadUser(tokenData.access_token);
        } else {
          return new Promise.reject(new Error("fail"));
        }
      });
    },
    logout() {
      this.user = null;
      delete api.defaults.headers.common["Authorization"];
      Cookies.remove("gym-rat");
    },
  },
});
