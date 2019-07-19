<template>
    <div class="root-boss">
        <!--标题-->
        <div class="root-head">
            <span>权限管理</span>
        </div>
        <div class="root-seo">
            综合搜索：<input type="text" placeholder="姓名、手机号或账号关键字">
            <button class="root-seo-btn">搜索</button>
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
                            当前状态
                            <span class="iconfont icon-xia"></span>
                        </span>
                        <ul v-show="rootNavState" class="root-nav-state">
                            <li>正常</li>
                            <li>冻结</li>
                            <li>风险</li>
                        </ul>
                    </li>
                    <li>操作</li>
                </ul>
            </div>
            <!--内容显示区域-->
            <div class="root-body">

                <div class="root-content">
                    <p class="root-name">张文</p>
                    <p class="root-phone">18109090040</p>
                    <p class="root-user">LT0001</p>
                    <p class="root-state">正常</p>
                    <p class="root-btn">
                        <span class="iconfont icon-iconset0137"></span>
                    </p>
                </div>
                <div class="root-content">
                    <p class="root-name">张文</p>
                    <p class="root-phone">18109090040</p>
                    <p class="root-user">LT0001</p>
                    <p class="root-state">正常</p>
                    <p class="root-btn">
                        <span class="iconfont icon-iconset0137"></span>
                    </p>
                </div>
                <div class="root-content">
                    <p class="root-name">张文</p>
                    <p class="root-phone">18109090040</p>
                    <p class="root-user">LT0001</p>
                    <p class="root-state">正常</p>
                    <p class="root-btn">
                        <span class="iconfont icon-iconset0137"></span>
                    </p>
                </div>
                <div class="root-content">
                    <p class="root-name">张文</p>
                    <p class="root-phone">18109090040</p>
                    <p class="root-user">LT0001</p>
                    <p class="root-state">正常</p>
                    <p class="root-btn">
                        <span class="iconfont icon-iconset0137"></span>
                    </p>
                </div>
                <div class="root-content">
                    <p class="root-name">张文</p>
                    <p class="root-phone">18109090040</p>
                    <p class="root-user">LT0001</p>
                    <p class="root-state">正常</p>
                    <p class="root-btn">
                        <span class="iconfont icon-iconset0137"></span>
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Root",
        data:function () {
            return {
                //当前状态下拉框的显示隐藏
                rootNavState:false,
            }
        },
        methods:{
            //状态点击
            navShow(){
                this.rootNavState=!this.rootNavState;
            }
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
    .root-box{
        width: 96%;
        min-height: 450px;
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

    //内容显示区
    .root-body{
        margin-top: 20px;
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
        }
    }

</style>