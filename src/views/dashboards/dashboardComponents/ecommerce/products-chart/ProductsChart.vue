<template>
  <v-card class="mb-7">
    <v-card-text class="pa-7">
      <div class="d-sm-flex align-center mb-5">
        <h3 class="title">Products Performance</h3>
        <v-spacer></v-spacer>
        <div>
          <div class="d-flex align-center">
            <div class="d-flex align-center px-2">
              <span class="primary--text">
                <span class="overline">
                  <i class="fa fa-circle mx-1"></i>
                </span>
                <span class="font-weight-regular">Budget</span>
              </span>
            </div>
            <div class="d-flex align-center px-2">
              <span class="secondary--text">
                <span class="overline">
                  <i class="fa fa-circle mx-1"></i>
                </span>
                <span class="font-weight-regular">Expence</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <v-row>
        <v-col lg="4">
          <h3 class="text-h5 title font-weight-medium mt-3">$93,438.78</h3>
          <span class="grey--text subtitle-1">Budget</span>

          <h3 class="text-h5 title font-weight-medium mt-6">$32,839</h3>
          <span class="grey--text subtitle-1">Expense</span>

          <!-- chart -->
          <div class="my-3" v-show="elementVisible">
            <vue-apex-charts
              type="line"
              height="30px"
              :options="ProductsReportChart.ProductsReportChart.chartOptions"
              :series="ProductsReportChart.ProductsReportChart.series"
            ></vue-apex-charts>
          </div>

          <v-btn depressed color="secondary" class="mt-3">Download Report</v-btn>
        </v-col>
        <v-col lg="8">
          <div v-show="elementVisible">
            <vue-apex-charts
              type="bar"
              height="285px"
              :options="ProductsChart.ProductsChart.chartOptions"
              :series="ProductsChart.ProductsChart.series"
            ></vue-apex-charts>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import ProductsChart from "./ProductsChartData.vue";
import ProductsReportChart from "./ProductsChart2Data.vue";

export default {
  name: "ProductsChart",
  data: () => ({
    ProductsChart: ProductsChart,
    ProductsReportChart: ProductsReportChart,
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