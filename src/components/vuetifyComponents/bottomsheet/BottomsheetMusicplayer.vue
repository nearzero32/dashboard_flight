<<<<<<< HEAD
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Music player -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Using a inset bottom sheet, you can make practical components such as this
      simple music player.
    </v-list-item-subtitle>
    <div class="mt-4 text-center">
      <v-bottom-sheet inset>
        <template v-slot:activator="{ on }">
          <v-btn color="info" dark v-on="on"> Open Player </v-btn>
        </template>
        <v-card tile>
          <v-progress-linear
            :value="50"
            class="my-0"
            height="3"
          ></v-progress-linear>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Walker</v-list-item-title>
                <v-list-item-subtitle
                  >Fitz & The Trantrums</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomsheetMusicplayer",

  data: () => ({}),
};
=======
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Music player -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      Using a inset bottom sheet, you can make practical components such as this
      simple music player.
    </v-list-item-subtitle>
    <div class="mt-4 text-center">
      <v-bottom-sheet inset>
        <template v-slot:activator="{ on }">
          <v-btn color="info" dark v-on="on"> Open Player </v-btn>
        </template>
        <v-card tile>
          <v-progress-linear
            :value="50"
            class="my-0"
            height="3"
          ></v-progress-linear>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Walker</v-list-item-title>
                <v-list-item-subtitle
                  >Fitz & The Trantrums</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomsheetMusicplayer",

  data: () => ({}),
};
>>>>>>> sjad
</script>