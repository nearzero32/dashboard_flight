<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- MenusPopoverMenu -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.
        </v-list-item-subtitle>
        <div class="mt-4 text-center">
            <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
            >
            <template v-slot:activator="{ on }">
                <v-btn
                color="info"
                dark
                v-on="on"
                >
                Menu as Popover
                </v-btn>
            </template>

            <v-card>
                <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                    <v-btn
                        :class="fav ? 'red--text' : ''"
                        icon
                        @click="fav = !fav"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                <v-list-item>
                    <v-list-item-action>
                    <v-switch v-model="message" color="success"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable messages</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                    <v-switch v-model="hints" color="success"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable hints</v-list-item-title>
                </v-list-item>
                </v-list>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="menu = false">Cancel</v-btn>
                <v-btn color="primary" text @click="menu = false">Save</v-btn>
                </v-card-actions>
            </v-card>
            </v-menu>
        </div>
    </div>
</template>

<script>
export default {
  name: "MenusPopoverMenu",

  data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- MenusPopoverMenu -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        A menu can be configured to be static when opened, allowing it to function as a popover. This can be useful when there are multiple interactive items within the menu contents.
        </v-list-item-subtitle>
        <div class="mt-4 text-center">
            <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
            >
            <template v-slot:activator="{ on }">
                <v-btn
                color="info"
                dark
                v-on="on"
                >
                Menu as Popover
                </v-btn>
            </template>

            <v-card>
                <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-list-item-avatar>

                    <v-list-item-content>
                    <v-list-item-title>John Leider</v-list-item-title>
                    <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                    <v-btn
                        :class="fav ? 'red--text' : ''"
                        icon
                        @click="fav = !fav"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    </v-list-item-action>
                </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                <v-list-item>
                    <v-list-item-action>
                    <v-switch v-model="message" color="success"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable messages</v-list-item-title>
                </v-list-item>

                <v-list-item>
                    <v-list-item-action>
                    <v-switch v-model="hints" color="success"></v-switch>
                    </v-list-item-action>
                    <v-list-item-title>Enable hints</v-list-item-title>
                </v-list-item>
                </v-list>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="menu = false">Cancel</v-btn>
                <v-btn color="primary" text @click="menu = false">Save</v-btn>
                </v-card-actions>
            </v-card>
            </v-menu>
        </div>
    </div>
</template>

<script>
export default {
  name: "MenusPopoverMenu",

  data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
  })
};
>>>>>>> sjad
</script>