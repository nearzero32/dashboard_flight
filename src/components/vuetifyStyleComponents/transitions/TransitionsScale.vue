<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TransitionsScale -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap mt-4">
        Many of Vuetify's components contain a <code>transition</code> prop which allows you to specify your own.
        </v-list-item-subtitle>
        <div class="mt-4 text-center">
            <v-menu transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-btn
                    dark
                    color="primary"
                    v-on="on"
                    >
                    Scale Transition
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click.stop>
                    <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
        </div>
    </div>
</template>

<script>
export default {
  name: "TransitionsScale",

  data: () => ({
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TransitionsScale -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap mt-4">
        Many of Vuetify's components contain a <code>transition</code> prop which allows you to specify your own.
        </v-list-item-subtitle>
        <div class="mt-4 text-center">
            <v-menu transition="scale-transition">
                <template v-slot:activator="{ on }">
                    <v-btn
                    dark
                    color="primary"
                    v-on="on"
                    >
                    Scale Transition
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="n in 5" :key="n" @click.stop>
                    <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
        </div>
    </div>
</template>

<script>
export default {
  name: "TransitionsScale",

  data: () => ({
  })
};
>>>>>>> sjad
</script>