<template>
  <v-card class="mb-7 overflow-hidden w-100">
    <v-card-text class="pa-7">
      <div class="d-flex align-start">
        <div>
          <span class="subtitle-1 subtitle-2">Monthly revenue</span>
          <h3 class="font-weight-medium title">3246</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-btn depressed class="btn-custom-sm" color="secondary" fab small>
            <feather type="shopping-bag" class="white--text"></feather>
          </v-btn>
        </div>
      </div>
    </v-card-text>
    <div v-show="elementVisible">
      <vue-apex-charts
        type="area"
        height="75px"
        :options="MonthlyChart.MonthlyChart.chartOptions"
        :series="MonthlyChart.MonthlyChart.series"
      ></vue-apex-charts>
    </div>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import MonthlyChart from "./MonthlyRevenueData.vue";

export default {
  name: "MonthlyRevenue",
  data: () => ({
    MonthlyChart: MonthlyChart,
    elementVisible: false,
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
</script>