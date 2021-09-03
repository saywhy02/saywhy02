import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login';
import Nav from '../components/Nav';
import Map from '../view/Map';
import ProductionBase from '../view/DataResource/ProductionBase';
// import ProductionInformationBase from '../view/DataResource/ProductionInformationBase';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/',
            name: 'nav',
            component: Nav,
            children: [
                { path: 'Map', name: 'Map', component: Map },
                {
                    path: '/DataResource/ProductionBase',
                    name: 'ProductionBase',
                    component: ProductionBase,
                },
                // {
                //     path: '/DataResource/ProductionInformationBase',
                //     name: 'ProductionInformationBase',
                //     component: ProductionInformationBase,
                // },
            ],
        },
    ],
});
