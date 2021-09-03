import Vue from 'vue';
import Router from 'vue-router';
import Nav from '@/components/Nav';
import Map from '@/view/Map/Map';
import DivisionManagement from '@/view/BasicInfo/DivisionManagement';
import DataResource from '@/view/DataResource/DataResource';
import MyTask from '@/view/TaskPlann/MyTask.vue';
import ProductionBase from '@/view/DataResource/ProductionBase';
import ProductionInformationBase from '@/view/DataResource/ProductionInformationBase';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Nav',
            component: Nav,
            redirect: { name: 'Map' },
            meta: { title: '渔业资源管理系统' },
            children: [
                {
                    path: 'Map',
                    name: 'Map',
                    component: Map,
                    meta: { title: 'GIS控制台' },
                },
                {
                    path: 'TaskPlann/MyTask/MyTaskList',
                    name: 'mytask',
                    component: MyTask,
                    meta: { title: '计划任务管理' },
                },
                {
                    path: 'DataResource',
                    name: 'dataResource',
                    component: DataResource,
                    meta: { title: '生产主体库' },
                    redirect: { name: 'ProductionBase' },
                    children: [
                        {
                            path: 'ProductionBase',
                            name: 'ProductionBase',
                            component: ProductionBase,
                            meta: { title: '生产主体库' },
                        },
                        {
                            path: 'ProductionInformationBase',
                            name: 'ProductionInformationBase',
                            component: ProductionInformationBase,
                            meta: { title: '鱼塘生产信息库' },
                        },
                    ],
                },
                {
                    path: 'BasicInfo/DivisionManagement',
                    name: 'divisionManagement',
                    component: DivisionManagement,
                    meta: { title: '基础信息管理' },
                },
            ],
        },
        { path: '*', redirect: { name: 'Map' } },
    ],
});
