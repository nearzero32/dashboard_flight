<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- GrpSlideCustomIcons -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           You can add your custom pagination icons instead of arrows
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-sheet
                class="mx-auto"
                elevation="8"
                max-width="800"
            >
                <v-slide-group
                v-model="model"
                class="pa-4"
                prev-icon="mdi-minus"
                next-icon="mdi-plus"
                show-arrows
                >
                <v-slide-item
                    v-for="n in 15"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                >
                    <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    class="ma-4"
                    height="200"
                    width="100"
                    @click="toggle"
                    >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-scale-transition>
                        <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                        </v-scale-transition>
                    </v-row>
                    </v-card>
                </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>
</template>

<script>
export default {
  name: "GrpSlideCustomIcons",

  data: () => ({
      model: null,
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- GrpSlideCustomIcons -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           You can add your custom pagination icons instead of arrows
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-sheet
                class="mx-auto"
                elevation="8"
                max-width="800"
            >
                <v-slide-group
                v-model="model"
                class="pa-4"
                prev-icon="mdi-minus"
                next-icon="mdi-plus"
                show-arrows
                >
                <v-slide-item
                    v-for="n in 15"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                >
                    <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    class="ma-4"
                    height="200"
                    width="100"
                    @click="toggle"
                    >
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-scale-transition>
                        <v-icon
                            v-if="active"
                            color="white"
                            size="48"
                            v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                        </v-scale-transition>
                    </v-row>
                    </v-card>
                </v-slide-item>
                </v-slide-group>
            </v-sheet>
        </div>
    </div>
</template>

<script>
export default {
  name: "GrpSlideCustomIcons",

  data: () => ({
      model: null,
  })
};
>>>>>>> sjad
</script>