import Vue from 'vue';
import TDropDown from 'taurus/components/dropdown/select-dropdown.vue';

new Vue({
  el: '#select_drop_down_wrapper',
  components: {
    TDropDown
  },
  data: {
    recommends: [
      {
        'text': 'Push-Communication',
        'id': 1
      },
      {
        'text': 'Trouble-Ticket',
        'id': 2
      },
      {
        'text': 'Campaign',
        'id': 3
      },
      {
        'text': 'Customer-Management',
        'id': 4
      },
      {
        'text': 'C3',
        'id': 5
      }
    ],
    disabled: false
  },
  methods: {
    getSelDropDownValue: function () {
      alert(this.$refs.mySelectDropdown.getValue());
    },
    getSelDropDownText: function () {
      alert(this.$refs.mySelectDropdown.getText());
    },
    setSelDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySelectDropdown.setValue(value);
    },
    clearDropDown: function () {
      this.$refs.mySelectDropdown.clear();
    },
    enableDropDown: function () {
      this.$refs.mySelectDropdown.enable();
    },
    disableDropDown: function () {
      this.$refs.mySelectDropdown.disable();
    },
    onValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    onShowPanel: function () {
      console.log('Panel Show');
    },
    onHidePanel: function () {
      console.log('Panel Hide');
    }
  }
});
