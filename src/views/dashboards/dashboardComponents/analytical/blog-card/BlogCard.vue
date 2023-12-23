<template>
  <v-card class="mb-7">
    <v-img height="180" src="@/assets/images/background/blog-bg-2x.jpg"></v-img>
    <v-card-text>
        <h3 class="subtitle-1 font-weight-medium blue-grey--text d-flex align-center">
            <feather type="clock" size="20" class="mr-1"></feather>
            22 March, 2021
        </h3>
      <h2 class="title font-weight-medium mb-2 mt-5">
        Super awesome, Vue 3 is coming soon!
      </h2>
      <v-chip class="mr-2" label small color="primary"> Medium </v-chip>
      <v-chip class="mr-2" label small color="error"> Low </v-chip>
      <v-divider class="mt-7"></v-divider>
      <div class="d-flex align-center mt-4">
        <v-avatar color="indigo" size="40">
          <img src="@/assets/images/users/1.jpg" alt="John" />
        </v-avatar>
        <v-avatar color="indigo" size="40" class="ml-2">
          <img src="@/assets/images/users/2.jpg" alt="John" />
        </v-avatar>
        <v-avatar color="indigo" size="40" class="ml-2">
          <img src="@/assets/images/users/3.jpg" alt="John" />
        </v-avatar>
        <div class="ml-auto">
            <v-btn
              icon
              color="inherit"
            >
              <feather type="message-circle" size="22"></feather>
            </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "BlogCard",
  data: () => ({}),
  components: {},
};
</script>