<<<<<<< HEAD
<template>
  <div class="text-center">
    <form-wizard @on-complete="onComplete" color="#1e88e5" :title="null" :subtitle="null">
      <tab-content title="Personal details" icon="ti-user" :before-change="beforeTabSwitch">
        <span class="font-weight-bold">My first tab content</span>
      </tab-content>
      <tab-content title="Reuirements" icon="ti-settings">
        <span class="font-weight-bold">My second tab content</span>
      </tab-content>
      <tab-content title="Last step" icon="ti-check">
        <span class="font-weight-bold">Yuhuuu! This seems pretty damn simple</span>
      </tab-content>
      <v-btn color="black" dark slot="prev">
        <i class="mdi mdi-chevron-left mr-1"></i>
        Back
      </v-btn>
      <v-btn color="info" slot="next">
        Next
        <i class="mdi mdi-chevron-right ml-1"></i>
      </v-btn>
      <v-btn color="success" slot="finish">
        Finish
        <i class="mdi mdi-bookmark-check ml-1"></i>
      </v-btn>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "FormWizardCallFun",
  data: () => ({
    title: "FormWizardCallFun"
  }),
  components: {
    FormWizard,
    TabContent
  },
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    },
    beforeTabSwitch: function() {
      alert("This is called before switchind tabs");
      return true;
    }
  }
};
=======
<template>
  <div class="text-center">
    <form-wizard @on-complete="onComplete" color="#1e88e5" :title="null" :subtitle="null">
      <tab-content title="Personal details" icon="ti-user" :before-change="beforeTabSwitch">
        <span class="font-weight-bold">My first tab content</span>
      </tab-content>
      <tab-content title="Reuirements" icon="ti-settings">
        <span class="font-weight-bold">My second tab content</span>
      </tab-content>
      <tab-content title="Last step" icon="ti-check">
        <span class="font-weight-bold">Yuhuuu! This seems pretty damn simple</span>
      </tab-content>
      <v-btn color="black" dark slot="prev">
        <i class="mdi mdi-chevron-left mr-1"></i>
        Back
      </v-btn>
      <v-btn color="info" slot="next">
        Next
        <i class="mdi mdi-chevron-right ml-1"></i>
      </v-btn>
      <v-btn color="success" slot="finish">
        Finish
        <i class="mdi mdi-bookmark-check ml-1"></i>
      </v-btn>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

export default {
  name: "FormWizardCallFun",
  data: () => ({
    title: "FormWizardCallFun"
  }),
  components: {
    FormWizard,
    TabContent
  },
  methods: {
    onComplete: function() {
      alert("Yay. Done!");
    },
    beforeTabSwitch: function() {
      alert("This is called before switchind tabs");
      return true;
    }
  }
};
>>>>>>> sjad
</script>