<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SelectionControlsSwitchColors -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Switches can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="red"
                    color="red"
                    value="red"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="red darken-3"
                    color="red darken-3"
                    value="red darken-3"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="indigo"
                    color="indigo"
                    value="indigo"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="indigo darken-3"
                    color="indigo darken-3"
                    value="indigo darken-3"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="orange"
                    color="orange"
                    value="orange"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="orange darken-3"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                    ></v-switch>
                </v-col>
                </v-row>

                <v-row class="mt-12">
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="primary"
                    color="primary"
                    value="primary"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="secondary"
                    color="secondary"
                    value="secondary"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="success"
                    color="success"
                    value="success"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="info"
                    color="info"
                    value="info"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="warning"
                    color="warning"
                    value="warning"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="error"
                    color="error"
                    value="error"
                    hide-details
                    ></v-switch>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "SelectionControlsSwitchColors",

  data: () => ({
      ex11: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SelectionControlsSwitchColors -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Switches can be colored by using any of the builtin colors and contextual names using the <code>color</code> prop.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="red"
                    color="red"
                    value="red"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="red darken-3"
                    color="red darken-3"
                    value="red darken-3"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="indigo"
                    color="indigo"
                    value="indigo"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="indigo darken-3"
                    color="indigo darken-3"
                    value="indigo darken-3"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="orange"
                    color="orange"
                    value="orange"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="orange darken-3"
                    color="orange darken-3"
                    value="orange darken-3"
                    hide-details
                    ></v-switch>
                </v-col>
                </v-row>

                <v-row class="mt-12">
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="primary"
                    color="primary"
                    value="primary"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="secondary"
                    color="secondary"
                    value="secondary"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="success"
                    color="success"
                    value="success"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="info"
                    color="info"
                    value="info"
                    hide-details
                    ></v-switch>
                </v-col>
                <v-col cols="12" sm="4" md="4">
                    <v-switch
                    v-model="ex11"
                    label="warning"
                    color="warning"
                    value="warning"
                    hide-details
                    ></v-switch>
                    <v-switch
                    v-model="ex11"
                    label="error"
                    color="error"
                    value="error"
                    hide-details
                    ></v-switch>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "SelectionControlsSwitchColors",

  data: () => ({
      ex11: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3']
  })
};
>>>>>>> sjad
</script>