<template>
  <nav class="ose-breadcrumbs" v-if="breadcrumbs.length">
    <ul>
      <li v-for="(i, crumb) in breadcrumbs">
        <a v-link="crumb.link">{{ crumb.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Breadcrumbs',

    props: {
      breadcrumbs: {
        type: Array,
        required: true,
        default: []
      }
    }
  };
</script>

<style>
  nav {
    font-size: 20px;
  }

  nav.ose-breadcrumbs ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav.ose-breadcrumbs ul li {
    display: inline-block;
  }

  nav.ose-breadcrumbs ul li:before {
    content: '/';
    margin-left: 5px;
  }

  nav.ose-breadcrumbs ul li:first-child:before {
    display: none;
  }
</style>
