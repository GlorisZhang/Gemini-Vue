import Vue from 'vue';
import NumberStepper from 'taurus/components/number-stepper/number-stepper';

new Vue({
  el: 'body',
  components: {
    't-number-stepper': NumberStepper
  },
  methods: {
    setNSValue: function (newValue) {
      this.$refs.nsNormal.setValue(newValue);
    },
    getNSValue: function () {
      let value = this.$refs.nsNormal.getValue();
      alert('类型' + typeof value + '; 值:' + value);
    },
    enable: function () {
      this.$refs.nsNormal.enable();
    },
    disable: function () {
      this.$refs.nsNormal.disable();
    }
  }
});
