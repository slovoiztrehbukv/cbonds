<template>
  <div class="cbonds-table" v-if="isReady">
    <div class="cbonds-search-bar">
      <input
        class="form-group cbonds-search-bar__input"
        placeholder="Фильтровать по имени"
        type="text"
        v-model="needle"
        @input="search"
      >
    </div>

    <table class="table">
      <thead class="cbonds-thead">
        <th>Товар</th>
        <th>Цена</th>
        <th></th>
      </thead>

      <cbonds-table-item
        v-for="product in activeProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        @product:remove="deleteProductFromCurArr"
      />


    </table>


    <div class="cbonds-table-pagination">
      <div class="cbonds-table-pagination__select"
        v-for="page in pagesTtl"
        :class="{ active:isActive(page) }"
        :key="page"
        @click="pageSelect(page)"
      >
        {{ page }}
      </div>
    </div>

  </div>

  <div class="cbonds-preloader" v-else>
    <div id="cube-loader">
     <div class="caption">
       <div class="cube-loader">
         <div class="cube loader-1"></div>
         <div class="cube loader-2"></div>
         <div class="cube loader-4"></div>
         <div class="cube loader-3"></div>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
  import cbondsTableItem from './cbonds-table-item'
  import cbondsTablePagination from './cbonds-table-pagination'

  export default {
    name: 'cbonds-table',
    data () {
      return {
        allProducts: [],
        curProducts: [],
        isReady: false,
        prodsPerPage: 25,
        curPage: 1,
        needle: ''
      }
    },
    components: {
      cbondsTableItem,
      cbondsTablePagination
    },
    mounted () {
      this.getProducts()
    },
    methods: {
      getProducts () {
        fetch('/get-prods')
          .then(response => response.json())
          .then(json => (this.allProducts = json))
          .then(() => (this.curProducts = this.allProducts))
          .then(() => (this.isReady = true))

      },
      pageSelect (page) {
        this.curPage = page
      },
      isActive (page) {
        return this.curPage == page
      },
      search () {
        this.curProducts = this.allProducts.filter(prod => ( prod.name.indexOf(this.needle) !== -1 ) )
      },
      deleteProductFromCurArr (prodId) {
        let cleanArr = this.allProducts.filter(prod => (prod.id != prodId))
        this.allProducts = cleanArr
        this.getProducts()
      }
    },
    computed: {
      pagesTtl () {
        return Math.ceil(this.curProducts.length / this.prodsPerPage)
      },

      activeProducts () {
        let start = (this.curPage - 1) * this.prodsPerPage
        let end = start + this.prodsPerPage

        return this.curProducts.slice(start,end)
      }

    }
  }
</script>

<style>
  .cbonds-thead:hover {
    /* background-color: #eee; */
  }

  #cube-loader {
    align-items: center;
    display: flex;
    position: fixed;
  }
  #cube-loader .caption {
    margin: 0 auto;
  }
  #cube-loader .cube-loader {
    width: 73px;
    height: 73px;
    margin: 0 auto;
    margin-top: 49px;
    position: relative;
    transform: rotateZ(45deg);
  }
  #cube-loader .cube-loader .cube {
    position: relative;
    transform: rotateZ(45deg);
    width: 50%;
    height: 50%;
    float: left;
    transform: scale(1.1);
  }
  #cube-loader .cube-loader .cube:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0b906f;
    animation: cube-loader 2.76s infinite linear both;
    transform-origin: 100% 100%;
  }
  #cube-loader .cube-loader .loader-2 {
    transform: scale(1.1) rotateZ(90deg);
  }
  #cube-loader .cube-loader .loader-3 {
    transform: scale(1.1) rotateZ(180deg);
  }
  #cube-loader .cube-loader .loader-4 {
    transform: scale(1.1) rotateZ(270deg);
  }
  #cube-loader .cube-loader .loader-2:before {
    animation-delay: 0.35s;
  }
  #cube-loader .cube-loader .loader-3:before {
    animation-delay: 0.69s;
  }
  #cube-loader .cube-loader .loader-4:before {
    animation-delay: 1.04s;
  }
  @keyframes cube-loader {
    0%, 10% {
      transform: perspective(136px) rotateX(-180deg);
      opacity: 0;
    }
    25%, 75% {
      transform: perspective(136px) rotateX(0deg);
      opacity: 1;
    }
    90%, 100% {
      transform: perspective(136px) rotateY(180deg);
      opacity: 0;
    }
  }

  .cbonds-table-pagination {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    width: 400px;
    margin: 30px auto;
  }

  .cbonds-table-pagination__select {
    cursor: pointer;
    text-decoration: underline;
    margin: 0 20px;
  }

  .cbonds-table-pagination__select.active {
    color: #6abaec;
  }

  .cbonds-search-bar {
    width: 50%;
    margin: 20px 0;
    /* margin: 0 auto; */
  }
  .cbonds-search-bar__input {
    width: 100%;
    padding: 0 6px;
    margin: 0;
  }

</style>
