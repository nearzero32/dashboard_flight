<<<<<<< HEAD
<template>
  <v-card class="mb-7 position-relative overflow-hidden primary">
    <v-card-text>
      <h2 class="title fs-18 white--text">Customers</h2>
      <div class="mt-4" v-show="elementVisible">
        <vue-apex-charts
          type="line"
          height="55px"
          :options="CustomerChart.CustomerChart.chartOptions"
          :series="CustomerChart.CustomerChart.series"
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
import CustomerChart from "./CustomersData.vue";

export default {
  name: "Customers",
  data: () => ({
      CustomerChart: CustomerChart,
    elementVisible: false,
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
=======
<template>
  <v-card class="mb-7 position-relative overflow-hidden primary">
    <v-card-text>
      <h2 class="title fs-18 white--text">Customers</h2>
      <div class="mt-4" v-show="elementVisible">
        <vue-apex-charts
          type="line"
          height="55px"
          :options="CustomerChart.CustomerChart.chartOptions"
          :series="CustomerChart.CustomerChart.series"
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
import CustomerChart from "./CustomersData.vue";

export default {
  name: "Customers",
  data: () => ({
      CustomerChart: CustomerChart,
    elementVisible: false,
  }),
  created() {
    setTimeout(() => (this.elementVisible = true), 10);
  },
  components: {
    VueApexCharts,
  },
};
>>>>>>> sjad
</script>