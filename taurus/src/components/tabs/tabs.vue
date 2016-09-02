<template>
  <div class="tabpanel display--inline-block mobile-display--block">
    <ul class="tabgroup clear trailer" :class="{'tabgroup--small': small}">
      <li class="tabgroup__tab" v-for="tab in tabs" :class="{'is-active': tab === currentTab}">
        <a class="tabgroup__link" href="javascript:void(0);" @click="changeTab(tab)">{{tab}}</a>
      </li>
    </ul>

    <!-- TODO: replace this by select component -->
    <div class="form-select" v-if="!small">
      <select v-model="currentTab">
        <option v-for="tab in tabs" :value="tab">{{tab}}</option>
      </select>
      <div class="form-select__field">{{currentTab}}</div>
    </div>

    <div class="tabpanel__content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      small: {
        type: Boolean,
        default: false
      },
      // ['home', 'about', 'contact']
      tabs: {
        type: Array,
        required: true,
        validator: function (value) {
          return value && value.length > 0;
        }
      },
      // [{type: 'home', id: 'my_home'}]
      content: {
        type: Array,
        required: true
      },
      // $index_0 is active by default
      tabActive: {
        type: String,
        required: false
      }
    },

    data () {
      return {
        currentTab: ''
      };
    },

    watch: {
      currentTab: function (val, oldVal) {
        this._toggleContentByTab(oldVal);
        this._toggleContentByTab(val);
      }
    },

    methods: {
      _hideAllContents: function () {
        for (let i = 0; i < this.content.length; i++) {
          let item = this.content[i];
          var element = document.getElementById(item.id);
          if (element) {
            element.classList.remove('is-active');
          }
        }
      },

      _getContentByTab: function (tab) {
        for (let i = 0; i < this.content.length; i++) {
          let item = this.content[i];
          if (item.type === tab) {
            return item.id;
          }
        }
        return null;
      },

      _toggleContentByTab: function (tab) {
        var element = document.getElementById(this._getContentByTab(tab));
        if (element) {
          element.classList.toggle('is-active');
        }
      },

      changeTab: function (tab) {
        this.currentTab = tab;
      }
    },

    ready () {
      // clean up
      this._hideAllContents();

      // init current tab
      this.currentTab = this.tabActive;
      if (!this.currentTab) {
        this.currentTab = this.tabs[0];
      }
    }
  };
</script>

<style>
  /*TODO: move these to global css file*/

  .tabpanel .form-select {
    display: none;
  }

  @media only screen and (max-width: 37.438em) {
    .tabpanel .form-select {
      display: block;
    }

    .tabpanel .tabgroup:not(.tabgroup--small) {
      display: none;
    }
  }
</style>
