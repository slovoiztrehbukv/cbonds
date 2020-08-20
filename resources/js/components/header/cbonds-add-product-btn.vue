<template>
  <div class="cbonds-add-product-btn">
    <v-link href="/add-product" class="cbonds-add-product-btn__link"><i class="fa fa-plus-circle cbonds-add-product-btn__btn" aria-hidden="true"></i></v-link>
  </div>
</template>

<script>
  import VLink from '../common/cbonds-v-link'

  export default {
    name: 'cbonds-add-product-btn',
    components: {
      VLink
    }
  }
</script>

<style>
  .cbonds-add-product-btn__link {
    display: table;
    position: absolute;
    right: 60px;
    bottom: -52px;
    font-size: 4rem;
    color: #0b906f;
    transition: 0.3s;
  }

  .cbonds-add-product-btn__btn {
    display: table-row;
    background-color: #fff;
  }

  .cbonds-add-product-btn__link:hover {
    transform: scale(1.1);
    color: #0b906f;
    outline: none;
    text-decoration: none;
  }
</style>
