<template>
    <div class="root-boss">
        <!--标题-->
        <div class="root-head">
            <span>人员信息</span>
        </div>
        <!--搜索框-->
        <div class="root-seo">
            <span @click="rootSeoShow" class="root-seo-box">
                {{rootSeoCon}}
                <span class="iconfont icon-xia"></span>：
            </span>
            <ul v-show="rootSeoTab" class="root-seo-state">
                <li @click="rootSeoConTab(3)">全部</li>
                <li @click="rootSeoConTab(0)">手机</li>
                <li @click="rootSeoConTab(1)">账号</li>
                <li @click="rootSeoConTab(2)">姓名</li>
            </ul>
            <input type="text" placeholder="全部模式下将显示所有数据" v-model="rootSeo">
            <button class="root-seo-btn" @click="rootSeoGo">搜索</button>
        </div>
        <!--显示主体-->
        <div class="root-box">
            <!--标题栏-->
            <div class="root-nav clearfix">
                <ul>
                    <li>姓名</li>
                    <li>手机号</li>
                    <li>账号</li>
                    <li>
                        <span @click="navShow" class="root-state-box">
                            {{rootNavStateCon}}
                            <span class="iconfont icon-xia"></span>
                        </span>
                        <ul v-show="rootNavState" class="root-nav-state">
                            <li @click="rootStateCon(0)">当前状态</li>
                            <li @click="rootStateCon(1)">正常</li>
                            <li @click="rootStateCon(2)">冻结</li>
                            <li @click="rootStateCon(3)">风险</li>
                            <li @click="rootStateCon(4)">离职</li>
                        </ul>
                    </li>
                    <li>操作</li>
                </ul>
            </div>
            <!--内容显示区域-->
            <div class="root-body">

                <div class="root-content" v-for="(v,i) in userLi" :key="i">
                    <p class="root-name" v-html="v.name"></p>
                    <p class="root-phone" v-html="v.phone"></p>
                    <p class="root-user">{{v.user}}</p>
                    <p class="root-state" v-if="v.state==0 || v.state==1">正常</p>
                    <p class="root-state" v-if="v.state==2 || v.state==3 || v.state==4">风险</p>
                    <p class="root-state" v-if="v.state==5">冻结</p>
                    <p class="root-state" v-if="v.state==11">离职</p>
                    <p class="root-btn" :data="i" v-if="v.change">
                        <span class="iconfont icon-iconset0137" @click="FnChangeRoot(i)"></span>
                    </p>
                </div>

            </div>

            <!--分页-->
            <div class="root-pages-box">
                <el-pagination
                        @current-change="rootPagesClick"
                        background
                        layout="prev, pager, next"
                        :hide-on-single-page="true"
                        :total="rootPagesAllNum"
                        :page-size="6"
                        :pager-count='5'
                        :current-page="rootPagesNum">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Root",
        data:function () {
            return {
                //页面加载时的数据
                userLi:[],


            /*----------搜索框 开始----------*/
                //搜索框输入内容
                rootSeo:'',
                //搜索框的下拉菜单
                rootSeoTab:false,
                //搜索框的显示内容
                rootSeoCon:'全部',
                //显示代号
                rootSeoNum:0,
                //搜索模式
                rootSeoWho:2,
            /*----------搜索框 结束----------*/


            /*----------状态搜索 开始----------*/
                //当前状态下拉框的显示隐藏
                rootNavState:false,
                //状态的显示内容
                rootNavStateCon:'当前状态',
                //状态的类型
                rootNavStateNum:'',
            /*----------状态搜索 结束----------*/


            /*----------页码 开始----------*/
                //页码总数
                rootPagesAllNum:10,
                //当前页码数
                rootPagesNum:1,
            /*----------页码 结束----------*/



                //弹框的内容
                rootDataAlertCon:'',


            }
        },
        methods:{

            //页面加载的时候请求函数
            rootDataNew(){
                this.$axios.post('/api/rootData',{
                    pagesNum:this.rootPagesNum
                }).then((res)=>{
                    if (res.data.error){
                        this.rootDataAlertCon='数据加载失败，请稍后再试。';
                        this.rootDataOpen();
                    } else {
                        this.userLi=res.data.data;
                        this.rootPagesAllNum=res.data.pagesNum;
                    }
                });
            },


        /*----------搜索 开始----------*/
            //搜索的请求函数
            rootSeoDataNew(){
                if (this.userLi.length){
                    this.userLi=[];
                }
                if (this.rootSeoNum==3){
                    this.rootSeoWho=2;
                    this.rootSeo='';
                    this.rootPagesNum=1;
                    this.rootDataNew();
                }else {
                    this.$axios.post('/api/rootSeo',{
                        seo:this.rootSeo,
                        num:this.rootSeoNum,
                        pagesNum:this.rootPagesNum
                    }).then((res)=>{
                        if (res.data.error){
                            this.rootDataAlertCon='数据加载失败，请稍后再试！';
                        } else{
                            if (res.data.data.length){
                                this.userLi=res.data.data;
                                this.rootPagesAllNum=res.data.pagesNum;
                            } else {
                                this.userLi=[{name:'&nbsp;',phone:'&nbsp; ',user:'没有符合要求的数据',state:'12',change:0}];
                                this.rootPagesAllNum=0;
                            }

                        }
                    })
                }
            },
            //搜索框的下拉菜单显示隐藏
            rootSeoShow(){
                this.rootSeoTab=!this.rootSeoTab;
            },
            //导航栏显示搜索的类别
            rootSeoConTab(num){
                this.rootSeoNum=num;
                switch (num){
                    case 0:
                        this.rootSeoCon='手机';
                        this.rootSeoTab=false;
                        break;
                    case 1:
                        this.rootSeoCon='账号';
                        this.rootSeoTab=false;
                        break;
                    case 2:
                        this.rootSeoCon='姓名';
                        this.rootSeoTab=false;
                        break;
                    case 3:
                        this.rootSeoCon='全部';
                        this.rootSeoTab=false;
                        break;

                }
            },
            //搜索按钮点击时
            rootSeoGo(){
                this.rootPagesNum=1;
                this.rootNavStateCon='当前状态';
                this.rootSeoWho=0;
                this.rootSeoDataNew();
                /*if (this.userLi.length){
                    this.userLi=[];
                }
                if (this.rootSeoNum==3){
                    this.rootSeoWho=2;
                    this.rootSeo='';
                    this.rootPagesNum=1;
                    this.rootDataNew();
                }else {
                    this.rootSeoDataNew();
                }*/
            },
        /*----------搜索 结束----------*/


        /*----------状态 开始----------*/
            //状态点击下拉框的显示隐藏
            navShow(){
                this.rootNavState=!this.rootNavState;
            },
            //点击下拉框改变显示内
            rootStateCon(num){
                this.rootNavStateNum=num;
                this.rootSeoWho=1;
                this.rootSeoCon='全部';
                this.rootPagesNum=1;
                switch (num){
                    case 0:
                        this.rootNavStateCon='当前状态';
                        this.rootNavState=false;
                        this.rootStateSeo(0);
                        break;
                    case 1:
                        this.rootNavStateCon='正常';
                        this.rootNavState=false;
                        this.rootStateSeo(1);
                        break;
                    case 2:
                        this.rootNavStateCon='冻结';
                        this.rootNavState=false;
                        this.rootStateSeo(2);
                        break;
                    case 3:
                        this.rootNavStateCon='风险';
                        this.rootNavState=false;
                        this.rootStateSeo(3);
                        break;
                    case 4:
                        this.rootNavStateCon='离职';
                        this.rootNavState=false;
                        this.rootStateSeo(4);
                        break;
                }
            },
            //状态搜索
            rootStateSeo(num){
                if (this.userLi.length){
                    this.userLi=[];
                }
                if (num==0){
                    this.rootSeoWho=2;
                    this.rootPagesNum=1;
                    this.rootDataNew();
                    return
                }
                this.$axios.post('/api/rootStateSeo',{
                    num:num,
                    pagesNum:this.rootPagesNum
                }).then((res)=>{
                    if (res.data.error){
                        this.rootDataAlertCon='数据加载失败，请稍后再试！';
                    } else{
                        if (res.data.data.length){
                            this.userLi=res.data.data;
                            this.rootPagesAllNum=res.data.pagesNum;
                        } else {
                            this.userLi=[{name:'&nbsp;',phone:'&nbsp; ',user:'没有符合要求的数据',state:'12',change:0}];
                            this.rootPagesAllNum=0;
                        }
                    }
                })
            },

        /*----------状态 结束----------*/

            //页码事件
            rootPagesClick(pageNum){
                this.rootPagesNum=pageNum;
                //rootSeoWho值为0表示的是搜索栏搜索，1表示状态搜素，2表示显示全部
                switch (this.rootSeoWho) {
                    case 0:
                        this.rootSeoDataNew();
                        break;
                    case 1:
                        this.rootStateSeo(this.rootNavStateNum);
                        break;
                    case 2:
                        this. rootDataNew();
                        break;
                }

            },




            //编辑按钮被点击
            FnChangeRoot(i){
                this.$parent.rootShowWho=false;
                this.$parent.userData=[this.userLi[i]];
            },


            //弹框
            rootDataOpen() {
                this.$alert(this.rootDataAlertCon, '提示', {
                    confirmButtonText: '确定',
                    /*callback: () => {


                    }*/
                });
            }
        },
        mounted(){
            this.$axios.post('/api/rootData',{
                pagesNum:this.rootPagesNum
            }).then((res)=>{
                if (res.data.error){
                    this.rootDataAlertCon='数据加载失败，请稍后再试。';
                    this.rootDataOpen();
                } else {
                    this.userLi=res.data.data;
                    this.rootPagesAllNum=res.data.pagesNum;
                }
            })
        },
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
        position: relative;

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
    .root-box{
        width: 96%;
        min-height: 415px;
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

        >ul>li{
            float: left;
            width: 20%;
            font-size:18px;
            text-align: center;
            position: relative;
        }
    }

    //状态
    .root-state-box:hover{
        cursor:pointer;
    }
    //状态栏下拉框
    .root-nav-state{
        width: 65%;
        position: absolute;
        top: 30px;
        right:35px;
        border: 1px solid #ccc;
        background: white;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        box-shadow: 2px 2px 8px 2px #ccc;
        overflow: hidden;

        >li{
            border-bottom: 1px  solid #ccc;


            &:hover{
                cursor:pointer;
                background: #0077aa;
                color: white;
            }
        }
    }

    //搜索框的下拉
    .root-seo-box{
        position: relative;
        cursor: pointer;
    }
    .root-seo-state{
        width: 85px;
        position: absolute;
        top: 28px;
        right:307px;
        border: 1px solid #ccc;
        background: white;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        box-shadow: 2px 2px 8px 2px #ccc;
        overflow: hidden;
        z-index: 999;

        >li{
            border-bottom: 1px  solid #ccc;
            text-align: center;


            &:hover{
                cursor:pointer;
                background: #0077aa;
                color: white;
            }
        }
    }


    //内容显示区
    .root-body{
        margin-top: 20px;
        height: 305px;
    }

    //列表显示主体
    .root-content{
        width: 98%;
        height: 40px;
        line-height: 40px;
        border: #ccc solid 1px ;
        border-radius: 5px;
        margin-left: 1%;
        margin-bottom: 10px;
        background: white;

        >p{
            float: left;
            text-align: center;
            width: 20%;
        }

        >.root-name{
            width: 18%;
            margin-right: 2%;
        }
        >.root-btn{
            width: 19%;
            margin-left: 1%;
            font-weight: bold;
            >span:hover{
                cursor:pointer;
            }
        }
    }

    //分页
    .root-pages-box{
        text-align: center;
        height: 30px;
        margin-top: 16px;




    }

</style>