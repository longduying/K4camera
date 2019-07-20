<template>
    <div class="root-boss">
        <!--标题-->
        <div class="root-head">
            <span>售后信息</span>
        </div>
        <!--搜索-->
        <div class="root-seo">
            <input type="text" placeholder="通过商品名搜索">
            <button class="root-seo-btn">搜索</button>
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
                            当前进度
                            <span class="iconfont icon-xia"></span>
                        </span>
                        <ul v-show="StateNav" class="root-nav-state">
                            <li>待处理</li>
                            <li>送修中</li>
                            <li>维修中</li>
                            <li>返回中</li>
                            <li>已完成</li>
                        </ul>
                    </li>
                    <li>操作</li>
                </ul>
            </div>
            <!--内容显示区域-->
            <div class="state-body">

                <div class="state-content clearfix">
                    <p class="state-name clearfix">
                        <img src="./../assets/D-img/d1.png" alt="">
                        <span>这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字，最多只能填写18个字的点点滴滴</span>
                    </p>
                    <p class="state-shopping">2019-07-21</p>
                    <p class="state-time">2019-07-21</p>
                    <p class="state-why">闪光灯无法打开</p>
                    <p class="state-new">发起售后</p>
                    <p class="state-btn">
                        <button>查看详情</button>
                    </p>
                </div>
                <div class="state-content clearfix">
                    <p class="state-name clearfix">
                        <img src="./../assets/D-img/d1.png" alt="">
                        <span>这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字，最多只能填写18个字的点点滴滴</span>
                    </p>
                    <p class="state-shopping">2019-07-21</p>
                    <p class="state-time">2019-07-21</p>
                    <p class="state-why">闪光灯无法打开</p>
                    <p class="state-new">发起售后</p>
                    <p class="state-btn">
                        <button>查看详情</button>
                    </p>
                </div>
                <div class="state-content clearfix">
                    <p class="state-name clearfix">
                        <img src="./../assets/D-img/d1.png" alt="">
                        <span>这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字，最多只能填写18个字的点点滴滴</span>
                    </p>
                    <p class="state-shopping">2019-07-21</p>
                    <p class="state-time">2019-07-21</p>
                    <p class="state-why">闪光灯无法打开</p>
                    <p class="state-new">发起售后</p>
                    <p class="state-btn">
                        <button>查看详情</button>
                    </p>
                </div>
                <div class="state-content clearfix">
                    <p class="state-name clearfix">
                        <img src="./../assets/D-img/d1.png" alt="">
                        <span>这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字，最多只能填写18个字的点点滴滴</span>
                    </p>
                    <p class="state-shopping">2019-07-21</p>
                    <p class="state-time">2019-07-21</p>
                    <p class="state-why">闪光灯无法打开</p>
                    <p class="state-new">发起售后</p>
                    <p class="state-btn">
                        <button>查看详情</button>
                    </p>
                </div>
                <div class="state-content clearfix">
                    <p class="state-name clearfix">
                        <img src="./../assets/D-img/d1.png" alt="">
                        <span>这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字这个是商品的名字，最多只能填写18个字的点点滴滴</span>
                    </p>
                    <p class="state-shopping">2019-07-21</p>
                    <p class="state-time">2019-07-21</p>
                    <p class="state-why">闪光灯无法打开</p>
                    <p class="state-new">发起售后</p>
                    <p class="state-btn">
                        <button>查看详情</button>
                    </p>
                </div>

            </div>

            <!--分页-->
            <div class="state-pages-box">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="50">
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
                //当前状态下拉框的显示隐藏
                StateNav:false,
            }
        },
        methods:{
            //状态点击下拉框的显示隐藏
            StateNavShow(){
                this.StateNav=!this.StateNav;
            },
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
            width:9%;
            margin-right: 2%;
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