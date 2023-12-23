<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-7">
      <div class="d-md-flex align-start">
        <div>
          <h3 class="title">Revenue Updates</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div style="width: 150px">
            <v-select
              class="pt-0 mt-0"
              v-model="select"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select"
              dense
              single-line
              outlined
              hide-details
            ></v-select>
          </div>
        </div>
      </div>
      <div v-show="elementVisible">
        <vue-apex-charts
          type="line"
          height="300px"
          :options="RevenueChart.RevenueChart.chartOptions"
          :series="RevenueChart.RevenueChart.series"
        ></vue-apex-charts>
      </div>
      <div class="d-flex justify-center">
        <div class="d-flex align-center primary--text px-2">
          <span class="overline">
            <i class="fa fa-circle mx-1"></i>
          </span>
          <span class="font-weight-regular">Earnings</span>
        </div>
        <div class="d-flex align-center px-2 info--text">
          <span class="overline">
            <i class="fa fa-circle mx-1"></i>
          </span>
          <span class="font-weight-regular">Expense</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import RevenueChart from "./RevenueUpdatesData";

export default {
  name: "RevenueUpdates",
  data: () => ({
    select: { state: "March 2022", abbr: "FL" },
    items: [
      { state: "March 2022", abbr: "FL" },
      { state: "April 2022", abbr: "GA" },
      { state: "May 2022", abbr: "NE" },
      { state: "June 2022", abbr: "CA" },
    ],
    RevenueChart: RevenueChart,
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