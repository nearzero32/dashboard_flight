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
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة رحلة جديد
            </v-btn>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="table.search"
              @input="getCenter"
              append-icon="mdi-magnify"
              label="بحث"
              single-line
              hide-details
              outlined
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
            <template v-slot:item.logo="{ item }">
              <img v-if="item.logo" :src="table.content_url + item.logo" />
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
          <v-card-title class="text-h5">اٍضافة رحلة جديدة</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid" >
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">رقم الرحلة</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="data.number"
                  :rules="Rules.number"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الرحلة</v-label>
                <v-select
                  v-model="data.airline_id"
                  :rules="Rules.airline_id"
                  :items="CountriesAll"
                  item-text="name"
                  item-value="_id"
                  outlined
                  label="الرحلة"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">مطار المغادرة</v-label>
                <v-select
                  v-model="data.departure_airport"
                  :rules="Rules.departure_airport"
                  :items="AirportsAll"
                  item-text="name"
                  item-value="_id"
                  outlined
                  label="مطار المغادرة"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">مطار الهبوط</v-label>
                <v-select
                  v-model="data.arrival_airport"
                  :rules="Rules.arrival_airport"
                  :items="AirportsAll"
                  item-text="name"
                  outlined
                  item-value="_id"
                  label="مطار الهبوط"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">وقت الأقلاع</v-label>
                <v-datetime-picker
                  label="وقت الأقلاع"
                  :rules="Rules.departure_date"
                  v-model="data.departure_date"
                  outlined
                >
                </v-datetime-picker>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">وقت الهبوط</v-label>
                <v-datetime-picker
                  label="وقت الهبوط"
                  :rules="Rules.arrival_date"
                  v-model="data.arrival_date"
                  outlined
                >
                </v-datetime-picker>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">عدد المقاعد</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.seats"
                  v-model="data.seats"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">سعر الطفل</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.child_price"
                  v-model="data.child_price"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">سعر البالغ</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.adult_price"
                  v-model="data.adult_price"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">سعر الرضيع</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.infant_price"
                  v-model="data.infant_price"
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
                <v-label class="mb-2 font-weight-medium">رقم الرحلة</v-label>
                <v-text-field
                  variant="outlined"
                  v-model="editdItem.number"
                  outlined
                  :rules="Rules.number"
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">الرحلة</v-label>
                <v-select
                  v-model="editdItem.airline_id"
                  :rules="Rules.airline_id"
                  :items="CountriesAll"
                  item-text="name"
                  item-value="_id"
                  label="الرحلة"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">مطار المغادرة</v-label>
                <v-select
                  v-model="editdItem.departure_airport"
                  :rules="Rules.departure_airport"
                  :items="AirportsAll"
                  item-text="name"
                  item-value="_id"
                  label="مطار المغادرة"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">مطار الهبوط</v-label>
                <v-select
                  v-model="editdItem.arrival_airport"
                  :rules="Rules.arrival_airport"
                  :items="AirportsAll"
                  item-text="name"
                  item-value="_id"
                  label="مطار الهبوط"
                  outlined
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">وقت الأقلاع</v-label>
                <v-datetime-picker
                  label="وقت الأقلاع"
                  :rules="Rules.departure_date"
                  v-model="editdItem.departure_date"
                  format="YYYY-MM-DD h:mm A"
                  outlined
                >
                </v-datetime-picker>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">وقت الهبوط</v-label>
                <v-datetime-picker
                  label="وقت الهبوط"
                  :rules="Rules.arrival_date"
                  v-model="editdItem.arrival_date"
                  format="YYYY-MM-DD h:mm A"
                  outlined
                >
                </v-datetime-picker>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">عدد المقاعد</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.seats"
                  v-model="editdItem.seats"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">سعر الطفل</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.child_price"
                  v-model="editdItem.child_price"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">سعر البالغ</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.adult_price"
                  v-model="editdItem.adult_price"
                  color="primary"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">سعر الرضيع</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.infant_price"
                  v-model="editdItem.infant_price"
                  outlined
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-label class="font-weight-medium mb-2">الحالة</v-label>
                <v-select
                  v-model="editdItem.is_active"
                  :items="options"
                  item-text="text"
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
                :disabled="!isFormvalid"
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
import dayjs from 'dayjs';

