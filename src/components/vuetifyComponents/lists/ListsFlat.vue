<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- ListsFlat -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Items don't change when selected in <code>v-list</code> with <code>flat</code> property.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-list flat>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
        </div>
    </div>
</template>

<script>
export default {
  name: "ListsFlat",

  data: () => ({
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- ListsFlat -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Items don't change when selected in <code>v-list</code> with <code>flat</code> property.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-list flat>
                <v-subheader>REPORTS</v-subheader>
                <v-list-item-group v-model="item" color="primary">
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                </v-list>
        </div>
    </div>
</template>

<script>
export default {
  name: "ListsFlat",

  data: () => ({
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
  })
};
>>>>>>> sjad
</script>