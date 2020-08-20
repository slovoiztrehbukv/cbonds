require('./bootstrap')

window.Vue = require('vue')

import cbondsWrapper from './components/common/cbonds-wrapper'
import cbondsTask from './components/common/cbonds-task'
import cbondsAddProductPanel from './components/common/cbonds-add-product-panel'

import routes from './routes.js'


const vm = new Vue({
	el: '#app',
	components: {
		cbondsWrapper,
		cbondsTask,
		cbondsAddProductPanel
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
