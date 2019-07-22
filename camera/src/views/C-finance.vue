<template>
    <el-container>

        <div id="C-main0">
            <el-header>财户总览</el-header>
            <el-main id="C-foo">
                    <div class="C-Sp">累计收入 （截至今日0点）</div>
                    <span class="C-sp">66</span>
                        <span class="C-sp1" @click="imfor(0)">收支明细</span>

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
                    <span class="C-sp1" @click="imfor(1)">结算记录</span>
                </el-main>
            <div id="el-tab">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane :style="{color:color}" label="账号明细" name="first"><Cimfor1></Cimfor1></el-tab-pane>
                <el-tab-pane  label="结算记录"  name="second"><Cimfor2></Cimfor2></el-tab-pane>
                 <keep-alive>
                     <component :is="currentTab"></component>
                 </keep-alive>
            </el-tabs>

                <div class="block">

                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </div>
        </div>

            </div>

    </el-container>
</template>

<script>
    import Cimfor1 from './../components/Clulu/Cimformation1'
    import Cimfor2 from './../components/Clulu/Cimformation2'
    export default {
        data:function(){
            return {
                a:true,
                color:' ',
                currentTab:'',
                arr:['Cimfor1','Cimfor2'],
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4
            };
        },
        name: "C-finance",
        methods: {
            handleSizeChange(val) {
            },
            handleCurrentChange(val) {

            },
            imfor(i){
              this.currentTab=this.arr[i]
             this.color="#409eff"
            },

        },
        components:{
            Cimfor2,
            Cimfor1,
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
        position:relative;
        width:100%
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