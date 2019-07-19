<template>
    <div class="mask" ref="nodeMask">
        <div class="box">
            <div class="div1">修改备注
                <span style="margin-left: 73%;cursor: default" @click="hid">×</span>
            </div>
            <p style="padding-left: 34px;margin-top: 20px;margin-bottom: 10px;font-size: 15px">请输入您的备注</p>
            <textarea style="margin-left: 34px;margin-bottom: 20px"></textarea>
            <div>
                <button class="btn1">确定</button>
                <button class="btn2" @click="hid">取消</button>
            </div>

        </div>
    </div>


</template>

<script>
    export default {
        name: "EdtNote",
        mounted(){
            this.$refs.nodeMask.style.display='none'
        },
        methods:{
            hid(){
                this.$refs.nodeMask.style.display='none'
            },
            show(){
                this.$refs.nodeMask.style.display='block'
            }
        }
    }
</script>

<style scoped lang="less">
    .mask{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
    }
    .box{
        width: 365px;
        height: 230px;
        border: 1px solid gainsboro;
        margin: 200px auto;
        background: white;
        .div1{
            width: 345px;
            height: 35px;
            padding-left: 20px;
            line-height: 35px;
            background: gainsboro;
        }
    }
    textarea{
        width: 300px;
        height: 70px;
        resize: none;
    }
    button{
        width: 50px;
        height: 25px;
        border: none;
    }
    .btn1{
        margin-left: 58%;
        margin-right: 10px;
        background:#31b0d5 ;
        color: white;
    }
    .btn2{
        background: gainsboro;
    }
</style>