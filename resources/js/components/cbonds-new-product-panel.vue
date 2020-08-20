<template>
	<div class="cbonds-products-management">
		<div class="cbonds-products-management__panel">
			<button class="btn btn-primary">Новый товар</button>
		</div>
		<cbonds-search />

	</div>
</template>

<script>
	import cbondsSearch from './cbonds-search'

	export default {
		components: {
			cbondsSearch
		}
	}
</script>

<style>
	.cbonds-products-management__panel {
		padding: 10px 0;
	}
</style>
