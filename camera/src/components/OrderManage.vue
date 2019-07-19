<template>
    <div class="orderManage">
        <div class="Dhead">订单管理</div>
        <div class="Dmain">
            <div class="Dnav">
                <span :class="{active:tag==v.com}" @click="dshow(i)" v-for="(v,i) in list">{{v.name}}</span>
            </div>
            <div style="margin-top: 20px;padding-bottom: 25px;font-size: 15px;">
                <label style="margin-left: 10px">下单时间：</label>
                <input type="date">
                <label style="margin-left: 39%"></label>
                <input type="text" placeholder="请输入订单编号">
                <label style="margin-left: 10px"></label>
                <input type="text" placeholder="请输入商品关键字">
                <div class="Dsearch">搜索</div>
            </div>
            <div>
                <keep-alive>
                    <component :is="tag"></component>
                </keep-alive>
            </div>
            <div style="margin-top: 20px;padding-left: 1%">
                <input type="checkbox" style="width: 14px;height: 14px;margin-right: 5px">全选
                <button class="batch">批量发货</button>
                <span style="margin-left:200px ">
                    分页
                </span>
            </div>
            <aaa></aaa>
        </div>
    </div>
</template>

<script>
    import Dall from './OrderManage/Dall'
    import Dpay from './OrderManage/Dpay'
    import Dsend from './OrderManage/Dsend'
    import Dready from './OrderManage/Dready'
    import Dcomplete from './OrderManage/Dcomplete'
    import Dclose from './OrderManage/Dclose'
    import Drefund from './OrderManage/Drefund'
    export default {
        name: "OrderManage",
        data:function () {
            return {
                list:[
                    {name:"全部",com:"Dall"},{name:"待付款",com:"Dpay"},{name:"待发货",com:"Dsend"},{name:"已发货",com:"Dready"},{name:"已完成",com:"Dcomplete"},{name:"已关闭",com:"Dclose"},{name:"退款中",com:"Drefund"}
                ],
                tag:Dall,
                value: ''
            }
        },
        components:{
            Dall,
            Dpay,
            Dsend,
            Dready,
            Dcomplete,
            Dclose,
            Drefund
        },
        methods:{
            dshow(index){
                this.tag=this.list[index].com;
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
     padding-top:10px;
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
    .Dnav{
        width: 96%;
        border-bottom: 1px solid gainsboro;
        /*padding-top: 3%;*/
        height: 44px;
        line-height: 44px;
        span{
            display: inline-block;
            width: 60px;
            height: 17px;
            line-height: 17px;
            cursor: default;
            text-align: center;
            border-right: 1px solid gray;
        }
    }
    .router-link-active{
        color:#31b0d5;
    }
    -webkit-input-placeholder{
        font-size: 14px;
    }
    .batch{
        border: none;
        width: 80px;
        height: 32px;
        border-radius: 3px;
        background: #31b0d5;
        color: white;
        font-size: 15px;
        margin-left: 10px;
    }
    .active{
        color: #31b0d5;
    }
    .block{
        display: inline-block;
        width: 230px;
    }
 /*.el-input__inner{*/
     /*height: 31px;*/
     /*line-height: 31px;*/
 /*}*/
 /*.el-date-editor--daterange.el-input, .el-date-editor--daterange.el-input__inner, .el-date-editor--timerange.el-input, .el-date-editor--timerange.el-input__inner{*/
     /*width: 232px;*/
 /*}*/
</style>