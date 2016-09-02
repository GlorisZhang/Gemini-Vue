<template>
  <li class="form-checkbox--filter form-checkbox--filter--primary">
    <input type="checkbox" id="{{ nextId }}" name="{{ itemName }}" :checked="checked" :disabled="disabled" v-on:click.stop.prevent="clickMe">
    <label class="text" v-on:click.stop.prevent="clickMe">{{ label }}<span class="filter-count" v-on:click.stop.prevent="clickMe">({{ count }})</span></label>
  </li>
</template>
<script>
import Vue from 'vue';

var seed = 0;

// 单个复选框过滤按钮，仅作为BoxGroup的子组件使用!
var CheckboxFilter = Vue.extend({
  name: 'taurus-checkbox-filter',
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
      count: 0,
      value: '',
      itemName: ''
    };
  },
  computed: {
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
    clickMe: function (event) {
      if (this.disabled === false) {
        this.toggle();
      }
    },
    _updateSiblingsState: function () {
      var i, children;
      if (this.$parent.total === true) {
        children = this.$parent.$children;
        if (this.idx === 0) {
          for (i = children.length - 1; i >= 1; i--) {
            children[i].uncheck();
          }
        } else {
          children[0].uncheck();
        }
      }
    },
    check: function () {
      if (this.checked === false) {
        this.checked = true;
        this._updateSiblingsState();
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
      if (this.checked === true) {
        this._updateSiblingsState();
      }
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
module.exports = CheckboxFilter;
</script>
