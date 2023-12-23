<template>
  <v-card class="mb-7">
    <v-card-text class="pa-7">
      <div class="d-flex align-start">
        <h3 class="title mt-1">Total Earnings</h3>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-btn depressed color="primary" class="btn-custom-sm" small fab>
            <feather type="dollar-sign"></feather>
          </v-btn>
        </div>
      </div>
      <div class="mt-9 mb-2">
        <h2 class="fs-30 title font-weight-bold">$93,438.78</h2>
        <span class="subtitle-1 font-weight-medium text--disabled">Monthly Revenue</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TotalEarnings",
  data: () => ({}),
};
</script>