<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Custom Lists -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        In this example we opt to use a customized list instead of v-autocomplete. This allows us to always display the options available while still providing the same functionality of search and selection.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-toolbar
                flat
                color="transparent"
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Photo Info</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click="$refs.search.focus()"
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <v-container class="py-0">
                <v-row
                    align="center"
                    justify="start"
                >
                    <v-col
                    v-for="(selection, i) in selections"
                    :key="selection.text"
                    class="shrink"
                    >
                    <v-chip
                        :disabled="loading"
                        close
                        @click:close="selected.splice(i, 1)"
                    >
                        <v-icon
                        left
                        v-text="selection.icon"
                        ></v-icon>
                        {{ selection.text }}
                    </v-chip>
                    </v-col>

                    <v-col v-if="!allSelected" cols="12">
                    <v-text-field
                        ref="search"
                        v-model="search"
                        full-width
                        hide-details
                        label="Search"
                        single-line
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>

                <v-divider v-if="!allSelected"></v-divider>

                <v-list>
                <template v-for="(item, i) in categories">
                    <v-list-item
                    v-if="!selected.includes(i)"
                    :key="i"
                    :disabled="loading"
                    @click="selected.push(i)"
                    >
                    <v-list-item-avatar>
                        <v-icon
                        :disabled="loading"
                        v-text="item.icon"
                        ></v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </template>
                </v-list>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="!selected.length"
                    :loading="loading"
                    color="purple"
                    text
                    @click="next"
                >Next</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "ChipsCustomLists",

  data: () => ({
    items: [
        {
          text: 'Nature',
          icon: 'mdi-nature',
        },
        {
          text: 'Nightlife',
          icon: 'mdi-glass-wine',
        },
        {
          text: 'November',
          icon: 'mdi-calendar-range',
        },
        {
          text: 'Portland',
          icon: 'mdi-map-marker',
        },
        {
          text: 'Biking',
          icon: 'mdi-bike',
        },
      ],
      loading: false,
      search: '',
      selected: [],
  }),
  computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(this.items[selection])
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
    },
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Custom Lists -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        In this example we opt to use a customized list instead of v-autocomplete. This allows us to always display the options available while still providing the same functionality of search and selection.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-toolbar
                flat
                color="transparent"
                >
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Photo Info</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                    icon
                    @click="$refs.search.focus()"
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                </v-toolbar>

                <v-container class="py-0">
                <v-row
                    align="center"
                    justify="start"
                >
                    <v-col
                    v-for="(selection, i) in selections"
                    :key="selection.text"
                    class="shrink"
                    >
                    <v-chip
                        :disabled="loading"
                        close
                        @click:close="selected.splice(i, 1)"
                    >
                        <v-icon
                        left
                        v-text="selection.icon"
                        ></v-icon>
                        {{ selection.text }}
                    </v-chip>
                    </v-col>

                    <v-col v-if="!allSelected" cols="12">
                    <v-text-field
                        ref="search"
                        v-model="search"
                        full-width
                        hide-details
                        label="Search"
                        single-line
                    ></v-text-field>
                    </v-col>
                </v-row>
                </v-container>

                <v-divider v-if="!allSelected"></v-divider>

                <v-list>
                <template v-for="(item, i) in categories">
                    <v-list-item
                    v-if="!selected.includes(i)"
                    :key="i"
                    :disabled="loading"
                    @click="selected.push(i)"
                    >
                    <v-list-item-avatar>
                        <v-icon
                        :disabled="loading"
                        v-text="item.icon"
                        ></v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </template>
                </v-list>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="!selected.length"
                    :loading="loading"
                    color="purple"
                    text
                    @click="next"
                >Next</v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
  name: "ChipsCustomLists",

  data: () => ({
    items: [
        {
          text: 'Nature',
          icon: 'mdi-nature',
        },
        {
          text: 'Nightlife',
          icon: 'mdi-glass-wine',
        },
        {
          text: 'November',
          icon: 'mdi-calendar-range',
        },
        {
          text: 'Portland',
          icon: 'mdi-map-marker',
        },
        {
          text: 'Biking',
          icon: 'mdi-bike',
        },
      ],
      loading: false,
      search: '',
      selected: [],
  }),
  computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(this.items[selection])
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
    },
};
>>>>>>> sjad
</script>