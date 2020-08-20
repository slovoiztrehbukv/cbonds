<template>
  <div class="cbonds-top-nav-bar">
    <nav>
      <v-link href="/" class="navbar-brand">Товары</v-link>
      <v-link href="/task" class="navbar-brand navbar-brand__right">ТЗ</v-link>
    </nav>
  </div>
</template>

<script>
  import VLink from '../common/cbonds-v-link'

  export default {
    name: 'cbonds-top-nav-bar',
    components: {
      VLink
    }
  }
</script>

<style>
  .cbonds-top-nav-bar {
    margin-bottom: 20px;
  }
  .navbar-brand {
    color: #6abaec;
  }

  .navbar-brand:hover {
    color: #345d7c;
    text-decoration: none;
  }
  .navbar-brand__right {
    float: right;
    color: #b5b5b5;
  }

</style>
