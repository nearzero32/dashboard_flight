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
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة أشعار جديد
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
            <template v-slot:item.actions="{ item }">
              <VTooltip bottom>
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
            <template #item.image="{ item }">
              <img
                v-if="item.image"
                :src="table.content_url + item.image"
                style="width: 60px; border: solid 1px rebeccapurple"
              />
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة أشعار</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid" >
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">عنوان الأشعار</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.title"
                  outlined
                  v-model="data.title"
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-row>
                  <v-col cols="6" md="6">
                    <v-label class="mb-2 font-weight-medium"
                      >صورة ( أختياري )</v-label
                    >
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/bmp"
                      @change="handleFileChange"
                      style="display: none"
                      ref="fileInput"
                    />
                    <v-text-field
                      type="text"
                      prepend-icon="mdi-camera"
                      label="صورة"
                      outlined
                      v-model="selectedFile"
                      @click="$refs.fileInput.click()"
                      variant="outlined"
                      color="primary"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="6"
                    md="6"
                    style="text-align: center"
                    v-if="data.image"
                  >
                    <div style="position: relative; display: inline-block">
                      <img
                        :src="data.image"
                        style="width: 60px; border: solid 1px rebeccapurple"
                      />
                      <v-icon
                        class="mr-2"
                        color="error"
                        style="
                          position: absolute;
                          top: 0;
                          right: 0;
                          cursor: pointer;
                        "
                        @click="removeImage"
                      >
                        mdi-close
                      </v-icon>
                    </div>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="12">
                <v-textarea
                  :rules="Rules.body"
                  v-model="data.body"
                  outlined
                  clearable
                  label="التفاصيل"
                ></v-textarea>
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
          هل انت متأكد من حذف هذا الأشعار ؟
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
      // nav
      page: {
        title: "الأشعارات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الأشعارات",
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
          { text: "العنوان", value: "title" },
          { text: "النوع", value: "type" },
          { text: "المستلمين", value: "receiver_type" },
          { text: "صورة", value: "image" },
          { text: "التفاصيل", value: "body" },
          { text: "تاريخ الأرسال", value: "createdAt" },
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
        title: "",
        body: "",
        image: null,
      },
      selectedFile: null,
      Rules: {
        title: [(v) => !!v || "يرجى إدخال عنوان الأشعار"],
        body: [(v) => !!v || "يرجى أدخال تفاصيل الأشعار"],
      },
      // add
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.image = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImage() {
      this.data.image = null;

      if (this.selectedFile) {
        this.selectedFile = null;
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

        const { page, itemsPerPage } = this.tableOptions;

        const response = await API.getNorifications({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
        });

        this.table.centers = response.data.results.data;
        this.table.content_url = response.data.content_url;
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
      this.editItemLoading = true;
      try {
        const response = await API.addNorifications({
          title: this.data.title,
          image: this.data.image,
          body: this.data.body,
        });
        this.editItemLoading = false;
        this.getCenter();

        this.showDialogfunction(response.data.message, "primary");
        this.data.title = "";
        this.data.body = "";
        this.dialogEdit = false;
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
        const response = await API.removeNorifications(this.deletedItem._id);

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
  },
};
</script>

<style>
@media (min-width: 100px) {
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
  .v-data-table > .v-data-table__wrapper > table > thead > tr > td,
  .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
    height: auto;
  }
}
@media (min-width: 768px) {
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
  .v-data-table > .v-data-table__wrapper > table > thead > tr > td,
  .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
    height: 48px;
  }
}
</style>
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
              <v-icon class="mr-2">mdi-plus</v-icon>اٍضافة أشعار جديد
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
            <template v-slot:item.actions="{ item }">
              <VTooltip bottom>
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
            <template #item.image="{ item }">
              <img
                v-if="item.image"
                :src="table.content_url + item.image"
                style="width: 60px; border: solid 1px rebeccapurple"
              />
            </template>
          </v-data-table>
        </v-card>
      </div>
    </div>

    <!-- add -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card>
          <v-card-title class="text-h5">اٍضافة أشعار</v-card-title>
          <v-divider></v-divider>
          <!----Account Details---->
          <v-card-text class="pb-0">
            <v-form v-model="isFormvalid" >
            <v-row>
              <v-col cols="12" md="6">
                <v-label class="mb-2 font-weight-medium">عنوان الأشعار</v-label>
                <v-text-field
                  variant="outlined"
                  :rules="Rules.title"
                  outlined
                  v-model="data.title"
                  color="primary"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-row>
                  <v-col cols="6" md="6">
                    <v-label class="mb-2 font-weight-medium"
                      >صورة ( أختياري )</v-label
                    >
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/bmp"
                      @change="handleFileChange"
                      style="display: none"
                      ref="fileInput"
                    />
                    <v-text-field
                      type="text"
                      prepend-icon="mdi-camera"
                      label="صورة"
                      outlined
                      v-model="selectedFile"
                      @click="$refs.fileInput.click()"
                      variant="outlined"
                      color="primary"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="6"
                    md="6"
                    style="text-align: center"
                    v-if="data.image"
                  >
                    <div style="position: relative; display: inline-block">
                      <img
                        :src="data.image"
                        style="width: 60px; border: solid 1px rebeccapurple"
                      />
                      <v-icon
                        class="mr-2"
                        color="error"
                        style="
                          position: absolute;
                          top: 0;
                          right: 0;
                          cursor: pointer;
                        "
                        @click="removeImage"
                      >
                        mdi-close
                      </v-icon>
                    </div>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="12">
                <v-textarea
                  :rules="Rules.body"
                  v-model="data.body"
                  outlined
                  clearable
                  label="التفاصيل"
                ></v-textarea>
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
          هل انت متأكد من حذف هذا الأشعار ؟
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
      // nav
      page: {
        title: "الأشعارات",
      },
      breadcrumbs: [
        {
          text: "الصفحة الرئيسية",
          disabled: false,
          to: "/Index",
        },
        {
          text: "الأشعارات",
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
          { text: "العنوان", value: "title" },
          { text: "النوع", value: "type" },
          { text: "المستلمين", value: "receiver_type" },
          { text: "صورة", value: "image" },
          { text: "التفاصيل", value: "body" },
          { text: "تاريخ الأرسال", value: "createdAt" },
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
        title: "",
        body: "",
        image: null,
      },
      selectedFile: null,
      Rules: {
        title: [(v) => !!v || "يرجى إدخال عنوان الأشعار"],
        body: [(v) => !!v || "يرجى أدخال تفاصيل الأشعار"],
      },
      // add
      // delete
      deleteItemLoading: false,
      dialogDelete: false,
      deletedItem: {},
      // delete
    };
  },
  created() {
    this.getCenter();
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = () => {
          this.data.image = reader.result;
        };

        reader.readAsDataURL(file);
      }
    },
    removeImage() {
      this.data.image = null;

      if (this.selectedFile) {
        this.selectedFile = null;
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
        const response = await API.getNorifications({
          page,
          limit: itemsPerPage,
          sortBy: sortByJSON,
          search: this.table.search,
        });

        this.table.centers = response.data.results.data;
        this.table.content_url = response.data.content_url;
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
    async addCenter(event) {
      event.preventDefault();

      this.editItemLoading = true;
      try {
        const response = await API.addNorifications({
          title: this.data.title,
          image: this.data.image,
          body: this.data.body,
        });
        this.editItemLoading = false;
        this.getCenter();

        this.showDialogfunction(response.data.message, "primary");
        this.data.title = "";
        this.data.body = "";
        this.dialogEdit = false;
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
        const response = await API.removeNorifications(this.deletedItem._id);

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
  },
};
</script>

<style>
@media (min-width: 100px) {
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
  .v-data-table > .v-data-table__wrapper > table > thead > tr > td,
  .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
    height: auto;
  }
}
@media (min-width: 768px) {
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
  .v-data-table > .v-data-table__wrapper > table > thead > tr > td,
  .v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
    height: 48px;
  }
}
</style>
>>>>>>> sjad
