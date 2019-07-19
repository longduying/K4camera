<template>
    <div class="box" :style="{'height':H+'px'}" >
        <div class="left">
            <div><h1>logo</h1></div>
            <div>
                <div style="margin-top: 30px">
                    <span class="iconfont icon-gaikuang2" style="font-size: 14px"></span>
                    概况
                </div>
            </div>
            <div>
                <div @click="show1">
                    <span class="iconfont icon-shangpin" style="font-size: 15px"></span>
                    商品管理
                </div>
                <ul v-show="a">
                    <router-link to="addGoods" tag="li">添加商品</router-link>
                    <router-link to="addGoods" tag="li">商品列表</router-link>
                    <router-link to="addGoods" tag="li">分类管理</router-link>
                </ul>
            </div>
            <div>
                <div @click="show2"><span class="iconfont icon-dingdan1" style="font-size: 18px"></span>交易管理</div>
                <ul v-show="b">
                    <router-link to="/OrderManage" tag="li">订单管理</router-link>
                    <router-link to="/OrderRef" tag="li">交易退款</router-link>
                    <router-link to="/EvailManage" tag="li">评论管理</router-link>
                </ul>
            </div>
            <div>
                <div @click="show3"><span class="iconfont icon-caiwu" style="font-size: 16px"></span>财务管理</div>
                <ul v-show="c">
                    <li>财务总览</li>
                </ul>
            </div>
            <div>
                <div @click="show4"><span class="iconfont icon-yonghu1" style="font-size: 18px"></span>客户管理</div>
                <ul v-show="d">
                    <li>客户列表</li>
                </ul>
            </div>
            <div>
                <div @click="show7"><span class="iconfont icon-shuju1" style="font-size: 19px"></span>数据分析</div>
                <ul v-show="g">
                    <li>流量管理</li>
                    <li>客户分析</li>
                    <li>商品分析</li>
                </ul>
            </div>
            <div>
                <div @click="show5"><span class="iconfont icon-shouhou" style="font-size: 18px"></span>售后管理</div>
                <ul v-show="e">
                    <li>售后管理</li>
                </ul>
            </div>
            <div>
                <div @click="show6"><span class="iconfont icon-quanxianguanli" style="font-size: 20px"></span>权限管理</div>
                <ul v-show="f">
                    <router-link to="/Root" tag="li">权限管理</router-link>
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="rightHead">
                <span class="s1">相机管理后台</span>
                <span class="iconfont icon-yonghu s2"></span>
                <span class="exit">退出登录</span>
            </div>
            <div class="rightMain">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>




    export default {
        name: "Index",
        data:function () {
            return {
                a:false,
                b:false,
                c:false,
                d:false,
                e:false,
                f:false,
                g:false,
                tab:'',
                H:0,
            }
        },
        methods:{
            show(who){
                let a=this[who];
                this.a=false;
                this.b=false;
                this.c=false;
                this.d=false;
                this.e=false;
                this.f=false;
                this.g=false;
                if (a){
                    return
                } else {
                    this[who]=true;
                }
            },
            show1(){
                this.show('a')
            },
            show2(){
                this.show('b')
            },
            show3(){
                this.show('c')
            },
            show4(){
                this.show('d')
            },
            show5(){
                this.show('e')
            },
            show6(){
                this.show('f')
            },
            show7(){
                this.show('g')
            },

        },
        mounted(){
            let h=document.documentElement.clientHeight;
            this.H=h;

        }
    }

</script>

<style scoped lang="less">
    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .box{
        display: flex;
        min-height: 562px;

    }
    .left{
        flex: 1.5;
        background: #273043;
        color: #d4d6d9;
        /*height: 650px;*/
        div div{
            height: 50px;
            line-height: 50px;
            cursor: pointer;
        }
        h1{
            text-align: center;
        }
        ul{
            background: #222939;
            padding-left: 36%;
            cursor: pointer;
            li{
                height: 50px;
                line-height: 50px;
            }
        }
    }
    .right{
        flex: 8.5;
        background: gainsboro;
        .rightHead{
            height: 60px;
            background: white;
            line-height: 60px;
        }
        .rightMain{
            width: 96%;
            min-height: 568px;
            background: white;
            margin-left: 2%;
            margin-top: 2%;
        }
    }

    .icon-gaikuang2{
        margin-left: 25.3%;
        margin-right: 12.2px;
    }
    .icon-caiwu{
        margin-left: 22.7%;
        margin-right: 12.2px;
    }
    .icon-dingdan1{
        margin-left: 23%;
        margin-right: 10px;
    }
    .icon-shangpin{
        margin-left: 24.2%;
        margin-right: 10px;
    }
    .icon-yonghu1{
        margin-left: 21.4%;
        margin-right: 11px;
    }
    .icon-shuju1{
        margin-left: 20%;
        margin-right: 11.5px;
    }
    .icon-shouhou{
        margin-left: 19.8%;
        margin-right: 11px;
    }
    .icon-quanxianguanli{
        margin-left: 19%;
        margin-right: 10px;
    }

    .s1{
        margin-left: 28px;
        font-size: 17px;
    }
    .s2{
        margin-left: 75%;
        font-size: 26px;
    }
    .s3{
        margin-left: 50px;
    }
    .exit{
        display: inline-block;
        text-align: center;
        border: none;
        margin-left:10px;
        cursor: default;
    }
</style>