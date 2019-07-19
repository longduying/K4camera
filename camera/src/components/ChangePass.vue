<template>
    <div class="boss">

        <div class="box">
            <!--标题-->
            <div class="head">
                <p>修改密码</p>
            </div>

            <!--输入部分-->
            <div class="body">
                <!--账号输入-->
                <div class="inp">
                    <div class="ipt">
                        <p>
                            <span class="iconfont icon-yonghu"></span>
                        </p>
                        <input type="text" placeholder="账号" @blur="userBlur" v-model="user">
                        <span class="iconfont icon-cuo no" v-show="userNo"></span>
                        <span class="iconfont icon-dui yes" v-show="userYes"></span>
                    </div>
                    <p class="content">{{userCon}}&nbsp;</p>
                </div>

                <!--密码输入-->
                <div class="inp">
                    <div class="ipt">
                        <p>
                            <span class="iconfont icon-mima"></span>
                        </p>
                        <input type="text" placeholder="密码" v-model="pass" @blur="passBlur">
                        <span class="iconfont icon-cuo no" v-show="passNo"></span>
                        <span class="iconfont icon-dui yes" v-show="passYes"></span>
                    </div>
                    <p class="content" >{{passCon}} &nbsp;</p>
                </div>

                <!--新密码-->
                <div class="inp">
                    <div class="ipt">
                        <p>
                            <span class="iconfont icon-mima"></span>
                        </p>
                        <input type="text" placeholder="新密码" v-model="newPass" @blur="newPassBlur">
                        <span class="iconfont icon-cuo no" v-show="newPassNo"></span>
                        <span class="iconfont icon-dui yes" v-show="newPassYes"></span>
                    </div>
                    <p class="content" >{{newPassCon}} &nbsp;</p>
                </div>

                <!--重复密码-->
                <div class="inp">
                    <div class="ipt">
                        <p>
                            <span class="iconfont icon-mima"></span>
                        </p>
                        <input type="text" placeholder="确认密码" v-model="newPassTwo" @blur="newPassTwoBlur">
                        <span class="iconfont icon-cuo no" v-show="newPassTwoNo"></span>
                        <span class="iconfont icon-dui yes" v-show="newPassTwoYes"></span>
                    </div>
                    <p class="content" >{{newPassTwoCon}} &nbsp;</p>
                </div>

            </div>

            <div class="btn">

                <button class="no-pass-btn-no" @click="EChangePassNo">取消</button>
                <button class="no-pass-btn-yes" @click="EChangePassYes">确定</button>

            </div>
        </div>


    </div>
</template>

<script>

    export default {
        name: "ChangePass",
        data:function () {
            return {
                //弹框的显示隐藏
                ChangePassShow:false,

            /*----------账号 开始----------*/
                //用户名正则验证
                userReg:/^[A-Z]{2}[0-9]{4}$/,
                //输入内容
                user:'',
                //描述信息显示隐藏
                userConShow:false,
                //描述信息显示内容
                userCon:'',
                //正确图标显示
                userYes:false,
                //错误图标显示
                userNo:false,
            /*----------账号  结束---------*/

                //密码正则验证
                passReg:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![A-Za-z]+$).{8,16}$/,

            /*----------密码  开始----------*/
                //输入内容
                pass:'',
                //描述信息显示隐藏
                passConShow:false,
                //描述信息显示内容
                passCon:'',
                //正确图标显示
                passYes:false,
                //错误图标显示
                passNo:false,
            /*----------密码  结束----------*/

            /*----------密码  开始----------*/
                //输入内容
                newPass:'',
                //描述信息显示隐藏
                newPassConShow:false,
                //描述信息显示内容
                newPassCon:'',
                //正确图标显示
                newPassYes:false,
                //错误图标显示
                newPassNo:false,
            /*----------密码  结束----------*/

            /*----------重复密码  开始----------*/
                //输入内容
                newPassTwo:'',
                //描述信息显示隐藏
                newPassConShowTwo:false,
                //描述信息显示内容
                newPassTwoCon:'',
                //正确图标显示
                newPassTwoYes:false,
                //错误图标显示
                newPassTwoNo:false,
            /*----------重复密码  结束----------*/



            }
        },
        methods:{
            //非空判断
            sky(who){
                if (!this[who].trim()){
                    this[who+'Con']='*不能为空';
                    this[who+'No']=true;
                    this[who+'Yes']=!this[who+'No'];
                    return false;
                }else {
                    return true;
                }
            },

            //正则效验
            Reg(reg,who,content){

                if (!reg.test(this[who])) {
                    this[who+'Con']=content;
                    this[who+'No']=true;
                    this[who+'Yes']=!this[who+'No'];
                    return false;
                }else {
                    this[who+'Con']=' ';
                    this[who+'No']=false;
                    this[who+'Yes']=!this[who+'No'];
                    return true;
                }
            },

            //账号输入框失去焦点
            userBlur(){
                if (!this.sky('user')) {
                    return false;
                }
                return this.Reg(this.userReg,'user','*账号由2位大写字母和4位数字组成')
            },

            //密码输入框失去焦点
            passBlur(){
                if (!this.sky('pass')) {
                    return false;
                }
                return this.Reg(this.passReg,'pass','*密码应当包含字母大写、小写、数字、特殊符号其中三种，8-16位');
            },

            //密码输入框失去焦点
            newPassBlur(){
                if (!this.sky('newPass')) {
                    return false;
                }
                return this.Reg(this.passReg,'newPass','*密码应当包含字母大写、小写、数字、特殊符号其中三种，8-16位');
            },

            //重复密码框失去焦点
            newPassTwoBlur(){
                if (!this.sky('newPassTwo')) {
                    return false;
                }
                if (this.newPass==this.newPassTwo){
                    this.newPassTwoCon='';
                    this.newPassTwoNo=false;
                    this.newPassTwoYes=!this.newPassTwoNo;
                    return true;
                } else {
                    this.newPassTwoCon='*两次密码不一致';
                    this.newPassTwoNo=true;
                    this.newPassTwoYes=!this.newPassTwoNo;
                    return false;
                }
            },

            //取消按钮被点击
            EChangePassNo(){
                this.$parent.ChangePassShow=false;
            },

            //确定按钮被点击
            EChangePassYes(){
                //发送请求
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
        background: rgba(0,0,0,0.3);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }

    //主体
    .box{
        width: 400px;
        height: 350px;
        padding: 10px 10px;
        border-radius: 10px;
        text-align: center;
        margin: 100px auto;
        background: white;
    }

    //标题
    .head{
        margin-bottom: 10px;
        margin-top: 10px;
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
        margin-left: 101px;
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
            left:-5px;
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

        &:hover{
            cursor:pointer;
        }
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
        margin-top: 20px;
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