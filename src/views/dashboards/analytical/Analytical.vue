<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <WelcomeCard></WelcomeCard>
        <v-row>
          <v-col cols="12" sm="6" lg="6" class="py-0 d-flex align-stretch">
            <TheEarnings></TheEarnings>
          </v-col>
          <v-col cols="12" sm="6" lg="6" class="py-0 d-flex align-stretch">
            <MonthlyRevenue></MonthlyRevenue>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <TheSalesOverview></TheSalesOverview>
      </v-col>
      <v-col cols="12" sm="12" lg="4">
        <TotalSales></TotalSales>
      </v-col>
      <v-col cols="12" sm="12" lg="8">
        <ProductMonthTable></ProductMonthTable>
      </v-col>
      <v-col cols="12" lg="4">
        <BlogCard></BlogCard>
      </v-col>
      <v-col cols="12" lg="4">
        <WeeklyStats></WeeklyStats>
      </v-col>
      <v-col cols="12" lg="4">
        <DailyActivities></DailyActivities>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Analytical",

  data: () => ({
    page: {
      title: "Analytical",
    },
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        to: "#",
      },
      {
        text: "Analytical",
        disabled: true,
      },
    ],
  }),
  components: {
    WelcomeCard: () =>
      import("@/views/dashboards/dashboardComponents/analytical/welcome-card/WelcomeCard"),
    TheSalesOverview: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/sales-overview/TheSalesOverview"
      ),
    TheEarnings: () =>
      import("@/views/dashboards/dashboardComponents/analytical/earnings/TheEarnings"),
    MonthlyRevenue: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/monthly-revenue/MonthlyRevenue"
      ),
    TotalSales: () =>
      import("@/views/dashboards/dashboardComponents/analytical/total-sales/TotalSales"),
    ProductMonthTable: () =>
      import(
        "@/views/dashboards/dashboardComponents/analytical/project-month-table/ProductMonthTable"
      ),
    BlogCard: () =>
      import("@/views/dashboards/dashboardComponents/analytical/blog-card/BlogCard"),
    WeeklyStats: () =>
      import("@/views/dashboards/dashboardComponents/analytical/weekly-stats/WeeklyStats"),
    DailyActivities: () =>
      import("@/views/dashboards/dashboardComponents/analytical/daily-activities/DailyActivities"),
  },
};
</script>