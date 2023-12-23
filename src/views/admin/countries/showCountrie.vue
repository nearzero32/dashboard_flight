<template>
  <v-container fluid class="down-top-padding">
    <BaseBreadcrumb
      :title="page.title"
      :icon="page.icon"
      :breadcrumbs="breadcrumbs"
    ></BaseBreadcrumb>
    <v-card class="mb-7 position-relative overflow-hidden">
      <v-card-text>
        <div class="d-flex justify-space-between">
          <div>
            <h2 class="title grey--text font-weight-regular">
              اسم الدولة : {{ name }}
            </h2>
            <h3 class="text-h5 title font-weight-medium">
              كود الاسم : {{ code }}
            </h3>
            <h3 class="text-h5 title font-weight-medium">
              كود الهاتف : {{ phone_code }}
            </h3>
            <h3
              class="text-h5 title font-weight-medium"
              style="display: flex; flex-direction: row; align-items: center"
            >
              الحالة :
              <div v-if="is_active" style="margin-right: 10px">
                مفعل
                <v-icon color="#02ff00" class="mr-2">mdi-check</v-icon>
              </div>
              <div v-else style="margin-right: 10px">
                غير مفعل
                <v-icon color="rgb(255 0 0)" class="mr-2"
                  >mdi-close-circle</v-icon
                >
              </div>
            </h3>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-card class="mb-7 position-relative overflow-hidden">
      <v-card-title>مدن {{ name }}</v-card-title>
      <v-card-title>
        <v-btn
          color="primary"
          text
          class="ml-auto"
          v-if="my.privileges.actions && my.privileges.actions.includes('add')"
          @click="dialog = true"
        >
          <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة مدينة جديدة
        </v-btn>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="table.search"
          @input="getCenter"
          append-icon="mdi-magnify"
          label="بحث"
          single-line
          outlined
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
        <template v-slot:item.is_active="{ item }">
          <v-icon v-if="item.is_active" color="#02ff00" class="mr-2"
            >mdi-check</v-icon
          >
          <v-icon v-else color="rgb(255 0 0)" class="mr-2"
            >mdi-close-circle</v-icon
          >
        </template>

        <template v-slot:item.actions="{ item }">
          <VTooltip
            bottom
            v-if="
              my.privileges.actions && my.privileges.actions.includes('edit')
            "
          >
            <template #activator="{ attrs }">
              <v-icon
                color="rgb(243 216 1)"
                v-bind="attrs"
                size="20"
                @click="editItem(item)"
              >
                mdi-note-edit
              </v-icon>
            </template>
            <span>تعديل</span>
          </VTooltip>
          <VTooltip
            bottom
            v-if="
              my.privileges.actions && my.privileges.actions.includes('remove')
            "
          >
            <template #activator="{ attrs }">
              <v-icon
                color="#FF5252"
                v-bind="attrs"
                size="20"
                @click="deleteItem(item)"
              >
                mdi-delete-restore
              </v-icon>
            </template>
            <span>حذف</span>
          </VTooltip>
        </template>
      </v-data-table>
    </v-card>
    <v-card class="mb-7 position-relative overflow-hidden">
      <v-card-title>مطارات {{ name }}</v-card-title>
      <v-card-title>
        <v-btn
          color="primary"
          text
          class="ml-auto"
          v-if="my.privileges.actions && my.privileges.actions.includes('add')"
          @click="airport.dialog = true"
        >
          <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة مطار جديد
        </v-btn>
        <v-spacer></v-spacer>
        <v-container>
          <v-row>
            <v-col cols="12" lg="6" md="6">
              <v-text-field
                v-model="airport.table.search"
                @input="getCenterAirport"
                append-icon="mdi-magnify"
                label="بحث"
                single-line
                outlined
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="12" lg="6" md="6">
              <v-select
                clearable
                v-model="Countrie"
                :items="table.centers"
                item-text="name"
                outlined
                item-value="_id"
                label="تصفية"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-title>

      <v-data-table
        :headers="airport.table.headers"
        loading-text="جاري التحميل ... الرجاء الانتظار"
        :items="airport.table.centers"
        :options.sync="airport.tableOptions"
        :server-items-length="airport.table.totalItems"
        :loading="airport.table.loading"
        class="elevation-1"
        no-results-text="لا توجد بيانات !"
        @update:options="getCenterAirport"
      >
        <template v-slot:item.num="{ item }">
          {{ airport.table.centers.indexOf(item) + 1 }}
        </template>
        <template v-slot:item.is_active="{ item }">
          <v-icon v-if="item.is_active" color="#02ff00" class="mr-2"
            >mdi-check</v-icon
          >
          <v-icon v-else color="rgb(255 0 0)" class="mr-2"
            >mdi-close-circle</v-icon
          >
        </template>

        <template v-slot:item.actions="{ item }">
          <VTooltip
            bottom
            v-if="
              my.privileges.actions && my.privileges.actions.includes('edit')
            "
          >
            <template #activator="{ attrs }">
              <v-icon
                color="rgb(243 216 1)"
                v-bind="attrs"
                size="20"
                @click="editItemAirport(item)"
              >
                mdi-note-edit
              </v-icon>
            </template>
            <span>تعديل</span>
          </VTooltip>
          <VTooltip
            bottom
            v-if="
              my.privileges.actions && my.privileges.actions.includes('remove')
            "
          >
            <template #activator="{ attrs }">
              <v-icon
                color="#FF5252"
                v-bind="attrs"
                size="20"
                @click="deleteItemAirport(item)"
              >
                mdi-delete-restore
              </v-icon>
            </template>
            <span>حذف</span>
          </VTooltip>
        </template>
      </v-data-table>
    </v-card>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة مدينة جديدة</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الدولة </v-label>
                <v-text-field
                  :value="name"
                  label="الدولة"
                  solo
                  outlined
                  disabled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="data.name"
                  :rules="Rules.account_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم انكليزي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="data.en_name"
                  :rules="Rules.en_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">كود الأسم</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.codeRules"
                  v-model="data.code"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <!----Personal Info---->
            <v-card-actions>
              <v-btn
                size="large"
                @click="addCenter"
                :loading="addBtnLoading"
                color="primary"
                :disabled="isFormvalid"
                type="submit"
                text
                >اٍضافة</v-btn
              >
              <v-btn
                class="bg-lighterror text-error ml-4"
                @click="dialog = false"
                text
                >أغلاق</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- add -->

    <!-- edit dialog -->
    <v-dialog v-model="dialogEdit" max-width="800px">
      <v-card>
        <v-card elevation="10">
          <v-card-title class="text-h5">تعديل </v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الدولة </v-label>
                <v-text-field
                  :value="name"
                  label="الدولة"
                  solo
                  outlined
                  disabled
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="editdItem.name"
                  :rules="Rules.account_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم انكليزي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="editdItem.en_name"
                  :rules="Rules.en_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">كود الاسم</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.codeRules"
                  v-model="editdItem.code"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الحالة</v-label>
                <v-select
                  v-model="editdItem.is_active"
                  :items="options"
                  item-title="text"
                  item-value="value"
                  outlined
                  label="الحالة"
                />
              </v-col>
            </v-row>
            <br />
            <v-divider></v-divider>
            <!----Personal Info---->
            <v-card-actions>
              <v-btn
                size="large"
                @click="editItemConfirm"
                :loading="editItemLoading"
                color="primary"
                type="submit"
                text
                >تعديل</v-btn
              >
              <v-btn color="primary" text @click="dialogEdit = false">
                الغاء
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- End edit dailog -->

    <!-- - Dailog for show info to user -->
    <v-dialog v-model="dialogData.open" max-width="500px">
      <v-toolbar :color="dialogData.color" dense />
      <v-card>
        <v-card-title class="headline justify-center">
          {{ dialogData.bodyText }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogData.open = false">
            تم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- - Dailog for show info to user -->

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذه المدينة ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="dialogDelete = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="deleteItemLoading"
            @click="deleteItemConfirm"
          >
            حذف
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End delete dailog -->

    <!-- add -->
    <v-dialog v-model="airport.dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة مطار جديد</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">المدينة </v-label>
                <v-select
                  v-model="airport.data.city_id"
                  :rules="airport.Rules.country_idRules"
                  :items="table.centers"
                  item-text="name"
                  item-value="_id"
                  outlined
                  label="المدينة"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="airport.data.name"
                  :rules="airport.Rules.account_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم انكليزي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="airport.data.en_name"
                  :rules="airport.Rules.en_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">كود الأسم</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="airport.Rules.codeRules"
                  v-model="airport.data.code"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <!----Personal Info---->
            <v-card-actions>
              <v-btn
                size="large"
                @click="addCenterAirport"
                :loading="airport.addBtnLoading"
                color="primary"
                :disabled="airport.isFormvalid"
                type="submit"
                text
                >اٍضافة</v-btn
              >
              <v-btn
                class="bg-lighterror text-error ml-4"
                @click="airport.dialog = false"
                text
                >أغلاق</v-btn
              >
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- add -->

    <!-- edit dialog -->
    <v-dialog v-model="airport.dialogEdit" max-width="800px">
      <v-card>
        <v-card elevation="10">
          <v-card-title class="text-h5">تعديل </v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">المدينة </v-label>
                <v-select
                  v-model="airport.editdItem.city_id"
                  :rules="airport.Rules.country_idRules"
                  :items="table.centers"
                  outlined
                  item-text="name"
                  item-value="_id"
                  label="المدينة"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="airport.editdItem.name"
                  :rules="airport.Rules.account_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم انكليزي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="airport.editdItem.en_name"
                  :rules="airport.Rules.en_nameRules"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">كود الأسم</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="airport.Rules.codeRules"
                  v-model="airport.editdItem.code"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الحالة</v-label>
                <v-select
                  v-model="airport.editdItem.is_active"
                  :items="airport.options"
                  outlined
                  item-text="text"
                  item-value="value"
                  label="الحالة"
                />
              </v-col>
            </v-row>
            <br />
            <v-divider></v-divider>
            <!----Personal Info---->
            <v-card-actions>
              <v-btn
                size="large"
                @click="editItemConfirmAirport"
                :loading="airport.editItemLoading"
                color="primary"
                type="submit"
                text
                >تعديل</v-btn
              >
              <v-btn color="primary" text @click="airport.dialogEdit = false">
                الغاء
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
    <!-- End edit dailog -->

    <!-- delete dialog -->
    <v-dialog v-model="airport.dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذا الحساب ؟
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text @click="airport.dialogDelete = false">
            الغاء
          </v-btn>
          <v-btn
            color="primary white--text"
            :loading="airport.deleteItemLoading"
            @click="deleteItemConfirmAirport"
          >
            حذف
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- End delete dailog -->
  </v-container>
</template>

<script>
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      id: this.$route.params.id,
      name: this.$route.params.name,
      code: this.$route.params.code,
      is_active: this.$route.params.is_active,
      phone_code: this.$route.params.phone_code,
      my: JSON.parse(localStorage.getItem("user")),
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
          text: "الدول",
          disabled: false,
          to: "/admin-countries",
        },
        {
          text: this.$route.params.name,
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
          { text: "الأسم", value: "name" },
          { text: "الأسم انكليزي", value: "en_name" },
          { text: "الدولة", value: "country_name" },
          { text: "الحالة", value: "is_active" },
          { text: "كود الأسم", value: "code" },
          { text: "العمليات", value: "actions" },
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
      // message
      dialogData: {
        open: false,
        color: "primary",
        bodyText: "test",
      },
      // message

      // add
      isFormvalid: false,
      addBtnLoading: false,
      dialog: false,
      options: [
        { text: "مفعل", value: true },
        { text: "غير مفعل", value: false },
      ],
      data: {
        country_id: null,
        name: "",
        en_name: "",
        code: "",
      },
      Rules: {
        account_nameRules: [(v) => !!v || "يرجى إدخال الأسم عربي"],
        account_en_nameRules: [(v) => !!v || "يرجى إدخال الأسم انكليزي"],
        account_codeRules: [(v) => !!v || "يرجى إدخال الكود"],
        account_country_idRules: [(v) => !!v || "يرجى أختيار الدولة"],
      },
      Suggestions: [],
      selectedItem: null,
      // add
      // edit
      editItemLoading: false,
      dialogEdit: false,
      editdItem: {},
      // edit
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete

      airport: {
        // table
        table: {
          search: "",
          itemsPerPage: 5,
          headers: [
            {
              text: "#",
              value: "num",
            },
            { text: "الأسم", value: "name" },
            { text: "الأسم انكليزي", value: "en_name" },
            { text: "المدينة", value: "city_name" },
            { text: "كود الأسم", value: "code" },
            { text: "الحالة", value: "is_active" },
            { text: "العمليات", value: "actions" },
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
        // message
        dialogData: {
          open: false,
          color: "primary",
          bodyText: "test",
        },
        // message
        // add
        isFormvalid: false,
        addBtnLoading: false,
        dialog: false,
        options: [
          { text: "مفعل", value: true },
          { text: "غير مفعل", value: false },
        ],
        data: {
          city_id: null,
          name: "",
          en_name: "",
          code: "",
        },
        Rules: {
          account_nameRules: [(v) => !!v || "يرجى إدخال الأسم عربي"],
          account_en_nameRules: [(v) => !!v || "يرجى إدخال الأسم انكليزي"],
          account_codeRules: [(v) => !!v || "يرجى إدخال الكود"],
          account_country_idRules: [(v) => !!v || "يرجى أختيار المدينة"],
        },
        Suggestions: [],
        CountriesAll: [],
        selectedItem: null,
        // add
        // edit
        editItemLoading: false,
        dialogEdit: false,
        editdItem: {},
        // edit
        // delete
        deleteItemLoading: false,
        dialogDelete: false,
        deletedItem: {},
        // delete
      },
      Countrie: null,

    };
  },
  watch: {
    Countrie(newCountrie) {
      if (!newCountrie) {
        this.Countrie = null;
        this.getCenterAirport();
      } else {
        this.getCenterAirport();
      }
    },
  },
  created() {
    this.getCenter();
    this.getCenterAirport();
  },
  methods: {
    async getCenter() {
      try {
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

        const response = await API.getCities({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          country_id: this.id,
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
    async addCenter() {
      this.addBtnLoading = true;

      try {
        const response = await API.addCities({
          name: this.data.name,
          en_name: this.data.en_name,
          code: this.data.code,
          country_id: this.id,
        });

        this.addBtnLoading = false;
        this.data.name = "";
        this.data.en_name = "";
        this.data.code = "";
        await this.getCenter();
        this.dialog = false;
        this.showDialogfunction(response.data.message, "primary");
        this.selectedItem = null;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      }
    },
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.deletedItem.country_id = this.id;
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeCities(this.deletedItem._id);

        this.deleteItemLoading = false;
        this.dialogDelete = false;
        this.getCenter();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.deleteItemLoading = false;
          if (error.response.data && error.response.data.results) {
            this.showDialogfunction(error.response.data.results, "#FF5252");
          } else {
            console.error(
              "Error: Response data or results property is undefined or null."
            );
          }
        } else {
          console.error("Unexpected error:", error);
        }
      }
    },
    editItem(item) {
      this.editdItem = { ...item };
      this.dialogEdit = true;
    },
    async editItemConfirm() {
      this.editItemLoading = true;
      try {
        const response = await API.editCities({
          city_id: this.editdItem._id,
          country_id: this.editdItem.country_id,
          name: this.editdItem.name,
          en_name: this.editdItem.en_name,
          code: this.editdItem.code,
          is_active: this.editdItem.is_active,
        });
        this.editItemLoading = false;
        this.editdItem = {};
        await this.getCenter();
        this.dialogEdit = false;
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      }
    },

    async getCenterAirport() {
      try {
        this.airport.table.loading = true;
        const key =
          this.airport.tableOptions.sortBy.length > 0
            ? this.airport.tableOptions.sortBy[0]
            : "createdAt";
        const order =
          this.airport.tableOptions.sortDesc.length > 0
            ? this.airport.tableOptions.sortDesc[0]
              ? "desc"
              : "asc"
            : "desc";

        const sortByJSON = JSON.stringify({ key, order });

        const { page, itemsPerPage } = this.airport.tableOptions;

        const response = await API.getAirportsCountries({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.airport.table.search,
          country_id: this.id,
          city_id: this.Countrie,
        });

        this.airport.table.centers = response.data.results.data;

        this.airport.table.totalItems = response.data.results.count;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      } finally {
        this.airport.table.loading = false;
      }
    },
    async addCenterAirport() {
      this.airport.addBtnLoading = true;

      try {
        const response = await API.addAirports({
          name: this.airport.data.name,
          en_name: this.airport.data.en_name,
          code: this.airport.data.code,
          city_id: this.airport.data.city_id,
        });

        this.airport.addBtnLoading = false;
        this.airport.data.name = "";
        this.airport.data.en_name = "";
        this.airport.data.code = "";
        this.airport.data.city_id = null;
        await this.getCenterAirport();
        this.airport.dialog = false;
        this.showDialogfunction(response.data.message, "primary");
        this.airport.selectedItem = null;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      }
    },
    deleteItemAirport(item) {
      this.airport.deletedItem = { ...item };
      this.airport.dialogDelete = true;
    },
    async deleteItemConfirmAirport() {
      this.airport.deleteItemLoading = true;

      try {
        const response = await API.removeAirports(this.airport.deletedItem._id);

        this.airport.deleteItemLoading = false;
        this.airport.dialogDelete = false;
        this.getCenterAirport();
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response && error.response.status === 500) {
          this.deleteItemLoading = false;
          if (error.response.data && error.response.data.results) {
            this.showDialogfunction(error.response.data.results, "#FF5252");
          } else {
            console.error(
              "Error: Response data or results property is undefined or null."
            );
          }
        } else {
          console.error("Unexpected error:", error);
        }
      }
    },
    editItemAirport(item) {
      this.airport.editdItem = { ...item };
      this.airport.dialogEdit = true;
    },
    async editItemConfirmAirport() {
      this.airport.editItemLoading = true;
      try {
        const response = await API.editAirports({
          airport_id: this.airport.editdItem._id,
          city_id: this.airport.editdItem.city_id,
          name: this.airport.editdItem.name,
          en_name: this.airport.editdItem.en_name,
          code: this.airport.editdItem.code,
          is_active: this.airport.editdItem.is_active,
        });
        this.airport.editItemLoading = false;
        this.airport.editdItem = {};
        await this.getCenterAirport();
        this.airport.dialogEdit = false;
        this.showDialogfunction(response.data.message, "primary");
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      }
    },
  },
};
</script>

<style>
</style>