<template>
    <div  style="padding-bottom: 90px;margin-bottom: 30px">
        <div class="Dhead"><span>订单管理</span>><span>订单列表</span>><span>详情</span></div>
        <div class="Dmain">
            <div class="orderState">
                <span style="font-weight: bold">当前订单状态：</span><span style="color: #31b0d5">等待发货</span>
                <div style="margin-top: 10px;margin-bottom: 10px">
                    若平台在<span style="color: deeppink">73:35:21</span>内未发货，系统将自动取消订单
                </div>
                <div style="margin-bottom: 12px">买家备注：<span>发顺丰谢谢</span></div>
                <router-link to="DeliverGoods" tag="span" class="sendBtn">发货</router-link>
                <span class="editDress" @click="address">修改收货地址</span>
                <span class="cancel">取消订单</span>
                <span class="cancel" @click="edtNode">修改备注</span>
            </div>
            <div>
                <div style="height: 60px">
                    <span class="btn1" @click="show" ref="btn1">订单详情</span>
                    <span class="btn2" style="background:#31b0d5;color: white" @click="show2" ref="btn2">
                        收货与物流信息
                    </span>
                </div>
                <keep-alive>
                    <component :is="tab"></component>
                </keep-alive>
                <ReceiveAddress></ReceiveAddress>
                <EdtNote></EdtNote>
            </div>
        </div>
    </div>
</template>

<script>
    import LogisticInformation from './LogisticInformation'
    import DetailsOfSmall from './DetailsOfSmall'
    import ReceiveAddress from './ReceiveAddress'
    import EdtNote from './EdtNote'

    export default {
        name: "OrderDetails",
        components:{
            LogisticInformation,
            DetailsOfSmall,
            ReceiveAddress,
            EdtNote
        },
        data:function () {
            return {
                tab:LogisticInformation,
                n:2
            }
        },
        methods:{
            show(){
                // this.n=0;
                this.tab=DetailsOfSmall;
                this.$refs.btn1.style.position='absolute';
                this.$refs.btn1.style.top=305+'px';
                this.$refs.btn1.style.left=255+'px';
                this.$refs.btn1.style.background='#31b0d5 ';
                this.$refs.btn1.style.color='white';
                this.$refs.btn1.style.zIndex=this.n++;
                this.$refs.btn2.style.background='white';
                this.$refs.btn2.style.color='black';
            },
            show2(){
                // this.n=0;
                this.tab=LogisticInformation;
                this.$refs.btn2.style.background='#31b0d5 ';
                this.$refs.btn2.style.color='white';
                this.$refs.btn2.style.zIndex=this.n++;
                this.$refs.btn1.style.background='white';
                this.$refs.btn1.style.color='black';
            },
            address(){
                this.$children[2].show()
            },
            edtNode(){
                this.$children[3].show()
            }
        },

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
        padding-top:25px;
    }
    .orderState{
        width: 94%;
        height: 132px;
        padding-left: 3%;
        padding-top: 12px;
        border: 1px solid gainsboro;
        border-radius: 10px;
        background: #ffddda;
        font-size: 14px;
        span{
            display: inline-block;
        }
    }
    .sendBtn{
        width: 60px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        background:#31b0d5 ;
        color: white;
        border-radius: 3px;
        margin-right: 20px;
        cursor: default;
    }
    .editDress{
        width: 110px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border-radius: 5px;
        border:1px solid gray;
        margin-right: 20px;
        cursor: default;
        background: white;
    }
    .cancel{
        width: 70px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        border-radius: 5px;
        border:1px solid gray;
        cursor: default;
        background: white;
        margin-right: 20px;
    }
    .btn1{
        display: inline-block;
        width: 140px;
        height: 30px;
        border: 1px solid black;
        border-radius: 40px;
        text-align: center;
        line-height: 30px;
        margin-top: 30px;
        cursor: default;
    }
    .btn2{
        .btn1();
        position: absolute;
        width: 180px;
        top:305px;
        left:370px;
    }
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