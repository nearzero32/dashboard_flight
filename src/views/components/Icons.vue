<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Icons - Material Design">
          <IconsMaterial></IconsMaterial>
        </BaseCard>

        <BaseCard heading="Icons - Font Awesome">
          <IconFontawesome></IconFontawesome>
        </BaseCard>

        <BaseCard heading="Icons - Color">
          <IconColors></IconColors>
        </BaseCard>

        <BaseCard heading="Icons - Buttons">
          <IconButtons></IconButtons>
        </BaseCard>

        <BaseCard heading="Icons - Clickable">
          <IconClickable></IconClickable>
        </BaseCard>

        <BaseCard heading="Icons - MDI SVG">
          <IconMdiSvg></IconMdiSvg>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Icons",

  data: () => ({
    page: {
      title: "Icons"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Icons",
        disabled: true
      }
    ]
  }),
  components: {
    IconsMaterial: () =>
      import("@/components/vuetifyComponents/icons/IconsMaterial"),
    IconFontawesome: () =>
      import("@/components/vuetifyComponents/icons/IconFontawesome"),
    IconColors: () => import("@/components/vuetifyComponents/icons/IconColors"),
    IconButtons: () =>
      import("@/components/vuetifyComponents/icons/IconButtons"),
    IconClickable: () =>
      import("@/components/vuetifyComponents/icons/IconClickable"),
    IconMdiSvg: () => import("@/components/vuetifyComponents/icons/IconMdiSvg")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Icons - Material Design">
          <IconsMaterial></IconsMaterial>
        </BaseCard>

        <BaseCard heading="Icons - Font Awesome">
          <IconFontawesome></IconFontawesome>
        </BaseCard>

        <BaseCard heading="Icons - Color">
          <IconColors></IconColors>
        </BaseCard>

        <BaseCard heading="Icons - Buttons">
          <IconButtons></IconButtons>
        </BaseCard>

        <BaseCard heading="Icons - Clickable">
          <IconClickable></IconClickable>
        </BaseCard>

        <BaseCard heading="Icons - MDI SVG">
          <IconMdiSvg></IconMdiSvg>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Icons",

  data: () => ({
    page: {
      title: "Icons"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Icons",
        disabled: true
      }
    ]
  }),
  components: {
    IconsMaterial: () =>
      import("@/components/vuetifyComponents/icons/IconsMaterial"),
    IconFontawesome: () =>
      import("@/components/vuetifyComponents/icons/IconFontawesome"),
    IconColors: () => import("@/components/vuetifyComponents/icons/IconColors"),
    IconButtons: () =>
      import("@/components/vuetifyComponents/icons/IconButtons"),
    IconClickable: () =>
      import("@/components/vuetifyComponents/icons/IconClickable"),
    IconMdiSvg: () => import("@/components/vuetifyComponents/icons/IconMdiSvg")
  }
};
</script>
>>>>>>> sjad
