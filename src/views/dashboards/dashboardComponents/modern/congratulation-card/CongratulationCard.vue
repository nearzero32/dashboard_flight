<template>
  <v-card class="mb-7 position-relative overflow-hidden">
    <v-img
      src="@/assets/images/background/welcome-bg2-2x-svg.svg"
      class="bg-img-1"
    />
    <v-card-text>
      <h2 class="title">Congratulation Julia</h2>
      <h2 class="title text-h5 mt-4 font-weight-bold d-flex align-end">
        $39,358
        <span class="subtitle-1 ml-2 d-flex align-center font-weight-medium"
          ><feather type="arrow-up-left" size="18"></feather>+9%</span
        >
      </h2>
      <v-btn depressed color="primary" class="mt-8"> Download </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CongratulationCard",
  data: () => ({}),
  components: {},
};
</script>