<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TreeviewDisablingNodes -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Setting <code>item-disabled</code> prop allows to control which node's property disables the node when set to <code>true</code>.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-treeview
                selectable
                item-disabled="locked"
                :items="items"
            ></v-treeview>
        </div>
    </div>
</template>

<script>
export default {
  name: "TreeviewDisablingNodes",

  data: () => ({
      items: [
        {
          id: 1,
          name: 'Applications :',
          locked: true,
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  locked: true,
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf', locked: true },
            { id: 17, name: 'November : pdf', locked: true },
            { id: 18, name: 'Tutorial : html', locked: true },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
  }),
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TreeviewDisablingNodes -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Setting <code>item-disabled</code> prop allows to control which node's property disables the node when set to <code>true</code>.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-treeview
                selectable
                item-disabled="locked"
                :items="items"
            ></v-treeview>
        </div>
    </div>
</template>

<script>
export default {
  name: "TreeviewDisablingNodes",

  data: () => ({
      items: [
        {
          id: 1,
          name: 'Applications :',
          locked: true,
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  locked: true,
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf', locked: true },
            { id: 17, name: 'November : pdf', locked: true },
            { id: 18, name: 'Tutorial : html', locked: true },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
  }),
};
>>>>>>> sjad
</script>