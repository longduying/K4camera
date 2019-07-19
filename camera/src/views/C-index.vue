<template>
    <el-container>
        <el-aside width="300px" ></el-aside>
        <div id="C-main0">
        <el-header>概览</el-header>
            <div id="c-main3">
        <el-main id="C-main1">数据概览
       </el-main>

        <el-main id="C-main2">
            <div id="C-d1">
                <div v-for="v in arr" class="d1">
                {{v.name}}
            <br><span>{{v.amount}}</span>
                </div>
                <div v-for="v in arr1" class="d1">
                <br>{{v.name}}
                <br><span>{{v.amount}}</span>
                  </div>
            </div>
        </el-main>
        <el-main id="C-main4">
            <span>常用功能</span>
          </el-main>

                <el-main id="C-main5">日历</el-main>
        <el-main id="C-main6">
            <i class="el-icon-shopping-bag-1">发布商品</i>
            <i class="el-icon-user">客户管理</i>
            <i class="el-icon-pie-chart">统计分析</i>
            <i class="el-icon-lock">权限管理</i>


        </el-main>
                <Rili></Rili>
       <!-- <el-main id="C-main7"></el-main>-->
         <el-main id="C-foo">
             <span>支付金额</span>
             <span></span>
         </el-main>
         <el-main id="C-foo2">
             <span>访客数</span>
             <span></span>

         </el-main>
         <el-main id="C-foo3">
             <span>支付订单数</span>
             <span></span>
         </el-main>
         <el-main id="C-foo4">
             <span>昨日成交转换率</span>
             <span></span>
         </el-main>

        </div>

        </div>
    </el-container>
</template>

<script>
    import Rili from '../components/CRili.vue'

    export default {
        name: "C-index",
        components: {
            Rili,

        },
        data: function () {
            return {
                vis: false,
                arr: [
                    {name: '今日访客数', amount: 100},
                    {name: '昨日访客户数', amount: 0},
                    {name: '今日支付订单数', amount: 0},
                    {name: '新增成交额', amount: 0}],
                arr1: [
                    {name: '待付款', amount: 0},
                    {name: '待发货', amount: 0},
                    {name: '退款中', amount: 0},
                    {name: '出售中宝贝', amount: 0}]
            }
        },
        methods:{

        },
        mounted() {
            //发送请求
            //接受数据
            //
        }
    }


</script>

<style  lang="less" scoped>
   .a{
        height:40px;
        padding:0;
        line-height: 40px;
        background:rgb(242,242,242) ;
        text-align: left ;
    }
    .b{
        border:1px solid rgb(242,242,242);
        background:white ;
        padding:0;
    }
/*   #C-main7{
       height:153px;
       float:right;
       width:240px;
       .b();
   }*/
    .footer{
        width:263px;
        height:152px;
        background: white;
        border:1px solid rgb(242,242,242);
        float:left;
        margin-top:25px;
        overflow: hidden;
        text-align: left;
        line-height: 0;
        color: gray
    }
    .footer1{
        width:263px;
        height:152px;
        background: white;
        border:1px solid rgb(242,242,242);
        float:left;
        margin-left:27px;
        margin-top: 25px;
        overflow: hidden;
        line-height: 0;
        text-align: left;
        color: gray
    }
    #C-foo{
        .footer()
    }
    #C-foo2{
        .footer1();

    }
    #C-foo3{
        .footer1();

    }
    #C-foo4{
        .footer1();

    }
    .el-header {
        background-color: rgb(228,228,228);
        color: #333;
         text-align: left;
        line-height: 60px;
    }
    #C-main1{
        margin-top: 40px;
        position:relative;
       .a();

    }
   #C1{
       color:rgb(90,160,255);
       cursor: pointer;
       position:absolute;
       right:10px;
   }
    #C-main0{
        float:left;
        width:1182px;
    }
   #C-main2{
      .b();
       height:226px;

    }
   #c-main3{
       width:1134px;
       margin:0 auto;
       #C-main4{
           float:left;
           width:880px;
           position:relative;
           .a();
       }
   }


   #C-main5{
       float:left;
       width:241px;
       .a();
       margin-left: 13px;

   }
    #C-main6{
        .b();
        width:880px;
        line-height: 150px;
        margin:0;
        float:left;

    }
    #C-main6   i{
        font-weight:bold;
        margin-left:40px;
        height:150px;
        font-size:18px;
        line-height:150px;
    }


   .el-aside {
       height:300px;
       float:left;
        background-color: #D3DCE6;
        color: #333;
        width:400px;
        text-align: center;
        line-height: 200px;
    }

    #C-d1{
       width:1016px;
       height:180px;
        .d1{
            width:122px;
            height:70px;
            float:left;
            font-weight:bold;
            line-height: 50px;
            text-align: center;
            margin-left: 100px;
        }

   }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>