<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Small variant -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
       <v-list-item-subtitle class="text-wrap">
        Expand action icon can be customized with <code>expand-icon</code> prop or the <code>actions</code> slot.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-expansion-panels class="mb-6">
                <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                >
                    <v-expansion-panel-header expand-icon="mdi-menu-down">Item</v-expansion-panel-header>
                    <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>

                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                    Item
                    <template v-slot:actions>
                        <v-icon color="primary">$expand</v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header disable-icon-rotate>
                    Item
                    <template v-slot:actions>
                        <v-icon color="teal">mdi-check</v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header disable-icon-rotate>
                    Item
                    <template v-slot:actions>
                        <v-icon color="error">mdi-alert-circle</v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
        </div>
    </div>
</template>

<script>
export default {
  name: "ExpansionCustomicon",

  data: () => ({
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Small variant -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
       <v-list-item-subtitle class="text-wrap">
        Expand action icon can be customized with <code>expand-icon</code> prop or the <code>actions</code> slot.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-expansion-panels class="mb-6">
                <v-expansion-panel
                    v-for="(item,i) in 5"
                    :key="i"
                >
                    <v-expansion-panel-header expand-icon="mdi-menu-down">Item</v-expansion-panel-header>
                    <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>

                <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-header>
                    Item
                    <template v-slot:actions>
                        <v-icon color="primary">$expand</v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header disable-icon-rotate>
                    Item
                    <template v-slot:actions>
                        <v-icon color="teal">mdi-check</v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                    <v-expansion-panel-header disable-icon-rotate>
                    Item
                    <template v-slot:actions>
                        <v-icon color="error">mdi-alert-circle</v-icon>
                    </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
        </div>
    </div>
</template>

<script>
export default {
  name: "ExpansionCustomicon",

  data: () => ({
  })
};
>>>>>>> sjad
</script>