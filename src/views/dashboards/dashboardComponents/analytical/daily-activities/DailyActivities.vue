<template>
  <v-card class="mb-7 w-100">
    <v-card-text class="pa-7">
      <div class="d-flex align-center mb-5">
        <h3 class="title">Daily Activities</h3>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <feather type="more-horizontal" size="20"></feather>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
      <!-- timeline -->
      <v-timeline class="theme-timeline">
        <!-- 1 -->
        <v-timeline-item color="success" fill-dot right small>
          <template v-slot:opposite>
            <span class="title body-2 font-weight-bold">09.50</span>
          </template>
          <v-card-title class="subtitle-2 font-weight-regular"
            >Meeting with John at 3PM
          </v-card-title>
        </v-timeline-item>
        <!-- 2 -->
        <v-timeline-item color="primary" fill-dot right small>
          <template v-slot:opposite>
            <span class="title body-2 font-weight-bold">09.46</span>
          </template>
          <v-card-title class="subtitle-2 font-weight-regular"
            >Payment received from John Doe of $385.90
          </v-card-title>
        </v-timeline-item>
        <!-- 3 -->
        <v-timeline-item color="secondary" fill-dot right small>
          <template v-slot:opposite>
            <span class="title body-2 font-weight-bold">09.46</span>
          </template>
          <v-card-title class="subtitle-2 font-weight-regular"
            >Project Meeting
          </v-card-title>
        </v-timeline-item>
        <!-- 4 -->
        <v-timeline-item color="warning" fill-dot right small>
          <template v-slot:opposite>
            <span class="title body-2 font-weight-bold">09.46</span>
          </template>
          <v-card-title class="subtitle-2 font-weight-regular"
            >New Sale recorded #ML-3467
          </v-card-title>
        </v-timeline-item>
        <!-- 5 -->
        <v-timeline-item color="error" fill-dot right small>
          <template v-slot:opposite>
            <span class="title body-2 font-weight-bold">09.46</span>
          </template>
          <v-card-title class="subtitle-2 font-weight-regular"
            >Payment was made of $64.95 to Michael Anderson
          </v-card-title>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DailyActivities",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>

<style lang="scss">
.v-application--is-ltr {
  .theme-timeline {
    &.v-timeline {
      padding-top: 0;
      .v-timeline-item {
        padding-bottom: 3px;
      }
      &:not(.v-timeline--dense):not(.v-timeline--reverse):before {
        left: calc(30% - 1px)!important;
      }
      .v-card__title {
        padding: 10px;
      }

      .v-timeline-item__divider {
        min-width: 60px;
      }
      .v-timeline-item__dot--small {
        height: 12px;
        left: calc(50% - 12px)!important;
        width: 12px;
        box-shadow: none;
      }
      .v-timeline-item__opposite {
        max-width: calc(30% - 30px) !important;
      }
    }
    &.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
      .v-timeline-item__body,
    &.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
      .v-timeline-item--after
      .v-timeline-item__body {
      max-width: calc(70% - 30px)!important;
    }
  }
}

// rtl
.v-application--is-rtl {
  .theme-timeline {
    &.v-timeline {
      padding-top: 0;
      .v-timeline-item {
        padding-bottom: 3px;
      }
      &:not(.v-timeline--dense):not(.v-timeline--reverse):before {
        right: calc(30% - 1px)!important;
        left: unset;
      }
      .v-card__title {
        padding: 10px;
      }

      .v-timeline-item__divider {
        min-width: 60px;
      }
      .v-timeline-item__dot--small {
        height: 12px;
        width: 12px;
        right: calc(50% - 12px)!important;
        left: unset;
        box-shadow: none;
      }
      .v-timeline-item__opposite {
        max-width: calc(30% - 30px)!important;
      }
    }
    &.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
      .v-timeline-item__body,
    &.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse)
      .v-timeline-item--after
      .v-timeline-item__body {
      max-width: calc(70% - 30px)!important;
    }
  }
}
</style>