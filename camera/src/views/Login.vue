<template>
    <div class="boss">

        <!--登录框-->
        <div class="box">
            <!--标题-->
            <div class="head">
                <p>欢迎登陆雷霆数码</p>
                <p>后台管理系统</p>
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
                        <input type="password" placeholder="密码" v-model="pass" @blur="passBlur">
                        <span class="iconfont icon-cuo no" v-show="passNo"></span>
                        <span class="iconfont icon-dui yes" v-show="passYes"></span>
                    </div>
                    <p class="content" >{{passCon}} &nbsp;</p>
                </div>

                <p class="no-pass" @click="goNoPass">忘记密码?</p>
            </div>

            <div class="btn">
                <!--<router-link :to="aa" tag="button"  @click="goLogin">登  录</router-link>-->
                <button @click="goLogin">登陆</button>
            </div>
        </div>

        <!--修改密码组件-->
        <ChangePass v-show="changePassShow"></ChangePass>

    </div>
</template>

<script>

    //改变密码组件
    import ChangePass from './../components/ChangePass'

    export default {
        name: "Login",
        data:function () {
            return {
                //用户名正在验证
                userReg:/^[A-Z]{2}[0-9]{4}$/,

                //密码正则验证
                passReg:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![0-9a-z]+$)(?![0-9A-Z]+$)(?![A-Za-z]+$).{8,16}$/,

                //弹框标题
                loginAlertHead:'',
                loginAlertCon:'',

                //密码输入错误次数
                passNum:0,


            /*----------账号 开始----------*/
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

                //修改密码弹框的显示隐藏
                changePassShow:false,

                //存原来的用户名
                userJ:''

            }
        },
        components:{
            ChangePass
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

            //登录按钮被点击
            goLogin(){
                if (this.userJ!=this.user){
                    this.passNum=0;
                }
                if (this.passNum<=5){
                    if (this.userBlur() && this.passBlur()) {
                        this.userJ=this.user;
                        this.$axios.post('/api/userBossLogin',{
                            user:this.user,
                            pass:this.pass,
                            state:this.passNum
                        }).then((res)=>{
                            switch (res.data.error){
                                case 1:
                                    this.loginAlertHead='提示';
                                    this.loginAlertCon='登录失败，请稍后再试。';
                                    this.loginOpen();
                                    break;
                                case 2:
                                    this.loginAlertHead='提示';
                                    this.loginAlertCon='用户名不存在，请检查后重新输入！';
                                    this.loginOpen();
                                    break;
                                case 3:
                                    switch (res.data.state) {
                                        case 0 :
                                            this.passNum=res.data.state;
                                            this.passNum++;
                                            this.loginAlertHead='提示';
                                            this.loginAlertCon='账号或密码有误，请核对后重新输入！';
                                            this.loginOpen();
                                            break;
                                        case  1 || 2 :
                                            this.passNum=res.data.state;
                                            this.passNum++;
                                            this.loginAlertHead='提示';
                                            this.loginAlertCon='账号或密码有误，请核对后重新输入！';
                                            this.loginOpen();
                                            break;
                                        case 3:
                                            this.passNum=res.data.state;
                                            this.passNum++;
                                            this.loginAlertHead='警告';
                                            this.loginAlertCon='您已错误输入密码3次，超过5次后账号将被冻结。';
                                            this.loginOpen();
                                            break;
                                        case 4:
                                            this.passNum=res.data.state;
                                            this.passNum++;
                                            this.loginAlertHead='警告';
                                            this.loginAlertCon='您已错误输入密码4次，超过5次后账号将被冻结。';
                                            this.loginOpen();
                                            break;
                                        case 5:
                                            this.passNum=res.data.state;
                                            this.passNum++;
                                            this.loginAlertHead='警告';
                                            this.loginAlertCon='由于您多次输入错误的密码，账号已经被冻结。请联系系统管理员！';
                                            this.loginOpen();
                                            break;
                                    }
                                    break;
                                case 4:
                                    this.loginAlertHead='提示';
                                    this.loginAlertCon='您的密码为初始密码，为了保障账号的安全，请立刻修改密码！';
                                    this.loginOpen();
                                    this.changePassShow=true;
                                    this.user='';
                                    this.pass='';
                                    break;
                                case 0:
                                    this.$router.push('/Index');
                                    break;
                            }
                        })
                    }
                }else {
                    this.loginAlertHead='警告';
                    this.loginAlertCon='由于您多次输入错误的密码，账号已经被冻结。请联系系统管理员！';
                    this.loginOpen();
                }
            },

            //忘记密码被点击
            goNoPass(){
                this.$router.push('/NoPass');
            },

            //弹框
            loginOpen() {
                this.$alert(this.loginAlertCon, this.loginAlertHead, {
                    confirmButtonText: '确定',
                    /*callback: () => {


                    }*/
                });
            }
        }
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
        background: url("./../../public/timg (1).jpg") no-repeat;
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
        width: 63px;
        text-align: left;
        font-size: 14px;
        color: #969696;
        margin-left: 100px;

        &:hover{
            cursor:pointer;
        }
    }

    //按钮
    .btn{
        margin-top: 30px;
        >button{
            width: 120px;
            height: 35px;
            border: 1px solid skyblue;
            border-radius: 5px;
            background: #0aa0f6;
            color: white;
            cursor: pointer;
        }
    }

    //错误描述信息
    .content{
        font-size: 12px;
        color: red;
    }


</style>