import Layout from "@/layouts/full-layout/Layout";
import Index from "@/views/admin/index.vue";
import Customers from "@/views/admin/customers/customers.vue";
import Otp from "@/views/admin/customers/otp.vue";
import showUsers from "@/views/admin/users/showUsers.vue";
import showNorifications from "@/views/admin/norifications/showNorifications.vue";
import countries from "@/views/admin/countries/countries.vue";
import showCountrie from "@/views/admin/countries/showCountrie.vue";
import cities from "@/views/admin/cities/cities.vue";
import airports from "@/views/admin/airports/airports.vue";
import airlines from "@/views/admin/airlines/airlines.vue";
import flights from "@/views/admin/flights/flights.vue";
import ads from "@/views/admin/ads/ads.vue";
import services from "@/views/admin/services/services.vue";

const Admin = {
  path: "/",
  component: Layout,
  children: [
    {
      path: "/Index",
      component: Index,
      beforeEnter: (to, from, next) => {
        const isAuthenticated = JSON.parse(localStorage.getItem("user"));

        if (isAuthenticated && isAuthenticated.type === "admin" || isAuthenticated && isAuthenticated.type === "assistance") {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      name: "customers",
      path: "/customers",
      component: Customers,
    },
    {
      name: "otp",
      path: "/otp",
      component: Otp,
    },
    {
      name: "users",
      path: "/users",
      component: showUsers,
    },
    {
      name: "showNorifications",
      path: "/showNorifications",
      component: showNorifications,
    },
    {
      path: "/admin-countries",
      name: "admin-countries",
      component: countries,
    },
    {
      path: "/show-countrie/:id/:name/:is_active/:code/:phone_code",
      name: "show-countrie",
      component: showCountrie,
    },
    {
      path: "/admin-cities",
      name: "admin-cities",
      component: cities,
    },
    {
      path: "/admin-airports",
      name: "admin-airports",
      component: airports,
    },
    {
      path: "/admin-airlines",
      name: "admin-airlines",
      component: airlines,
    },
    {
      path: "/admin-flights",
      name: "admin-flights",
      component: flights,
    },
    {
      path: "/admin-ads",
      name: "admin-ads",
      component: ads,
    },
    {
      path: "/admin-services",
      name: "admin-services",
      component: services,
    },
  ],
};

export default Admin;
