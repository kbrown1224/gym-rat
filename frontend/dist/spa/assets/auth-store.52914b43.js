import { R as t } from "./index.099d1cbc.js";
const r = t("auth", {
  state: () => ({ isLoggedIn: !1, userData: null }),
  actions: {
    login(e, s) {
      return (
        (this.userData = { email: e, displayName: "Kip" }),
        (this.isLoggedIn = !0),
        !0
      );
    },
  },
});
export { r as u };
