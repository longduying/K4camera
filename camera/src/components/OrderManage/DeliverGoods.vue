<template>
    <div>
        <div class="Dhead"><span>订单管理</span>><span>订单列表</span>><span>发货</span></div>
        <div class="Dmain">
            <div>
                <span class="s1"></span>
                <span class="s2">确认交易详情</span>
            </div>
            <div style="margin-top:15px;font-size: 15px">
                <span>订单编号：20190718102211</span>
                <span style="margin-left: 50px">创建时间：2019-07-18 11:27</span>
            </div>
            <OrderUtil></OrderUtil>
            <div>
                <span class="s1"></span>
                <span class="s2">确认收货信息</span>
            </div>
            <div style="font-size: 15px;margin-top: 15px">
                收货地址：<span>张三，17313214094，四川省成都市高新区国信安</span>
            </div>
            <div class="edtAddress">修改收货地址</div>
            <div class="sendGoods">发货</div>
        </div>
    </div>
</template>

<script>
    import OrderUtil from './OrderUtil'
    export default {
        name: "DeliverGoods",
        components:{
            OrderUtil
        }
    }
</script>

<style scoped lang="less">
    .Dhead{
        height: 50px;
        background: white;
        line-height: 50px;
        padding-left: 3%;
        border-bottom: 1px solid gainsboro;
    }
    .Dmain{
        padding-left: 3%;
        padding-top:25px;
    }
    .s1{
        display: inline-block;
        width: 7px;
        height: 16px;
        background: orange;
    }
    .s2{
        margin-left: 30px;
        font-weight: bold;
    }
    .edtAddress{
        width: 120px;
        height: 30px;
        font-size: 15px;
        background: #31b0d5;
        color: white;
        border-radius: 3px;
        text-align: center;
        line-height: 30px;
        margin-top: 15px;
        cursor: default;
    }
    .sendGoods{
    .edtAddress();
        margin-bottom: 30px;
        cursor: default;
    }
</style>