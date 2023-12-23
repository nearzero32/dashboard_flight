<template>
  <v-card class="mb-7">
    <v-card-text class="pa-7">
      <v-row>
        <v-col sm="6">
          <h3 class="text-h5 font-weight-medium title">43,246</h3>
          <span class="grey--text subtitle-1 font-weight-regular"
            >Yearly Sales</span
          >
          <div class="d-flex align-center justify-space-between mt-3">
            <span class="grey--text d-flex align-center">
              <span class="overline">
                <i class="fa fa-circle primary--text mx-1"></i>
              </span>
              <span class="font-weight-regular">2021</span>
            </span>
            <span class="grey--text d-flex align-center">
              <span class="overline">
                <i class="fa fa-circle info--text mx-1"></i>
              </span>
              <span class="font-weight-regular">2020</span>
            </span>
          </div>
          <div class="d-flex align-center justify-space-between">
            <span class="grey--text d-flex align-center">
              <span class="overline">
                <i class="fa fa-circle warning--text mx-1"></i>
              </span>
              <span class="font-weight-regular">2019</span>
            </span>
            <span class="grey--text d-flex align-center">
              <span class="overline">
                <i class="fa fa-circle grey--text mx-1"></i>
              </span>
              <span class="font-weight-regular">2018</span>
            </span>
          </div>
        </v-col>
        <v-col sm="6">
          <div v-show="elementVisible" class="position-relative">
            <vue-apex-charts
              type="donut"
              height="145px"
              :options="YearlySalesChart.YearlySalesChart.chartOptions"
              :series="YearlySalesChart.YearlySalesChart.series"
            ></vue-apex-charts>
            <feather
              size="20"
              type="shopping-cart"
              class="grey--text center-icon"
            ></feather>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import YearlySalesChart from "./YearlySalesData.vue";

export default {
  name: "YearlySales",
  data: () => ({
    elementVisible: false,
    YearlySalesChart: YearlySalesChart,
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
</script>

<style lang="scss">
.center-icon {
  position: absolute;
  left: 43%;
  top: 43%;
}
</style>