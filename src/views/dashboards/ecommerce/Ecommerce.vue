<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" lg="4">
      <EarningsDownload />
      </v-col>
      <v-col cols="12" lg="8">
        <TopCards />
      </v-col>
      <v-col cols="12" lg="8">
        <ProductsChart />
      </v-col>
      <v-col cols="12" lg="4">
        <Earnings />
        <YearlySales />
      </v-col>
      <v-col cols="12" lg="4">
        <RecentTransactions />
      </v-col>
      <v-col cols="12" lg="8">
        <ProductPerformance />
      </v-col>
      <v-col cols="12" lg="4">
        <MedicalProBranding />
      </v-col>
      <v-col cols="12" lg="4">
        <WeeklyStats />
      </v-col>
      <v-col cols="12" lg="4">
        <DailyActivites />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Ecommerce",

  data: () => ({
    page: {
      title: "Ecommerce",
    },
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        to: "#",
      },
      {
        text: "Ecommerce",
        disabled: true,
      },
    ],
  }),
  components: {
    MedicalProBranding: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/medicalpro-branding/MedicalProBranding"
      ),
    WeeklyStats: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats"
      ),
    DailyActivites: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/daily-activities/DailyActivites"
      ),
    RecentTransactions: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/recent-transactions/RecentTransactions"
      ),
    ProductPerformance: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/product-performance/ProductPerformance"
      ),
    ProductsChart: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/products-chart/ProductsChart"
      ),
    Earnings: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/earnings/Earnings"
      ),
    YearlySales: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/yearly-sales/YearlySales"
      ),
    EarningsDownload: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/earnings-download/EarningsDownload"
      ),
    TopCards: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/top-cards/TopCards"
      ),
  },
};
</script>