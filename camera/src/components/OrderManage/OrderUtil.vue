<template>
    <div>
        <div class="Dhead">
            <span style="width: 39%;margin-left: 5%">商品信息</span>
            <span style="width: 14%">单价</span>
            <span style="width: 14%">数量</span>
            <span style="width: 14%">商品总价</span>
        </div>
        <div class="dcon">
            <div style="border-bottom: 1px solid gainsboro">
                <img src="./../../assets/D-img/d1.png" style="margin-left: 5%;vertical-align: middle;height: 80px">
                <span style="width: 27%;margin-left: 3%;">
                            五星红旗迎风飘扬，胜利歌
                        </span>
                <span style="width: 17.2%;margin-left: 47px;">160000.00</span>
                <span style="width: 11%;">1</span>
                <span style="width: 14%;">160000.00</span>
            </div>
            <div style="border-bottom: 1px solid gainsboro">
                <img src="./../../assets/D-img/d1.png" style="margin-left: 5%;vertical-align: middle;height: 80px">
                <span style="width: 27%;margin-left: 3%;">
                            五星红旗迎风飘扬，胜利歌
                        </span>
                <span style="width: 17.2%;margin-left: 47px;">160000.00</span>
                <span style="width: 11%;">1</span>
                <span style="width: 14%;">160000.00</span>
            </div>
        </div>
        <div style="font-size: 15px;margin-top: 20px;margin-left: 75%;margin-bottom: 30px">
            实收款：<span style="color: palevioletred">￥320000.00</span>
            <p style="color: gray;margin-top: 5px">含运费：0元</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderUtil"
    }
</script>

<style scoped lang="less">
    .Dhead{
        margin-top: 20px;
        width: 97%;
        height: 40px;
        line-height:40px;
        font-size: 14px;
        background: gainsboro;
        border-radius: 8px 8px 0 0;
    span{
        display: inline-block;
        text-align: center;
    }
    }
    .dcon{
        width: 96.8%;
        border-left: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
        font-size: 15px;
    span{
        display: inline-block;
    }
    }
</style>