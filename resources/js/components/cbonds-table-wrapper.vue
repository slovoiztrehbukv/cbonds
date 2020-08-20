<template>
	<div class="cbonds-table-wrapper">
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
			<v-link href="/" class="navbar-brand">CBONDS</v-link>
			<v-link href="/new-product" class="navbar-brand">Добавить товар</v-link>
			<v-link href="/task" class="navbar-brand">Задача</v-link>
	</nav>


		<cbonds-search />
		<table class="table">
			<thead>
				<th> Продукт </th>
				<th> Цена </th>
			</thead>

			<tr
				v-for="product in activeProducts"
				:key="product.id"
			>
				<td>{{product.name}}</td>
				<td>{{product.price}}</td>
			</tr>

		</table>
		<cbonds-pagination />
	</div>
</template>

<script>
	import cbondsPagination from './cbonds-pagination'
	import cbondsSearch from './cbonds-search'

	import VLink from './cbonds-v-link'

	export default {
		name: 'cbonds-table-wrapper',
		data () {
			return {
				allProducts: [],
				activeProducts: [],
				productsPerPage: 25,
				curPage: 1,
				totalPages: 1
			}
		},
		methods: {
			getProducts () {
				axios.get('/get-prods').then((response) => {
					this.allProducts = response.data
					this.activeProducts = response.data
				});
			}

		},
		mounted() {
			console.log(VLink)
			this.getProducts()
		},
		components: {
			cbondsPagination,
			cbondsSearch,
			VLink
		}
	}
</script>


<style lang="scss">
.cbonds-table-wrapper {
	th {
		td{
			font-size: 20px;
		}
	}
}
</style>
