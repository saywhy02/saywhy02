import Vue from 'vue'
import Router from 'vue-router'
import Nav from '../components/Nav'
import Map from "../view/Map"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'nav', 
      component: Nav,
      children:[
        {path:"Map",name:"Map",component:Map}
      ]
    },
    {
      path:"/"
    }
  ]
})
