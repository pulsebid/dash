import store from "@/state/store";

export default [
  {
    path: "/entrar",
    name: "entrar",
    component: () => import("../views/auth/entrar.vue"),
    meta: {
      title: "Entrar",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "dashboard" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/sair",
    name: "sair",
    meta: {
      title: "Sair", authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        localStorage.clear();
        sessionStorage.clear();
        next('entrar');
      },
    },
  },
  {
    path: "/solicitar-convite",
    name: "Solicitar convite",
    component: () => import("../views/auth/solicitar-convite.vue"),
    meta: {
      title: "Solicitar convite",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "dashboard" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/esqueci-minha-senha",
    name: "Esqueci minha senha",
    component: () => import("../views/auth/esqueci-minha-senha.vue"),
    meta: {
      title: "Esqueci minha senha",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "dashboard" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/index.vue"),
  },
  {
    path: "/agencia",
    name: "agencia",
    meta: {
      title: "Agência",
      authRequired: true,
    },
    component: () => import("../views/agencia/index.vue"),
  },
];