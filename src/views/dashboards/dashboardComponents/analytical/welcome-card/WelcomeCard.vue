<template>
  <v-card class="mb-7 position-relative overflow-hidden">
    <v-img
      src="@/assets/images/background/welcome-bg2-2x-svg.svg"
      class="bg-img-1"
    />
    <v-card-text>
      <h2 class="title font-weight-medium mb-1">Hey John,</h2>
      <h2 class="title font-weight-medium mb-2">Download latest report</h2>
      <v-btn depressed color="secondary" class="mt-4"> Download </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WelcomeCard",
  data: () => ({}),
  components: {},
};
</script>