<template>
    <div class="orderManage">
        <div class="Dhead">订单列表</div>
        <div class="Dmain">
            <div class="Dnav">
                <!--<span @click="show">全部</span>-->
                <!--<keep-alive>-->
                    <!--<component :is="tab"></component>-->
                <!--</keep-alive>-->
                <router-link to="Dall" tag="span">全部</router-link>|
                <router-link to="Dpay" tag="span">待付款</router-link>   |
                <router-link to="Dsend" tag="span">待发货</router-link>   |
                <router-link to="Dready" tag="span">已发货</router-link>   |
                <router-link to="Dcomplete" tag="span">已完成</router-link>   |
                <router-link to="Dclose" tag="span">已关闭</router-link>   |
                <router-link to="Drefund" tag="span">退款中</router-link>
            </div>
            <div style="margin-top: 20px;padding-bottom: 25px;font-size: 15px;">
                <label style="margin-left: 10px">下单时间：</label>
                <input type="date">
                <label style="margin-left: 420px"></label>
                <input type="text" placeholder="请输入订单编号">
                <label style="margin-left: 10px"></label>
                <input type="text" placeholder="请输入商品关键字">

                <div class="Dsearch">搜索</div>
            </div>
            <div>
                <!--<keep-alive>-->
                    <!--<component :is="Dall"></component>-->
                <!--</keep-alive>-->
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderManage",

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
     padding-top:10px;
     input{
         width: 140px;
         height: 21px;
     }
     .Dsearch{
         display: inline-block;
         width: 65px;
         height: 32px;
         border-radius: 3px;
         background: #31b0d5;
         color: white;
         font-size: 15px;
         margin-left: 10px;
         line-height: 32px;
         text-align: center;
         cursor: default;
     }
 }
    .Dnav{
        width: 96%;
        border-bottom: 1px solid gainsboro;
        /*padding-top: 3%;*/
        height: 44px;
        line-height: 44px;
        span{
            display: inline-block;
            width: 60px;
            height: 30px;
            cursor: default;
            line-height: 37px;
            text-align: center;
            /*background: gainsboro;*/
        }
    }
    .router-link-active{
        color:#31b0d5;
    }
    -webkit-input-placeholder{
        font-size: 14px;
    }
</style>