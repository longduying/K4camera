<template>
    <div class="mask" ref="hiden">
        <div class="Rbox">
            <div class="head">
                修改收货地址
                <a style="margin-left: 84%;cursor: default" @click="hid">×</a>
            </div>
            <div class="rbox">
                <div class="dbox">
                    <div class="head1">
                        原地址：<span>四川省成都市高新区国信安，张三，17313214094</span>
                    </div>
                    <div class="addevail">
                        <div>
                            <span class="s1"></span>
                            <span class="s2">新地址</span>
                        </div>
                        <div>
                            <label>选择所在地：*</label>
                            <div class="sheng">
                                <span style="width: 128px">四川省</span>
                                <span class="iconfont icon-xiala-"></span>
                            </div>
                            <div class="shi">
                                <span style="width: 128px">成都市</span>
                                <span class="iconfont icon-xiala-"></span>
                            </div>
                            <div class="xian">
                                <span style="width: 128px">高新区</span>
                                <span class="iconfont icon-xiala-"></span>
                            </div>
                        </div>
                        <div>
                            <label>详细地址：*</label>
                            <textarea></textarea>
                        </div>
                        <div>
                            <label>收货人姓名：*</label>
                            <input type="text">
                        </div>
                        <div>
                            <label>手机号：*</label>
                            <input type="text">
                        </div>
                    </div>
                    <div style="margin-bottom: 20px">
                        <button class="sure">确定</button>
                        <button class="cancel">取消</button>
                    </div>
                </div>
            </div>


        </div>
    </div>

</template>

<script>
    export default {
        name: "ReceiveAddress",
        data:function(){
            return {
                msg:"天气不好"
            }
        },
        methods:{
            hid(){
                this.$refs.hiden.style.display='none'
            }

        }

    }
</script>

<style scoped lang="less">
    .mask{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
    }
    .Rbox{
        width: 770px;
        height: 500px;
        margin: 100px auto;
    }
    .head{
        width: 98%;
        padding-left: 2%;
        height: 40px;
        line-height: 40px;
        background: gainsboro;
        border-radius: 5px 5px 0 0;
    }
    .rbox{
        border-left: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
        background: white;
    }
    .dbox{
        width: 94%;
        margin-left: 2.5%;
        padding-top: 20px;
    }
    .s1{
        display: inline-block;
        width: 7px;
        height: 16px;
        background: orange;
    }
    .s2{
        margin-left: 10px;
    }
    .head1{
        width: 97.1%;
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        background: #ffddda;
        border-radius: 5px 5px 0 0;
        padding-left: 3%;
    }
    .addevail{
        height: 265px;
        padding-left: 3%;
        padding-top: 20px;
        border-left: 1px solid #ffddda;
        border-bottom: 1px solid #ffddda;
        border-right: 1px solid #ffddda;
        margin-bottom: 20px;
        div{
            margin-bottom: 10px;
        }
    }
    .sheng,.shi,.xian{
        display: inline-block;
        width: 150px;
        height: 28px;
        border: 1px solid gray;
        margin-right: 20px;
        border-radius: 3px;
        padding-left: 3px;
        line-height: 28px;
        font-size: 15px;
        color: gray;
    }
    textarea{
        width: 520px;
        height: 80px;
        resize: none;
        vertical-align: top;
    }
    input{
        width: 150px;
        height: 28px;
        outline: none;
        border: 1px solid gray;
        border-radius: 3px;
    }
    .sure{
        width: 60px;
        height: 30px;
        border: none;
        background: #31b0d5;
        color: white;
        border-radius: 3px;
        margin-right: 10px;
        margin-left: 81%;
    }
    .cancel{
        width: 60px;
        height: 30px;
        border: none;
        background: gainsboro;
        border-radius: 3px;
    }
    label{
        display: inline-block;
        width: 104px;
        text-align: right;
        margin-right: 15px;
    }
    span{
        display: inline-block;
    }
</style>