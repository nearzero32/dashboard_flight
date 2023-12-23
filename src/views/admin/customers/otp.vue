<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <div>
      <div class="mt-4">
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              @input="getCenter"
              append-icon="mdi-magnify"
              label="بحث"
              outlined
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="table.headers"
            loading-text="جاري التحميل ... الرجاء الانتظار"
            :items="table.centers"
            :options.sync="tableOptions"
            :server-items-length="table.totalItems"
            :loading="table.loading"
            class="elevation-1"
            no-results-text="لا توجد بيانات !"
            @update:options="getCenter"
          >
            <template v-slot:item.num="{ item }">
              {{ table.centers.indexOf(item) + 1 }}
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
  </v-container>
</template>
    
<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      // nav
      page: {
        title: this.$route.params.name,
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "العملاء",
          disabled: true,
        },
      ],
      // nav
      // table
      table: {
        search: "",
        itemsPerPage: 5,
        headers: [
          {
            text: "#",
            value: "num",
          },
          { text: "أسم الزبون", value: "info.name" },
          { text: "رقم الهاتف", value: "info.phone" },
          { text: "OTP", value: "otp" },
          { text: "نوع المرسل", value: "sender_type" },
        ],
        centers: [],
        loading: true,
        totalItems: 0,
      },
      tableOptions: {
        page: 1,
        itemsPerPage: 10,
      },

      // table
    };
  },
  created() {
    this.getCenter();
  },
  mounted() {
    // Assuming that your data is fetched or populated here
    this.table.centers = this.table.centers.map((item, index) => {
      return { ...item, num: index + 1 };
    });
  },
  methods: {
    async getCenter() {
      try {
        this.table.index = 0;
        this.table.loading = true;
        const key =
          this.tableOptions.sortBy.length > 0
            ? this.tableOptions.sortBy[0]
            : "createdAt";
        const order =
          this.tableOptions.sortDesc.length > 0
            ? this.tableOptions.sortDesc[0]
              ? "desc"
              : "asc"
            : "desc";

        const sortByJSON = JSON.stringify({ key, order });

        const { page, itemsPerPage } = this.tableOptions;

        const response = await API.getOTP({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
        });

        this.table.centers = response.data.results.data;
        this.table.totalItems = response.data.results.count;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      } finally {
        this.table.loading = false;
      }
    },
  },
};
</script>
