<template>
  <tr class="cbonds-table-item">
    <td v-on:dblclick="editProduct">
      <input
        class="cbonds-table-item__input"
        type="text"
        v-model="meta_name"
        @focusout="focusCheck"
        :disabled="!isEditing"
        >
    </td>

    <td v-on:dblclick="editProduct">
      <input
        class="cbonds-table-item__input"
        type="number"
        v-model="meta_price"
        @focusout="focusCheck"
        :disabled="!isEditing"
        >
    </td>


    <td class="cbonds-table-item__edit_td">
      <i
        class="fa fa-pencil"
        aria-hidden="true"
        @click="editProduct">
      </i>
      <i
        class="fa fa-times"
        aria-hidden="true"
        @click="removeProduct">
      </i>

    </td>
  </tr>
</template>

<script>
  export default {
    name: 'cbonds-table-item',
    props: {
      id: Number,
      name: String,
      price: Number
    },
    data () {
      return {
        meta_name: this.name,
        meta_price: this.price,
        isEditing:false
      }
    },
    methods: {
      editProduct () {
        this.isEditing = true
        this.$el.children[0].children[0].focus()
      },
      removeProduct () {
        fetch(`/products/${this.id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
          },
          body: JSON.stringify({
            id: this.id
          })
        })
          .then(response => ( response.ok
            ? alert(`Товар №${this.id} удалён!`)
            : alert('Упс, ошибка...') ))
          .then(() => this.$emit('product:remove',this.id))

      },
      focusCheck (e) {
        if(e.relatedTarget){
          // continue editing
        }else{
          this.isEditing = false
          this.updProduct()
        }
      },
      updProduct() {
        if(this.meta_name.trim() === '') return false;

        let request =  fetch(`/products/${this.id}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
          },
          body: JSON.stringify({
            id: this.id,
            name: this.meta_name,
            price: this.meta_price
          })
        })

      }
    }

  }
</script>

<style>
  .cbonds-table-item__edit_td {
    transition: 0.3s;
    opacity: 0;
    cursor: pointer;
  }

  .cbonds-table-item:hover {
    background-color: #eee;
  }

  .cbonds-table-item:hover .cbonds-table-item__edit_td {
    opacity: 1;
  }

  .cbonds-table-item__edit_td i {
    margin: 0 6px;
  }

  .cbonds-table-item__edit_td i.fa-times {
    color: #f00;
  }

  .cbonds-table-item__input[disabled] {
    margin: 0;
    padding: 0;
    color: #000;
    border: none;
    background: none;
    outline: none;
  }
</style>
