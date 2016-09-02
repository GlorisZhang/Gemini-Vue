/**
 * Created by Harwin on 2016/8/30.
 */
import Vue from 'vue';
import TSwitcher from 'taurus/components/switcher/switcher.vue';

new Vue({
  el: '#switcher',
  components: {
    TSwitcher
  },
  data: {
    switcher: {
      onText: 'Yes',
      offText: 'No',
      disabled: false,
      value: false
    },
    longSwitcher: {
      onText: 'Some long',
      offText: 'Other long',
      disabled: false,
      value: false
    }
  },
  methods: {
    change (value) {
      console.info('valueChanged', value);
    },
    toggleIt () {
      this.$refs.myswitcher.toggle();
    },
    setValue (value) {
      this.$refs.myswitcher.setValue(value);
    },
    getValue () {
      let value = this.$refs.myswitcher.getValue();
      console.info('getValue', value);
    },
    enable () {
      this.$refs.myswitcher.enable();
    },
    disable () {
      this.$refs.myswitcher.disable();
    }
  }
});
