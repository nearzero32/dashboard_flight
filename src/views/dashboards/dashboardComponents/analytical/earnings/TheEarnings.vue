<template>
  <v-card class="mb-7 primary w-100">
    <v-card-text class="pa-7">
      <div class="d-flex align-start">
        <h3 class="font-weight-regular title white--text mt-1">Earning</h3>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-btn depressed color="white" class="btn-custom-sm" small fab>
            <feather type="dollar-sign" class="text-dark"></feather>
          </v-btn>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="white--text text-h5">$93,438.78</h2>
        <span class="white--text op-5 subtitle-1">Monthly revenue</span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TheEarnings",
  data: () => ({}),
};
</script>