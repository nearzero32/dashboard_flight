<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Subheaders - Inset subheaders">
          <SubheadersInset></SubheadersInset>
        </BaseCard>

        <BaseCard heading="Subheaders - Grid subheaders">
          <SubheadersGrid></SubheadersGrid>
        </BaseCard>

        <BaseCard heading="Subheaders - Menu subheaders">
          <SubheadersMenu></SubheadersMenu>
        </BaseCard>

        <BaseCard heading="Subheaders - Subheaders with social media">
          <SubheadersSocialMedia></SubheadersSocialMedia>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Subheaders",

  data: () => ({
    page: {
      title: "Subheaders"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Subheaders",
        disabled: true
      }
    ]
  }),
  components: {
    SubheadersInset: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersInset"),
    SubheadersGrid: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersGrid"),
    SubheadersMenu: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersMenu"),
    SubheadersSocialMedia: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersSocialMedia")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Subheaders - Inset subheaders">
          <SubheadersInset></SubheadersInset>
        </BaseCard>

        <BaseCard heading="Subheaders - Grid subheaders">
          <SubheadersGrid></SubheadersGrid>
        </BaseCard>

        <BaseCard heading="Subheaders - Menu subheaders">
          <SubheadersMenu></SubheadersMenu>
        </BaseCard>

        <BaseCard heading="Subheaders - Subheaders with social media">
          <SubheadersSocialMedia></SubheadersSocialMedia>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Subheaders",

  data: () => ({
    page: {
      title: "Subheaders"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Subheaders",
        disabled: true
      }
    ]
  }),
  components: {
    SubheadersInset: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersInset"),
    SubheadersGrid: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersGrid"),
    SubheadersMenu: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersMenu"),
    SubheadersSocialMedia: () =>
      import("@/components/vuetifyComponents/subheaders/SubheadersSocialMedia")
  }
};
</script>
>>>>>>> sjad
