<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- RatingCard -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        The rating component pairs well with products allowing you to gather and display customer feedback.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                class="mx-auto elevation-20"
                color="info"
                dark
                style="max-width: 400px;"
            >
                <v-row justify="space-between">
                <v-col cols="8">
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Halycon Days</div>
                        <div>Ellie Goulding</div>
                        <div>(2013)</div>
                    </div>
                    </v-card-title>
                </v-col>
                <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    style="flex-basis: 125px"
                ></v-img>
                </v-row>
                <v-divider dark></v-divider>
                <v-card-actions class="pa-4">
                Rate this album
                <v-spacer></v-spacer>
                <span class="grey--text text--lighten-2 caption mr-2">
                    ({{ rating }})
                </span>
                <v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
                ></v-rating>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "RatingCard",

  data: () => ({
      rating: 4.3,
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- RatingCard -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        The rating component pairs well with products allowing you to gather and display customer feedback.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                class="mx-auto elevation-20"
                color="info"
                dark
                style="max-width: 400px;"
            >
                <v-row justify="space-between">
                <v-col cols="8">
                    <v-card-title primary-title>
                    <div>
                        <div class="headline">Halycon Days</div>
                        <div>Ellie Goulding</div>
                        <div>(2013)</div>
                    </div>
                    </v-card-title>
                </v-col>
                <v-img
                    class="shrink ma-2"
                    contain
                    height="125px"
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    style="flex-basis: 125px"
                ></v-img>
                </v-row>
                <v-divider dark></v-divider>
                <v-card-actions class="pa-4">
                Rate this album
                <v-spacer></v-spacer>
                <span class="grey--text text--lighten-2 caption mr-2">
                    ({{ rating }})
                </span>
                <v-rating
                    v-model="rating"
                    background-color="white"
                    color="yellow accent-4"
                    dense
                    half-increments
                    hover
                    size="18"
                ></v-rating>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "RatingCard",

  data: () => ({
      rating: 4.3,
  })
};
>>>>>>> sjad
</script>