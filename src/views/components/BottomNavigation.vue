<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="BottomNavigation - Color">
          <BottomNavigationColor></BottomNavigationColor>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Grow">
          <BottomNavigationGrow></BottomNavigationGrow>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Horizontal">
          <BottomNavigationHorizontal></BottomNavigationHorizontal>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Shift">
          <BottomNavigationShift></BottomNavigationShift>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Toggle">
          <BottomNavigationToggle></BottomNavigationToggle>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="BottomNavigation - Hide on scroll">
          <BottomNavigationHideScroll></BottomNavigationHideScroll>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="BottomNavigation - Scroll threshold">
          <BottomNavigationScrollThreshold></BottomNavigationScrollThreshold>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BottomNavigation",

  data: () => ({
    page: {
      title: "Bottom Navigation"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Bottom Navigation",
        disabled: true
      }
    ]
  }),
  components: {
    BottomNavigationColor: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationColor"
      ),
    BottomNavigationGrow: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationGrow"
      ),
    BottomNavigationHorizontal: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationHorizontal"
      ),
    BottomNavigationShift: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationShift"
      ),
    BottomNavigationToggle: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationToggle"
      ),
    BottomNavigationHideScroll: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationHideScroll"
      ),
    BottomNavigationScrollThreshold: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationScrollThreshold"
      )
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="BottomNavigation - Color">
          <BottomNavigationColor></BottomNavigationColor>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Grow">
          <BottomNavigationGrow></BottomNavigationGrow>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Horizontal">
          <BottomNavigationHorizontal></BottomNavigationHorizontal>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Shift">
          <BottomNavigationShift></BottomNavigationShift>
        </BaseCard>

        <BaseCard heading="BottomNavigation - Toggle">
          <BottomNavigationToggle></BottomNavigationToggle>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="BottomNavigation - Hide on scroll">
          <BottomNavigationHideScroll></BottomNavigationHideScroll>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="BottomNavigation - Scroll threshold">
          <BottomNavigationScrollThreshold></BottomNavigationScrollThreshold>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BottomNavigation",

  data: () => ({
    page: {
      title: "Bottom Navigation"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Bottom Navigation",
        disabled: true
      }
    ]
  }),
  components: {
    BottomNavigationColor: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationColor"
      ),
    BottomNavigationGrow: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationGrow"
      ),
    BottomNavigationHorizontal: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationHorizontal"
      ),
    BottomNavigationShift: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationShift"
      ),
    BottomNavigationToggle: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationToggle"
      ),
    BottomNavigationHideScroll: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationHideScroll"
      ),
    BottomNavigationScrollThreshold: () =>
      import(
        "@/components/vuetifyComponents/bottom-navigation/BottomNavigationScrollThreshold"
      )
  }
};
</script>
>>>>>>> sjad
