<template>
  <div id="{{nextId}}" class="dropdown select--dropdown stretch-mobile" :class="[this.isOpen ? 'is-open' : '', this.disabled ? 'disabled' : '']" @click.stop.prevent="showDropList">
    <div class="dropdown__label">
      <div class="text-truncate" data-value="{{selectedValue}}">
        {{selectedLabel}}
      </div>
      <span class="icon-arrow-down"></span>
    </div>
    <div class="dropdown__content">
      <div class="dropdown__scroll">
        <!--loading-->
        <div class="js-hidden padding-leader--small padding-trailer--small">
          <span class="load-tester">
            <span class="spinner"></span>
          </span>
        </div>
        <!--loading-end-->
        <!-- message error-->
        <div class="message message--error" :class="this.isError ? '' : 'is-hidden'">
          <div class="message__inner">
            <span class="message__icon icon icon-reject"></span>
            <div class="text-size--13 message__text">
              <p>An error happened. Please try again later.</p>
            </div>
          </div>
        </div>
        <!-- message error-end-->
        <ul class="dropdown__list">
          <li data-value="{{listItem.value}}" v-for="listItem in list" @click.stop="echoSelectedValue(listItem.value)">
            <a class="media media--small" href="#nogo">
              <div class="media__body">
                <div class="text-truncate">
                  {{listItem.label}}
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

const EMPTY_VALUE = -1;
const EMPTY_STRING = '';

var seed = 0;

var selectDropDown = Vue.component('taurus-select-dropdown', {
  data: function () {
    return {
      list: [],
      isOpen: false,
      isError: false
    }
  },
  props: {
    responsedata: {
      default:
        function () {
          return [];
        },
      required: true,
      type: Array
    },
    label: {
      default:
        'label',
      type: String
    },
    value: {
      default:
        'value',
      type: String
    },
    emptylabel: {
      default: EMPTY_STRING,
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  created: function () {
    var processedData = this._processResponseData(this.responsedata);

    this.list = processedData;
    //给document绑定click事件关闭dropList
    document.addEventListener('click', function () {
      this.isOpen = false;
      //列表关闭同时触发on-hide-panel的回调,处理相关操作
      this.$emit('on-hide-panel');
    }.bind(this), false);
  },
  computed: {
    selectedLabel: function () {
      var selectedObj = this._getSelectedData();
      return selectedObj ? selectedObj.label: this.emptylabel ? this.emptylabel : EMPTY_STRING;
    },
    selectedValue: function () {
      var selectedObj = this._getSelectedData();
      return selectedObj ? selectedObj.value: this.emptylabel ? EMPTY_VALUE : EMPTY_STRING;
    },
    nextId: function () {
      return 'tau_sel_dd_' + seed++;
    }
  },
  methods: {
    getValue: function () {
      return this.selectedValue;
    },
    getText: function () {
      return this.selectedLabel;
    },
    setValue: function (value) {
      var selectedObj = this._setSelectedData(value);
      this.selectedLabel = selectedObj ? selectedObj.label: EMPTY_STRING;
      this.selectedValue = selectedObj ? selectedObj.value: EMPTY_STRING;
    },
    clear: function () {
      this.isOpen = false;
      this.selectedLabel = EMPTY_STRING;
      this.selectedValue = EMPTY_STRING;
      this._clearData();
    },
    enable: function () {
      this.disabled = false;
    },
    disable: function () {
      this.isOpen = false;
      this.disabled = true;
    },
    showDropList: function () {
      //如果是禁用状态，禁止点击并且不展示DropList(为了兼容IE9,10)
      if (this.disabled) {
        return;
      }
      if (this.isOpen) {
        this.isOpen = false;
        //列表关闭同时触发on-hide-panel的回调,处理相关操作
        this.$emit('on-hide-panel');
      } else {
        this.isOpen = true;
        //列表展示同时触发on-show-panel的回调,处理相关操作
        this.$emit('on-show-panel');
      }
    },
    echoSelectedValue: function (currentValue) {
      for (var i = 0; i < this.list.length; i++) {
        var listItem = this.list[i];
        if (currentValue === listItem['value']) {
          listItem['active'] = true;
        } else {
          listItem['active'] = false;
        }
      }
      //标志isOpen为false，关闭dropList
      this.isOpen = false;
    },
    _processResponseData: function (data) {
      var tempArr = [];
      if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
          var tempObj = {};
          tempObj['label'] = data[i][this.label];
          tempObj['value'] = data[i][this.value];
          tempObj['active'] = false;
          tempArr.push(tempObj);
        }
        if(this.emptylabel){
          tempArr.unshift({
            label: this.emptylabel,
            value: EMPTY_VALUE,
            active: true
          });
        }
        this.isError = false;
      } else {
        this.isError = true;
        return;
      }
      return tempArr;
    },
    _getSelectedData: function () {
      var selectedObj;
      if (this.list && this.list.length > 0) {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i]['active']) {
            selectedObj = this.list[i];
          }
        }
      }
      return selectedObj;
    },
    _setSelectedData: function (value) {
      var selectedObj;
      if (this.list && this.list.length > 0) {
        for (var i = 0; i < this.list.length; i++) {
          if (Number(this.list[i]['value']) === Number(value)) {
            this.list[i]['active'] = true;
            selectedObj = this.list[i];
          } else {
            this.list[i]['active'] = false;
          }
        }
      } else {
        return;
      }
      return selectedObj;
    },
    _clearData: function () {
      if (this.list && this.list.length > 0) {
        for (var i = 0; i < this.list.length; i++) {
          this.list[i]['active'] = false;
        }
      }
    }
  },
  watch: {
    selectedValue: function (newValue, oldValue) {
      this.$emit('on-value-change', newValue, oldValue);
    }
  }
});

module.exports = selectDropDown;
</script>
