const routes = [
  {
    path: "/",
    component: () => import("src/layouts/BareLayout.vue"),
    children: [
      {
        name: "landing",
        path: "",
        component: () => import("src/pages/LandingPage.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("src/layouts/BareLayout.vue"),
    children: [
      {
        name: "login",
        path: "",
        component: () => import("src/pages/LoginPage.vue"),
      },
    ],
  },

  {
    path: "/register",
    component: () => import("src/layouts/BareLayout.vue"),
    children: [
      {
        name: "register",
        path: "",
        component: () => import("src/pages/RegisterPage.vue"),
      },
    ],
  },

  {
    path: "/home",
    component: () => import("src/layouts/NavTabLayout.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("src/pages/HomePage.vue"),
      },
    ],
  },

  {
    path: "/calendar",
    component: () => import("src/layouts/NavTabLayout.vue"),
    children: [
      {
        name: "calendar",
        path: "",
        component: () => import("src/pages/CalendarPage.vue"),
      },
    ],
  },

  {
    path: "/analysis",
    component: () => import("src/layouts/NavTabLayout.vue"),
    children: [
      {
        name: "analysis",
        path: "",
        component: () => import("src/pages/AnalysisPage.vue"),
      },
    ],
  },

  {
    path: "/workout/:muscleGroupId",
    component: () => import("src/layouts/NavLayout.vue"),
    children: [
      {
        name: "workout",
        path: "",
        component: () => import("src/pages/WorkoutPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
