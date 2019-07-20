<template>
    <div class="ZCBoss" v-show="showConfirm">
        <div class="ZCBox">
            <div class="ZCHead">
                <p>{{ConfirmHead}}</p>
            </div >
            <div class="ZCBody">{{ConfirmContent}}</div>
            <div class="ZCBtn">
                <button class="ZCBtnNo" @click="clickNo">取消</button>
                <button class="ZCBtnYes" @click="clickYes">确定</button>
            </div>
        </div>
    </div>
</template>

<!--
使用说明：
1、需要在父级组件数据层添加名为‘ConfirmNum’的数据名，数据类型为number，且默认值为0;
2、当点击确定按钮时，会将ConfirmNum的值改为1；
3、当点击取消按钮时，会将ConfirmNum的值改为2；
4、控制‘showConfirm’以更改弹框的显示隐藏；
5、提供‘ConfirmHead’用以改变弹框的标题名称；
6、提供‘ConfirmContent’用以改变弹框的提示内容；
-->

<script>
    export default {
        name: "Confirm",
        data:function () {
            return {
                ConfirmHead:'标题',
                ConfirmContent:'提示内容，最长字符数不得超过63个字，否则多余的将被隐！',
                showConfirm:false
            }
        },
        methods:{
            clickYes(){
                this.$parent.ConfirmNum=1;
                this.showConfirm=false;
            },
            clickNo(){
                this.$parent.ConfirmNum=2;
                this.showConfirm=false;
            }

        }
    }
</script>

<style scoped lang="less">
    .ZCBoss{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index:99999;
    }
    .ZCBox{
        margin: 180px auto;
        width: 300px;
        height: 150px;
        background: white;
        border-radius:5px;
        padding: 10px 10px ;
        text-align: center;
    }
    .ZCHead{
        width: 100%;
        border-bottom: 1px solid black;
        height: 30px;
        font-size: 20px;
    }
    .ZCBody{
        padding-top: 13px;
        height: 60px;
        overflow: hidden;
        font-size: 14px;
    }

    .ZCBtnAll{
        width: 80px;
        height: 30px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
    .ZCBtn{
        margin-top: 12px;
        >.ZCBtnYes{
            .ZCBtnAll();
            border: 1px solid skyblue;
            background: #0aa0f6;
            margin-left:30px;
        }
        >.ZCBtnNo{
            .ZCBtnAll();
            border: 1px solid skyblue;
            background: white;
            color: black;
        }
    }
</style>