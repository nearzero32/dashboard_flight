<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SteppersVerticalMultilineErrorState -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        The same state also applies to Vertical steppers.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-stepper v-model="e13" vertical>
                <v-stepper-step step="1" complete>
                Name of step 1
                </v-stepper-step>

                <v-stepper-content step="1">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step step="2" complete>Name of step 2</v-stepper-step>

                <v-stepper-content step="2">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step :rules="[() => false]" step="3">
                Ad templates
                <small>Alert message</small>
                </v-stepper-step>

                <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">View setup instructions</v-stepper-step>

                <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>
            </v-stepper>
        </div>
    </div>
</template>

<script>
export default {
  name: "SteppersVerticalMultilineErrorState",

  data: () => ({
      e13: 2,
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- SteppersVerticalMultilineErrorState -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        The same state also applies to Vertical steppers.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-stepper v-model="e13" vertical>
                <v-stepper-step step="1" complete>
                Name of step 1
                </v-stepper-step>

                <v-stepper-content step="1">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 2">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step step="2" complete>Name of step 2</v-stepper-step>

                <v-stepper-content step="2">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 3">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step :rules="[() => false]" step="3">
                Ad templates
                <small>Alert message</small>
                </v-stepper-step>

                <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 4">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">View setup instructions</v-stepper-step>

                <v-stepper-content step="4">
                <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                <v-btn color="primary" @click="e13 = 1">Continue</v-btn>
                <v-btn text>Cancel</v-btn>
                </v-stepper-content>
            </v-stepper>
        </div>
    </div>
</template>

<script>
export default {
  name: "SteppersVerticalMultilineErrorState",

  data: () => ({
      e13: 2,
  })
};
>>>>>>> sjad
</script>