<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerInDialogMenu -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="11" sm="5">
                <v-menu
                    ref="menu"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="time"
                        label="Picker in menu"
                        prepend-icon="access_time"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                    ></v-time-picker>
                </v-menu>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="11" sm="5">
                <v-dialog
                    ref="dialog"
                    v-model="modal2"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="time"
                        label="Picker in dialog"
                        prepend-icon="access_time"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-time-picker
                    v-if="modal2"
                    v-model="time"
                    full-width
                    >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                    </v-time-picker>
                </v-dialog>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerInDialogMenu",

  data: () => ({
      time: null,
        menu2: false,
        modal2: false,
  })
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- TimePickerInDialogMenu -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="11" sm="5">
                <v-menu
                    ref="menu"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="time"
                        label="Picker in menu"
                        prepend-icon="access_time"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                    ></v-time-picker>
                </v-menu>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="11" sm="5">
                <v-dialog
                    ref="dialog"
                    v-model="modal2"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on }">
                    <v-text-field
                        v-model="time"
                        label="Picker in dialog"
                        prepend-icon="access_time"
                        readonly
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-time-picker
                    v-if="modal2"
                    v-model="time"
                    full-width
                    >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
                    </v-time-picker>
                </v-dialog>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
  name: "TimePickerInDialogMenu",

  data: () => ({
      time: null,
        menu2: false,
        modal2: false,
  })
};
>>>>>>> sjad
</script>