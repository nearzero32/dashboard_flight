<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Parallex - With content">
          <ParallexContent></ParallexContent>
        </BaseCard>

        <BaseCard heading="Parallex - Custom height">
          <ParallexCustomHeight></ParallexCustomHeight>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Parallex",

  data: () => ({
    page: {
      title: "Parallex"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Parallex",
        disabled: true
      }
    ]
  }),
  components: {
    ParallexContent: () =>
      import("@/components/vuetifyComponents/parallex/ParallexContent"),
    ParallexCustomHeight: () =>
      import("@/components/vuetifyComponents/parallex/ParallexCustomHeight")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Parallex - With content">
          <ParallexContent></ParallexContent>
        </BaseCard>

        <BaseCard heading="Parallex - Custom height">
          <ParallexCustomHeight></ParallexCustomHeight>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Parallex",

  data: () => ({
    page: {
      title: "Parallex"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Parallex",
        disabled: true
      }
    ]
  }),
  components: {
    ParallexContent: () =>
      import("@/components/vuetifyComponents/parallex/ParallexContent"),
    ParallexCustomHeight: () =>
      import("@/components/vuetifyComponents/parallex/ParallexCustomHeight")
  }
};
</script>
>>>>>>> sjad
