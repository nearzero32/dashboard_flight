<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Item Groups - Multiple">
          <GrpItemMultiple></GrpItemMultiple>
        </BaseCard>

        <BaseCard heading="Item Groups - Mandatory">
          <GrpItemMandatory></GrpItemMandatory>
        </BaseCard>

        <BaseCard heading="Item Groups - With active class">
          <GrpItemActiveClass></GrpItemActiveClass>
        </BaseCard>

        <BaseCard heading="Item Groups - Custom groups">
          <GrpItemCustomGroups></GrpItemCustomGroups>
        </BaseCard>

        <BaseCard heading="Item Groups - Chips">
          <GrpItemChips></GrpItemChips>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ItemGroups",

  data: () => ({
    page: {
      title: "Item Groups"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Item Groups",
        disabled: true
      }
    ]
  }),
  components: {
    GrpItemMultiple: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemMultiple"),
    GrpItemMandatory: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemMandatory"),
    GrpItemActiveClass: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemActiveClass"),
    GrpItemCustomGroups: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemCustomGroups"),
    GrpItemChips: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemChips")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Item Groups - Multiple">
          <GrpItemMultiple></GrpItemMultiple>
        </BaseCard>

        <BaseCard heading="Item Groups - Mandatory">
          <GrpItemMandatory></GrpItemMandatory>
        </BaseCard>

        <BaseCard heading="Item Groups - With active class">
          <GrpItemActiveClass></GrpItemActiveClass>
        </BaseCard>

        <BaseCard heading="Item Groups - Custom groups">
          <GrpItemCustomGroups></GrpItemCustomGroups>
        </BaseCard>

        <BaseCard heading="Item Groups - Chips">
          <GrpItemChips></GrpItemChips>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ItemGroups",

  data: () => ({
    page: {
      title: "Item Groups"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Item Groups",
        disabled: true
      }
    ]
  }),
  components: {
    GrpItemMultiple: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemMultiple"),
    GrpItemMandatory: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemMandatory"),
    GrpItemActiveClass: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemActiveClass"),
    GrpItemCustomGroups: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemCustomGroups"),
    GrpItemChips: () =>
      import("@/components/vuetifyComponents/item-group/GrpItemChips")
  }
};
</script>
>>>>>>> sjad
