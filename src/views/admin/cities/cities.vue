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
            <v-btn
              color="primary"
              text
              class="ml-auto"
              v-if="
                my.privileges.actions && my.privileges.actions.includes('add')
              "
              @click="dialog = true"
            >
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة مدينة جديدة
            </v-btn>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-container>
            <v-row>
              <v-col cols="12" lg="6" md="6">
                <v-text-field
                  v-model="table.search"
                  @input="getCenter"
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
                  :items="CountriesAll"
                  item-text="name"
                  item-value="_id"
                  label="تصفية"
                  outlined
                />
              </v-col>
            </v-row>
          </v-container>

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
                  my.privileges.actions &&
                  my.privileges.actions.includes('edit')
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
                  my.privileges.actions &&
                  my.privileges.actions.includes('remove')
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
      </div>
    </div>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة مدينة جديدة</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid" >
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الدولة </v-label>
                <v-select
                  v-model="data.country_id"
                  :rules="Rules.country_idRules"
                  :items="CountriesAll"
                  item-text="name"
                  item-value="_id"
                  outlined
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="data.name"
                  :rules="Rules.nameRules"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم انكليزي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="data.en_name"
                  :rules="Rules.en_nameRules"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">كود الأسم</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.codeRules"
                  v-model="data.code"
                  color="primary"
                  outlined
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
                :disabled="!isFormvalid"
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
            </v-form>
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
            <v-form v-model="isFormvalid" >
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الدولة </v-label>
                <v-select
                  v-model="editdItem.country_id"
                  :rules="Rules.country_idRules"
                  :items="CountriesAll"
                  item-text="name"
                  item-value="_id"
                  label="الدولة"
                  outlined
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="editdItem.name"
                  :rules="Rules.nameRules"
                  color="primary"
                  outlined
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
                :disabled="!isFormvalid"
                color="primary"
                type="submit"
                text
                >تعديل</v-btn
              >
              <v-btn color="primary" text @click="dialogEdit = false">
                الغاء
              </v-btn>
            </v-card-actions>
            </v-form>
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
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      my: JSON.parse(localStorage.getItem("user")),
      // nav
      page: {
        title: "المدن",
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
          text: "المدن",
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
        nameRules: [(v) => !!v || "يرجى إدخال الأسم عربي"],
        en_nameRules: [(v) => !!v || "يرجى إدخال الأسم انكليزي"],
        codeRules: [(v) => !!v || "يرجى إدخال الكود"],
        country_idRules: [(v) => !!v || "يرجى أختيار الدولة"],
      },
      Suggestions: [],
      CountriesAll: [],
      selectedItem: null,
      Countrie: null,
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
    };
  },
  watch: {
  Countrie(newCountrie) {
    if (!newCountrie) {
      this.Countrie = null;
      this.getCenter();
    } else {
      this.getCenter();
    }
  },
},

  created() {
    this.getCenter();
    this.getCountriesAll();
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
          country_id: this.Countrie,
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
    async getCountriesAll() {
      try {
        const response = await API.getCountriesAll();

        this.CountriesAll = response.data.results;
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
        const response = await API.addCities({
          name: this.data.name,
          en_name: this.data.en_name,
          code: this.data.code,
          country_id: this.data.country_id,
        });

        this.addBtnLoading = false;
        this.data.name = "";
        this.data.en_name = "";
        this.data.code = "";
        this.data.country_id = null;
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
            <v-btn
              color="primary"
              text
              class="ml-auto"
              v-if="
                my.privileges.actions && my.privileges.actions.includes('add')
              "
              @click="dialog = true"
            >
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة مدينة جديدة
            </v-btn>
          </v-card-title>
          <v-spacer></v-spacer>
          <v-container>
            <v-row>
              <v-col cols="12" lg="6" md="6">
                <v-text-field
                  v-model="table.search"
                  @input="getCenter"
                  append-icon="mdi-magnify"
                  label="بحث"
                  single-line
                  outlined
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6" md="6">
                <v-autocomplete
                  clearable
                  v-model="Countrie"
                  :items="CountriesAll"
                  item-text="name"
                  item-value="_id"
                  label="تصفية"
                  outlined
                />
              </v-col>
            </v-row>
          </v-container>

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
                  my.privileges.actions &&
                  my.privileges.actions.includes('edit')
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
                  my.privileges.actions &&
                  my.privileges.actions.includes('remove')
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
      </div>
    </div>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة مدينة جديدة</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">الدولة </v-label>
                  <v-autocomplete
                    v-model="data.selectedCountry"
                    :items="CountriesAll"
                    return-object
                    item-text="name"
                    item-value="_id"
                    @change="getAirportsSuggestions()"
                    outlined
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">الأقتراحات </v-label>
                  <v-autocomplete
                    v-model="selectedItem"
                    :items="Suggestions"
                    item-text="name"
                    return-object
                    outlined
                    label="الأقتراحات"
                    single-line
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="data.name"
                    :rules="Rules.nameRules"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >الأسم انكليزي</v-label
                  >
                  <v-text-field
                    variant="outlined"
                    v-model="data.en_name"
                    :rules="Rules.en_nameRules"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">كود الأسم</v-label>
                  <v-text-field
                    variant="outlined"
                    :rules="Rules.codeRules"
                    v-model="data.code"
                    color="primary"
                    outlined
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
                  :disabled="!isFormvalid"
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
            </v-form>
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
            <v-form v-model="isFormvalid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="font-weight-medium mb-2">الدولة </v-label>
                  <v-autocomplete
                    v-model="editdItem.country_id"
                    :rules="Rules.country_idRules"
                    :items="CountriesAll"
                    item-text="name"
                    item-value="_id"
                    label="الدولة"
                    outlined
                  />
                </v-col>

                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">الأسم عربي</v-label>
                  <v-text-field
                    variant="outlined"
                    v-model="editdItem.name"
                    :rules="Rules.nameRules"
                    color="primary"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium"
                    >الأسم انكليزي</v-label
                  >
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
                  <v-autocomplete
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
                  :disabled="!isFormvalid"
                  color="primary"
                  type="submit"
                  text
                  >تعديل</v-btn
                >
                <v-btn color="primary" text @click="dialogEdit = false">
                  الغاء
                </v-btn>
              </v-card-actions>
            </v-form>
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
import API from "@/api/adminAPI";

export default {
  data() {
    return {
      my: JSON.parse(localStorage.getItem("user")),
      // nav
      page: {
        title: "المدن",
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
          text: "المدن",
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
        selectedCountry: null,
      },
      Rules: {
        nameRules: [(v) => !!v || "يرجى إدخال الأسم عربي"],
        en_nameRules: [(v) => !!v || "يرجى إدخال الأسم انكليزي"],
        codeRules: [(v) => !!v || "يرجى إدخال الكود"],
        country_idRules: [(v) => !!v || "يرجى أختيار الدولة"],
      },
      Suggestions: [],
      CountriesAll: [],
      selectedItem: null,
      Countrie: null,
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
    };
  },

  created() {
    this.getCenter();
    this.getCountriesAll();
    this.getAirportsSuggestions(); // قم بإضافة استدعاء هنا
  },

  watch: {
    Countrie(newCountrie) {
      if (!newCountrie) {
        this.Countrie = null;
        this.getCenter();
      } else {
        this.getCenter();
      }
    },
    selectedItem: {
      handler(newVal) {
        if (newVal !== null && typeof newVal === "object") {
          this.data.name = newVal.name;
          this.data.en_name = newVal.en_name;
          this.data.code = newVal.code;
        } else {
          console.error("selectedItem is null or not an object");
        }
      },
      deep: true,
    },
  },

  methods: {
    async getAirportsSuggestions() {
      try {
        var search;
        if (this.data.selectedCountry !== null) {
          search = this.data.selectedCountry.name;
        } else {
          search = null;
        }
        const response = await API.getCitiesSuggestions(search);

        this.Suggestions = response.data.results;
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

        var { page, itemsPerPage } = this.tableOptions;
        if (itemsPerPage == -1) {
          itemsPerPage = this.table.totalItems;
        }
        const response = await API.getCities({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
          country_id: this.Countrie,
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
    async getCountriesAll() {
      try {
        const response = await API.getCountriesAll();

        this.CountriesAll = response.data.results;
      } catch (error) {
        if (error.response.status === 401) {
          this.$router.push("/login");
        } else if (error.response.status === 500) {
          this.addBtnLoading = false;
          this.showDialogfunction(error.response.data.results, "#FF5252");
        }
      }
    },
    async addCenter(event) {
      event.preventDefault();

      this.addBtnLoading = true;

      try {
        const response = await API.addCities({
          name: this.data.name,
          en_name: this.data.en_name,
          code: this.data.code,
          country_id: this.data.selectedCountry._id,
        });

        this.addBtnLoading = false;
        this.data.name = "";
        this.data.en_name = "";
        this.data.code = "";
        this.data.country_id = null;
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
    async editItemConfirm(event) {
      event.preventDefault();

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
  },
};
</script>
>>>>>>> sjad
