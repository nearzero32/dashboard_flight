<<<<<<< HEAD
import Layout from "@/layouts/full-layout/Layout";
import SuperAdminStarterPage from "@/views/superAdmin/StarterPage.vue";
import Centers from "@/views/superAdmin/centers/centers.vue";
import Center from "@/views/superAdmin/centers/center.vue";
import Countries from "@/views/superAdmin/countries/countries.vue";

const SuperAdmin = {
  path: "/",
  component: Layout,
  children: [
    {
      path: "SuperAdminHome",
      component: SuperAdminStarterPage,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "centers",
      component: Centers,
      name: "centers",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "center/:id/:name",
      component: Center,
      name: "center",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "countries",
      component: Countries,
      name: "countries",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
};

export default SuperAdmin;
=======
import Layout from "@/layouts/full-layout/Layout";
import SuperAdminStarterPage from "@/views/superAdmin/StarterPage.vue";
import Centers from "@/views/superAdmin/centers/centers.vue";
import Center from "@/views/superAdmin/centers/center.vue";
import Countries from "@/views/superAdmin/countries/countries.vue";
import airportSuggestion from "@/views/superAdmin/airportSuggestion/airportSuggestion.vue";
import citiesSuggestion from "@/views/superAdmin/citiesSuggestion/citiesSuggestion.vue";

const SuperAdmin = {
  path: "/",
  component: Layout,
  children: [
    {
      path: "SuperAdminHome",
      component: SuperAdminStarterPage,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "centers",
      component: Centers,
      name: "centers",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "center/:id/:name",
      component: Center,
      name: "center",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "countries",
      component: Countries,
      name: "countries",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "airportSuggestion",
      component: airportSuggestion,
      name: "airportSuggestion",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "citiesSuggestion",
      component: citiesSuggestion,
      name: "citiesSuggestion",
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "super_admin") {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
};

export default SuperAdmin;
>>>>>>> sjad
