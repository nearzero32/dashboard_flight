<<<<<<< HEAD
<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Other Sample Form</h3>
      <h6 class="subtitle-2 font-weight-light">All with vuetify element attributes</h6>
    </v-card-text>
    <v-card-text class="pb-0">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Personal Info</h3>
      <v-row>
        <v-col cols="12" lg="6">
          <v-text-field
            label="First Name"
            filled
            background-color="transparent"
            placeholder="John Smith"
            hint="This is inline help"
            persistent-hint
          ></v-text-field>
          <v-select
            :items="items"
            filled
            background-color="transparent"
            label="Gender"
            class="mt-3"
          ></v-select>
          <v-select
            :items="items2"
            filled
            background-color="transparent"
            label="Category"
            class="mt-3"
          ></v-select>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            label="Last Name"
            filled
            background-color="transparent"
            placeholder="12n"
            hint="This field has error."
            persistent-hint
          ></v-text-field>
          <v-text-field
            label="Date of Birth"
            class="mt-3"
            filled
            background-color="transparent"
            type="date"
          ></v-text-field>
          <label>Membership</label>
          <v-radio-group row class="mb-0 mt-2">
            <v-radio label="Free" color="info" value="free"></v-radio>
            <v-radio label="Paid" color="info" value="pro"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="border-bottom px-5 pb-5">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Address</h3>
    </div>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="street"
            label="Street"
            filled
            background-color="transparent"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" class="py-0">
          <v-text-field
            v-model="city"
            label="City"
            filled
            background-color="transparent"
            hide-details
            class="mt-5"
          ></v-text-field>
          <v-text-field
            v-model="pcode"
            label="Post Code"
            class="mt-8"
            filled
            background-color="transparent"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" class="py-0">
          <v-text-field
            v-model="state"
            label="State"
            filled
            background-color="transparent"
            hide-details
            class="mt-5"
          ></v-text-field>
          <v-select
            :items="items3"
            filled
            background-color="transparent"
            label="Country"
            class="mt-8"
          ></v-select>
        </v-col>
      </v-row>
      <v-btn color="success" class="text-capitalize mr-2">Save</v-btn>
      <v-btn color="black" class="text-capitalize" dark>Cancel</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardSampleForm",
  data: () => ({
    items: ["Female", "Male"],
    items2: ["Category 1", "Category 2"],
    street: "",
    city: "",
    state: "",
    pcode: "",
    items3: ["India", "Canada", "United Kingdom"]
  })
};
=======
<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Other Sample Form</h3>
      <h6 class="subtitle-2 font-weight-light">All with vuetify element attributes</h6>
    </v-card-text>
    <v-card-text class="pb-0">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Personal Info</h3>
      <v-row>
        <v-col cols="12" lg="6">
          <v-text-field
            label="First Name"
            filled
            background-color="transparent"
            placeholder="John Smith"
            hint="This is inline help"
            persistent-hint
          ></v-text-field>
          <v-select
            :items="items"
            filled
            background-color="transparent"
            label="Gender"
            class="mt-3"
          ></v-select>
          <v-select
            :items="items2"
            filled
            background-color="transparent"
            label="Category"
            class="mt-3"
          ></v-select>
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            label="Last Name"
            filled
            background-color="transparent"
            placeholder="12n"
            hint="This field has error."
            persistent-hint
          ></v-text-field>
          <v-text-field
            label="Date of Birth"
            class="mt-3"
            filled
            background-color="transparent"
            type="date"
          ></v-text-field>
          <label>Membership</label>
          <v-radio-group row class="mb-0 mt-2">
            <v-radio label="Free" color="info" value="free"></v-radio>
            <v-radio label="Paid" color="info" value="pro"></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="border-bottom px-5 pb-5">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Address</h3>
    </div>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="street"
            label="Street"
            filled
            background-color="transparent"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" class="py-0">
          <v-text-field
            v-model="city"
            label="City"
            filled
            background-color="transparent"
            hide-details
            class="mt-5"
          ></v-text-field>
          <v-text-field
            v-model="pcode"
            label="Post Code"
            class="mt-8"
            filled
            background-color="transparent"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="6" class="py-0">
          <v-text-field
            v-model="state"
            label="State"
            filled
            background-color="transparent"
            hide-details
            class="mt-5"
          ></v-text-field>
          <v-select
            :items="items3"
            filled
            background-color="transparent"
            label="Country"
            class="mt-8"
          ></v-select>
        </v-col>
      </v-row>
      <v-btn color="success" class="text-capitalize mr-2">Save</v-btn>
      <v-btn color="black" class="text-capitalize" dark>Cancel</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CardSampleForm",
  data: () => ({
    items: ["Female", "Male"],
    items2: ["Category 1", "Category 2"],
    street: "",
    city: "",
    state: "",
    pcode: "",
    items3: ["India", "Canada", "United Kingdom"]
  })
};
>>>>>>> sjad
</script>