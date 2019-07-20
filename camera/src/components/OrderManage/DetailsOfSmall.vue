<template>
    <div>
        <div class="sfmsg">
            <span class="s1"></span>
            <span class="s2">买家信息</span>
            <div style="margin-top: 10px;font-size: 15px">
                <span>用户名：沉默是金</span>
                <span style="margin-left: 50px">手机号：17313214094</span>
                <span style="margin-left: 50px">所在地：四川 成都</span>
            </div>
            <div style="margin-top: 12px;width:97%;border-bottom: 1px dashed #31b0d5"></div>
            <div style="margin-top: 20px">
                <span class="s1"></span>
                <span class="s2">订单信息</span>
                <div style="margin-top: 10px;font-size: 15px">
                    <span>订单编号：20190718102211</span>
                    <span style="margin-left: 50px">订单类型：普通订单</span>
                </div>
                <div style="margin-top: 10px;font-size: 15px">
                    <span>下单时间：2019-07-18 10:24</span>
                </div>
            </div>

            <OrderUtil></OrderUtil>
        </div>
    </div>
</template>

<script>
    import OrderUtil from './OrderUtil'
    export default {
        name: "DetailsOfSmall",
        components:{
            OrderUtil
        }
    }
</script>

<style scoped lang="less">
    .sfmsg{
        width: 94%;
        /*height: 120px;*/
        padding-left: 3%;
        padding-top:12px;
        margin-top: 30px;
        border: 1px solid #31b0d5;
        border-radius: 10px;
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
    }

</style>