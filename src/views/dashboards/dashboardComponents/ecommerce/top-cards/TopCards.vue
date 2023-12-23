
<template>
  <v-card class="mb-7 overflow-hidden">
    <v-row>
      <v-col lg="3" class="pa-0" v-for="(item, i) in topcardsData" :key="i">
        <div class="pa-7 border-right">
          <div class="mt-3">
            <v-btn
              :class="
                'btn-custom-sm mr-3 ' +
                item.color +
                '--text' +
                ' bg-light-' +
                item.color
              "
              depressed
              fab
              small
            >
              <feather :type="item.icon" size="20"></feather>
            </v-btn>
          </div>
          <div>
            <h4 class="font-weight-medium title text-h5 d-flex align-center mt-4 mb-2">
              {{ item.title }}
              <span :class="item.status + ' body-2 ml-1'"> {{ item.price }}</span>
            </h4>
            <span
              class="
                grey--text
                subtitle-2
                d-block
                text-truncate
                font-weight-regular
                mt-n1
              "
              >{{ item.desc }}</span
            >
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "TopCards",
  data: () => ({
    topcardsData: [
      {
        color: "info",
        icon: "users",
        title: "39,354",
        desc: "Customers",
        price: "-$9",
        status: "error--text",
      },
      {
        color: "warning",
        icon: "box",
        title: "4,396",
        desc: "Products",
        price: "+$23",
        status: "success--text",
      },
      {
        color: "error",
        icon: "bar-chart",
        title: "423,39",
        desc: "Sales",
        price: "+$38",
        status: "error--text",
      },
      {
        color: "success",
        icon: "refresh-cw",
        title: "835 ",
        desc: "Refunds",
        price: "-$12",
        status: "error--text",
      },
    ],
  }),
};
</script>