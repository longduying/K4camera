import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import OrderManage from './components/OrderManage'
import OrderRef from './components/OrderRef'
import EvailManage from './components/EvailManage'

    Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
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

            ]
        }
    ]
})
