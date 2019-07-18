<template>
    <div class="boss">

        <div class="box">
            <!--标题-->
            <div class="head">
                <p>找回密码</p>
            </div>

            <!--输入部分-->
            <div class="body">
                <!--手机号输入-->
                <div class="inp">
                    <div class="ipt">
                        <p>
                            <span class="iconfont icon-shouji1"></span>
                        </p>
                        <input type="text" placeholder="手机号" @blur="phoneBlur" v-model="phone" :disabled="phoneKey">
                        <span class="iconfont icon-cuo no" v-show="phoneNo"></span>
                        <span class="iconfont icon-dui yes" v-show="phoneYes"></span>
                    </div>
                    <p class="content">{{phoneCon}}&nbsp;</p>
                </div>

                <!--验证码输入-->
                <div class="inp" style="width: 100%;">
                    <div class="ipt">
                        <p>
                            <span class="iconfont icon-yanzhengma1"></span>
                        </p>
                        <input style="width: 70px;left: -9px" type="text" placeholder="验证码" v-model="pass">
                        <button :disabled="btnKey" @click="passBtn">{{timeCon}}</button>
                    </div>
                </div>
            </div>

            <div class="btn">

                <button class="no-pass-btn-no">取消</button>
                <button class="no-pass-btn-yes">确定</button>

            </div>
        </div>

    </div>
</template>

<script>


    export default {
        name: "NoPass",
        data:function () {
            return {
            /*----------手机号 开始----------*/

                //手机号正则
                phoneReg:/^1[345789]\d{9}$/,
                //手机号码
                phone:'',
                //号码输入是否正确
                phoneYes:false,
                phoneNo:false,
                //错误的信息描述
                phoneCon:'',
                //手机输入框是否可以输入
                phoneKey:false,

            /*----------手机号 开始----------*/

            /*----------倒计时按钮 开始----------*/

                //倒计时按钮显示内容
                timeCon:'获取验证码',
                //发送按钮是否可以点击
                btnKey:true,
                //倒计时时间
                s:60,

            /*----------倒计时按钮 开始----------*/

                //验证码
                pass:'',


            }
        },
        methods:{
            fnPhone(con,yes){
                this.phoneCon=con;
                this.phoneNo=yes;
                this.phoneYes=!this.phoneNo;
                this.btnKey=yes;
            },
            //手机号输入框失去焦点
            phoneBlur(){
                if (!this.phone.trim()) {
                    this.fnPhone('*不能为空',true);
                    return false;
                }
                if (!this.phoneReg.test(this.phone)){
                    this.fnPhone('*手机号格式不正确',true);
                    return false;
                } else {
                    this.fnPhone('',false);
                    return true;
                }
            },
            //点击发送验证码按钮
            passBtn(){
                this.phoneKey=true;
                this.btnKey=true;
                let timeOver=window.setInterval( ()=> {
                    this.s--;
                    if (this.s<=-1){
                        window.clearInterval(timeOver);
                        this.timeCon='重新发送';
                        this.s=60;
                        this.phoneKey=false;
                        this.btnKey=false;
                        return
                    }
                    this.timeCon='重新发送('+this.s+')';


                },1000)


            }
        },
    }
</script>


<style scoped lang="less">
    //输入框正则效验对错图标公用
    .spanPos{
        position: absolute;
        top: 2px;
        right: 13px;
        font-size: 20px;
        font-weight: bold;
    }


    .boss{
        background: url("./../../public/timg (1).jpg")no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    //主体
    .box{
        width: 400px;
        height: 300px;
        padding: 10px 10px;
        border-radius: 10px;
        text-align: center;
        margin: 100px auto;
        background: rgba(255,255,255,0.9);
    }

    //标题
    .head{
        margin-top: 30px;
        margin-bottom: 10px;
        >p{
            font-size: 26px;
            color: #55a532;
        }
    }

    .body{
        margin-top: 30px;
    }

    //输入框部分
    .ipt{
        width: 206px;
        height: 27px;
        border-radius: 5px;
        margin-left: 95px;
        position: relative;
        margin-top: 10px;

        >p{
            width: 25px;
            height: 25px;
            float: left;
            border:solid 1px #a2a2a2;
            text-align: center;
            line-height: 20px;
            background: #ebebeb;
            border-bottom-left-radius: 5px;
            border-top-left-radius: 5px;
            font-size: 20px;
        }

        >input{
            height: 25px;
            position: relative;
            left:-4px;
            border: 1px solid #a2a2a2;
            box-shadow: none;
            border-bottom-right-radius: 5px;
            border-top-right-radius: 5px;
            padding-left: 5px;

        }

        >input:focus{
            border:  #a3e9f6 1px  solid;
            outline: 0;
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #77b4ad;
        }

        >button{
            width: 90px;
            height: 25px;
        }
    }

    //正确的图标
    .yes{
        .spanPos();
        color: green;
    }

    //错误的图标
    .no{
        .spanPos();
        color: red;
    }

    //忘记密码
    .no-pass{
        width: 100%;
        text-align: left;
        font-size: 14px;
        color: #969696;
        margin-left: 100px;
        _margin-top: 10px;
    }

    //按钮
    .btnPublic{
        width: 120px;
        height: 35px;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid skyblue;
    }
    .btn{
        margin-top: 50px;
        width: 100%;
        text-align: center;


        >.no-pass-btn-yes{
            .btnPublic();
            background: #0aa0f6;
            color: white;
            margin-left: 40px;
        }

        >.no-pass-btn-no>{
            .btnPublic();
            background: white;
            color: black;
        }
    }

    //错误描述信息
    .content{
        font-size: 12px;
        color: red;
    }


</style>