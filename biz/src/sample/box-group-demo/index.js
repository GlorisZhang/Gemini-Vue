import Vue from 'vue';
import BoxGroup from 'taurus/components/box-group/box-group';

const INFO_TITLE = 'BoxGroup事件信息：';

new Vue({
  el: 'body',
  components: {
    't-box-group': BoxGroup
  },
  methods: {
    checkAll: function (event) {
      this.$refs.myTag1.check();
    },
    uncheckAll: function (event) {
      this.$refs.myTag1.uncheck();
    },
    checkSecondItem: function (event) {
      this.$refs.myTag1.check(1);
    },
    uncheckSecondItem: function (event) {
      this.$refs.myTag1.uncheck(1);
    },
    toggleSecondItem: function (event) {
      this.$refs.myTag1.toggle(1);
    },
    disableAll: function (event) {
      this.$refs.myTag1.disable();
    },
    enableAll: function (event) {
      this.$refs.myTag1.enable();
    },
    disableSecondItem: function (event) {
      this.$refs.myTag1.disable(1);
    },
    enableSecondItem: function (event) {
      this.$refs.myTag1.enable();
    },
    getValue: function (event) {
      var arr = this.$refs.myTag1.value();
      alert('返回值：' + arr);
    },
    getSecondItemValue: function (event) {
      var arr = this.$refs.myTag1.value(1);
      alert('返回值：' + arr);
    },
    getIsChecked: function (event) {
      var arr = this.$refs.myTag1.isChecked();
      alert('返回值：' + arr);
    },
    getSecondIsChecked: function (event) {
      var arr = this.$refs.myTag1.isChecked(1);
      alert('返回值：' + arr);
    },
    getAllCount: function (event) {
      var arr = this.$refs.myTag2.count();
      alert('返回值：' + arr);
    },
    setAllCount: function (event) {
      this.$refs.myTag2.count([0, 1, 2, 3], [991, 46, 1, 9]);
    },
    getSecondCount: function (event) {
      var arr = this.$refs.myTag2.count(1);
      alert('返回值：' + arr);
    },
    setSecondCount: function (event) {
      this.$refs.myTag2.count(1, 21);
    },
    setSomeCount: function (event) {
      this.$refs.myTag2.count([1, 2], [11, 25]);
    },
    warn$1: function (msg1, msg2) {
      if (typeof console !== 'undefined') {
        console.error('[' + msg1 + '] ' + msg2);
      }
    },
    changed: function (index, newValue) {
      this.warn$1('changed', INFO_TITLE + 'index = ' + index + '；newVaue = ' + newValue);
    },
    checked: function (index, newValue) {
      this.warn$1('checked', INFO_TITLE + 'index = ' + index);
    },
    unchecked: function (index, newValue) {
      this.warn$1('unchecked', INFO_TITLE + 'index = ' + index);
    }
  }
});
