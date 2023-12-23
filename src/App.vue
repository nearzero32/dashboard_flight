<template>
  <v-app
    id="flexy"
    :class="`${
      !$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'
    }`"
  >
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  beforeCreate() {
    const userSession = JSON.parse(localStorage.getItem("user"));

    if (!userSession) {
      this.$router.push({ name: "login" });
    }
  },
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Aref+Ruqaa+Ink:wght@700&family=Cairo:wght@500&display=swap");

body,
h1,
h2,
h3,
h4,
h5,
h6,
span,
strong,
div,
p,
a {
  font-family: "Cairo", sans-serif!important;
}
</style>
