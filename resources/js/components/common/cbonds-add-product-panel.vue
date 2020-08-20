<template>
  <div class="cbonds-wrapper">

    <cbonds-top-nav-bar />

    <label class="cbonds-add-product-panel__label">
      Наименование товара
      <input
        class="form-group cbonds-add-product-panel__input"
        type="text"
        v-model="name"
      >
    </label>

    <label class="cbonds-add-product-panel__label">
      Цена товара
      <input
        class="form-group cbonds-add-product-panel__input"
        type="number"
        min="0"
        v-model="price"
      >
    </label>

    <button
      class="btn btn-primary cbonds-btn"
      @click="addProduct"
    >
      Добавить товар
    </button>
    <cbonds-footer />
  </div>
</template>

<script>
  import cbondsTopNavBar from '../header/cbonds-top-nav-bar'
  import cbondsFooter from '../footer'

  export default {
    name: 'cbonds-task',
    components: {cbondsTopNavBar,cbondsFooter},
    data () {
      return {
        name: '',
        price: 0
      }
    },
    methods: {
      addProduct () {
        if(this.name.length < 2){
          alert('Название товара не может быть меньше 2 символов!')
          return
        }

        fetch(`/products`,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
          },
          body: JSON.stringify({
            name: this.name,
            price: this.price
          })
        })
          .then(response => (response.ok
            ? alert('Товар успешно создан!')
            : alert('Упс, ошибка...')
          ))
          .then(() => this.goHome())

      },
      goHome () {
        this.$root.currentRoute = '/'
        window.history.pushState(
          null,
          '/'
        )
      }
    }
  }
</script>

<style>
  .cbonds-add-product-panel__label {
    display: block;
    margin-bottom: 12px;
  }
  .cbonds-add-product-panel__input {
    display: block;
  }
</style>
