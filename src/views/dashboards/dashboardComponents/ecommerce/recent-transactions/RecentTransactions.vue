<template>
  <v-card class="mb-7 overflow-hidden w-100">
    <v-card-text class="pa-7">
      <h3 class="title">Recent Transactions</h3>
      <!-- lists -->
      <div class="px-0" v-for="(item, i) in statsData" :key="i" @click="href">
        <div class="d-flex align-center py-3">
          <div class>
            <v-btn :class="'btn-custom-sm rounded-lg mr-3 ' + item.color + '--text' + ' bg-light-'+ item.color" depressed>
              <feather :type="item.icon" size="18"></feather>
            </v-btn>
          </div>
          <div class="ml-2">
            <h4 class="font-weight-medium subtitle-1 title">{{ item.title }}</h4>
            <span
              class="
                grey--text
                subtitle-2
                d-block
                text-truncate
                font-weight-regular mt-n1
              "
              >{{ item.desc }}</span
            >
          </div>
          <div class="ml-auto">
           <span :class="item.status"> {{item.price}}</span>
          </div>
        </div>
      </div>
      <v-divider  class="my-4"></v-divider>
      <div class="d-flex justify-space-between align-center">
        <v-btn depressed color="secondary">Add</v-btn>
        <p class="body-2 ma-0 grey--text">36 Recent Transactions</p>
        </div>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: "RecentTransactions",
  data: () => ({
    statsData: [
      {
        color: "info",
        icon: "dollar-sign",
        title: "PayPal Transfer",
        desc: "Money Added",
        price: "+$350",
        status: "success--text"
      },
      {
        color: "success",
        icon: "shield",
        title: "Wallet",
        desc: "Bill Payment",
        price: "-$560",
        status: "error--text"
      },
      {
        color: "error",
        icon: "credit-card",
        title: "Credit Card",
        desc: "Money reversed",
        price: "+$350",
        status: "success--text"
      },
      {
        color: "warning",
        icon: "check",
        title: "Bank Transfer",
        desc: "Money added",
        price: "+$350",
        status: "success--text"
      },
      {
        color: "info",
        icon: "dollar-sign",
        title: "Refund",
        desc: "Payment Sent",
        price: "-$50",
        status: "error--text"
      }
    ],
    href() {
      return undefined;
    },
  }),
};
</script>