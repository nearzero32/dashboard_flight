<<<<<<< HEAD
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TabsGrow -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      The grow prop will make the tab items take up all available space up to a
      maximum width of 300px.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card color="primary">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 white--text">BASiL</h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="white" grow>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card color="basil" flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>

<script>
export default {
  name: "TabsGrow",

  data: () => ({
    tab: null,
    items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
};
=======
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- TabsGrow -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      The grow prop will make the tab items take up all available space up to a
      maximum width of 300px.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card color="primary">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 white--text">BASiL</h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="white" grow>
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card color="basil" flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>

<script>
export default {
  name: "TabsGrow",

  data: () => ({
    tab: null,
    items: ["Appetizers", "Entrees", "Deserts", "Cocktails"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
};
>>>>>>> sjad
</script>