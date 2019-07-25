<template>
    <div class="root-boss">
        <!--标题-->
        <div class="root-head">
            <span>资料修改</span>
            <button @click="rootChangeBack">返回</button>
        </div>
        <!--显示主体-->
        <div class="root-box clearfix">
            <div class="clearfix">
                <!--姓名-->
                <div>
                    姓名：
                    <el-tooltip  effect="dark" content="2-6个中文" placement="right">
                        <input type="text" v-model="Name" @blur="rootChangeName">
                    </el-tooltip>
                    <span class="iconfont icon-cuo rootSpanNo" v-show="rootNameNo" ></span>
                    <span class="iconfont icon-dui rootSpanYes" v-show="rootNameYes"></span>
                </div>
                <!--性别-->
                <div>
                    性别：
                    <el-radio v-model="rootChangeSex" label='1'>男</el-radio>
                    <el-radio v-model="rootChangeSex" label='2'>女</el-radio>
                </div>
                <!--手机号-->
                <div>
                    手机：
                    <el-tooltip  effect="dark" content="11位手机号" placement="right">
                        <input type="text" v-model="Phone" @blur="rootChangePhone">
                    </el-tooltip>
                    <span class="iconfont icon-cuo rootSpanNo" v-show="rootPhoneNo"></span>
                    <span class="iconfont icon-dui rootSpanYes" v-show="rootPhoneYes"></span>
                </div>
                <!--状态-->
                <div class="root-c-box">
                    状态：
                    <span @click="navCShowFn" class="root-c-state-box">
                        &nbsp; {{rootCStateCon}}
                        <span class="iconfont icon-xia"></span>
                    </span>
                    <ul v-show="navCShow" class="root-c-nav-state">
                        <li @click="rootCStateConFn(1)">正常</li>
                        <li @click="rootCStateConFn(2)">冻结</li>
                        <li @click="rootCStateConFn(3)">风险</li>
                        <li @click="rootCStateConFn(4)">离职</li>
                    </ul>
                </div>
                <!--账号-->
                <div>
                    账号：<span style="margin-left: 8px">{{userNum}}</span>
                </div>
                <!--密码-->
                <div>
                    密码：<button @click="newRootPass">重置密码</button>
                </div>
                <!--授权状态-->
                <div class="changeRootNow">
                    访问权限：
                    <div>
                        <el-checkbox-group v-model="rootCheckList">
                            <el-checkbox :label=1>概况</el-checkbox>
                            <el-checkbox :label=2>商品管理</el-checkbox>
                            <el-checkbox :label=3>交易管理</el-checkbox>
                            <el-checkbox :label=4>财务管理</el-checkbox>
                            <el-checkbox :label=5>客户管理</el-checkbox>
                            <el-checkbox :label=6>数据分析</el-checkbox>
                            <el-checkbox :label=7>售后管理</el-checkbox>
                            <el-checkbox :label=8>权限管理</el-checkbox>
                        </el-checkbox-group>

                    </div>

                </div>
                <!--确定按钮-->
                <div class="changeRootBtn">
                    <button @click="rootChangeYes">确定</button>
                </div>
            </div>

        </div>


    </div>

</template>

