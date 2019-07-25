<template>
    <div class="root-boss">
        <!--标题-->
        <div class="root-head">
            <span>售后信息</span>
        </div>
        <!--搜索-->
        <div class="root-seo">
            <input type="text" placeholder="通过商品名搜索" v-model="starSeoCon">
            <button class="root-seo-btn" @click="starSeoBtnClick">搜索</button>
        </div>
        <!--显示主体-->
        <div class="state-box">
            <!--标题栏-->
            <div class="root-nav clearfix">
                <ul>
                    <li class="state-name">商品</li>
                    <li>购买日期</li>
                    <li>发起日期</li>
                    <li>故障现象</li>
                    <li class="state-boss">
                        <span @click="StateNavShow" class="state-con-box">
                            {{starStateCon}}
                        <span class="iconfont icon-xia"></span>
                        </span>
                        <ul v-show="StateNav" class="root-nav-state">
                            <li @click="starStateConFn(0,'当前进度')">当前进度</li>
                            <li @click="starStateConFn(1,'待处理')">待处理</li>
                            <li @click="starStateConFn(2,'已拒绝')">已拒绝</li>
                            <li @click="starStateConFn(5,'送修中')">送修中</li>
                            <li @click="starStateConFn(3,'维修中')">维修中</li>
                            <li @click="starStateConFn(6,'返回中')">返回中</li>
                            <li @click="starStateConFn(4,'已完成')">已完成</li>
                        </ul>
                    </li>
                    <li>操作</li>
                </ul>
            </div>
            <!--内容显示区域-->
            <div class="state-body">
                <div class="state-content" v-if="!stateData.length">没有符合要求的数据。</div>
                <div class="state-content clearfix" v-for="(v,i) in  stateData" :key="i">
                    <p class="state-name clearfix">
                        <img :src="v.src" alt="">
                        <span>{{v.name}}</span>
                    </p>
                    <p class="state-shopping">{{v.shoppingTime.split('T')[0]}}</p>
                    <p class="state-time">{{v.starTime.split('T')[0]}}</p>
                    <p class="state-why">{{v.star}}</p>
                    <p class="state-new" v-if="v.starState==1">待处理</p>
                    <p class="state-new" v-if="v.starState==2">已拒绝</p>
                    <p class="state-new" v-if="v.starState==5">送修中</p>
                    <p class="state-new" v-if="v.starState==3">维修中</p>
                    <p class="state-new" v-if="v.starState==6">返回中</p>
                    <p class="state-new" v-if="v.starState==4">已完成</p>
                    <p class="state-btn">
                        <button @click="nextStar(i)">查看详情</button>
                    </p>
                </div>

            </div>

            <!--分页-->
            <div class="state-pages-box">
                <el-pagination
                        @current-change="starPagesClick"
                        background
                        layout="prev, pager, next"
                        :hide-on-single-page="true"
                        :total="starPagesAllNum"
                        :page-size="5"
                        :pager-count='5'
                        :current-page="starPagesNum">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StateLi",
        data:function () {
            return {
                //后台返回的数据
                stateData:[],
                //当前系统用户信息
                bossUser:{},

                //搜索框内容
                starSeoCon:'',

                //当前搜索状态，0-无搜素，1-搜索框搜索，2-状态搜索
                starPagesState:0,


            /*----------状态的下拉选项 开始----------*/
                //显示内容
                starStateCon:'当前进度',
                /*显示内容的代码，
                *当前状态（0），待处理（1），已拒绝（2），送修中（5），
                *维修中（3），返回中（6），已完成（4）*/
                starStateConNum:0,
                //当前状态下拉框的显示隐藏
                StateNav:false,
            /*----------状态的下拉选项 结束----------*/

            /*----------分页 开始----------*/
                //总数据条数
                starPagesAllNum:1,
                //当前页码
                starPagesNum:1,
            /*----------分页 结束----------*/
                
                //弹框提示内容
                stateDataAlertCon:'',
            }
        },
        methods:{

            //数据赋值函数
            starDataGetFn(res){
                this.stateData=res.data.data;
                this.starPagesAllNum=res.data.pages;
                this.bossUser=res.data.bossUser;
            },

            //页面加载时调用的函数
            starDataFn(){
                this.$axios.post('/api/newStateData',{
                    pagesNum:this.starPagesNum
                }).then((res)=>{
                    if (res.data.error){
                        this.stateDataAlertCon='数据加载失败，请稍后再试。';
                        this.stateDataOpen();
                    }else {
                        this.starDataGetFn(res);
                    }
                })
            },



        /*----------搜索 开始----------*/
            //搜索的请求函数
            seoStarNameFn(){
                this.$axios.post('/api/starSeoBtnClick',{
                    pagesNum:this.starPagesNum,
                    where:this.starSeoCon
                }).then((res)=>{
                    if (res.data.error){
                        this.stateDataAlertCon='数据加载失败，请稍后再试。';
                        this.stateDataOpen();
                    } else {
                        this.starDataGetFn(res)
                    }
                })
            },
            //搜索按钮被点击
            starSeoBtnClick(){
                //改变页码数为1
                this.starPagesNum=1;
                //改变状态搜索为全部
                this. starStateCon='当前进度';
                //判断输入框是否有内容，如果没有搜索全部
                if (!this.starSeoCon){
                    this.starPagesState=0;
                    this. starDataFn();
                }else {
                    this.starPagesState=1;
                    this.seoStarNameFn();
                }
            },
        /*----------搜索 结束----------*/


        /*----------状态选项下拉框 开始----------*/
            //筛选状态请求函数
            starStateDataFn(){
                this.$axios.post("/api/seoStarState",{
                    pagesNum:this.starPagesNum,
                    where:this.starStateConNum
                }).then((res)=>{
                    if (res.data.error){
                        this.stateDataAlertCon='搜索数据失败，请稍后再试。';
                        this.stateDataOpen();
                    } else{
                        this.starDataGetFn(res)
                    }
                })
            },
            //状态点击下拉框的显示隐藏
            StateNavShow(){
                this.StateNav=!this.StateNav;
            },
            //显示的状态
            starStateConFn(num,val){
                this.starStateCon=val;
                this.starStateConNum=num;
                this.StateNav=false;
                this.starPagesNum=1;
                this.starSeoCon='';
                if(!num){
                    this.starPagesState=0;
                    this.starDataFn()
                }else {
                    this.starPagesState=2;
                    this. starStateDataFn();
                }
            },
        /*----------状态选项下拉框 结束----------*/


        /*----------分页 开始----------*/
            starPagesClick(num){
                  this.starPagesNum=num;
                  switch (this.starPagesState) {
                      case 0:
                          this. starDataFn();
                          break;
                      case 1:
                          this.seoStarNameFn();
                          break;
                      default:
                          this.starStateDataFn();
                  }
            },
        /*----------分页 结束----------*/


            //点击查看详情按钮
            nextStar(who){
                //获取点击的数据
                let data=this.stateData[who];
                //将数据传给父组件
                this.$parent.starBoxData=this.stateData;
                //将角标传给父组件
                this.$parent.starBoxDataLength=who;
                //将当前用户传给父组件
                this.$parent.bossUser=this.bossUser;
                //隐藏所有组件
                for(let key in this.$parent.starJson){
                    this.$parent.starJson[key]=false;
                }
                //显示对应的组件
                switch (Number(data.starState)) {
                    case 1: //待处理
                        this.$parent.starJson.star1=true;
                        break;
                    case 2 || '2': //已拒绝
                        this.$parent.starJson.star2=true;
                        break;
                    case 3: //维修中
                        this.$parent.starJson.star3=true;
                        break;
                    case 4: //已完成
                        this.$parent.starJson.star4=true;
                        break;
                    case 5: //送修中
                        this.$parent.starJson.star5=true;
                        break;
                    case 6: //返回中
                        this.$parent.starJson.star6=true;
                        break;
                }
            },



            //弹框
            stateDataOpen() {
                this.$alert(this.stateDataAlertCon, '提示', {
                    confirmButtonText: '确定',
                    /*callback: () => {


                    }*/
                });
            }
        },
        mounted(){
            this.starDataFn()
        }
    }
