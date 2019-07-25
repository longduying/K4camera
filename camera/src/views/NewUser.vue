<template>
    <div class="root-boss">
        <!--标题-->
        <div class="root-head">
            <span>人员新增</span>
        </div>
        <!--显示主体-->
        <div class="root-box clearfix">
            <div class="clearfix">
                <!--姓名-->
                <div>
                    姓名：
                    <el-tooltip  effect="dark" content="2-6个中文" placement="right">
                        <input type="text" v-model="Name" @blur="newNameBlur">
                    </el-tooltip>
                    <span class="iconfont icon-cuo rootSpanNo" v-show="newNameNo"></span>
                    <span class="iconfont icon-dui rootSpanYes" v-show="newNameYes"></span>
                </div>
                <!--性别-->
                <div>
                    性别：
                    <el-radio v-model="newUserSex" label="1">男</el-radio>
                    <el-radio v-model="newUserSex" label="2">女</el-radio>
                </div>
                <!--手机号-->
                <div>
                    手机：
                    <el-tooltip  effect="dark" content="11位手机号" placement="right">
                        <input type="text" v-model="Phone" @blur="newPhoneBlur">
                    </el-tooltip>
                    <span class="iconfont icon-cuo rootSpanNo" v-show="newPhoneNo"></span>
                    <span class="iconfont icon-dui rootSpanYes" v-show="newPhoneYes"></span>
                </div>
                <!--授权状态-->
                <div class="changeRootNow">
                    访问权限：
                    <div>
                        <el-checkbox-group v-model="newUserRoot">
                            <el-checkbox label="1">概况</el-checkbox>
                            <el-checkbox label="2">商品管理</el-checkbox>
                            <el-checkbox label="3">交易管理</el-checkbox>
                            <el-checkbox label="4">财务管理</el-checkbox>
                            <el-checkbox label="5">客户管理</el-checkbox>
                            <el-checkbox label="6">数据分析</el-checkbox>
                            <el-checkbox label="7">售后管理</el-checkbox>
                            <el-checkbox label="8">权限管理</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
                <!--确定按钮-->
                <div class="changeRootBtn">
                    <button @click="newUserYes">确定</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "NewUser",
        data:function () {
            return {
            /*----------姓名 开始----------*/
                //姓名正则
                NameReg:/^[\u4e00-\u9fa5]{2,6}$/,
                //姓名
                Name:'',
                //对错符合
                newNameNo:false,
                newNameYes:false,

            /*----------姓名 结束----------*/

                //性别选择
                newUserSex:'1',

            /*----------手机号 开始----------*/
                PhoneReg:/^1[345789]\d{9}$/,
                Phone:'',
                newPhoneNo:false,
                newPhoneYes:false,
            /*----------手机号 结束----------*/

                //权限选择框
                newUserRoot:['0'],

                //弹框提示内容
                alertHead:'',
                alertCon:'',


            }
        },
        methods:{
            //非空及正则验证
            newReg(val,who){
                let Y='new'+who+'Yes';
                let N='new'+who+'No';
                if (!val.trim()){
                    this[N]=true;
                    this[Y]=!this[N];
                    return false;
                }
                if (this[who+'Reg'].test(val)){
                    this[N]=false;
                    this[Y]=!this[N];
                    return true;
                }else {
                    this[N]=true;
                    this[Y]=!this[N];
                    return false;
                }
            },
            //姓名输入框失去焦点
            newNameBlur(){
                return this.newReg(this.Name,'Name');
            },
            //手机号失去焦点
            newPhoneBlur(){
                return this.newReg(this.Phone,'Phone');
            },
            //点击确定按钮
            newUserYes(){
                if (this.newNameBlur() && this.newPhoneBlur()) {
                    //发送请求
                    this.$axios.post('/api/newUserBoss',{
                        name:this.Name,
                        sex:this.newUserSex,
                        phone:this.Phone,
                        root:this.newUserRoot
                    }).then((res)=>{
                        switch (res.data.error){
                            case 1:
                                this.alertHead='失败';
                                this.alertCon='新增账号失败，请稍后重试';
                                this.open();
                                break;
                            case 2:
                                this.alertHead='失败';
                                this.alertCon='手机号已被注册，请更换后重试！';
                                this.open();
                                break;
                            case 0:
                                this.alertHead='成功';
                                this.alertCon=`注册成功！用户名：${res.data.user}，，密码：${res.data.pass}。为保护账户安全，请及时修改密码！`;
                                this.open();
                                break;
                        }
                    },()=>{
                        this.alertHead='失败';
                        this.alertCon='新增账号失败，请稍后重试！';
                        this.open()
                    })
                }
            },
            //弹框
            open() {
                this.$alert(this.alertCon, '提示', {
                    confirmButtonText: '确定',
                    callback: () => {
                        this.Name='';
                        this.Phone='';
                        this.newUserRoot=['0'];
                        this.newPhoneNo=false;
                        this.newPhoneYes=false;
                        this.newNameYes=false;
                        this.newNameNo=false;
                    }
                });
            }
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
        position: relative;

        >button{
            position: absolute;
            top: 11px;
            right:6%;
            width: 100px;
            height: 30px;
            background: white;
            border: #ccc 1px  solid;
            border-radius: 5px;
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

        //显示大框
        >div{
            margin-left: 10%;
            margin-top: 2%;

            //分区显示的小框
            >div{
                float: left;
                width: 50%;
                height: 50px;
                line-height: 50px;

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
            }

            //授权状态
            .changeRootNow{
                width: 100%;
                height: 100px;
                margin-top: 20px;

                >div{
                    margin-top: -10px;
                }
            }

            //按钮
            .changeRootBtn{
                width: 85%;
                text-align: center;
                height: 200px;
                line-height: 200px;
                _border: red solid 1px;

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
        }
    }



    //输入框的图标显示
    .rootChangSpan{
        font-size:18px;
        font-weight: bold;
        margin-left: 5px;
    }
    .rootSpanYes{
        .rootChangSpan();
        color: green;
    }
    .rootSpanNo{
        .rootChangSpan();
        color: red;
    }





</style>