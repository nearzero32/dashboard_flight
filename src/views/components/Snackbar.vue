<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Multi Line">
          <SnackbarMultiline></SnackbarMultiline>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Timeout">
          <SnackbarTimeout></SnackbarTimeout>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Vertical">
          <SnackbarVertical></SnackbarVertical>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Snackbar",

  data: () => ({
    page: {
      title: "Snackbar"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Snackbar",
        disabled: true
      }
    ]
  }),
  components: {
    SnackbarMultiline: () =>
      import("@/components/vuetifyComponents/snackbar/SnackbarMultiline"),
    SnackbarTimeout: () =>
      import("@/components/vuetifyComponents/snackbar/SnackbarTimeout"),
    SnackbarVertical: () =>
      import("@/components/vuetifyComponents/snackbar/SnackbarVertical")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Multi Line">
          <SnackbarMultiline></SnackbarMultiline>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Timeout">
          <SnackbarTimeout></SnackbarTimeout>
        </BaseCard>
      </v-col>
      <v-col cols="12" sm="12" lg="6">
        <BaseCard heading="Snackbar - Vertical">
          <SnackbarVertical></SnackbarVertical>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Snackbar",

  data: () => ({
    page: {
      title: "Snackbar"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Snackbar",
        disabled: true
      }
    ]
  }),
  components: {
    SnackbarMultiline: () =>
      import("@/components/vuetifyComponents/snackbar/SnackbarMultiline"),
    SnackbarTimeout: () =>
      import("@/components/vuetifyComponents/snackbar/SnackbarTimeout"),
    SnackbarVertical: () =>
      import("@/components/vuetifyComponents/snackbar/SnackbarVertical")
  }
};
</script>
>>>>>>> sjad
