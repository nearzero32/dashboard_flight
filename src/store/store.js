<<<<<<< HEAD
// في ملف store.js

import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/utils/axios";
import CryptoJS from "crypto-js";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white",
    SidebarBg: "",
    navbarColor: "#fafafa",
    setHorizontalLayout: false,
    user: JSON.parse(localStorage.getItem("user")),
    isAuthenticated: false,
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },
    SET_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const hashedPassword = CryptoJS.SHA512(password).toString();
      const requestData = {
        email,
        password: hashedPassword,
        auth_phone_id: "mustafa",
      };

      try {
        const user = await axiosInstance.post(`/login`, requestData);

        if (user.data.error) {
          throw new Error(user.data.results);
        }
        commit("SET_AUTHENTICATED", true);

        localStorage.setItem("user", JSON.stringify(user.data.results));
        localStorage.setItem("token", JSON.stringify(user.data.results.token));

        if (user.data.results.type === "super_admin") {
          router.push("/SuperAdminHome");
        } else if (user.data.results.type === "admin") {
          router.push(this.returnUrl || "/Index");
        } else if (user.data.results.type === "assistance") {
          router.push(this.returnUrl || "/customers");
        } 
      } catch (error) {
        commit("SET_AUTHENTICATED", false);
        throw error;
      }
    },
    logout({ commit }) {
      commit("SET_AUTHENTICATED", false);

      this.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/login");
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
});
=======
// في ملف store.js

import Vue from "vue";
import Vuex from "vuex";
import axiosInstance from "@/utils/axios";
import CryptoJS from "crypto-js";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: null,
    Customizer_drawer: false,
    SidebarColor: "white",
    SidebarBg: "",
    navbarColor: "#fafafa",
    setHorizontalLayout: false,
    user: JSON.parse(localStorage.getItem("user")),
    isAuthenticated: false,
  },
  mutations: {
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
    SET_CUSTOMIZER_DRAWER(state, payload) {
      state.Customizer_drawer = payload;
    },
    SET_SIDEBAR_COLOR(state, payload) {
      state.SidebarColor = payload;
    },
    SET_NAVBAR_COLOR(state, payload) {
      state.navbarColor = payload;
    },
    SET_LAYOUT(state, payload) {
      state.setHorizontalLayout = payload;
    },
    SET_AUTHENTICATED(state, payload) {
      state.isAuthenticated = payload;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const hashedPassword = CryptoJS.SHA512(password).toString();
      const requestData = {
        email,
        password: hashedPassword,
        auth_phone_id: "mustafa",
      };

      try {
        const user = await axiosInstance.post(`/login`, requestData);

        if (user.data.error) {
          throw new Error(user.data.results);
        }
        commit("SET_AUTHENTICATED", true);

        localStorage.setItem("user", JSON.stringify(user.data.results));
        localStorage.setItem("token", JSON.stringify(user.data.results.token));

        if (user.data.results.type === "super_admin") {
          router.push("/SuperAdminHome");
        } else if (user.data.results.type === "admin") {
          router.push(this.returnUrl || "/Index");
        } else if (user.data.results.type === "assistance") {
          router.push(this.returnUrl || "/customers");
        } 
      } catch (error) {
        commit("SET_AUTHENTICATED", false);
        throw error;
      }
    },
    logout({ commit }) {
      commit("SET_AUTHENTICATED", false);

      this.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/login");
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  },
});
>>>>>>> sjad
