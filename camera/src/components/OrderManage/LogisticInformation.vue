<template>
    <div>
        <div class="sfmsg">
            <span class="s1"></span>
            <span class="s2">物流信息</span>
            <div style="margin-top: 20px">
                <span>收货地址：</span>
                <span>张三</span>
                <span>四川省成都市高新区过线</span>
            </div>
            <div style="margin-top: 10px">运送方式：快递</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogisticInformation",
        data:function () {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    .sfmsg{
        width: 94%;
        height: 120px;
        padding-left: 3%;
        padding-top:20px;
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