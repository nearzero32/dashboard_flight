<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TabsDesktop -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can represent <code>v-tab</code> actions by using single icons. This is useful when it is easy to correlate content to each tab
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-toolbar flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Contact Database</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                <template v-slot:extension>
                    <v-tabs
                    v-model="tabs"
                    fixed-tabs
                    >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab
                        href="#mobile-tabs-5-1"
                        class="primary--text"
                    >
                        <v-icon>mdi-phone</v-icon>
                    </v-tab>

                    <v-tab
                        href="#mobile-tabs-5-2"
                        class="primary--text"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-tab>

                    <v-tab
                        href="#mobile-tabs-5-3"
                        class="primary--text"
                    >
                        <v-icon>mdi-account-box</v-icon>
                    </v-tab>
                    </v-tabs>
                </template>
                </v-toolbar>

                <v-tabs-items v-model="tabs">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'mobile-tabs-5-' + i"
                >
                    <v-card flat>
                    <v-card-text v-text="text"></v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
        </div>
    </div>
</template>

<script>
export default {
  name: "TabsDesktop",

  data: () => ({
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TabsDesktop -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        You can represent <code>v-tab</code> actions by using single icons. This is useful when it is easy to correlate content to each tab
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-toolbar flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Contact Database</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

                <template v-slot:extension>
                    <v-tabs
                    v-model="tabs"
                    fixed-tabs
                    >
                    <v-tabs-slider></v-tabs-slider>
                    <v-tab
                        href="#mobile-tabs-5-1"
                        class="primary--text"
                    >
                        <v-icon>mdi-phone</v-icon>
                    </v-tab>

                    <v-tab
                        href="#mobile-tabs-5-2"
                        class="primary--text"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-tab>

                    <v-tab
                        href="#mobile-tabs-5-3"
                        class="primary--text"
                    >
                        <v-icon>mdi-account-box</v-icon>
                    </v-tab>
                    </v-tabs>
                </template>
                </v-toolbar>

                <v-tabs-items v-model="tabs">
                <v-tab-item
                    v-for="i in 3"
                    :key="i"
                    :value="'mobile-tabs-5-' + i"
                >
                    <v-card flat>
                    <v-card-text v-text="text"></v-card-text>
                    </v-card>
                </v-tab-item>
                </v-tabs-items>
        </div>
    </div>
</template>

<script>
export default {
  name: "TabsDesktop",

  data: () => ({
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  })
};
>>>>>>> sjad
</script>