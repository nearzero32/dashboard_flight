<template>
  <v-card class="mb-7">
    <v-card-text class="pa-7">
      <div class="d-flex align-start">
        <h3 class="title mt-1">Purchases</h3>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-btn depressed color="secondary" class="btn-custom-sm" small fab>
            <feather type="shopping-bag"></feather>
          </v-btn>
        </div>
      </div>
      <div class="mt-9 mb-2">
        <h2 class="fs-30 title font-weight-bold">2,367</h2>
        <span class="subtitle-1 font-weight-medium text--disabled">Monthly Sales</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Purchases",
  data: () => ({}),
};
</script>