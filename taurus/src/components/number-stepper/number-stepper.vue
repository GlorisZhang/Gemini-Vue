<template>
  <label v-if="label">{{ label }}</label>
  <div class="form-item {{ smallSize }}">
    <div class="form-item__number-wrapper">
      <input data-module="element.number" type="number"
             v-model="value | toNumber"
             :disabled="disabled"
             v-on:blur="enterValidate">
      <button class="button--default number__control number__control--decrease" v-on:click="substract"></button>
      <button class="button--default number__control number__control--increase" v-on:click="increase"></button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

const DEFAULT_MIN = 0;
const DEFAULT_STEP = 1;
const SIZE_NORMAL = 'normal';
const SIZE_SMALL = 'small';
const CSS_SMALL = 'form-item--small';
/**
 * 反向过滤，将输入的值转为Number类型响应到vm中
 */
Vue.filter('toNumber', {
  //对手动输入的数据转化为number类型
  write: function(value) {
    return isNaN(parseInt(value)) ? '' : parseInt(value);
  }
})
let NumberStepper = Vue.extend({
  name: 'taurus-number-stepper',
  data: function () {
    return {
      value: 0,
      disabled: false
    }
  },
  computed: {
    smallSize: function () {
      if (this.size === SIZE_SMALL) {
        return CSS_SMALL;
      } else {
        return '';
      }
    }
  },
  created: function () {
    //max必须大于min
    if (this.max < this.min) {
      this.max = undefined;
    }
  },
  props: {
    max: {
      default: 'undefined',
      type: Number,
      coerce: function (max) {
        return isNaN(parseInt(max)) ? undefined : parseInt(max);
      }
    },
    min: {
      default: DEFAULT_MIN,
      type: Number,
      coerce: function (min) {
        return isNaN(parseInt(min)) ? DEFAULT_MIN : parseInt(min);
      }
    },
    step: {
      default: DEFAULT_STEP,
      type: Number,
      coerce: function (step) {
        return parseInt(step) > 1 ? parseInt(step) : 1;
      }
    },
    size: {
      default: SIZE_NORMAL,
      type: String,
      coerce: function (size) {
        return size === SIZE_SMALL ? SIZE_SMALL : SIZE_NORMAL;
      }
    },
    label: {
      default: '',
      type: String,
      coerce: function (label) {
        return label.trim().length ? label : '';
      }
    }
  },
  methods: {
    increase: function (){
      if (this.max) {
        let value = parseInt(this.value);
        if (this.value + this.step >= this.max) {
          this._setValue(this.max);
        } else {
          this._setValue(this.value + this.step);
        }
      } else {
        this._setValue(this.value + this.step);
      }
    },
    substract: function () {
      if (this.value < this.step) {
        this._setValue(DEFAULT_MIN)
      } else {
        this._setValue(this.value - this.step);
      }
    },
    enterValidate: function () {
      let value = this.value;
      this._setValue(value);
    },
    enable: function () {
      this.disabled = false;
    },
    disable: function () {
      this.disabled = true;
    },
    _setValue: function (newValue) {
      console.log('setValue(' + newValue + ')');
      if (typeof newValue === 'string' || typeof newValue === 'number') {
        let value = parseInt(newValue);
        if (this.max) {
          if (value <= this.max && value >= this.min) {
            this.value = value;
          } else if (value < this.min) {
            this.value = DEFAULT_MIN;
          } else if (value > this.max){
            this.value = this.max;
          }
        } else {
          if (value >= this.min) {
            this.value = value;
          } else {
            this.value = DEFAULT_MIN;
          }
        }
      }
    },
    setValue: function (newValue) {
      this._setValue(newValue);
    },
    getValue: function () {
      return this.value || 0;
    }
  }
});

Vue.component('t-number-stepper', NumberStepper);
export default NumberStepper;
</script>
