<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Company Footer -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        The footer component as a basic company footer with links.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-footer
                color="primary lighten-1"
                padless
            >
                <v-row
                justify="center"
                no-gutters
                >
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"
                >
                    {{ link }}
                </v-btn>
                <v-col
                    class="primary lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
                </v-row>
            </v-footer>
        </div>
    </div>
</template>

<script>
export default {
  name: "FooterCompany",

  data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Company Footer -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        The footer component as a basic company footer with links.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-footer
                color="primary lighten-1"
                padless
            >
                <v-row
                justify="center"
                no-gutters
                >
                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    text
                    rounded
                    class="my-2"
                >
                    {{ link }}
                </v-btn>
                <v-col
                    class="primary lighten-2 py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </v-col>
                </v-row>
            </v-footer>
        </div>
    </div>
</template>

<script>
export default {
  name: "FooterCompany",

  data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
  })
};
>>>>>>> sjad
</script>