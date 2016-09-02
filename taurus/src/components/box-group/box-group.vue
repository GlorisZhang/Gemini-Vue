<template>
  <ul class="form-item {{ inlineClass }} {{ marginTopClass }}">
    <component :is="compType" v-for="item in labels" :idx="$index"></component>
  </ul>
</template>
<script>
import Vue from 'vue';
import Checkbox from './checkbox';
import Radiobox from './radiobox';
import CheckboxFilter from './checkbox-filter';

const CSS_INLINE = 'form-inline';
const CSS_MARGIN_TOP = 'form-row';
const SIZE_NORMAL = 'normal';
const TYPE_CHECKBOX = 'checkbox';
const TYPE_RADIOBOX = 'radiobox';
const TYPE_CHECKBOX_FILTER = 'checkbox-filter';
const DEF_VALUE = '-';

var seed = 0;

function nextName () {
  return 'tau-box-name' + seed++;
}

var BoxGroup = Vue.extend({
  name: 'taurus-box-group',
  components: {
    't-checkbox': Checkbox,
    't-radiobox': Radiobox,
    't-checkbox-filter': CheckboxFilter
  },
  created: function () {
    var count = 0;
    var i;
    if (this.type === TYPE_CHECKBOX_FILTER && this.total === true) {
      this.counts.forEach(function (item, index) {
        count += item;
      });
      this.counts = [count].concat(this.counts);
      this.labels = [this.total_label].concat(this.labels);
      if (this.total_checked) {
        for (i = this.labels.length - 1; i >= 1; i--) {
          this.checked[i] = false;
        }
        this.checked[0] = true;
      } else {
        this.checked[0] = false;
      }
    }
  },
  ready: function () {
    var children = this.$children;
    var i;
    var count = children.length;
    var itemName = nextName();
    for (i = count - 1; i >= 0; i--) {
      children[i].label = this.labels[i] || '';
      children[i].itemName = itemName;
      children[i].size = this.size || SIZE_NORMAL;
      children[i].disabled = this.disabled[i] || false;
      children[i].value = (this.values[i] === DEF_VALUE ? '' : this.values[i]);
      children[i].checked = this.checked[i] || false;
      children[i].count = this.counts[i] || 0;
    }
  },
  events: {
    'radio-item-check': function (index) {
      this._changeCheckState(index, true);
    }
  },
  props: {
    type: {
      default: TYPE_CHECKBOX,
      type: String
    },
    size: {
      defautl: SIZE_NORMAL,
      type: String
    },
    total: {
      default: false,
      type: Boolean,
      coerce: function (value) {
        return (value === 'true' || value === '1');
      }
    },
    total_label: {
      default: 'All',
      type: String
    },
    total_checked: {
      default: '0',
      type: Boolean,
      coerce: function (value) {
        return (value === 'true' || value === '1');
      }
    },
    disabled: {
      default: function () {
        return '0';
      },
      type: Array,
      coerce: function (value) {
        var arr,
          i,
          item;
        if (typeof value === 'string' && value !== '') {
          arr = value.split(',');
          for (i = arr.length - 1; i >= 0; i--) {
            item = arr[i];
            arr[i] = (item === 'false' || item === '0') ? false : !!item;
          }
          return arr;
        }
      }
    },
    mtop: {
      type: Boolean,
      default: function () {
        return '0';
      },
      coerce: function (value) {
        if (value === 'false' || value === '0') {
          return false;
        }
        return true;
      }
    },
    inline: {
      type: Boolean,
      default: function () {
        return '0';
      },
      coerce: function (value) {
        if (value === 'false' || value === '0') {
          return false;
        }
        return true;
      }
    },
    labels: {
      default: function () {
        return 'Untitled';
      },
      type: Array,
      coerce: function (value) {
        if (typeof value === 'string' && value !== '') {
          return value.split(',');
        }
      }
    },
    counts: {
      default: function () {
        return '0';
      },
      type: Array,
      coerce: function (value) {
        var arr, i;
        if (typeof value === 'string' && value !== '') {
          arr = value.split(',');
          for (i = arr.length - 1; i >= 0; i--) {
            arr[i] = parseInt(arr[i], 10);
          }
          return arr;
        }
      }
    },
    values: {
      default: function () {
        return DEF_VALUE;
      },
      type: Array,
      coerce: function (value) {
        if (typeof value === 'string' && value !== '') {
          return value.split(',');
        }
      }
    },
    checked: {
      default: function () {
        return '0';
      },
      type: Array,
      coerce: function (value) {
        var arr,
          i,
          item;
        if (typeof value === 'string' && value !== '') {
          arr = value.split(',');
          for (i = arr.length - 1; i >= 0; i--) {
            item = arr[i];
            arr[i] = (item === 'false' || item === '0') ? false : !!item;
          }
          return arr;
        }
      }
    }
  },
  computed: {
    compType: function () {
      if (this.type === TYPE_CHECKBOX_FILTER) {
        return 't-checkbox-filter';
      } else if (this.type === TYPE_RADIOBOX) {
        return 't-radiobox';
      } else {
        return 't-checkbox';
      }
    },
    inlineClass: function () {
      if (this.type === TYPE_CHECKBOX_FILTER) {
        return CSS_INLINE;
      } else {
        return (this.inline === true) ? CSS_INLINE : '';
      }
    },
    marginTopClass: function () {
      return (this.mtop === true) ? CSS_MARGIN_TOP : '';
    }
  },
  methods: {
    /**
     * 切换勾选状态
     * @param {Number} index 复选框序号，序号从0开始，顺序是从左至右、从上至下
     * @param {Boolean} [checked] 为true表示勾选，为false表示取消勾选，不传表示当前勾选状态取反
     */
    _changeCheckState: function (index, checked) {
      var children;
      if (index === undefined) {
        this.$children.forEach(function (item, index) {
          if (checked === true) {
            item.check();
          } else if (checked === false) {
            item.uncheck();
          } else {
            item.toggle();
          }
        });
      } else {
        children = this.$children[index];
        if (children) {
          this.$broadcast('toggle-check-state', children, checked);
        }
      }
    },
    toggle: function (index) {
      this._changeCheckState(index);
    },
    check: function (index) {
      this._changeCheckState(index, true);
    },
    uncheck: function (index) {
      this._changeCheckState(index, false);
    },
    /**
     * 设置或返回总数，仅在checkbox-filter类型时有效
     *
     * 1. 当没传任何参数时返回所有复选框总数数组；如：
     *
     * this.$refs.myTag.count();
     *
     * 2. 当仅传递index时，如果index是数值，那么返回该索引对应的总数，
     * 如果index是数组，那么返回此数组内每一个有效的索引对应的总数；如：
     *
     * this.$refs.myTag.count(1); // 返回第二个复选框对应的总数
     * this.$refs.myTag.count([0, 1, 2]); // 返回前三个复选框对应的总数数组
     *
     * 3. 当传递了有效索引index和数值num时，将设置该索引对应复选框的总数；如：
     *
     * this.$refs.myTag.count(2, 99); // 将第三个复选框的总数设置为99
     *
     * 4. 当传递了索引数组index和总数数组num时，将设置索引数组内每一个有效索引
     * 对应的总数；如：
     *
     * // 分别将第三、四、五个复选框的总数设置为99、98和10
     * this.$refs.myTag.count([2, 3, 4], [99, 98, 10]);
     *
     * @param  {Number|Array} [index] 复选框索引或索引数组
     * @param  {Number|Array} [num]   复选框显示总数值或总数值数组
     * @return {Array} 返回值情况参见描述
     */
    count: function (index, num) {
      var i, seq, len, children, result;
      if (this.type === TYPE_CHECKBOX_FILTER) {
        children = this.$children;
        len = children.length;
        if (index !== undefined) {
          if (typeof index === 'number') {
            if (index >= 0 && index < len) {
              if (num === undefined) {
                return [children[index].count];
              } else if (typeof num === 'number') {
                children[index].count = num;
              }
            }
          } else if (Array.isArray(index) === true) {
            if (num === undefined) { // 返回给定索引对应的总数
              result = [];
              for (i = index.length - 1; i >= 0; i--) {
                seq = index[i];
                if (seq >= 0 && seq < len) { // 序号不在范围内将被跳过
                  result.push(children[seq].count);
                }
              }
              return result;
            } else if (Array.isArray(num) === true && index.length === num.length) {
              for (i = index.length - 1; i >= 0; i--) {
                seq = index[i];
                if (typeof seq === 'number' && typeof num[i] === 'number') {
                  if (seq >= 0 && seq < len) { // 序号不在范围内将被跳过
                    children[seq].count = num[i];
                  }
                } else {
                  continue; // 非数值项将被跳过
                }
              }
            }
          }
        } else if (num === undefined) { // 返回所有总数
          result = [];
          children.forEach(function (item, idx) {
            result.push(item.count);
          });
          return result;
        }
      }
    },
    _changeUsability: function (index, disabled) {
      var children;
      if (index === undefined) {
        this.$children.forEach(function (item, index) {
          if (disabled === true) {
            item.disable();
          } else {
            item.enable();
          }
        });
      } else {
        children = this.$children[index];
        if (children) {
          this.$broadcast('toggle-usability', children, disabled);
        }
      }
    },
    enable: function (index) {
      this._changeUsability(index, false);
    },
    disable: function (index) {
      this._changeUsability(index, true);
    },
    isChecked: function (index) {
      var children;
      var result = [];
      if (index === undefined) {
        this.$children.forEach(function (item, index) {
          result.push(item.checked);
        });
      } else {
        children = this.$children[index];
        if (children) {
          result.push(children.checked);
        }
      }
      return result;
    },
    value: function (index) {
      var children;
      var result = [];
      if (index === undefined) {
        this.$children.forEach(function (item, index) {
          result.push(item.value);
        });
      } else {
        children = this.$children[index];
        if (children) {
          result.push(children.value);
        }
      }
      return result;
    }
  }
});

Vue.component('t-box-group', BoxGroup);

module.exports = BoxGroup;
</script>
