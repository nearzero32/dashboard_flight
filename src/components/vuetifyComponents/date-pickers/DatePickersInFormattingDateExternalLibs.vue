<<<<<<< HEAD
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- DatePickersInFormattingDateExternalLibs -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Formatting dates is possible also with external libs such as Moment.js or date-fns
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12" lg="6">
                    <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    max-width="290"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        :value="computedDateFormattedMomentjs"
                        clearable
                        label="Formatted with Moment.js"
                        readonly
                        v-on="on"
                        @click:clear="date = null"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        @change="menu1 = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" lg="6">
                    <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    max-width="290"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        :value="computedDateFormattedDatefns"
                        clearable
                        label="Formatted with datefns"
                        readonly
                        v-on="on"
                        @click:clear="date = null"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        @change="menu2 = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import format from 'date-fns/format'

export default {
  name: "DatePickersInFormattingDateExternalLibs",

  data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
  }),
  computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns () {
        return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
      },
    },
};
=======
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- DatePickersInFormattingDateExternalLibs -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-list-item-subtitle class="text-wrap">
        Formatting dates is possible also with external libs such as Moment.js or date-fns
        </v-list-item-subtitle>
        <div class="mt-4">
            <v-row>
                <v-col cols="12" lg="6">
                    <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    max-width="290"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        :value="computedDateFormattedMomentjs"
                        clearable
                        label="Formatted with Moment.js"
                        readonly
                        v-on="on"
                        @click:clear="date = null"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        @change="menu1 = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>

                <v-col cols="12" lg="6">
                    <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    max-width="290"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        :value="computedDateFormattedDatefns"
                        clearable
                        label="Formatted with datefns"
                        readonly
                        v-on="on"
                        @click:clear="date = null"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        @change="menu2 = false"
                    ></v-date-picker>
                    </v-menu>
                </v-col>
                </v-row>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import format from 'date-fns/format'

export default {
  name: "DatePickersInFormattingDateExternalLibs",

  data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
  }),
  computed: {
      computedDateFormattedMomentjs () {
        return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns () {
        return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
      },
    },
};
>>>>>>> sjad
</script>