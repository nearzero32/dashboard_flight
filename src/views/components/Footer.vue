<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Footer - Absolute Footer">
          <FooterAbsolute></FooterAbsolute>
        </BaseCard>

        <BaseCard heading="Footer - Padless Footer">
          <FooterPadless></FooterPadless>
        </BaseCard>

        <BaseCard heading="Footer - Company Footer">
          <FooterCompany></FooterCompany>
        </BaseCard>

        <BaseCard heading="Footer - Indigo Footer">
          <FooterIndigo></FooterIndigo>
        </BaseCard>

        <BaseCard heading="Footer - Teal Footer">
          <FooterTeal></FooterTeal>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    page: {
      title: "Footer"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Footer",
        disabled: true
      }
    ]
  }),
  components: {
    FooterAbsolute: () =>
      import("@/components/vuetifyComponents/footer/FooterAbsolute"),
    FooterPadless: () =>
      import("@/components/vuetifyComponents/footer/FooterPadless"),
    FooterCompany: () =>
      import("@/components/vuetifyComponents/footer/FooterCompany"),
    FooterIndigo: () =>
      import("@/components/vuetifyComponents/footer/FooterIndigo"),
    FooterTeal: () => import("@/components/vuetifyComponents/footer/FooterTeal")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Footer - Absolute Footer">
          <FooterAbsolute></FooterAbsolute>
        </BaseCard>

        <BaseCard heading="Footer - Padless Footer">
          <FooterPadless></FooterPadless>
        </BaseCard>

        <BaseCard heading="Footer - Company Footer">
          <FooterCompany></FooterCompany>
        </BaseCard>

        <BaseCard heading="Footer - Indigo Footer">
          <FooterIndigo></FooterIndigo>
        </BaseCard>

        <BaseCard heading="Footer - Teal Footer">
          <FooterTeal></FooterTeal>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer",

  data: () => ({
    page: {
      title: "Footer"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Footer",
        disabled: true
      }
    ]
  }),
  components: {
    FooterAbsolute: () =>
      import("@/components/vuetifyComponents/footer/FooterAbsolute"),
    FooterPadless: () =>
      import("@/components/vuetifyComponents/footer/FooterPadless"),
    FooterCompany: () =>
      import("@/components/vuetifyComponents/footer/FooterCompany"),
    FooterIndigo: () =>
      import("@/components/vuetifyComponents/footer/FooterIndigo"),
    FooterTeal: () => import("@/components/vuetifyComponents/footer/FooterTeal")
  }
};
</script>
>>>>>>> sjad
