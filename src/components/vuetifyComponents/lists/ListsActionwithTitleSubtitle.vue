<<<<<<< HEAD
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsActionwithTitleSubtitle -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      A three-line list with actions. Utilizing v-list-item-group, easily
      connect actions to your tiles.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card class="mx-auto" max-width="400">
        <v-toolbar color="primary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Settings</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list subheader three-line>
          <v-subheader>User Controls</v-subheader>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle
                >Set the content filtering level to restrict appts that can be
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle
                >Require password for purchase or use password to restrict
                purchase</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list flat subheader three-line>
          <v-subheader>General</v-subheader>

          <v-list-item-group v-model="settings" multiple active-class="">
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="notications"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="notifications = !notifications">
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle
                  >Notify me about updates to apps or games that I
                  downloaded</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="sound = !sound">
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle
                  >Auto-update apps at any time. Data charges may
                  apply</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="widgets"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="sound = !sound">
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle
                  >Automatically add home screen widgets when downloads
                  complete</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsActionwithTitleSubtitle",

  data: () => ({
    notications: false,
    sound: true,
    widgets: false,
  }),
};
=======
<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- ListsActionwithTitleSubtitle -->
  <!-- ----------------------------------------------------------------------------- -->
  <div>
    <v-list-item-subtitle class="text-wrap">
      A three-line list with actions. Utilizing v-list-item-group, easily
      connect actions to your tiles.
    </v-list-item-subtitle>
    <div class="mt-4">
      <v-card class="mx-auto" max-width="400">
        <v-toolbar color="primary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Settings</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list subheader three-line>
          <v-subheader>User Controls</v-subheader>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle
                >Set the content filtering level to restrict appts that can be
                downloaded</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle
                >Require password for purchase or use password to restrict
                purchase</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list flat subheader three-line>
          <v-subheader>General</v-subheader>

          <v-list-item-group v-model="settings" multiple active-class="">
            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="notications"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="notifications = !notifications">
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle
                  >Notify me about updates to apps or games that I
                  downloaded</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="sound"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="sound = !sound">
                <v-list-item-title>Sound</v-list-item-title>
                <v-list-item-subtitle
                  >Auto-update apps at any time. Data charges may
                  apply</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-checkbox v-model="widgets"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content @click="sound = !sound">
                <v-list-item-title>Auto-add widgets</v-list-item-title>
                <v-list-item-subtitle
                  >Automatically add home screen widgets when downloads
                  complete</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsActionwithTitleSubtitle",

  data: () => ({
    notications: false,
    sound: true,
    widgets: false,
  }),
};
>>>>>>> sjad
</script>