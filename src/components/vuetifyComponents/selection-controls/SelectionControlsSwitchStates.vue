<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SelectionControlsSwitchStates -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <div class="mt-4">
            <v-row class="dark--text">
                <v-col cols="6">on</v-col>
                <v-col cols="6">off</v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch value input-value="true"></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch></v-switch>
                </v-col>
                </v-row>
                <v-row class="dark--text">
                <v-col cols="6">on disabled</v-col>
                <v-col cols="6">off disabled</v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch value input-value="true" disabled></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch disabled></v-switch>
                </v-col>
                </v-row>
                <v-row class="dark--text">
                <v-col cols="6">on loading</v-col>
                <v-col cols="6">off loading</v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch loading="warning" value input-value="true"></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch loading="warning"></v-switch>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "SelectionControlsSwitchStates",

  data: () => ({
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SelectionControlsSwitchStates -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <div class="mt-4">
            <v-row class="dark--text">
                <v-col cols="6">on</v-col>
                <v-col cols="6">off</v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch value input-value="true"></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch></v-switch>
                </v-col>
                </v-row>
                <v-row class="dark--text">
                <v-col cols="6">on disabled</v-col>
                <v-col cols="6">off disabled</v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch value input-value="true" disabled></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch disabled></v-switch>
                </v-col>
                </v-row>
                <v-row class="dark--text">
                <v-col cols="6">on loading</v-col>
                <v-col cols="6">off loading</v-col>
                </v-row>
                <v-row>
                <v-col cols="6">
                    <v-switch loading="warning" value input-value="true"></v-switch>
                </v-col>
                <v-col cols="6">
                    <v-switch loading="warning"></v-switch>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "SelectionControlsSwitchStates",

  data: () => ({
  })
};
>>>>>>> sjad
</script>