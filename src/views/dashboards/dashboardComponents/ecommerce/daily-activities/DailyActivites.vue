<template>
  <v-card class="mb-7">
    <v-card-text class="pa-7">
      <div class="d-flex align-center mb-5">
        <h3 class="title">Daily Activities</h3>
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

      <v-img height="150" src="@/assets/images/background/blog-bg-2x.jpg"></v-img>

      <h4 class="title fs-18 mt-3">React 18 coming soon!</h4>
      <h5 class="subtitle-1 grey--text">By Johnathan Doe</h5>
      <p class="grey--text mt-4">This will be the small description for the news you have shown here. There could be some great info.</p>
      <v-btn depressed color="secondary">Read More</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DailyActivities",
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