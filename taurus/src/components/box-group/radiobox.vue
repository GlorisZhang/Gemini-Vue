<template>
  <li class="form-radio {{ sizeClass }}">
    <input type="radio" id="{{ nextId }}" name="{{ itemName }}" :checked="checked" :disabled="disabled" v-on:click.stop.prevent="clickMe">
    <label class="{{ fontSizeClass }}" v-on:click.stop.prevent="clickMe">{{ label }}</label>
  </li>
</template>
<script>
import Vue from 'vue';

const SIZE_LARGE = 'large';
const SIZE_SMALL = 'small';
const SIZE_NORMAL = 'normal';
const CSS_LARGE = 'form-radio--large';
const CSS_SMALL = 'form-radio--small';
const CSS_FONT_LARGE = 'text--large';
const CSS_FONT_MEDIUM = 'text--med';
const CSS_FONT_SMALL = 'text--small';

var seed = 0;

// 单个单选框，仅作为BoxGroup的子组件使用!
var Radiobox = Vue.extend({
  name: 'taurus-radiobox',
  events: {
    'toggle-check-state': function (children, checked) {
      if (children === this) {
        if (this.checked === false) {
          this.checked = true;
          this._fireEvents();
        }
      } else {
        if (this.checked === true) {
          this.checked = false;
          this._fireEvents();
        }
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
      this.$dispatch('radio-item-check', this.idx);
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
module.exports = Radiobox;
</script>
