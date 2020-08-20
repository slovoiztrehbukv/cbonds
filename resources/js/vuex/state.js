import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);


const state = new  Vuex.Store({
	state: {
		allProducts: [],
		activeProducts: []
	},
	actions: {
		GET_ALL_PRODUCTS({commit}) {
			return axios('/get-prods', {
				method: 'GET',

			}).then( (response) => {
				commit('STORE_PRODUCTS', response.data);
			} );
		}
	},
	mutations:{
		STORE_PRODUCTS: (state, allProducts) => {
			state.allProducts = allProducts;
		}
	},
	getters: {

	}
})

export default state;