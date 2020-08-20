require('./bootstrap')

window.Vue = require('vue')

import cbondsTableWrapper from './components/cbonds-table-wrapper'

import routes from './routes.js'


const vm = new Vue({
	el: '#app',
	components: {
		cbondsTableWrapper
	},
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent() {
			return routes[this.currentRoute]
		}
	},
	render (p) {return p(this.ViewComponent)}
})

window.addEventListener('popstate', () => {
  vm.currentRoute = window.location.pathname
})
