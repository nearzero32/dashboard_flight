<<<<<<< HEAD
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Hover - Disabled">
          <HoverDisabled></HoverDisabled>
        </BaseCard>

        <BaseCard heading="Hover - Open/Close Delay">
          <HoverOpenClose></HoverOpenClose>
        </BaseCard>

        <BaseCard heading="Hover - Hover list">
          <HoverList></HoverList>
        </BaseCard>

        <BaseCard heading="Hover - Transitions">
          <HoverTransitions></HoverTransitions>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Hover",

  data: () => ({
    page: {
      title: "Hover"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Hover",
        disabled: true
      }
    ]
  }),
  components: {
    HoverDisabled: () =>
      import("@/components/vuetifyComponents/hover/HoverDisabled"),
    HoverOpenClose: () =>
      import("@/components/vuetifyComponents/hover/HoverOpenClose"),
    HoverList: () => import("@/components/vuetifyComponents/hover/HoverList"),
    HoverTransitions: () =>
      import("@/components/vuetifyComponents/hover/HoverTransitions")
  }
};
</script>
=======
<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb :title="page.title" :icon="page.icon" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="12">
        <BaseCard heading="Hover - Disabled">
          <HoverDisabled></HoverDisabled>
        </BaseCard>

        <BaseCard heading="Hover - Open/Close Delay">
          <HoverOpenClose></HoverOpenClose>
        </BaseCard>

        <BaseCard heading="Hover - Hover list">
          <HoverList></HoverList>
        </BaseCard>

        <BaseCard heading="Hover - Transitions">
          <HoverTransitions></HoverTransitions>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Hover",

  data: () => ({
    page: {
      title: "Hover"
    },
    breadcrumbs: [
      {
        text: "UI Components",
        disabled: false,
        to: "#"
      },
      {
        text: "Hover",
        disabled: true
      }
    ]
  }),
  components: {
    HoverDisabled: () =>
      import("@/components/vuetifyComponents/hover/HoverDisabled"),
    HoverOpenClose: () =>
      import("@/components/vuetifyComponents/hover/HoverOpenClose"),
    HoverList: () => import("@/components/vuetifyComponents/hover/HoverList"),
    HoverTransitions: () =>
      import("@/components/vuetifyComponents/hover/HoverTransitions")
  }
};
</script>
>>>>>>> sjad
