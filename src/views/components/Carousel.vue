<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Carousel - Cycle">
          <CarouselCycle></CarouselCycle>
        </BaseCard>

        <BaseCard heading="Carousel - Custom transition">
          <CarouselCustomTransition></CarouselCustomTransition>
        </BaseCard>

        <BaseCard heading="Carousel - Custom delimiters">
          <CarouselCustomDelimiters></CarouselCustomDelimiters>
        </BaseCard>

        <BaseCard heading="Carousel - Hide controls">
          <CarouselHideControls></CarouselHideControls>
        </BaseCard>

        <BaseCard heading="Carousel - Hide delimiters">
          <CarouselHideDelimiters></CarouselHideDelimiters>
        </BaseCard>

        <BaseCard heading="Carousel - v-model control">
          <CarouselVmodelControl></CarouselVmodelControl>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Carousel",

  data: () => ({
    page: {
      title: "Carousel"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Carousel",
        disabled: true
      }
    ]
  }),
  components: {
    CarouselCycle: () =>
      import("@/components/vuetifyComponents/carousel/CarouselCycle"),
    CarouselCustomTransition: () =>
      import(
        "@/components/vuetifyComponents/carousel/CarouselCustomTransition"
      ),
    CarouselCustomDelimiters: () =>
      import(
        "@/components/vuetifyComponents/carousel/CarouselCustomDelimiters"
      ),
    CarouselHideControls: () =>
      import("@/components/vuetifyComponents/carousel/CarouselHideControls"),
    CarouselHideDelimiters: () =>
      import("@/components/vuetifyComponents/carousel/CarouselHideDelimiters"),
    CarouselVmodelControl: () =>
      import("@/components/vuetifyComponents/carousel/CarouselVmodelControl")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Carousel - Cycle">
          <CarouselCycle></CarouselCycle>
        </BaseCard>

        <BaseCard heading="Carousel - Custom transition">
          <CarouselCustomTransition></CarouselCustomTransition>
        </BaseCard>

        <BaseCard heading="Carousel - Custom delimiters">
          <CarouselCustomDelimiters></CarouselCustomDelimiters>
        </BaseCard>

        <BaseCard heading="Carousel - Hide controls">
          <CarouselHideControls></CarouselHideControls>
        </BaseCard>

        <BaseCard heading="Carousel - Hide delimiters">
          <CarouselHideDelimiters></CarouselHideDelimiters>
        </BaseCard>

        <BaseCard heading="Carousel - v-model control">
          <CarouselVmodelControl></CarouselVmodelControl>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Carousel",

  data: () => ({
    page: {
      title: "Carousel"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Carousel",
        disabled: true
      }
    ]
  }),
  components: {
    CarouselCycle: () =>
      import("@/components/vuetifyComponents/carousel/CarouselCycle"),
    CarouselCustomTransition: () =>
      import(
        "@/components/vuetifyComponents/carousel/CarouselCustomTransition"
      ),
    CarouselCustomDelimiters: () =>
      import(
        "@/components/vuetifyComponents/carousel/CarouselCustomDelimiters"
      ),
    CarouselHideControls: () =>
      import("@/components/vuetifyComponents/carousel/CarouselHideControls"),
    CarouselHideDelimiters: () =>
      import("@/components/vuetifyComponents/carousel/CarouselHideDelimiters"),
    CarouselVmodelControl: () =>
      import("@/components/vuetifyComponents/carousel/CarouselVmodelControl")
  }
};
</script>
>>>>>>> sjad
