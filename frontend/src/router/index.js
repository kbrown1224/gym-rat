import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { useAuthStore } from "src/stores/auth-store";

const router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes,
  history: createWebHistory(process.env.VUE_ROUTER_BASE),
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/", "/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.isLoggedIn) {
    return "/login";
  }
});

export default router;
