<template>
  <div class="tabpanel" :id="id">
    <ul class="tabpanel__list trailer" :class="{'tabpanel__list--many': manyItemsActive}">

      <li class="tabpanel__tab" v-for="tab in tabs" :class="{'is-active': tab === currentTab}">
        <a class="tabpanel__link" href="javascript:void(0);" @click="changeTab(tab)">{{tab}}</a>
      </li>

      <li v-if="shouldShowMore" class="tabpanel__tab flexnav"
          :class="{'is-open': isMoreOpen}" :style="{width: moreWidth + 'px'}">
        <a href="javascript:void(0);" class="tabpanel__link flexnav__toggler" @click.stop.prevent="toggleMore">More</a>
        <ul class="flexnav__subnav">
          <li class="tabpanel__tab flexnav--active-tab" v-for="moreTab in moreTabs">
            <a class="tabpanel__link" href="javascript:void(0);" @click="changeTab(moreTab)">
              {{moreTab}}
            </a>
          </li>
        </ul>
      </li>
    </ul>

    <!-- TODO: replace this by select component -->
    <div class="form-select" v-if="manyItems">
      <select v-model="currentTab">
        <option v-for="tab in allTabs" :value="tab">{{tab}}</option>
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
      manyItems: {
        type: Boolean,
        default: false
      },
      tabs: {
        type: Array,
        required: true
      },
      content: {
        type: Array,
        required: true
      },
      tabActive: {
        type: String,
        required: false
      }
    },

    data () {
      return {
        allTabs: [],
        moreTabs: [],
        tabsWidth: [],
        currentTab: '',
        isMoreOpen: false,
        shouldShowMore: false,
        manyItemsActive: false,
        marginKeep: 2,
        moreWidth: 92,
        clientWidth: 0
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
          let element = document.getElementById(item.id);
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
        let element = document.getElementById(this._getContentByTab(tab));
        if (element) {
          element.classList.toggle('is-active');
        }
      },

      _recordTabsWidth: function () {
        let tabItems = this.$el.firstElementChild.children;
        for (let i = 0; i < tabItems.length; i++) {
          this.tabsWidth.push(tabItems[i].offsetWidth);
        }
      },

      _maxLayoutTabs: function () {
        let max = 0;
        let canLayoutMoreTab = false;
        let width = 0;

        for (let i = 0; i < this.tabsWidth.length; i++) {
          width += this.tabsWidth[i];
          if (width <= this.clientWidth - this.marginKeep) {
            max++;
            continue;
          }

          // 是否可容纳 More Tab
          if ((width - this.tabsWidth[i] + this.moreWidth <= this.clientWidth - this.marginKeep)) {
            canLayoutMoreTab = true;
            break;
          }
        }
        return { max, canLayoutMoreTab };
      },

      _retractTabs: function () {
        let { max, canLayoutMoreTab } = this._maxLayoutTabs();
        let tabItems = this.$el.firstElementChild.children;

        // 可容纳比现有更多的 Tabs, 无需进行 retract 处理
        if (max >= tabItems.length) {
          return;
        }

        // canLayoutMoreTab 时, 可以容纳 More Tab, 少 retract 一个 tab
        if (!canLayoutMoreTab) {
          max -= 1;
        }

        // More Tab 占位 (max - 1)
        for (let i = this.tabs.length - 1; i >= max; i--) {
          let popped = this.tabs.pop();
          this.moreTabs.unshift(popped);
        }

        this.shouldShowMore = true;
      },

      _extractTabs: function () {
        // 当前无 More Tabs, 无需 extract
        if (!this.shouldShowMore) {
          return;
        }

        let { max, canLayoutMoreTab } = this._maxLayoutTabs(true);
        let tabItems = this.$el.firstElementChild.children;
        let tabs2Extract = max - tabItems.length + (canLayoutMoreTab ? 1 : 0);
        for (let i = 0; i < tabs2Extract; i++) {
          let popped = this.moreTabs.shift();
          this.tabs.push(popped);
        }

        // 非 canLayoutMoreTab 且 More 下只有一个 item 时
        if (!canLayoutMoreTab && (this.moreTabs.length === 1)) {
          let popped = this.moreTabs.pop();
          this.tabs.push(popped);
          this.shouldShowMore = false;
        }
      },

      _onresize: function () {
        let cw = this.clientWidth;
        this.clientWidth = document.documentElement.clientWidth;

        if (this.clientWidth > cw) {
          this._extractTabs();
        } else {
          this._retractTabs();
        }
      },

      changeTab: function (tab) {
        this.currentTab = tab;
        this.closeMore();
      },

      closeMore: function () {
        this.isMoreOpen = false;
      },

      toggleMore: function () {
        this.isMoreOpen = !this.isMoreOpen;
      }
    },

    created () {
      this.allTabs = this.tabs.slice();
    },

    ready () {
      // clean up and init current tab
      this._hideAllContents();
      this.currentTab = this.tabActive;
      if (!this.currentTab) {
        this.currentTab = this.tabs[0];
      }

      // record tabs width (for extracting)
      this._recordTabsWidth();
      // make sure to call this after '_recordTabsWidth'
      this.manyItemsActive = this.manyItems;

      // init client width
      this.clientWidth = document.documentElement.clientWidth;
      // retract tabs on small scrren
      this._retractTabs();
      // handle window resize event
      window.addEventListener('resize', this._onresize, false);

      // handle window click event
      window.addEventListener('click', this.closeMore, false);
    }
  }
  ;
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

    .tabpanel .tabpanel__list.tabpanel__list--many {
      display: none;
    }
  }
</style>