</script>

<style scoped lang="less">
    //清除浮动
    .clearfix::after{
        content: '';
        display: block;
        clear: both;
    }

    //头部标题
    .root-head{
        padding-left: 30px;
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #ccc;
        font-size: 20px;
    }

    //搜索
    .root-seo{
        width: 96%;
        margin-top: 40px;
        text-align: right;
        font-size:18px;

        >input{
            height: 25px;
            width: 200px;
            position: relative;
            top:-1px;
            border: 1px solid #ccc;
            box-shadow: none;
            border-radius: 5px;
            padding-left: 5px;

            &:focus{
                border:  #a3e9f6 1px  solid;
                outline: 0;
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #77b4ad;
            }
        }

        >button{
            width: 80px;
            height: 28px;
            border: 1px solid skyblue;
            border-radius: 5px;
            background: #0aa0f6;
            color: white;
            cursor: pointer;
            margin-left: 10px;
        }
    }

    //主体部分
    .state-box{
        width: 96%;
        min-height: 415px;
        max-height: 790px;
        margin-left: 2%;
        margin-top: 15px;
        border: #eeeeee solid 1px ;
        overflow: hidden;
        background: #f2f2f2;
    }

    //标题栏
    .root-nav{
        height: 30px;
        border-bottom: #ccc solid 1px;
        line-height: 30px;
        background: #e9e9e9;

        >ul {
            > li {
                float: left;
                width: 13%;
                font-size: 18px;
                text-align: center;
                position: relative;

                >.state-con-box:hover{
                    cursor: pointer;
                }
            }
            >.state-name{
                width: 33%;
            }

            >.state-boss{
                width: 11%;
                margin-left: 2%;
            }



        }
    }

    //下拉选项卡
    .root-nav-state{
        position: absolute;
        top: 30px;
        left:-5px;
        background: white;
        overflow: hidden;
        width: 100%;
        border:#cccccc solid 1px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        >li{
            border-bottom: #cccccc solid 1px;
            cursor: pointer;
            &:hover{
                background: #0077aa;
                color: white;
            }
        }
    }



    //内容显示区
    .state-body{
        margin-top: 20px;
        min-height: 305px;
    }

    //列表显示主体
    .state-content{
        width: 98%;
        height: 120px;
        line-height: 40px;
        border: #ccc solid 1px ;
        border-radius: 5px;
        margin-left: 1%;
        margin-bottom: 10px;
        background: white;
        overflow: hidden;

        >p{
            float: left;
            text-align: center;
            width: 13%;
            line-height: 120px;
        }

        >.state-name{
            width: 35%;
            line-height: 25px;


            >img{
                margin-top: 10px;
                width: 100px;
                height: 100px;
                float: left;
            }

            >span{
                margin-top: 10px;
                display: block;
                padding: 10px 40px 10px 20px;
                height: 65px;
                overflow: hidden;
            }

        }

        >.state-shopping{
            font-size: 14px;
            width:9%;
            margin-right: 2%;
        }

        >.state-time{
            font-size: 14px;
        }

        >.state-why{
            width: 14%;
        }

        >.state-new{
            width: 12%;
            margin-right: 1%;

        }

        >.state-btn{

            >button{
                width: 100px;
                height: 30px;
                border: #ccc solid 1px;
                border-radius: 5px;
                cursor: pointer;
            }
        }
    }

    //分页
    .state-pages-box{
        text-align: center;
        height: 30px;
        margin-top: 30px;
        margin-bottom: 25px;

    }

</style>