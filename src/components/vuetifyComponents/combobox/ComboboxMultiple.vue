<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Multiple Options -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Previously known as tags - user is allowed to enter more than 1 value
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="Select a favorite activity or create a new one"
                    multiple
                    ></v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="I use chips"
                    multiple
                    chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="I use a scoped slot"
                    multiple
                    chips
                    >
                    <template v-slot:selection="data">
                        <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                        >
                        <v-avatar
                            class="info white--text"
                            left
                            v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar>
                        {{ data.item }}
                        </v-chip>
                    </template>
                    </v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    label="I'm readonly"
                    chips
                    multiple
                    readonly
                    ></v-combobox>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "ComboboxMultiple",

  data: () => ({
      select: ['Vuetify', 'Programming'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Multiple Options -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Previously known as tags - user is allowed to enter more than 1 value
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="Select a favorite activity or create a new one"
                    multiple
                    ></v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="I use chips"
                    multiple
                    chips
                    ></v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    :items="items"
                    label="I use a scoped slot"
                    multiple
                    chips
                    >
                    <template v-slot:selection="data">
                        <v-chip
                        :key="JSON.stringify(data.item)"
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        :disabled="data.disabled"
                        @click:close="data.parent.selectItem(data.item)"
                        >
                        <v-avatar
                            class="info white--text"
                            left
                            v-text="data.item.slice(0, 1).toUpperCase()"
                        ></v-avatar>
                        {{ data.item }}
                        </v-chip>
                    </template>
                    </v-combobox>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                    v-model="select"
                    label="I'm readonly"
                    chips
                    multiple
                    readonly
                    ></v-combobox>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "ComboboxMultiple",

  data: () => ({
      select: ['Vuetify', 'Programming'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
  })
};
>>>>>>> sjad
</script>