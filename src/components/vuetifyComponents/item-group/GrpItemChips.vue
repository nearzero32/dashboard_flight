<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- GrpItemChips -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Easily hook up a custom chip group.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-toolbar
                flat
                color="info"
                dark
                >
                <v-toolbar-title>Submit a post</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                <v-text-field filled label="Title" value="My new post"></v-text-field>

                <v-textarea
                    filled
                    label="Text"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
                ></v-textarea>

                <v-divider class="my-2"></v-divider>

                <v-item-group multiple>
                    <v-subheader>Tags</v-subheader>
                    <v-item
                    v-for="n in 8"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                    >
                    <v-chip
                        active-class="info--text"
                        :input-value="active"
                        @click="toggle"
                    >
                        Tag {{ n }}
                    </v-chip>
                    </v-item>
                </v-item-group>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="success"
                    depressed
                >
                    Post
                </v-btn>
                </v-card-actions>
        </div>
    </div>
</template>

<script>
export default {
  name: "GrpItemChips",

  data: () => ({
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- GrpItemChips -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           Easily hook up a custom chip group.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-toolbar
                flat
                color="info"
                dark
                >
                <v-toolbar-title>Submit a post</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                <v-text-field filled label="Title" value="My new post"></v-text-field>

                <v-textarea
                    filled
                    label="Text"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
                ></v-textarea>

                <v-divider class="my-2"></v-divider>

                <v-item-group multiple>
                    <v-subheader>Tags</v-subheader>
                    <v-item
                    v-for="n in 8"
                    :key="n"
                    v-slot:default="{ active, toggle }"
                    >
                    <v-chip
                        active-class="info--text"
                        :input-value="active"
                        @click="toggle"
                    >
                        Tag {{ n }}
                    </v-chip>
                    </v-item>
                </v-item-group>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="success"
                    depressed
                >
                    Post
                </v-btn>
                </v-card-actions>
        </div>
    </div>
</template>

<script>
export default {
  name: "GrpItemChips",

  data: () => ({
  })
};
>>>>>>> sjad
</script>