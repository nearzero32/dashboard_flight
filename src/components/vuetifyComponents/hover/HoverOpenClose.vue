<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- HoverOpenClose -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Delay <code>v-hover</code> events by using <code>open-delay</code> and <code>close-delay</code> props in combination or separately.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-hover
                    v-slot:default="{ hover }"
                    open-delay="200"
                >
                    <v-card
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    height="350"
                    max-width="350"
                    >
                    <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                        Open Delay (Mouse enter)
                    </v-card-text>
                    </v-card>
                </v-hover>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="200"
                >
                    <v-card
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    height="350"
                    max-width="350"
                    >
                    <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                        Close Delay (Mouse leave)
                    </v-card-text>
                    </v-card>
                </v-hover>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "HoverOpenClose",

  data: () => ({
  }),
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- HoverOpenClose -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Delay <code>v-hover</code> events by using <code>open-delay</code> and <code>close-delay</code> props in combination or separately.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-hover
                    v-slot:default="{ hover }"
                    open-delay="200"
                >
                    <v-card
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    height="350"
                    max-width="350"
                    >
                    <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                        Open Delay (Mouse enter)
                    </v-card-text>
                    </v-card>
                </v-hover>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                <v-hover
                    v-slot:default="{ hover }"
                    close-delay="200"
                >
                    <v-card
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                    height="350"
                    max-width="350"
                    >
                    <v-card-text class="font-weight-medium mt-12 text-center subtitle-1">
                        Close Delay (Mouse leave)
                    </v-card-text>
                    </v-card>
                </v-hover>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "HoverOpenClose",

  data: () => ({
  }),
};
>>>>>>> sjad
</script>