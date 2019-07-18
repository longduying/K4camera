import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'
import NoPass from './views/NoPass'
import Root from './views/Root'
import OrderManage from './components/OrderManage'
import OrderRef from './components/OrderRef'
import EvailManage from './components/EvailManage'

    Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/Index',
            name: 'Index',
            component: Index,
            children:[
                {
                    path:'/OrderManage',
                    name:'OrderManage',
                    component:OrderManage
                },
                {
                    path:'/OrderRef',
                    name:'OrderRef',
                    component:OrderRef
                },
                {
                    path:'/EvailManage',
                    name:'EvailManage',
                    component:EvailManage
                },
                {
                    path:'/Root',
                    name:'Root',
                    component: Root

                },

            ]
        },
        {
            path:'/',
            name:'Login',
            component: Login

        },
        {
            path:'/NoPass',
            name:'NoPass',
            component: NoPass

        },


    ]
})
