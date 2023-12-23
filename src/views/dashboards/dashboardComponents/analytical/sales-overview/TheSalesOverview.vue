<template>
  <v-card class="mb-7 w-100">
    <v-card-text class="pa-7">
      <div class="d-sm-flex align-center">
        <div>
          <h3 class="title">Sales Overview</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div class="d-flex align-center">
            <div class="d-flex align-center px-2">
              <span class="primary--text">
                <span class="overline">
                  <i class="fa fa-circle mx-1"></i>
                </span>
                <span class="font-weight-regular">Ample</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="secondary--text">
                <span class="overline">
                  <i class="fa fa-circle mx-1"></i>
                </span>
                <span class="font-weight-regular">Pixel Admin</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="elementVisible">
        <vue-apex-charts
          type="bar"
          height="300px"
          :options="SalesoverChart.SalesoverChart.chartOptions"
          :series="SalesoverChart.SalesoverChart.series"
        ></vue-apex-charts>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import SalesoverChart from "./SalesOverviewData";

export default {
  name: "TheSalesOverview",
  data: () => ({
    title: "TheSalesOverview",
    SalesoverChart: SalesoverChart,
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