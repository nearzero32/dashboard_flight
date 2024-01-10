<<<<<<< HEAD
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
            <v-btn color="primary" text class="ml-auto" @click="dialog = true">
              <vIcon class="mr-2">mdi-plus</vIcon>أضافة أقتراح جديد
            </v-btn>

            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              append-icon="mdi-magnify"
              label="بحث"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="table.headers"
            :items="table.centers"
            :loading="table.loading"
            :search="table.search"
            loading-text="جاري التحميل ... الرجاء الانتظار"
            no-results-text="لا توجد بيانات !"
            class="border"
          >
          <template v-slot:item.num="{ item }">
            {{ table.centers.indexOf(item) + 1 }}
          </template>

            <template v-slot:item.actions="{ item }">
              <vTooltip bottom>
                <template #activator="{ attrs }">
                  <vIcon
                    color="rgb(243 216 1)"
                    v-bind="attrs"
                    size="20"
                    @click="editItem(item)"
                  >
                    mdi-note-edit
                  </vIcon>
                </template>
                <span>تعديل</span>
              </vTooltip>
              <vTooltip bottom>
                <template #activator="{ attrs }">
                  <vIcon
                    color="#FF5252"
                    v-bind="attrs"
                    size="20"
                    @click="deleteItem(item)"
                  >
                    mdi-delete-restore
                  </vIcon>
                </template>
                <span>حذف</span>
              </vTooltip>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <!-- add -->
    <div class="text-center mt-4 mt-sm-0">
      <v-dialog v-model="dialog" activator="parent">
        <v-card>
          <v-card>
            <v-card-title class="text-h5">أضافة دولة جديدة</v-card-title>
            <v-divider></v-divider>
            <!----Account Details---->
            <v-card-text class="pb-0">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">الأسم عربي</v-label>
                  <v-text-field
                    v-model="data.name"
                    :rules="Rules.account_nameRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2"
                    >الأسم انكليزي</v-label
                  >
                  <v-text-field
                    v-model="data.en_name"
                    :rules="Rules.en_nameRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">الكود</v-label>
                  <v-text-field
                    v-model="data.code"
                    :rules="Rules.codeRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">كود الهاتف</v-label>
                  <v-text-field
                    v-model="data.phone_code"
                    :rules="Rules.phone_codeRules"
                    class="mb-8"
                    required
                    hide-details="auto"
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
                  >أضافة</v-btn
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
    </div>
    <!-- add -->

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

    <!-- edit dialog -->
    <v-dialog v-model="dialogEdit" max-width="800px">
      <v-card>
        <v-card elevation="10">
          <v-card-title class="text-h5">تعديل</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الأسم عربي</v-label>
                <v-text-field
                  v-model="editdItem.name"
                  :rules="Rules.account_nameRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الأسم انكليزي</v-label>
                <v-text-field
                  v-model="editdItem.en_name"
                  :rules="Rules.en_nameRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الكود</v-label>
                <v-text-field
                  v-model="editdItem.code"
                  :rules="Rules.codeRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">كود الهاتف</v-label>
                <v-text-field
                  v-model="editdItem.phone_code"
                  :rules="Rules.phone_codeRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <!----Personal Info---->
            <v-card-actions>
              <v-btn
                size="large"
                @click="editItemConfirm"
                :loading="editItemLoading"
                color="primary"
                :disabled="isFormvalid"
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

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذا الحساب ؟
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
  </v-container>
</template>
  
  <script>
import API from "@/api/superAPI";

