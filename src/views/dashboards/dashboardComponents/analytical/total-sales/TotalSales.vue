<template>
  <v-card class="mb-7">
    <v-card-text class="pa-7">
      <div class="d-flex align-center">
        <div>
          <h3 class="title">Total Sales</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div style="width: 120px">
            <v-select
              class="pt-0 mt-0"
              v-model="select"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select" dense
              single-line outlined hide-details
            ></v-select>
          </div>
        </div>
      </div>
      <div class="border-top pt-4 mt-6 d-flex align-center">
        <h6 class="subtitle-1 font-weight-medium">Sales Yearly</h6>
        <div class="ml-auto">
          <h3 class="title font-weight-bold">8,364,398</h3>
        </div>
      </div>
      <div class="mt-5 position-relative">
        <vue-apex-charts
          type="donut"
          height="280px"
          :options="TotalSalesChart.TotalSalesChart.chartOptions"
          :series="TotalSalesChart.TotalSalesChart.series"
        ></vue-apex-charts>
        <feather
          size="35"
          type="shopping-cart"
          class="grey--text total-sales-icon"
        ></feather>
      </div>
      <div class="d-flex align-center justify-space-between pt-6">
        <div class="d-flex align-center px-2">
          <span>
            <span class="overline info--text">
              <i class="fa fa-circle mr-2"></i>
            </span>
            <span
              class="font-weight-regular blue-grey--text text--lighten-2 mr-1"
              >2021</span
            >
          </span>
        </div>
        <div class="d-flex align-center px-2">
          <span>
            <span class="overline primary--text text--accent-2">
              <i class="fa fa-circle mr-2"></i>
            </span>
            <span
              class="font-weight-regular blue-grey--text text--lighten-2 mr-1"
              >2020</span
            >
          </span>
        </div>
        <div class="d-flex align-center px-2">
          <span>
            <span class="overline warning--text">
              <i class="fa fa-circle mr-2"></i>
            </span>
            <span
              class="font-weight-regular blue-grey--text text--lighten-2 mr-1"
              >2019
            </span>
          </span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>


<script>
import VueApexCharts from "vue-apexcharts";
import TotalSalesChart from "./TotalSalesData";

export default {
  name: "TotalSales",
  data: () => ({
    select: { state: "March", abbr: "March" },
    items: [
      { state: "March", abbr: "March" },
      { state: "April", abbr: "April" },
      { state: "May", abbr: "May" },
      { state: "June", abbr: "June" },
    ],
    TotalSalesChart: TotalSalesChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>