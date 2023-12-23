<template>
  <v-card class="mb-7 overflow-hidden">
    <v-card-text class="pa-7">
      <h3 class="title">Products Performance</h3>
      <v-simple-table class="table-md mt-4">
        <template v-slot:default>
          <tbody>
            <tr v-for="item in products" :key="item.name">
              <td>
                <div class="d-flex align-center">
                  <div>
                    <v-img
                      width="90"
                      height="70"
                      class="rounded-lg"
                      :src="require('@/assets/images/products/' + item.avatar)"
                    />
                  </div>
                  <div class="ml-3">
                    <h6 class="font-weight-medium subtitle-1 text-no-wrap">
                      {{ item.name }}
                    </h6>
                    <span class="font-weight-regular body-2 grey--text">
                      {{ item.category }}
                    </span>
                  </div>
                </div>
              </td>
              <td>
                <div v-if="item.percent >= '40'">
                  <h6 class="font-weight-medium body-2 mb-1">Good</h6>
                  <v-progress-linear
                    color="secondary"
                    :value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span class="font-weight-regular body-2 grey--text text-no-wrap">
                    {{ item.percent }}% sold
                  </span>
                </div>
                <div v-else>
                  <h6 class="font-weight-medium body-2 mb-1">Bad</h6>
                  <v-progress-linear
                    color="primary"
                    :value="item.percent"
                    rounded
                    class="mb-1"
                  ></v-progress-linear>
                  <span class="font-weight-regular body-2 grey--text">
                    {{ item.percent }}% sold
                  </span>
                </div>
              </td>
              <td>
                <span class="font-weight-regular body-2 grey--text"
                  >Earnings</span
                >
                <h6 class="font-weight-medium body-1 mb-1">${{ item.earn }}</h6>
              </td>
              <td>
                <v-btn
                  icon
                  color="inherit"
                  @click="deleteProductDialogHandler(item)"
                >
                  <feather type="trash" size="20"></feather>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <!-- ====================================== -->
      <!-- Delete Product confirmbox -->
      <!-- ====================================== -->
      <v-dialog v-model="confirmBox.deleteProduct" max-width="320" elevation="0">
        <v-card class="confirm-box">
          <v-card-title>
            <span>Delete Product ?</span>
          </v-card-title>
          <v-card-text class="py-2 font-weight-regular"
            >Are you sure you want to delete the Product ?</v-card-text
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" text @click.stop="resetDialog">Cancel</v-btn>

            <v-btn color="error" @click.stop="remove">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ProductPerformance",
  data: () => ({
    products: [
      {
        avatar: "1.jpg",
        name: "Is it good butterscotch ice-cream?",
        category: "Ice-Cream, Milk, Powder",
        earn: "546,000",
        percent: 45,
      },
      {
        avatar: "2.jpg",
        name: "Supreme fresh tomato available",
        category: "Market, Mall",
        earn: "780,000",
        percent: 20,
      },
      {
        avatar: "3.jpg",
        name: "Red color candy from Gucci",
        category: "Chocolate, Yummy",
        earn: "457,000",
        percent: 60,
      },
      {
        avatar: "4.jpg",
        name: "Stylish night lamp for night",
        category: "Elecric, Wire, Current",
        earn: "125,000",
        percent: 40,
      },
    ],
    confirmBox: {
      deleteProduct: false,
      item: null,
    },
    href() {
      return undefined;
    },
  }),
  methods: {
    remove() {
      let index = this.products.indexOf(this.confirmBox.item);
      this.products.splice(index, 1);
      this.resetDialog();
    },
    resetDialog() {
      this.confirmBox = {
        deleteProduct: false,
        item: null,
      };
    },
    deleteProductDialogHandler(item) {
      this.confirmBox = {
        deleteProduct: true,
        item,
      };
    },
  },
};
</script>