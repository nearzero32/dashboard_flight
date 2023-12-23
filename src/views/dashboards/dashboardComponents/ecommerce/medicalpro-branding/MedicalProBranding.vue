<template>
  <v-card class="mb-7">
    <v-card-text class="pa-7">
      <div class="d-flex align-center mb-5">
        <h3 class="title">MedicalPro Branding</h3>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <feather type="more-horizontal" size="20"></feather>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <v-chip class="bg-light-primary primary--text" label small>
        16 APR, 2022
      </v-chip>
      <v-row>
        <v-col cols="4">
          <h4 class="subtitle-2 font-weight-regular">Due Date</h4>
          <h5 class="font-weight-medium title body-2 text-no-wrap">Oct 23, 2022</h5>
        </v-col>
        <v-col cols="4">
          <h4 class="subtitle-2 font-weight-regular">Budget</h4>
          <h5 class="font-weight-medium title body-2 text-no-wrap">$98,500</h5>
        </v-col>
        <v-col cols="4">
          <h4 class="subtitle-2 font-weight-regular">Expense</h4>
          <h5 class="font-weight-medium title body-2 text-no-wrap">$63,000</h5>
        </v-col>
      </v-row>
      <v-divider class="my-3"></v-divider>
      <h5 class="title fs-18 mb-2">Teams</h5>

      <v-chip label small color="warning" class="mr-1"> Bootstrap </v-chip>
      <v-chip label small color="error"> Angular </v-chip>
      <v-divider  class="my-4"></v-divider>
      <h5 class="title fs-18 mb-2">Leaders</h5>
      <div class="d-flex align-center">
        <v-avatar color="indigo" size="40">
          <img src="@/assets/images/users/1.jpg" alt="John" />
        </v-avatar>
        <v-avatar color="indigo" size="40" class="ml-2">
          <img src="@/assets/images/users/2.jpg" alt="John" />
        </v-avatar>
        <v-avatar color="indigo" size="40" class="ml-2">
          <img src="@/assets/images/users/3.jpg" alt="John" />
        </v-avatar>
      </div>
      <v-divider  class="my-4"></v-divider>
      <div class="d-flex justify-space-between align-center">
        <v-btn depressed color="secondary">Add</v-btn>
        <p class="body-2 ma-0 grey--text">36 Recent Transactions</p>
        </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WeeklyStats",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  components: {},
};
</script>