<<<<<<< HEAD
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Autocompletes Custom Filter -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      The <code>filter</code> prop can be used to filter each individual item
      with custom logic. In this example we filter items by name
    </v-list-item-subtitle>
    <div class="mt-4 border">
      <v-card class="overflow-hidden" color="white" light>
        <v-toolbar flat color="white">
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="font-weight-light"
            >User Profile</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" fab small @click="isEditing = !isEditing">
            <v-icon v-if="isEditing">mdi-close</v-icon>
            <v-icon v-else>mdi-pencil</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            :disabled="!isEditing"
            color="white"
            label="Name"
          ></v-text-field>
          <v-autocomplete
            :disabled="!isEditing"
            :items="states"
            :filter="customFilter"
            color="white"
            item-text="name"
            label="State"
          ></v-autocomplete>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isEditing" color="success" @click="save">
            Save
          </v-btn>
        </v-card-actions>
        <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
          Your profile has been updated
        </v-snackbar>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutocompletesCustomFilter",

  data: () => ({
    hasSaved: false,
    isEditing: null,
    model: null,
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 },
    ],
  }),
  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
=======
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Autocompletes Custom Filter -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      The <code>filter</code> prop can be used to filter each individual item
      with custom logic. In this example we filter items by name
    </v-list-item-subtitle>
    <div class="mt-4 border">
      <v-card class="overflow-hidden" color="white" light>
        <v-toolbar flat color="white">
          <v-icon>mdi-account</v-icon>
          <v-toolbar-title class="font-weight-light"
            >User Profile</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" fab small @click="isEditing = !isEditing">
            <v-icon v-if="isEditing">mdi-close</v-icon>
            <v-icon v-else>mdi-pencil</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            :disabled="!isEditing"
            color="white"
            label="Name"
          ></v-text-field>
          <v-autocomplete
            :disabled="!isEditing"
            :items="states"
            :filter="customFilter"
            color="white"
            item-text="name"
            label="State"
          ></v-autocomplete>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isEditing" color="success" @click="save">
            Save
          </v-btn>
        </v-card-actions>
        <v-snackbar v-model="hasSaved" :timeout="2000" absolute bottom left>
          Your profile has been updated
        </v-snackbar>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutocompletesCustomFilter",

  data: () => ({
    hasSaved: false,
    isEditing: null,
    model: null,
    states: [
      { name: "Florida", abbr: "FL", id: 1 },
      { name: "Georgia", abbr: "GA", id: 2 },
      { name: "Nebraska", abbr: "NE", id: 3 },
      { name: "California", abbr: "CA", id: 4 },
      { name: "New York", abbr: "NY", id: 5 },
    ],
  }),
  methods: {
    customFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    save() {
      this.isEditing = !this.isEditing;
      this.hasSaved = true;
    },
  },
};
>>>>>>> sjad
</script>