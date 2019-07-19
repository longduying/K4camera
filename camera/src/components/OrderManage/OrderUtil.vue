<template>
    <div>
        <div class="Dhead">
            <span style="width: 390px;margin-left: 50px">商品信息</span>
            <span style="width: 140px">单价</span>
            <span style="width: 140px">数量</span>
            <span style="width: 140px">商品总价</span>
        </div>
        <div class="dcon">
            <div style="border-bottom: 1px solid gainsboro">
                <img src="./../../assets/D-img/d1.png" style="margin-left: 55px;vertical-align: middle;height: 80px">
                <span style="width: 265px;margin-left: 30px;">
                            五星红旗迎风飘扬，胜利歌
                        </span>
                <span style="width: 168px;margin-left: 47px;">160000.00</span>
                <span style="width: 108px;">1</span>
                <span style="width: 142px;">160000.00</span>
            </div>
            <div>
                <img src="./../../assets/D-img/d1.png" alt="" style="margin-left: 55px;vertical-align: middle;height: 80px">
                <span style="width: 265px;margin-left: 30px;">
                            五星红旗迎风飘扬，胜利歌
                        </span>
                <span style="width: 168px;margin-left: 47px;">160000.00</span>
                <span style="width: 108px;">1</span>
                <span style="width: 142px;">160000.00</span>
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