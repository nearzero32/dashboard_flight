<<<<<<< HEAD
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Prominent w/ scroll shrink and image, fading on scroll -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      The background image of a <code>v-app-bar</code> can fade on scroll. Use
      the <code>fade-img-on-scroll</code> property for this.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card class="overflow-hidden border">
        <v-app-bar
          absolute
          color="white"
          light
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-3"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab>Tab 1</v-tab>
              <v-tab>Tab 2</v-tab>
              <v-tab>Tab 3</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="300"
        >
          <v-container style="height: 1000px"></v-container>
        </v-sheet>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppbarShrinkFadeonScroll",

  data: () => ({}),
};
=======
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Prominent w/ scroll shrink and image, fading on scroll -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      The background image of a <code>v-app-bar</code> can fade on scroll. Use
      the <code>fade-img-on-scroll</code> property for this.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card class="overflow-hidden border">
        <v-app-bar
          absolute
          color="white"
          light
          shrink-on-scroll
          prominent
          src="https://picsum.photos/1920/1080?random"
          fade-img-on-scroll
          scroll-target="#scrolling-techniques-3"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Title</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs align-with-title>
              <v-tab>Tab 1</v-tab>
              <v-tab>Tab 2</v-tab>
              <v-tab>Tab 3</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-3"
          class="overflow-y-auto"
          max-height="300"
        >
          <v-container style="height: 1000px"></v-container>
        </v-sheet>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppbarShrinkFadeonScroll",

  data: () => ({}),
};
>>>>>>> sjad
</script>