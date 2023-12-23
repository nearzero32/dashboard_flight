<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>

    <v-row>
      <v-col cols="12" sm="12" lg="5">
        <CongratulationCard />
      </v-col>
      <v-col cols="12" sm="12" lg="7">
        <v-row>
          <v-col lg="5" class="py-0">
            <Purchases />
          </v-col>
          <v-col lg="7" class="py-0">
            <TotalEarnings />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" lg="8">
        <RevenueUpdates />
      </v-col>
      <v-col cols="12" sm="12" lg="4">
        <MonthlyEarnings />
        <Customers />
      </v-col>
      <v-col cols="12" sm="12" lg="4">
        <TotalSales></TotalSales>
      </v-col>
      <v-col cols="12" sm="12" lg="8">
        <ProductPerformance />
      </v-col>
      <v-col cols="12" sm="12" lg="5">
        <TheEarnings />
        <MonthlyRevenue />
      </v-col>
      <v-col cols="12" sm="12" lg="7" class="d-flex align-stretch">
        <TheSalesOverview />
      </v-col>
      <v-col cols="12" lg="4">
        <BlogCard></BlogCard>
      </v-col>
      <v-col cols="12" lg="4">
        <WeeklyStats></WeeklyStats>
      </v-col>
      <v-col cols="12" lg="4">
        <MedicalProBranding />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Modern",

  data: () => ({
    page: {
      title: "Modern",
    },
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        to: "#",
      },
      {
        text: "Modern",
        disabled: true,
      },
    ],
  }),
  components: {
    CongratulationCard: () =>
      import(
        "@/views/dashboards/dashboardComponents/modern/congratulation-card/CongratulationCard"
      ),
    Purchases: () =>
      import(
        "@/views/dashboards/dashboardComponents/modern/purchases/Purchases"
      ),
    TotalEarnings: () =>
      import(
        "@/views/dashboards/dashboardComponents/modern/total-earnings/TotalEarnings"
      ),
    RevenueUpdates: () =>
      import(
        "@/views/dashboards/dashboardComponents/modern/revenue-updates/RevenueUpdates"
      ),
    MonthlyEarnings: () =>
      import(
        "@/views/dashboards/dashboardComponents/modern/monthly-earnings/MonthlyEarnings"
      ),
    Customers: () =>
      import(
        "@/views/dashboards/dashboardComponents/modern/customers/Customers"
      ),
    TotalSales: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/total-sales/TotalSales"
      ),
    TheEarnings: () =>
      import("@/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings"),
    MonthlyRevenue: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue"
      ),
    ProductPerformance: () =>
      import(
        "@/views/dashboards/dashboardComponents/modern/product-performance/ProductPerformance"
      ),
    TheSalesOverview: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/sales-overview/TheSalesOverview"
      ),

    BlogCard: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/blog-card/BlogCard"
      ),
    WeeklyStats: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats"
      ),
    MedicalProBranding: () =>
      import(
        "@/views/dashboards/dashboardComponents/ecommerce/medicalpro-branding/MedicalProBranding"
      ),
  },
};
</script>