<script>

    export default {
        name: "changeRoot",
        data:function () {
            return {
            /*----------禁止更改的数据 开始----------*/
                //数据
                changRootData:'',
                //用户账号
                userNum:'',
            /*----------禁止更改的数据 结束----------*/


            /*----------姓名 开始----------*/
                //姓名
                Name:'',
                //姓名的正则
                NameReg:/^[\u4e00-\u9fa5]{2,6}$/,
                //用户名对错
                rootNameYes:false,
                rootNameNo:false,
            /*----------姓名 结束----------*/

                //性别选择
                rootChangeSex:'',

            /*----------手机号 开始----------*/
                //手机号
                Phone:'',
                //手机号的正则
                PhoneReg:/^1[345789]\d{9}$/,
                //手机号对错
                rootPhoneYes:false,
                rootPhoneNo:false,
            /*----------手机号 结束----------*/


            /*----------状态显示 开始----------*/
                //状态选择状态
                changeState:'',
                //显示内容
                rootCStateCon:'',
                //下拉框的显示隐藏
                navCShow:false,
            /*----------状态显示 结束----------*/

                //权限选择框
                rootCheckList:[],

                //弹框的提示内容
                rootChangeAlertCon:''
            }
        },
        methods:{
            //点击返回按钮
            rootChangeBack(){
                this.$parent.rootShowWho=true;
            },

        /*----------正则效验 开始----------*/
            //非空验证及正则验证
            rootChangRootReg(val,who){

                let Y='root'+who+'Yes';
                let N='root'+who+'No';
                if (!val.trim()){
                    this[N]=true;
                    this[Y]=!this[N];
                    return false;
                }
                if (this[who+'Reg'].test(val)) {
                    this[N]=false;
                    this[Y]=!this[N];
                    return true;
                }else {
                    this[N]=true;
                    this[Y]=!this[N];
                    return false;
                }
            },
            //姓名失去焦点
            rootChangeName(){
                return this.rootChangRootReg(this.Name,'Name')
            },
            //手机号失去焦点
            rootChangePhone(){
                return this.rootChangRootReg(this.Phone,'Phone')
            },
        /*----------正则效验 结束----------*/


        /*----------状态选项 开始----------*/
            //状态下拉框的显示隐藏
            navCShowFn(){
                this.navCShow=!this.navCShow;
            },
            //下拉状态的选择
            rootCStateConFn(num){
                switch (num){
                    case 1:
                        this.rootCStateCon='正常';
                        this.navCShow=false;
                        this.changeState=0;
                        break;
                    case 2:
                        this.rootCStateCon='冻结';
                        this.navCShow=false;
                        this.changeState=5;
                        break;
                    case 3:
                        this.rootCStateCon='风险';
                        this.navCShow=false;
                        this.changeState=3;
                        break;
                    case 4:
                        this.rootCStateCon='离职';
                        this.navCShow=false;
                        this.changeState=11;
                        break;
                }
            },
        /*----------状态选项 结束----------*/

            //点击重置密码
            newRootPass(){
                this.$confirm('确认重置用户：'+this.changRootData.user+'的登录密码？','提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$axios.post('/api/newRootPass',{
                        user_id:this.changRootData.id
                    }).then((res)=>{
                        if (res.data.error){
                            this.$alert('密码重置失败，请稍后再试。', '提示', {
                                confirmButtonText: '确定',
                                callback: () => {
                                    this.rootChangeBack();
                                }
                            });
                        } else {
                            this.$alert('用户：'+this.changRootData.user+'的密码重置成功。新密码为:'+res.data.pass+'，请提醒该用户及时修改密码。', '提示', {
                                confirmButtonText: '确定',
                                callback: () => {
                                    this.rootChangeBack();
                                }
                            });
                        }
                    })
                })
            },

        /*----------点击确定按钮 开始----------*/
            //点击确定按钮
            rootChangeYes(){
                if (this.rootChangeName() && this.rootChangePhone()) {
                    //调用弹框
                    this.openYes();
                }
            },
            //点击确定后的弹框
            openYes() {
                this.$confirm('确认修改？','提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let phoneState;
                    if (this.Phone==this.changRootData.phone){
                        phoneState=0
                    }else {
                        phoneState=1;
                    }
                    this.$axios.post('/api/changeRootGo',{
                        name:this.Name,
                        sex:this.rootChangeSex,
                        phone:this.Phone,
                        phoneState:phoneState,
                        state:this.changeState,
                        root:this.rootCheckList,
                        id:this.changRootData.id
                    }).then((res)=>{
                        switch (res.data.error) {
                            case 1:
                                this.$alert('资料修改失败，请稍后再试。', '提示', {
                                    confirmButtonText: '确定',
                                    callback: () => {
                                        this.rootChangeBack();
                                    }
                                });
                                break;
                            case 2:
                                this.$alert('手机号已被注册，请更换后重试。', '提示', {
                                    confirmButtonText: '确定',
                                });
                                break;
                            case 0:
                                this.$alert('资料修改成功。', '提示', {
                                    confirmButtonText: '确定',
                                    callback: () => {
                                        this.$router.go(0);
                                    }
                                });
                                break;
                        }
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },
        /*----------点击确定按钮 结束----------*/
        },

        //页面加载时显示的数据
        mounted(){
            this.changRootData=this.$parent.userData;
            this.Name=this.changRootData.name;
            this.rootChangeSex=this.changRootData.sex;
            this.Phone=this.changRootData.phone;
            this.changeState=this.changRootData.state;
            if (0<=this.changeState && this.changeState<=1){
                this.rootCStateCon='正常';
            } else if (2<=this.changeState&& this.changeState<=4){
                this.rootCStateCon='风险';
            } else if(this.changeState==5){
                this.rootCStateCon='冻结';
            }else if(this.changeState==11){
                this.rootCStateCon='离职';
            }
            this.userNum=this.changRootData.user;
            this.rootCheckList=this.changRootData.root;
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
            cursor: pointer;
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


    //下拉菜单
    .root-c-box{
        position: relative;

        .root-c-state-box{
            cursor: pointer;
        }
        >.root-c-nav-state{
            width: 77px;
            position: absolute;
            top: 35px;
            left: 40px;
            border: 1px solid #ccc;
            background: white;
            box-shadow: 2px 2px 8px 2px #ccc;
            overflow: hidden;
            z-index: 999;

            >li{
                height: 25px;
                line-height: 25px;
                border-bottom: 1px  solid #ccc;
                text-align: center;


                &:hover{
                    cursor:pointer;
                    background: #0077aa;
                    color: white;
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