import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '~/components/HelloWorld'
import CityList from "~/components/page/city"
Vue.use(Router)

export default new Router({
	mode:"history",
	routes: [
		{
		  path: '/',
		  name: 'HelloWorld',
		  component: HelloWorld
		},{
			path:'/city',
			component:CityList
		}
	]
})
