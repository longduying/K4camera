import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import OrderManage from './components/OrderManage'
import OrderRef from './components/OrderRef'
import EvailManage from './components/EvailManage'

// 订单列表的子路由
import Dall from './components/OrderManage/Dall'                          //全部订单
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
                    redirect:'/Dall',
                    name:'OrderManage',
                    component:OrderManage,
                    children:[
                        {
                            path:'/Dall',      //全部订单
                            name:'Dall',
                            component:Dall,
                        }
                    ],
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

            ]
        }
    ]
})
