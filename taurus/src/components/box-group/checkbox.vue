<template>
  <li class="form-checkbox {{ sizeClass }}">
    <input type="checkbox" id="{{ nextId }}" name="{{ itemName }}" :checked="checked" :disabled="disabled" v-on:click.stop.prevent="clickMe">
    <label class="{{ fontSizeClass }}" v-on:click.stop.prevent="clickMe">{{ label }}</label>
  </li>
</template>
<script>
import Vue from 'vue';

const SIZE_LARGE = 'large';
const SIZE_SMALL = 'small';
const SIZE_NORMAL = 'normal';
const CSS_LARGE = 'form-checkbox--large';
const CSS_SMALL = 'form-checkbox--small';
const CSS_FONT_LARGE = 'text--large';
const CSS_FONT_MEDIUM = 'text--med';
const CSS_FONT_SMALL = 'text--small';

var seed = 0;

// 单个复选框，仅作为BoxGroup的子组件使用!
var Checkbox = Vue.extend({
  name: 'taurus-checkbox',
  events: {
    'toggle-check-state': function (children, checked) {
      if (children === this) {
        if (checked === undefined) {
          this.toggle();
        } else if (checked === true) {
          this.check();
        } else {
          this.uncheck();
        }
      } else {
        return true; // 继续广播
      }
    },
    'toggle-usability': function (children, disabled) {
      if (children === this) {
        this.disabled = disabled;
      } else {
        return true; // 继续广播
      }
    }
  },
  data: function () {
    return {
      checked: false,
      label: '',
      disabled: false,
      size: SIZE_NORMAL,
      value: '',
      itemName: ''
    };
  },
  computed: {
    sizeClass: function () {
      if (this.size === SIZE_LARGE) {
        return CSS_LARGE;
      } else if (this.size === SIZE_SMALL) {
        return CSS_SMALL;
      } else {
        return '';
      }
    },
    fontSizeClass: function () {
      if (this.size === SIZE_LARGE) {
        return CSS_FONT_LARGE;
      } else if (this.size === SIZE_SMALL) {
        return CSS_FONT_SMALL;
      } else {
        return CSS_FONT_MEDIUM;
      }
    },
    nextId: function () {
      return 'tau-chk' + seed++;
    }
  },
  props: {
    // 此属性只读!
    idx: {
      default: 0,
      type: Number
    }
  },
  methods: {
    clickMe: function () {
      if (this.disabled === false) {
        this.toggle();
      }
    },
    check: function () {
      if (this.checked === false) {
        this.checked = true;
        this._fireEvents();
      }
    },
    uncheck: function () {
      if (this.checked === true) {
        this.checked = false;
        this._fireEvents();
      }
    },
    toggle: function () {
      this.checked = !this.checked;
      this._fireEvents();
    },
    enable: function () {
      if (this.disabled === true) {
        this.disabled = false;
      }
    },
    disable: function () {
      if (this.disabled === false) {
        this.disabled = true;
      }
    },
    _fireEvents: function () {
      this.$dispatch('changed', this.idx, this.checked);
      this.$dispatch(this.checked ? 'checked' : 'unchecked', this.idx);
    }
  }
});
module.exports = Checkbox;
</script>
