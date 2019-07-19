<template>
    <el-container>
        <el-aside width="300px" ></el-aside>
        <div id="C-main0">
            <el-header>财户总览</el-header>
         <!--   <div id="c-main3">
                <el-main id="C-main1">数据概览</el-main>

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
                    <span>常用功能</span></el-main>
                <el-main id="C-main5">日历</el-main>
                <el-main id="C-main6">
                    <i class="el-icon-shopping-bag-1">发布商品</i>
                    <i class="el-icon-user">客户管理</i>
                    <i class="el-icon-pie-chart">统计分析</i>
                    <i class="el-icon-lock">权限管理</i>


                </el-main>
                <el-main id="C-main7"></el-main>-->

                <el-main id="C-foo">
                    <div class="C-Sp">累计收入 （截至今日0点）</div>
                    <span class="C-sp">66</span>
                        <span class="C-sp1" @click="number1">收支明细</span>

                </el-main>
                <el-main id="C-foo2">
                    <div class="C-Sp">昨日收入</div>
                    <span class="C-sp"></span>
                </el-main>
                <el-main id="C-foo3">
                    <div class="C-Sp">七日收入</div>
                    <span class="C-sp"></span>
                </el-main>
                <el-main id="C-foo4">
                    <div class="C-Sp">待结算总额（截至今日0点）</div>

                    <span class="C-sp"></span>
                    <span class="C-sp1" @click="number2">结算记录</span>
                </el-main>
            <imformation></imformation>

            </div>

    </el-container>
</template>

<script>
    import imformation from './../components/Cimformation'
    export default {
        data:function(){
            return{
                a:true
            }
        },
        name: "C-finance",
        methodes:{},
        components:{
            imformation
        },
        methods:{
            number1(){

            },
            number2(){}
        },
        mounted(){
            //发送ajax请求
        }
    }
</script>

<style lang="less" scoped>
    .footer{

        background: white;
        border:1px solid rgb(242,242,242);
        float:left;
        margin-top:25px;
        overflow: hidden;
        text-align: left;
        line-height: 0;
        height:111px;
        padding:0;
    }
    .footer1{
        width:263px;
        background: white;
        border:1px solid rgb(242,242,242);
        float:left;
        height:111px;
        margin-top: 25px;
        overflow: hidden;
        line-height: 0;
        text-align: left;
        padding:0;

    }
    #C-main0{
        position:relative
    }

    .C-Sp{

        height:30px;
        line-height: 3;
        margin-left:15px;
    }
    .C-sp{

        margin-left: 15px;

        font-weight:bolder;
        font-size:37px;
        color:rgb(34,35,21);
        line-height:85px ;
        text-align: center;

    }
    #C-foo{
    .footer();
        width:270px;
       margin-left:50px ;
    }

    #C-foo2{
    .footer1();
        width:116px;

    }
    #C-foo3{
    .footer1();
    width:116px;
    }
    #C-foo4{
    .footer1();
        width:278px;
    margin-left: 30px;
    }
    .el-header {
        background-color: rgb(228,228,228);
        color: #333;
        text-align: left;
        width:1182px;
        line-height: 60px;
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
      .C-sp1{
          color:rgb(90,160,255);
          cursor: pointer;
          margin-left: 131px;

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