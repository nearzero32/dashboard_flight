<template>
  <v-card class="mb-7 overflow-hidden">
    <v-card-text class="pa-7">
      <div class="d-flex align-center mb-5">
        <h3 class="title">Weekly Stats</h3>
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
      <!-- lists -->
      <div class="px-0" v-for="(item, i) in statsData" :key="i" @click="href">
        <div class="d-flex align-center py-4">
          <div class>
            <v-btn :color="item.color" fab small elevation="0" class="mr-3">
              <feather :type="item.icon" size="18"></feather>
            </v-btn>
          </div>
          <div class="ml-2">
            <h4 class="font-weight-bold subtitle-1 title">{{ item.title }}</h4>
            <span
              class="
                grey--text
                subtitle-2
                descpart
                d-block
                text-truncate
                font-weight-regular
              "
              >{{ item.desc }}</span
            >
          </div>
          <div class="ml-auto">
            <v-chip label small color="inherit"> +{{item.percent}}% </v-chip>
          </div>
        </div>
      </div>
    </v-card-text>
    <div v-show="elementVisible">
      <vue-apex-charts
        type="area"
        height="110px"
        :options="WeeklyStatsChart.WeeklyStatsChart.chartOptions"
        :series="WeeklyStatsChart.WeeklyStatsChart.series"
      ></vue-apex-charts>
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import WeeklyStatsChart from "./WeeklyStatsData.vue";

export default {
  name: "WeeklyStats",
  data: () => ({
    WeeklyStatsChart: WeeklyStatsChart,
    elementVisible: false,
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    statsData: [
      {
        color: "primary",
        icon: "shopping-cart",
        title: "Top Sales",
        desc: "Johnathan Doe",
        percent: 68
      },
      {
        color: "warning",
        icon: "star",
        title: "Best Seller",
        desc: "MaterialPro Admin",
        percent: 45
      },
      {
        color: "success",
        icon: "message-square",
        title: "Most Commented",
        desc: "Ample Admin",
        percent: 10
      },
    ],
    href() {
      return undefined;
    },
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
</script>