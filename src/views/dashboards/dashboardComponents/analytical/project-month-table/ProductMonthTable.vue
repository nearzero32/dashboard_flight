<template>
  <v-card flat class="mb-7 w-100">
    <v-card-text class="pa-7">
      <div class="d-md-flex align-start">
        <div>
          <h3 class="title">Projects of the Month</h3>
        </div>
        <v-spacer></v-spacer>
        <div class="ml-auto">
          <div style="width: 150px">
            <v-select
              class="pt-0 mt-0"
              v-model="select"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select"
              dense
              single-line
              outlined
              hide-details
            ></v-select>
          </div>
        </div>
      </div>
      <v-simple-table class="month-table mt-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="font-weight-medium subtitle-2">Assigned</th>
              <th class="font-weight-medium subtitle-2">Name</th>
              <th class="font-weight-medium subtitle-2">Priority</th>
              <th class="font-weight-medium subtitle-2">Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in monthtable"
              :key="item.leadname"
              :class="item.activestate"
              class="month-item"
            >
              <td>
                <div class="d-flex align-center">
                  <img
                    :src="require('@/assets/images/users' + item.img)"
                    alt="user"
                    class="rounded-circle"
                    width="40"
                  />
                  <div class="mx-3">
                    <h4 class="font-weight-bold text-no-wrap">
                      {{ item.leadname }}
                    </h4>
                    <h6 class="text-no-wrap font-weight-regular subtitle-2">
                      {{ item.leademail }}
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <h5 class="font-weight-light text-no-wrap subtitle-2">
                  {{ item.projectname }}
                </h5>
              </td>
              <td>
                <v-chip class="ma-2" :class="item.statuscolor" small label>{{
                  item.statustext
                }}</v-chip>
              </td>
              <td>
                <h5 class="subtitle-1">{{ item.money }}</h5>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ProductMonthTable",
  data: () => ({
    select: { state: "March 2022", abbr: "FL" },
    items: [
      { state: "March 2022", abbr: "FL" },
      { state: "April 2022", abbr: "GA" },
      { state: "May 2022", abbr: "NE" },
      { state: "June 2022", abbr: "CA" },
    ],
    monthtable: [
      {
        img: "/1.jpg",
        activestate: "",
        leadname: "Sunil Joshi",
        leademail: "Web Designer",
        projectname: "Elite Admin",
        statuscolor: "blue lighten-1 white--text",
        statustext: "Low",
        money: "$3.9K",
      },
      {
        img: "/2.jpg",
        activestate: "",
        leadname: "Andrew",
        leademail: "Project Manager",
        projectname: "Real Homes",
        statuscolor: "info",
        statustext: "Medium",
        money: "$23.9K",
      },
      {
        img: "/3.jpg",
        activestate: "",
        leadname: "Bhavesh patel",
        leademail: "Developer",
        projectname: "MedicalPro Theme",
        statuscolor: "warning",
        statustext: "High",
        money: "$12.9K",
      },
      {
        img: "/4.jpg",
        activestate: "",
        leadname: "Nirav Joshi",
        leademail: "Frontend Eng",
        projectname: "Elite Admin",
        statuscolor: "error",
        statustext: "Low",
        money: "$10.9K",
      },
      {
        img: "/5.jpg",
        activestate: "",
        leadname: "Micheal Doe",
        leademail: "Content Writer",
        projectname: "Helping Hands",
        statuscolor: "success",
        statustext: "Low",
        money: "$12.9K",
      },
    ],
  }),
  components: {},
};
</script>