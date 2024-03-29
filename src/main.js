<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import store from "./store/store";
import Vuebar from "vuebar";
import "./plugins/base";
import VueSkycons from "vue-skycons";
import InstantSearch from "vue-instantsearch";
import VueFeather from "vue-feather";
import DatetimePicker from "vuetify-datetime-picker";

Vue.use(VueFeather);
Vue.use(DatetimePicker);
Vue.use(VueSkycons, {
  color: "#1e88e5",
});
Vue.use(InstantSearch);
Vue.config.productionTip = false;
Vue.use(Vuebar);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
=======
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import store from "./store/store";
import Vuebar from "vuebar";
import "./plugins/base";
import VueSkycons from "vue-skycons";
import InstantSearch from "vue-instantsearch";
import VueFeather from "vue-feather";
import DatetimePicker from "vuetify-datetime-picker";

Vue.use(VueFeather);
Vue.use(DatetimePicker);
Vue.use(VueSkycons, {
  color: "#1e88e5",
});
Vue.use(InstantSearch);
Vue.config.productionTip = false;
Vue.use(Vuebar);

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
>>>>>>> sjad
