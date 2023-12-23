<template>
  <v-card class="mb-7 position-relative overflow-hidden">
    <v-img
      src="@/assets/images/background/welcome-bg-2x-svg.svg"
      class="bg-img-2"
    />
    <v-card-text>
      <div class="d-flex justify-space-between">
        <div>
          <h2 class="title grey--text font-weight-regular">
            Earnings
          </h2>
          <h3 class="text-h5 title font-weight-medium">$63,438.39</h3>
        </div>
        <v-btn elevation="0" color="primary" class="btn-custom-sm" small fab>
          <feather type="dollar-sign"></feather>
        </v-btn>
      </div>
      <v-btn depressed color="secondary" class="mt-8"> Download </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "EarningsDownload",
  data: () => ({
  }),
  components: {},
};
</script>