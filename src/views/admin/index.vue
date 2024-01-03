<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-row>
      <v-col cols="12" sm="6" lg="3" style="padding-block: 10px">
        <v-card class="mx-auto">
          <v-card-text
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
            "
          >
            <h4>عدد العملاء</h4>
            <v-avatar color="rgb(251, 151, 120)" size="48">
              <span class="white--text headline">{{
                data.customer_number
              }}</span>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" sm="6" lg="3" style="padding-block: 10px">
        <v-card class="mx-auto">
          <v-card-text
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
            "
          >
            <h4>عدد الدول</h4>
            <v-avatar color="rgb(24, 86, 230)" size="48">
              <span class="white--text headline">{{
                data.countries_number
              }}</span>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" sm="6" lg="3" style="padding-block: 10px">
        <v-card class="mx-auto">
          <v-card-text
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
            "
          >
            <h4>عدد المدن</h4>
            <v-avatar color="rgb(96, 24, 230)" size="48">
              <span class="white--text headline">{{ data.cities_number }}</span>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" sm="6" lg="3" style="padding-block: 10px">
        <v-card class="mx-auto">
          <v-card-text
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
            "
          >
            <h4>عدد المطارات</h4>
            <v-avatar color="rgb(252, 75, 108)" size="48">
              <span class="white--text headline">{{
                data.airports_number
              }}</span>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" sm="6" lg="3" style="padding-block: 10px">
        <v-card class="mx-auto">
          <v-card-text
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
            "
          >
            <h4>عدد الرحلات</h4>
            <v-avatar color="teal" size="48">
              <span class="white--text headline">{{
                data.airlines_number
              }}</span>
            </v-avatar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      // nav
      page: {
        title: "الصفحة الرئيسية",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: true,
        },
      ],
      // nav

      loading: false,
      data: {},
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    async getCenter() {
      try {
        this.loading = true;

        const response = await API.getReports();

        this.loading = false;

        this.data = response.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>