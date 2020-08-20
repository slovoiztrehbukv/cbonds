<template>
  <div class="cbonds-header">
    <cbonds-top-nav-bar />
    <cbonds-add-product-btn />
  </div>
</template>

<script>

  import cbondsTopNavBar from './header/cbonds-top-nav-bar'
  import cbondsAddProductBtn from './header/cbonds-add-product-btn'


  export default {
    name: 'cbonds-header',
    components: {
      cbondsTopNavBar,
      cbondsAddProductBtn
    }
  }

</script>

<style>
  .cbonds-header {
    position: relative;
  }
</style>