export default {
  data() {
    return {
      menu: false,
      my: JSON.parse(localStorage.getItem("user")),
      // nav
      page: {
        title: "الرحلات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الرحلات",
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
          { text: "اسم الرحلة", value: "airline.name" },
          { text: "مطار الأقلاع", value: "departure_airport.name" },
          { text: "مطار الهبوط", value: "arrival_airport.name" },
          { text: "وقت الأقلاع", value: "departure_date" },
          { text: "وقت الهبوط", value: "arrival_date" },
          { text: "البالغ", value: "adult_price" },
          { text: "الطفل", value: "child_price" },
          { text: "الرضيع", value: "infant_price" },
          { text: "رقم الرحلة", value: "number" },
          { text: "عدد المقاعد", value: "seats" },
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
        number: "",
        airline_id: null,
        departure_airport: null,
        arrival_airport: null,
        departure_date: null,
        arrival_date: null,
        seats: null,
        child_price: null,
        adult_price: null,
        infant_price: null,
      },
      Rules: {
        number: [(v) => !!v || "يرجى إدخال رقم الرحلة"],
        airline_id: [(v) => !!v || "يرجى أختيار الخط"],
        departure_airport: [(v) => !!v || "يرجى اختيار المطار"],
        arrival_airport: [(v) => !!v || "يرجى اختيار المطار"],
        departure_date: [(v) => !!v || "يرجى أدخال وقت الأقلاع"],
        arrival_date: [(v) => !!v || "يرجى أدخال وقت الهبوط"],
        seats: [(v) => !!v || "يرجى ادخال عدد المقاعد"],
        child_price: [(v) => !!v || "يرجى ادخال سعر الطفل"],
        adult_price: [(v) => !!v || "يرجى ادخال سعر البالغ"],
        infant_price: [(v) => !!v || "يرجى ادخال سعر الرضيع"],
      },
      Suggestions: [],
      CountriesAll: [],
      AirportsAll: [],
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
    this.getAirportsAll();
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

        const response = await API.getFlights({
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
        const response = await API.getAirlinesAll();

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
    async getAirportsAll() {
      try {
        const response = await API.getAirportsAll();

        this.AirportsAll = response.data.results;
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
        const response = await API.addFlights({
          number: this.data.number,
          airline_id: this.data.airline_id,
          departure_airport: this.data.departure_airport,
          arrival_airport: this.data.arrival_airport,
          departure_date: this.data.departure_date,
          arrival_date: this.data.arrival_date,
          seats: this.data.seats,
          child_price: this.data.child_price,
          adult_price: this.data.adult_price,
          infant_price: this.data.infant_price,
        });

        this.addBtnLoading = false;
        this.data.number = null;
        this.data.airline_id = null;
        this.data.departure_airport = null;
        this.data.arrival_airport = null;
        this.data.departure_date = null;
        this.data.arrival_date = null;
        this.data.seats = null;
        this.data.child_price = null;
        this.data.adult_price = null;
        this.data.infant_price = null;
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
        const response = await API.removeFlights(this.deletedItem._id);

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
      this.editdItem.arrival_date = dayjs(item.arrival_date).toDate();
      this.editdItem.departure_date = dayjs(item.departure_date).toDate();
      this.old_logo = item.logo;
    },
    async editItemConfirm() {
      this.editItemLoading = true;
      try {
        const response = await API.editFlights({
          flight_id: this.editdItem._id,
          number: this.editdItem.number,
          airline_id: this.editdItem.airline_id,
          departure_airport: this.editdItem.departure_airport,
          arrival_airport: this.editdItem.arrival_airport,
          departure_date: this.editdItem.departure_date,
          arrival_date: this.editdItem.arrival_date,
          seats: this.editdItem.seats,
          child_price: this.editdItem.child_price,
          adult_price: this.editdItem.adult_price,
          infant_price: this.editdItem.infant_price,
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
