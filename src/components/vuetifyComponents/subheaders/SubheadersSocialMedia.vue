<<<<<<< HEAD
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SubheadersSocialMedia -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Using a subheader with social media interaction.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card flat tile>
        <v-toolbar color="primary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Application</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-container
          v-for="type in types"
          :key="type"
          class="grey lighten-4"
          fluid
        >
          <v-subheader>{{ type }}</v-subheader>

          <v-row>
            <v-spacer></v-spacer>
            <v-col v-for="card in cards" :key="card" cols="12" sm="6" md="4">
              <v-card>
                <v-img
                  :src="`https://picsum.photos/200/300?image=${getImage()}`"
                  height="300px"
                >
                  <span
                    class="headline white--text pl-4 pt-4"
                    v-text="card.title"
                  ></span>
                </v-img>

                <v-card-actions class="white justify-center">
                  <v-btn
                    v-for="(social, i) in socials"
                    :key="i"
                    :color="social.color"
                    class="white--text"
                    fab
                    icon
                    small
                  >
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubheadersSocialMedia",

  data: () => ({
    types: ["Places to Be", "Places to See"],
    cards: ["Good", "Best", "Finest"],
    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
      },
      {
        icon: "mdi-linkedin",
        color: "cyan darken-1",
      },
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
    ],
  }),
  methods: {
    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
=======
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- SubheadersSocialMedia -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Using a subheader with social media interaction.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card flat tile>
        <v-toolbar color="primary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Application</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-container
          v-for="type in types"
          :key="type"
          class="grey lighten-4"
          fluid
        >
          <v-subheader>{{ type }}</v-subheader>

          <v-row>
            <v-spacer></v-spacer>
            <v-col v-for="card in cards" :key="card" cols="12" sm="6" md="4">
              <v-card>
                <v-img
                  :src="`https://picsum.photos/200/300?image=${getImage()}`"
                  height="300px"
                >
                  <span
                    class="headline white--text pl-4 pt-4"
                    v-text="card.title"
                  ></span>
                </v-img>

                <v-card-actions class="white justify-center">
                  <v-btn
                    v-for="(social, i) in socials"
                    :key="i"
                    :color="social.color"
                    class="white--text"
                    fab
                    icon
                    small
                  >
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubheadersSocialMedia",

  data: () => ({
    types: ["Places to Be", "Places to See"],
    cards: ["Good", "Best", "Finest"],
    socials: [
      {
        icon: "mdi-facebook",
        color: "indigo",
      },
      {
        icon: "mdi-linkedin",
        color: "cyan darken-1",
      },
      {
        icon: "mdi-instagram",
        color: "red lighten-3",
      },
    ],
  }),
  methods: {
    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
>>>>>>> sjad
</script>