<<<<<<< HEAD
<template>
  <v-container
    id="login"
    class="fill-height justify-center"
    tag="section"
  >
    <v-row justify="center">
      <v-slide-y-transition appear>
        
          <template v-slot:heading>
            <div class="text-center">
              <h1 class="display-2 font-weight-bold mb-2">
                Login
              </h1>

              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :href="social.href"
                class="ma-1"
                icon
                rel="noopener"
                target="_blank"
              >
                <v-icon
                  v-text="social.icon"
                />
              </v-btn>
            </div>
          </template>

          <v-card-text class="text-center">
            <div class="text-center grey--text body-1 font-weight-light">
              Or Be Classical
            </div>

            <v-text-field
              color="secondary"
              label="First Name..."
              prepend-icon="mdi-face"
              class="mt-10"
            />

            <v-text-field
              color="secondary"
              label="Email..."
              prepend-icon="mdi-email"
            />

            <v-text-field
              class="mb-8"
              color="secondary"
              label="Password..."
              prepend-icon="mdi-lock-outline"
            />

            
          </v-card-text>
        
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PagesLogin',

   

    data: () => ({
      socials: [
        {
          href: '#',
          icon: 'mdi-facebook-box',
        },
        {
          href: '#',
          icon: 'mdi-twitter',
        },
        {
          href: '#',
          icon: 'mdi-github-box',
        },
      ],
    }),
  }
</script>
=======
<template>
  <v-container
    id="login"
    class="fill-height justify-center"
    tag="section"
  >
    <v-row justify="center">
      <v-slide-y-transition appear>
        
          <template v-slot:heading>
            <div class="text-center">
              <h1 class="display-2 font-weight-bold mb-2">
                Login
              </h1>

              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :href="social.href"
                class="ma-1"
                icon
                rel="noopener"
                target="_blank"
              >
                <v-icon
                  v-text="social.icon"
                />
              </v-btn>
            </div>
          </template>

          <v-card-text class="text-center">
            <div class="text-center grey--text body-1 font-weight-light">
              Or Be Classical
            </div>

            <v-text-field
              color="secondary"
              label="First Name..."
              prepend-icon="mdi-face"
              class="mt-10"
            />

            <v-text-field
              color="secondary"
              label="Email..."
              prepend-icon="mdi-email"
            />

            <v-text-field
              class="mb-8"
              color="secondary"
              label="Password..."
              prepend-icon="mdi-lock-outline"
            />

            
          </v-card-text>
        
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'PagesLogin',

   

    data: () => ({
      socials: [
        {
          href: '#',
          icon: 'mdi-facebook-box',
        },
        {
          href: '#',
          icon: 'mdi-twitter',
        },
        {
          href: '#',
          icon: 'mdi-github-box',
        },
      ],
    }),
  }
</script>
>>>>>>> sjad
