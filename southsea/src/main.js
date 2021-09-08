// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
// import axios from 'axios';

// Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false;
Vue.use(ElementUI);
//全局导航守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
