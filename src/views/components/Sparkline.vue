<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Fill">
          <SparklineFill></SparklineFill>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Take a break">
          <SparklineTakeBreak></SparklineTakeBreak>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Dashboard card">
          <SparklineDashboardCard></SparklineDashboardCard>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Custom labels">
          <SparklineCustomLabels></SparklineCustomLabels>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sparkline",

  data: () => ({
    page: {
      title: "Sparkline"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Sparkline",
        disabled: true
      }
    ]
  }),
  components: {
    SparklineFill: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineFill"),
    SparklineTakeBreak: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineTakeBreak"),
    SparklineDashboardCard: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineDashboardCard"),
    SparklineCustomLabels: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineCustomLabels")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Fill">
          <SparklineFill></SparklineFill>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Take a break">
          <SparklineTakeBreak></SparklineTakeBreak>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Dashboard card">
          <SparklineDashboardCard></SparklineDashboardCard>
        </BaseCard>
      </v-col>

      <v-col cols="12" sm="12">
        <BaseCard heading="Sparkline - Custom labels">
          <SparklineCustomLabels></SparklineCustomLabels>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sparkline",

  data: () => ({
    page: {
      title: "Sparkline"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Sparkline",
        disabled: true
      }
    ]
  }),
  components: {
    SparklineFill: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineFill"),
    SparklineTakeBreak: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineTakeBreak"),
    SparklineDashboardCard: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineDashboardCard"),
    SparklineCustomLabels: () =>
      import("@/components/vuetifyComponents/sparkline/SparklineCustomLabels")
  }
};
</script>
>>>>>>> sjad
