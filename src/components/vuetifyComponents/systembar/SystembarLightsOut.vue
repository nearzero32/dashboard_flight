<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Lights out -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can reduce <code>v-system-bar</code>'s opacity using <code>lights-out</code> property.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-subheader>Lights out (light)</v-subheader>
            <v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg" height="200px">
            <v-system-bar color="primary" lights-out>
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
            </v-system-bar>
            </v-card>
            <v-subheader>Lights out (dark)</v-subheader>
            <v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg" height="200px">
            <v-system-bar color="primary" lights-out dark>
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
            </v-system-bar>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "SystembarLightsOut",

  data: () => ({
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Lights out -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can reduce <code>v-system-bar</code>'s opacity using <code>lights-out</code> property.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-subheader>Lights out (light)</v-subheader>
            <v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg" height="200px">
            <v-system-bar color="primary" lights-out>
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
            </v-system-bar>
            </v-card>
            <v-subheader>Lights out (dark)</v-subheader>
            <v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg" height="200px">
            <v-system-bar color="primary" lights-out dark>
                <v-spacer></v-spacer>
                <v-icon>mdi-wifi-strength-4</v-icon>
                <v-icon>mdi-signal-cellular-outline</v-icon>
                <v-icon>mdi-battery</v-icon>
                <span>12:30</span>
            </v-system-bar>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "SystembarLightsOut",

  data: () => ({
  })
};
>>>>>>> sjad
</script>