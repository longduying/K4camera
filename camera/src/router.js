import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'
import NoPass from './views/NoPass'
import Root from './views/Root'

import OrderManage from './components/OrderManage'
import OrderRef from './components/OrderRef'
import EvailManage from './components/EvailManage'

// 订单列表的子路由
import OrderDetails from './components/OrderManage/OrderDetails'         //订单详情
import DeliverGoods from './components/OrderManage/DeliverGoods'         //发货
    Vue.use(Router)

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
                    path:'/OrderManage',      //订单管理
                    name:'OrderManage',
                    component:OrderManage,
                },
                {
                    path:'/OrderDetails',    //全部订单里的订单详情
                    name:'OrderDetails',
                    component:OrderDetails,
                },
                {
                    path:'/DeliverGoods',    //全部订单里的发货
                    name:'DeliverGoods',
                    component:DeliverGoods,
                    DeliverGoods
                },
                {
                    path:'/OrderRef',        //退货
                    name:'OrderRef',
                    component:OrderRef
                },
                {
                    path:'/EvailManage',     //评论管理
                    name:'EvailManage',
                    component:EvailManage
                },
                //权限管理
                {
                    path:'/Root',
                    name:'Root',
                    component: Root

                },

            ]
        },
        //登录页
        {
            path:'/',
            name:'Login',
            component: Login

        },
        //忘记密码
        {
            path:'/NoPass',
            name:'NoPass',
            component: NoPass

        },

    ]
})
