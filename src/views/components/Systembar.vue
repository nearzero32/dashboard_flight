<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Systembar - Colored bar">
          <SystembarColoredBar></SystembarColoredBar>
        </BaseCard>

        <BaseCard heading="Systembar - Lights out">
          <SystembarLightsOut></SystembarLightsOut>
        </BaseCard>

        <BaseCard heading="Systembar - Themes">
          <SystembarThemes></SystembarThemes>
        </BaseCard>

        <BaseCard heading="Systembar - Window bar">
          <SystembarWindowBar></SystembarWindowBar>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Systembar",

  data: () => ({
    page: {
      title: "Systembar"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Systembar",
        disabled: true
      }
    ]
  }),
  components: {
    SystembarColoredBar: () =>
      import("@/components/vuetifyComponents/systembar/SystembarColoredBar"),
    SystembarLightsOut: () =>
      import("@/components/vuetifyComponents/systembar/SystembarLightsOut"),
    SystembarThemes: () =>
      import("@/components/vuetifyComponents/systembar/SystembarThemes"),
    SystembarWindowBar: () =>
      import("@/components/vuetifyComponents/systembar/SystembarWindowBar")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Systembar - Colored bar">
          <SystembarColoredBar></SystembarColoredBar>
        </BaseCard>

        <BaseCard heading="Systembar - Lights out">
          <SystembarLightsOut></SystembarLightsOut>
        </BaseCard>

        <BaseCard heading="Systembar - Themes">
          <SystembarThemes></SystembarThemes>
        </BaseCard>

        <BaseCard heading="Systembar - Window bar">
          <SystembarWindowBar></SystembarWindowBar>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Systembar",

  data: () => ({
    page: {
      title: "Systembar"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Systembar",
        disabled: true
      }
    ]
  }),
  components: {
    SystembarColoredBar: () =>
      import("@/components/vuetifyComponents/systembar/SystembarColoredBar"),
    SystembarLightsOut: () =>
      import("@/components/vuetifyComponents/systembar/SystembarLightsOut"),
    SystembarThemes: () =>
      import("@/components/vuetifyComponents/systembar/SystembarThemes"),
    SystembarWindowBar: () =>
      import("@/components/vuetifyComponents/systembar/SystembarWindowBar")
  }
};
</script>
>>>>>>> sjad
