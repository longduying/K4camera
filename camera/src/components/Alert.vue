<template>
    <div class="ABoss" v-show="showAlert">
        <div class="ABox">
            <div class="AHead">
                <p>{{AlertHead}}</p>
            </div >
            <div class="ABody" v-html="AlertContent"></div>
            <div class="ABtn">
                <button @click=" showOver">确定</button>
            </div>
        </div>
    </div>
</template>

<!--
使用说明：
-1、需要在父级组件数据层添加名为‘AlertNum’的数据名；
-2、数据类型为number，且默认值为0；
-3、当弹框的确认按钮被点击时，会将AlertNum的值改为1；
-4、控制组件的‘showAlert’用以显示或隐藏；
-5、提供‘AlertHead’用以改变弹框标题；
-6、提供‘AlertContent’用以改变弹框提示内容；
-->

<script>


    export default {
        name: "Alert",
        data:function () {
            return {
                showAlert:false,
                AlertHead:'提示',
                AlertContent:'提示内容，最长字符数不得超过42个字，否则多余的将被隐！'
            }
        },
        methods:{
            showOver(){
                this.$parent.AlertNum=1;
                this.showAlert=false;
            }
        }

    }
</script>

<style scoped lang="less">
    .ABoss{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: 99999;
    }
    .ABox{
        margin: 180px auto;
        width: 200px;
        height: 150px;
        background: white;
        border-radius:5px;
        padding: 10px 10px ;
        text-align: center;
    }
    .AHead{
        width: 100%;
        border-bottom: 1px solid black;
        height: 30px;
        font-size: 20px;
    }
    .ABody{
        padding-top: 13px;
        height: 60px;
        overflow: hidden;
        font-size: 14px;
    }
    .ABtn{
        margin-top: 12px;
        >button{
            width: 100px;
            height: 30px;
            border: 1px solid skyblue;
            border-radius: 5px;
            background: #0aa0f6;
            color: white;
            cursor: pointer;
        }
    }
</style>