<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TextfieldPasswordInput -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           A password input can be used with an appended icon and callback to control the visibility.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-form>
                <v-container fluid>
                <v-row>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Normal with hint text"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Visible"
                        hint="At least 8 characters"
                        value="wqfasds"
                        class="input-group--focused"
                        @click:append="show2 = !show2"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show3 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Not visible"
                        hint="At least 8 characters"
                        value="wqfasds"
                        class="input-group--focused"
                        @click:append="show3 = !show3"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.emailMatch]"
                        :type="show4 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Error"
                        hint="At least 8 characters"
                        value="Pa"
                        error
                        @click:append="show4 = !show4"
                    ></v-text-field>
                    </v-col>

                </v-row>
                </v-container>
            </v-form>
        </div>
    </div>
</template>

<script>
export default {
  name: "TextfieldPasswordInput",

  data: () => ({
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TextfieldPasswordInput -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
           A password input can be used with an appended icon and callback to control the visibility.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-form>
                <v-container fluid>
                <v-row>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Normal with hint text"
                        hint="At least 8 characters"
                        counter
                        @click:append="show1 = !show1"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Visible"
                        hint="At least 8 characters"
                        value="wqfasds"
                        class="input-group--focused"
                        @click:append="show2 = !show2"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show3 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Not visible"
                        hint="At least 8 characters"
                        value="wqfasds"
                        class="input-group--focused"
                        @click:append="show3 = !show3"
                    ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                    <v-text-field
                        :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.emailMatch]"
                        :type="show4 ? 'text' : 'password'"
                        name="input-10-2"
                        label="Error"
                        hint="At least 8 characters"
                        value="Pa"
                        error
                        @click:append="show4 = !show4"
                    ></v-text-field>
                    </v-col>

                </v-row>
                </v-container>
            </v-form>
        </div>
    </div>
</template>

<script>
export default {
  name: "TextfieldPasswordInput",

  data: () => ({
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
  })
};
>>>>>>> sjad
</script>