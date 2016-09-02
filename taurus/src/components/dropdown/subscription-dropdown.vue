<template>
  <div class="dropdown dropdown--subscriptions">
    <div class="dropdown__label ">
      <div class="text-truncate">All items (3)</div>
      <span class="icon-arrow-down"></span>
    </div>
    <div class="dropdown__content">
      <div class="dropdown__filter">
        <form action="">
          <input name="" type="hidden" value="">
          <div class="is-empty">
            <input class="dropdown__search" id="" name="" placeholder="Search" type="text" v-model="searchValue">
            <button class="icon-clear"></button>
          </div>
        </form>
      </div>
      <div class="dropdown__scroll">
        <!--loading-->
        <div class="js-hidden padding-leader--small padding-trailer--small">
          <span class="load-tester">
              <span class="spinner"></span>
          </span>
        </div>
        <!--loading-end-->
        <!-- message error-->
        <div class="message message--error is-hidden">
          <div class="message__inner">
            <span class="message__icon icon icon-reject"></span>
            <div class="text-size--13 message__text">
              <p>An error happened. Please try again later.</p>
            </div>
          </div>
        </div>
        <!-- message error-end-->
        <ul class="dropdown__list">
          <li>
            <a class="media media--small" href="#nogo">
              <div class="media__image leader--xsmall">
                <span class="icon-person"></span>
              </div>
              <div class="media__body">
                <div class="text-truncate">Jannik Mørch Søndergaard</div>
                <div class="text-truncate color-gray">Jannik Mørch Søndergaard (32108000158128)</div>
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

  var subscriptionDropDown = Vue.component('taurus-subscription-dropdown', {
    data: function () {
      return {
        list: []
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
      }
    },
    created: function () {

    },
    computed: {

    },
    methods: {

    }
  });

  module.exports = subscriptionDropDown;
</script>
