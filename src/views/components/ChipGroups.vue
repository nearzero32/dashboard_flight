<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Chip Groups - Column">
          <GrpChipColumn></GrpChipColumn>
        </BaseCard>

        <BaseCard heading="Chip Groups - Mandatory">
          <GrpChipMandatory></GrpChipMandatory>
        </BaseCard>

        <BaseCard heading="Chip Groups - Multiple">
          <GrpChipMultiple></GrpChipMultiple>
        </BaseCard>

        <BaseCard heading="Chip Groups - Toothbrush card">
          <GrpChipToothbrushCard></GrpChipToothbrushCard>
        </BaseCard>

        <BaseCard heading="Chip Groups - Blouse product card">
          <GrpChipBlouseProductCard></GrpChipBlouseProductCard>
        </BaseCard>

        <BaseCard heading="Chip Groups - Filter results">
          <GrpChipFilterResults></GrpChipFilterResults>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChipGroups",

  data: () => ({
    page: {
      title: "Chip Groups"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Chip Groups",
        disabled: true
      }
    ]
  }),
  components: {
    GrpChipColumn: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipColumn"),
    GrpChipMandatory: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipMandatory"),
    GrpChipMultiple: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipMultiple"),
    GrpChipToothbrushCard: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipToothbrushCard"),
    GrpChipBlouseProductCard: () =>
      import(
        "@/components/vuetifyComponents/chip-group/GrpChipBlouseProductCard"
      ),
    GrpChipFilterResults: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipFilterResults")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Chip Groups - Column">
          <GrpChipColumn></GrpChipColumn>
        </BaseCard>

        <BaseCard heading="Chip Groups - Mandatory">
          <GrpChipMandatory></GrpChipMandatory>
        </BaseCard>

        <BaseCard heading="Chip Groups - Multiple">
          <GrpChipMultiple></GrpChipMultiple>
        </BaseCard>

        <BaseCard heading="Chip Groups - Toothbrush card">
          <GrpChipToothbrushCard></GrpChipToothbrushCard>
        </BaseCard>

        <BaseCard heading="Chip Groups - Blouse product card">
          <GrpChipBlouseProductCard></GrpChipBlouseProductCard>
        </BaseCard>

        <BaseCard heading="Chip Groups - Filter results">
          <GrpChipFilterResults></GrpChipFilterResults>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ChipGroups",

  data: () => ({
    page: {
      title: "Chip Groups"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Chip Groups",
        disabled: true
      }
    ]
  }),
  components: {
    GrpChipColumn: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipColumn"),
    GrpChipMandatory: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipMandatory"),
    GrpChipMultiple: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipMultiple"),
    GrpChipToothbrushCard: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipToothbrushCard"),
    GrpChipBlouseProductCard: () =>
      import(
        "@/components/vuetifyComponents/chip-group/GrpChipBlouseProductCard"
      ),
    GrpChipFilterResults: () =>
      import("@/components/vuetifyComponents/chip-group/GrpChipFilterResults")
  }
};
</script>
>>>>>>> sjad
