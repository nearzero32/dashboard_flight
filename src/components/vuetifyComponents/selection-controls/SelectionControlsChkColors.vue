<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SelectionControlsChkColors -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Checkboxes can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="red"
                    color="red"
                    value="red"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="red darken-3"
                    color="red darken-3"
                    value="red darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="indigo"
                    color="indigo"
                    value="indigo"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="indigo darken-3"
                    color="indigo darken-3"
                    value="indigo darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="orange"
                    color="orange"
                    value="orange"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="orange darken-3"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                </v-row>

                <v-row class="mt-12">
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="primary"
                    color="primary"
                    value="primary"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="secondary"
                    color="secondary"
                    value="secondary"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="success"
                    color="success"
                    value="success"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="info"
                    color="info"
                    value="info"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="warning"
                    color="warning"
                    value="warning"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="error"
                    color="error"
                    value="error"
                    hide-details
                    ></v-checkbox>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "SelectionControlsChkColors",

  data: () => ({
      ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SelectionControlsChkColors -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Checkboxes can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="red"
                    color="red"
                    value="red"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="red darken-3"
                    color="red darken-3"
                    value="red darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="indigo"
                    color="indigo"
                    value="indigo"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="indigo darken-3"
                    color="indigo darken-3"
                    value="indigo darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="orange"
                    color="orange"
                    value="orange"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="orange darken-3"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                </v-row>

                <v-row class="mt-12">
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="primary"
                    color="primary"
                    value="primary"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="secondary"
                    color="secondary"
                    value="secondary"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="success"
                    color="success"
                    value="success"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="info"
                    color="info"
                    value="info"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-checkbox
                    v-model="ex4"
                    label="warning"
                    color="warning"
                    value="warning"
                    hide-details
                    ></v-checkbox>
                    <v-checkbox
                    v-model="ex4"
                    label="error"
                    color="error"
                    value="error"
                    hide-details
                    ></v-checkbox>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "SelectionControlsChkColors",

  data: () => ({
      ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
  })
};
>>>>>>> sjad
</script>