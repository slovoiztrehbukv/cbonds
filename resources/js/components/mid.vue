<template>
  <div class="cbonds-mid">
    <cbonds-table />
  </div>
</template>

<script>

  import cbondsTable from './mid/cbonds-table'



  export default {
    name: 'cbonds-mid',
    components: {
      cbondsTable
    }
  }

</script>

<style>
  .cbonds-mid {
    margin-top: 20px;
  }
</style>
