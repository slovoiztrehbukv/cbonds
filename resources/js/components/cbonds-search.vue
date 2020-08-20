<template>
	<div class="cbonds-search">
		<input
				class="form-group"
				type="text"
				placeholder="Отфильтровать"
				@input="filterProds"
		>
	</div>
</template>

<script>
	export default {
		methods: {
			filterProds () {
				console.log(this)
			}
		}
	}
</script>

<style>

</style>
