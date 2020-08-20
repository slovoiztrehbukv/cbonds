<template>
  <div class="cbonds-wrapper">
    <cbonds-header />
    <cbonds-mid />
    <cbonds-footer />
  </div>
</template>

<script>
  import cbondsHeader from '../header'
  import cbondsMid from '../mid'
  import cbondsFooter from '../footer'

  export default {
    components: {
      cbondsHeader,
      cbondsMid,
      cbondsFooter
    }
  }
</script>

<style>
  .cbonds-wrapper {
    padding: 20px;
  }


  .cbonds-btn,.cbonds-btn:hover,.cbonds-btn:active,.cbonds-btn:focus,.cbonds-btn:focus-within,.cbonds-btn:visited {
    outline: none;
    border: none;
    box-shadow: none;
    background-color: #345d7c;

  }

</style>
