<<<<<<< HEAD
<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Project Assigning</h3>
      <v-alert
        icon="mdi-alert-outline"
        outlined
        text
        type="info"
        class="my-4 caption pa-3"
      >Form Action at Left ending of the form.</v-alert>
      <h6
        class="subtitle-2 font-weight-light"
      >To use add form actions on bottom of the form add a div with .action-form class to ending the form.</h6>
    </v-card-text>
    <v-card-text class="pa-5 border-bottom">
      <h3 class="subtitle blue-grey--text text--darken-2 font-weight-regular">Personal Info</h3>
      <form>
        <v-row class="mt-3">
          <v-col cols="12" sm="6" lg="6">
            <v-text-field label="First Name"></v-text-field>
            <v-text-field label="Email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" lg="6">
            <v-text-field label="Last Name"></v-text-field>
            <v-text-field label="Contact"></v-text-field>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
    <v-card-text class="pa-5">
      <h3 class="subtitle blue-grey--text text--darken-2 font-weight-regular">Requirements</h3>
      <v-row class="mt-3">
        <v-col cols="12">
          <v-text-field label="Company"></v-text-field>
        </v-col>
        <v-col class="12" sm="6" lg="6">
          <v-select :items="interest" label="Interested In" class="mt-0 pt-0"></v-select>
        </v-col>
        <v-col class="12" sm="6" lg="6">
          <v-select :items="budget" label="Budget" class="mt-0 pt-0"></v-select>
        </v-col>
        <v-col cols="12">
          <v-textarea counter label="About Project" rows="2" :rules="rules" :value="value"></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="pa-5 border-top">
      <v-btn color="info" class="mr-2 text-capitalize">Save</v-btn>
      <v-btn color="black" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CardProjectAssign",
  data: () => ({
    interest: ["Desiging", "Development", "Marketing"],
    budget: ["Less then $5000", "$5000 - $10000"],
    value: "Message",
    rules: [v => v.length <= 25 || "Max 25 characters"]
  })
};
=======
<template>
  <v-card class="mb-7">
    <v-card-text class="pa-5 border-bottom">
      <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Project Assigning</h3>
      <v-alert
        icon="mdi-alert-outline"
        outlined
        text
        type="info"
        class="my-4 caption pa-3"
      >Form Action at Left ending of the form.</v-alert>
      <h6
        class="subtitle-2 font-weight-light"
      >To use add form actions on bottom of the form add a div with .action-form class to ending the form.</h6>
    </v-card-text>
    <v-card-text class="pa-5 border-bottom">
      <h3 class="subtitle blue-grey--text text--darken-2 font-weight-regular">Personal Info</h3>
      <form>
        <v-row class="mt-3">
          <v-col cols="12" sm="6" lg="6">
            <v-text-field label="First Name"></v-text-field>
            <v-text-field label="Email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" lg="6">
            <v-text-field label="Last Name"></v-text-field>
            <v-text-field label="Contact"></v-text-field>
          </v-col>
        </v-row>
      </form>
    </v-card-text>
    <v-card-text class="pa-5">
      <h3 class="subtitle blue-grey--text text--darken-2 font-weight-regular">Requirements</h3>
      <v-row class="mt-3">
        <v-col cols="12">
          <v-text-field label="Company"></v-text-field>
        </v-col>
        <v-col class="12" sm="6" lg="6">
          <v-select :items="interest" label="Interested In" class="mt-0 pt-0"></v-select>
        </v-col>
        <v-col class="12" sm="6" lg="6">
          <v-select :items="budget" label="Budget" class="mt-0 pt-0"></v-select>
        </v-col>
        <v-col cols="12">
          <v-textarea counter label="About Project" rows="2" :rules="rules" :value="value"></v-textarea>
        </v-col>
      </v-row>
    </v-card-text>
    <div class="pa-5 border-top">
      <v-btn color="info" class="mr-2 text-capitalize">Save</v-btn>
      <v-btn color="black" class="text-capitalize" dark>Cancel</v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "CardProjectAssign",
  data: () => ({
    interest: ["Desiging", "Development", "Marketing"],
    budget: ["Less then $5000", "$5000 - $10000"],
    value: "Message",
    rules: [v => v.length <= 25 || "Max 25 characters"]
  })
};
>>>>>>> sjad
</script>