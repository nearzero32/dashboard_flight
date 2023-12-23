<template>
  <v-card class="mb-7 position-relative overflow-hidden info">
    <v-card-text>
      <h2 class="title fs-18 white--text">Monthly Earnings</h2>
      <div class="mt-4" v-show="elementVisible">
        <vue-apex-charts
          type="bar"
          height="45px"
          :options="MonthlyChart.MonthlyChart.chartOptions"
          :series="MonthlyChart.MonthlyChart.series"
        ></vue-apex-charts>
      </div>
      <h2 class="title text-h5 white--text mt-4 font-weight-medium d-flex align-end">
        $39,358
        <span class="subtitle-1 ml-2 d-flex align-center font-weight-medium"
          ><feather type="arrow-up-left" size="18"></feather>+9 this week</span
        >
      </h2>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import MonthlyChart from "./MonthlyEarningsData";

export default {
  name: "MonthlyEarnings",
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