<template>
    <el-container>

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
                <div id="C-main8">
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
                </div>
       <!-- <el-main id="C-main7"></el-main>-->
         <el-main id="C-foo">
             <span>支付金额</span>

         </el-main>
         <el-main id="C-foo2">
             <span>访客数</span>
             <div id="main"  style="width:100px;height:150px;"></div>

         </el-main>
         <el-main id="C-foo3">
             <span>支付订单数</span>
             <div id="main1"  style="width: 100px;height:100px;"></div>
         </el-main>
         <el-main id="C-foo4">
             <span>昨日成交转换率</span>
             <div id="main2"  style="width: 100px;height:100px;"></div>
         </el-main>

        </div>

        </div>
    </el-container>
</template>

<script>
    import Rili from '../components/Clulu/CRili.vue'
     import echarts from 'echarts'
    import ajax from './../ajax.js'
    export default {
        name: "C-index",
        components: {
            Rili,

        },
        //图表
        created(){
         /*   // 基于准备好的dom，初始化echarts实例
            var myChart = ;

            // 指定图表的配置项和数据
            var
            };
            // 使用刚指定的配置项和数据显示图表。
            ;*/
            var time=setInterval(()=>{
                if(document.querySelectorAll('#main').length){
                    this.myChart=echarts.init(document.querySelectorAll('#main')[0]);
                clearInterval(time);
                    this.myChart.setOption(this.option)
                }

            },300);
            var time1=setInterval(()=>{
                if(document.querySelectorAll('#main').length){
                    this.myChart=echarts.init(document.querySelectorAll('#main1')[0]);
                    clearInterval(time1);
                    this.myChart.setOption(this.option1)
                }

            },300);
            var time2=setInterval(()=>{
                if(document.querySelectorAll('#main').length){
                    this.myChart=echarts.init(document.querySelectorAll('#main2')[0]);
                    clearInterval(time2);
                    this.myChart.setOption(this.option2)
                }

            },300)

        },
        data: function () {
            return {
                vis: false,
                arr: [
                    {name: '今日访客数', amount: 100},
                    {name: '昨日访客户数', amount: 0},
                    {name: '今日支付订单数', amount: 0},
                    {name: '总客户数', amount: 0}],
                arr1: [
                    {name: '待付款', amount: 0},
                    {name: '待发货', amount: 0},
                    {name: '退款中', amount: 0},
                    {name: '出售中宝贝', amount: 0}],
                option : {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,

                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        areaStyle: {}
                    }]
                },
                option1 : {
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'直接访问',
                            type:'bar',
                            barWidth: '60%',
                            data:[500, 52, 200, 334, 390, 330, 220]
                        }
                    ]
                },
                option2:{
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },

                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'},

                                {value:1548, name:'搜索引擎'}
                            ]
                        }
                    ]
                },


            myChart:''
        }
    },

        methods:{


        },
        mounted() {
               async function show(){
                   let obj=await ajax({url:'/all'})
                  
               }

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
   #C-main8{
       overflow:hidden
   }
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
        color: gray;
        width:23%;
    }
    .footer1{
        width:23%;
        height:152px;
        background: white;
        border:1px solid rgb(242,242,242);
        float:left;
        margin-left:27px;
        margin-top: 25px;
        overflow: hidden;
        line-height: 0;
        text-align: left;
        color: gray;

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
        width:100%;


    }
   #C1{
       color:rgb(90,160,255);
       cursor: pointer;
       position:absolute;
       right:10px;
   }
    #C-main0{
        float:left;
        width:100%;
    }
   #C-main2{
      .b();
       height:226px;

    }
   #c-main3{
       width:93%;
       margin:0 auto;
       #C-main4{
           float:left;
           width:68%;
           position:relative;
           .a();
           margin-top: 20px;
       }
   }


   #C-main5{
       float:left;
       width:30%;
       .a();
       margin-top: 20px;
       margin-left: 20px;

   }
    #C-main6{
        .b();
        width:68%;
        line-height: 150px;
        margin:0;
        float:left;

    }
    #C-main7{
        width:30%
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