export default {
  data: () => ({
    // nav
    page: {
      title: "المراكز",
    },
    breadcrumbs: [
      {
        text: "الصفحة الرئيسية",
        disabled: false,
        to: "/SuperAdminHome",
      },
      {
        text: "أقتراحات الدول",
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
          align: "start",
          sortable: false,
          value: "num",
        },
        { text: "الأسم", value: "name" },
        { text: "الأسم انكليزي", value: "en_name" },
        { text: "الكود", value: "code" },
        { text: "كود الهاتف", value: "phone_code" },
        { text: "العمليات", value: "actions" },
      ],
      centers: [],
      loading: true,
      totalItems: 0,
    },
    tableOptions: {
      page: 1,
      itemsPerPage: 10,
      sortBy: "",
      sortDesc: false,
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
    data: {
      name: "",
      en_name: "",
      code: "",
      phone_code: "",
    },
    Rules: {
      account_nameRules: [(v) => !!v || "يرجى إدخال الأسم عربي"],
      account_en_nameRules: [(v) => !!v || "يرجى إدخال الأسم انكليزي"],
      account_codeRules: [(v) => !!v || "يرجى إدخال الكود"],
      account_phone_codeRules: [(v) => !!v || "يرجى إدخال كود الهاتف"],
    },
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
  }),
  created() {
    this.getCenter();
  },

  methods: {
    async getCenter() {
      this.table.loading = true;

      try {
        const { page, itemsPerPage } = this.tableOptions;
        let sortBy =
          this.tableOptions.sortBy.length > 0
            ? this.tableOptions.sortBy[0]
            : { key: "createdAt", order: "asc" };

        const response = await API.getCountries({
          page,
          limit: itemsPerPage,
          sortBy: JSON.stringify(sortBy),
          search: this.table.search,
        });
        this.table.centers = response.data.results.data;
        this.table.content_url = response.data.content_url;
        this.table.totalItems = response.data.results.count;
        this.table.loading = false;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      }
    },
    async addCenter() {
      this.addBtnLoading = true;

      try {
        const response = await API.addCountries({
          name: this.data.name,
          en_name: this.data.en_name,
          code: this.data.code,
          phone_code: this.data.phone_code,
        });

        this.addBtnLoading = false;
        this.data.name = "";
        this.data.en_name = "";
        this.data.code = "";
        this.data.phone_code = "";
        await this.getCenter();
        this.dialog = false;
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
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeCountries(this.deletedItem._id);

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
        const response = await API.editCountries({
          country_id: this.editdItem._id,
          name: this.editdItem.name,
          en_name: this.editdItem.en_name,
          code: this.editdItem.code,
          phone_code: this.editdItem.phone_code,
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
  },
};
</script>
  
=======
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
            <v-btn color="primary" text class="ml-auto" @click="dialog = true">
              <vIcon class="mr-2">mdi-plus</vIcon>أضافة أقتراح جديد
            </v-btn>

            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              @input="getCenter"
              append-icon="mdi-magnify"
              label="بحث"
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

            <template v-slot:item.actions="{ item }">
              <vTooltip bottom>
                <template #activator="{ attrs }">
                  <vIcon
                    color="rgb(243 216 1)"
                    v-bind="attrs"
                    size="20"
                    @click="editItem(item)"
                  >
                    mdi-note-edit
                  </vIcon>
                </template>
                <span>تعديل</span>
              </vTooltip>
              <vTooltip bottom>
                <template #activator="{ attrs }">
                  <vIcon
                    color="#FF5252"
                    v-bind="attrs"
                    size="20"
                    @click="deleteItem(item)"
                  >
                    mdi-delete-restore
                  </vIcon>
                </template>
                <span>حذف</span>
              </vTooltip>
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>
    <!-- add -->
    <div class="text-center mt-4 mt-sm-0">
      <v-dialog v-model="dialog" activator="parent">
        <v-card>
          <v-card>
            <v-card-title class="text-h5">أضافة دولة جديدة</v-card-title>
            <v-divider></v-divider>
            <!----Account Details---->
            <v-card-text class="pb-0">
              <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">الأسم عربي</v-label>
                  <v-text-field
                    v-model="data.name"
                    :rules="Rules.account_nameRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2"
                    >الأسم انكليزي</v-label
                  >
                  <v-text-field
                    v-model="data.en_name"
                    :rules="Rules.en_nameRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">الكود</v-label>
                  <v-text-field
                    v-model="data.code"
                    :rules="Rules.codeRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">كود الهاتف</v-label>
                  <v-text-field
                    v-model="data.phone_code"
                    :rules="Rules.phone_codeRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
              <v-divider></v-divider>
              <!----Personal Info---->
              <v-card-actions>
                <v-btn
                  size="large"
                  @click="addCenter"
                  :loading="addBtnLoading"
                  color="primary"
                  :disabled="!isFormvalid"
                  type="submit"
                  text
                  >أضافة</v-btn
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
    </div>
    <!-- add -->

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

    <!-- edit dialog -->
    <v-dialog v-model="dialogEdit" max-width="800px">
      <v-card>
        <v-card elevation="10">
          <v-card-title class="text-h5">تعديل</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الأسم عربي</v-label>
                <v-text-field
                  v-model="editdItem.name"
                  :rules="Rules.account_nameRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الأسم انكليزي</v-label>
                <v-text-field
                  v-model="editdItem.en_name"
                  :rules="Rules.en_nameRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الكود</v-label>
                <v-text-field
                  v-model="editdItem.code"
                  :rules="Rules.codeRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">كود الهاتف</v-label>
                <v-text-field
                  v-model="editdItem.phone_code"
                  :rules="Rules.phone_codeRules"
                  class="mb-8"
                  required
                  hide-details="auto"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
            <v-divider></v-divider>
            <!----Personal Info---->
            <v-card-actions>
              <v-btn
                size="large"
                @click="editItemConfirm"
                :loading="editItemLoading"
                color="primary"
                :disabled="!isFormvalid"
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

    <!-- delete dialog -->
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline justify-center">
          هل انت متأكد من حذف هذا الحساب ؟
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
  </v-container>
</template>
  
  <script>
import API from "@/api/superAPI";

export default {
  data: () => ({
    // nav
    page: {
      title: "أقتراحات الدول",
    },
    breadcrumbs: [
      {
        text: "الصفحة الرئيسية",
        disabled: false,
        to: "/SuperAdminHome",
      },
      {
        text: "أقتراحات الدول",
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
          align: "start",
          sortable: false,
          value: "num",
        },
        { text: "الأسم", value: "name" },
        { text: "الأسم انكليزي", value: "en_name" },
        { text: "الكود", value: "code" },
        { text: "كود الهاتف", value: "phone_code" },
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
    data: {
      name: "",
      en_name: "",
      code: "",
      phone_code: "",
    },
    Rules: {
      account_nameRules: [(v) => !!v || "يرجى إدخال الأسم عربي"],
      account_en_nameRules: [(v) => !!v || "يرجى إدخال الأسم انكليزي"],
      account_codeRules: [(v) => !!v || "يرجى إدخال الكود"],
      account_phone_codeRules: [(v) => !!v || "يرجى إدخال كود الهاتف"],
    },
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
  }),
  created() {
    this.getCenter();
  },

  methods: {
    async getCenter() {
      this.table.loading = true;

      try {
        var { page, itemsPerPage } = this.tableOptions;
        if (itemsPerPage == -1) {
          itemsPerPage = this.table.totalItems;
        }
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

        const response = await API.getCountries({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
        });
        this.table.centers = response.data.results.data;
        this.table.content_url = response.data.content_url;
        this.table.totalItems = response.data.results.count;
        this.table.loading = false;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      }
    },
    async addCenter() {
      this.addBtnLoading = true;

      try {
        const response = await API.addCountries({
          name: this.data.name,
          en_name: this.data.en_name,
          code: this.data.code,
          phone_code: this.data.phone_code,
        });

        this.addBtnLoading = false;
        this.data.name = "";
        this.data.en_name = "";
        this.data.code = "";
        this.data.phone_code = "";
        await this.getCenter();
        this.dialog = false;
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
    showDialogfunction(bodyText, color) {
      this.dialogData.open = true;
      this.dialogData.bodyText = bodyText;
      this.dialogData.color = color;
    },
    deleteItem(item) {
      this.deletedItem = { ...item };
      this.dialogDelete = true;
    },
    async deleteItemConfirm() {
      this.deleteItemLoading = true;

      try {
        const response = await API.removeCountries(this.deletedItem._id);

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
        const response = await API.editCountries({
          country_id: this.editdItem._id,
          name: this.editdItem.name,
          en_name: this.editdItem.en_name,
          code: this.editdItem.code,
          phone_code: this.editdItem.phone_code,
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
  },
};
</script>
  
>>>>>>> sjad
