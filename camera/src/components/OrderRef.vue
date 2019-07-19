<template>
    <div>
        <div class="Dhead">交易退款</div>
        <div class="Dmain">
            <div style="margin-top: 20px;padding-bottom: 25px;font-size: 15px;">
                <label style="margin-left: 10px">下单时间：</label>
                <input type="date">
                <label style="margin-left: 255px">退款方式：</label>
                <input type="text" placeholder="请输入订单编号">
                <label style="margin-left: 35px">退款状态：</label>
                <input type="text" placeholder="请输入商品关键字">
                <div class="Dsearch">搜索</div>
            </div>
            <div class="dhead">
                <div style="margin-left: 4%;width: 60px">退款编号</div>
                <div style="width: 244px;text-align: center">订单号/商品</div>
                <span>订单金额</span>
                <span>退款金额</span>
                <span>发货状态</span>
                <span>退款方式</span>
                <span>退款原因</span>
                <span>申请时间</span>
                <span>退款状态</span>
                <div>操作</div>
            </div>
            <div class="OrderList">
                <div>
                    <input type="checkbox" style="margin-left: 10px">
                    <span style="margin-left: 10px">717152411</span>
                    <div style="display: inline-block;vertical-align: middle;margin-left: 10px;width: 230px;text-align: center;margin-right: 10px">
                        <p style="margin-top: 10px">订单号:20170718183811</p>
                        <img src="./../assets/D-img/d1.png" style="vertical-align: middle">
                        <span style="margin-left: 10px;">
                            五星红旗迎风飘扬,胜利歌
                        </span>
                    </div>
                    <span style="width: 89px;">160000.00</span>
                    <span style="width: 95px;">160000.00</span>
                    <span style="width: 85px;">已发货</span>
                    <span style="width: 88px;">退货退款</span>
                    <span style="width: 83px;">不喜欢</span>
                    <span style="width: 93px;">2019-07-18</span>
                    <span style="width: 66px;">待处理</span>
                    <span style="margin-right: 5px" class="agree">同意</span>
                    <span class="refuse">拒绝</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderRef"
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
    .dhead{
        margin-top: 10px;
        width: 96.2%;
        height: 40px;
        line-height:40px;
        font-size: 14px;
        background: gainsboro;
        div{
            display: inline-block;
            margin-right: 10px;
        }
        span{
            display: inline-block;
            width: 87px;
        }
    }
    .OrderList{
        width: 96%;
        border-left: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
        font-size: 14px;
        input{
            width: 14px;
            height: 14px;
        }
        span{
            display: inline-block;
            /*border: 1px solid gainsboro;*/
        }
    }
    img{
        width: 50px;
        height: 50px;
    }
    .agree,.refuse{
        color: #31b0d5;
    }
</style>