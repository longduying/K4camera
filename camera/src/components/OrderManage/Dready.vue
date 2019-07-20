<template>
    <div class="Dall">
        <div class="Dhead">
            <span style="width: 38%">商品信息</span>
            <span style="width: 12%">单价</span>
            <span style="width: 12%">数量</span>
            <span style="width: 12%">买家信息</span>
            <span style="width: 13%">实收款</span>
            <span style="width: 13%">操作</span>
        </div>
        <div>
            <div>
                <div class="dhead">
                    <span style="margin-left: 3%">订单编号：20190717152411</span>
                    <span>下单日期：2019-7-17 15:24:01</span>
                    交易状态：<span style="color: #31b0d5">等待发货</span>
                </div>
                <div class="OrderList">
                    <div>
                        <input type="checkbox" style="margin-left: 10px">
                        <img src="./../../assets/D-img/d1.png" alt="" style="margin-left: 10px;vertical-align: middle">
                        <span style="width: 23.5%;margin-left: 2%;">
                            五星红旗迎风飘扬，胜利歌
                        </span>
                        <span style="width: 14%;margin-left: 3%;">160000.00</span>
                        <span style="width: 9%;">1</span>
                        <div style="display: inline-block;width: 13.5%">
                            <span>这是用户名称</span>
                            <p>17313214094</p>
                        </div>
                        <span style="width: 13%">160000.00</span>
                        <div style="display: inline-block">
                            <router-link to="OrderDetails" tag="span" class="OrderDetails">详情</router-link>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" style="margin-left: 10px">
                        <img src="./../../assets/D-img/d1.png" alt="" style="margin-left: 10px;vertical-align: middle">
                        <span style="width: 21.5%;margin-left: 2%;">
                            五星红旗迎风飘扬，胜利歌
                        </span>
                        <span style="width: 14%;margin-left: 5%;">160000.00</span>
                        <span style="width: 9%;">1</span>
                        <div style="display: inline-block;width: 13.5%">
                            <span>这是用户名称</span>
                            <p>17313214094</p>
                        </div>
                        <span style="width: 13%">160000.00</span>
                        <div style="display: inline-block">
                            <router-link to="OrderDetails" tag="span" class="OrderDetails">详情</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="dhead">
                    <span style="margin-left: 3%">订单编号：20190717152411</span>
                    <span>下单日期：2019-7-17 15:24:01</span>
                    交易状态：<span style="color: #31b0d5">等待发货</span>
                </div>
                <div class="OrderList">
                    <div>
                        <input type="checkbox" style="margin-left: 10px">
                        <img src="./../../assets/D-img/d1.png" alt="" style="margin-left: 10px;vertical-align: middle">
                        <span style="width: 23.5%;margin-left: 2%;">
                            五星红旗迎风飘扬，胜利歌
                        </span>
                        <span style="width: 14%;margin-left: 3%;">160000.00</span>
                        <span style="width: 9%;">1</span>
                        <div style="display: inline-block;width: 13.5%">
                            <span>这是用户名称</span>
                            <p>17313214094</p>
                        </div>
                        <span style="width: 13%">160000.00</span>
                        <div style="display: inline-block">
                            <router-link to="OrderDetails" tag="span" class="OrderDetails">详情</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Dready"
    }
</script>

<style scoped lang="less">
    .Dhead{
        margin-top: 10px;
        width: 96%;
        height: 35px;
        line-height: 35px;
        font-weight: bold;
        /*border-top: 1px solid gainsboro;*/
        span{
            display: inline-block;
            text-align: center;

        }
    }
    .dhead{
        margin-top: 10px;
        width: 96.2%;
        height: 40px;
        line-height:40px;
        font-size: 14px;
        background: gainsboro;
        span{
            display: inline-block;
            width: 230px;
        }
    }
    img{
        width: 100px;
        height: 100px;
    }
    .OrderList{
        width: 96%;
        border-left: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
        font-size: 14px;
        span{
            display: inline-block;
            /*border: 1px solid gainsboro;*/
        }
    }
    .delive{
        width: 46px;
        height: 24px;
        background: #31b0d5;
        color: white;
        border-radius: 3px;
        text-align: center;
        line-height: 24px;
        cursor: default;
    }
    .OrderDetails{
        color: #31b0d5;
        margin-left: 7px;
        cursor: pointer;
    }
</style>