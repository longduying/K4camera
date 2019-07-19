<template>
    <div class="root-boss">
        <!--标题-->
        <div class="root-head" :data="AlertNum">
            <span>资料修改</span>
            <button @click="rootChangeBack">返回</button>
        </div>
        <!--显示主体-->
        <div class="root-box clearfix" :data="ConfirmNum">
            <div class="clearfix">
                <!--姓名-->
                <div>
                    姓名：
                    <el-tooltip  effect="dark" content="2-6个中文" placement="right">
                        <input type="text">
                    </el-tooltip>
                    <span class="iconfont icon-cuo rootSpanNo" v-show="rootNameNo"></span>
                    <span class="iconfont icon-dui rootSpanYes" v-show="rootNameYes"></span>
                </div>
                <!--性别-->
                <div>
                    性别：
                    <el-radio v-model="rootChangeSex" label="男">男</el-radio>
                    <el-radio v-model="rootChangeSex" label="女">女</el-radio>
                </div>
                <!--手机号-->
                <div>
                    手机：
                    <el-tooltip  effect="dark" content="11位手机号" placement="right">
                        <input type="text">
                    </el-tooltip>
                    <span class="iconfont icon-cuo rootSpanNo" v-show="rootPhoneNo"></span>
                    <span class="iconfont icon-dui rootSpanYes" v-show="rootPhoneYes"></span>
                </div>
                <!--状态-->
                <div>
                    状态：
                    <el-dropdown :hide-on-click="false">
                    <span class="el-dropdown-link">
                        {{rootStateShow}}
                        <i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>正常</el-dropdown-item>
                            <el-dropdown-item>冻结</el-dropdown-item>
                            <el-dropdown-item>风险</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <!--账号-->
                <div @click="userAlertShow">
                    账号：<input type="text" style="margin-left: 5px" disabled >
                </div>
                <!--密码-->
                <div>
                    密码：<button>重置密码</button>
                </div>
                <!--授权状态-->
                <div class="changeRootNow">
                    访问权限：
                    <div>
                        <el-checkbox-group v-model="rootCheckList">
                            <el-checkbox label="概况"></el-checkbox>
                            <el-checkbox label="商品管理"></el-checkbox>
                            <el-checkbox label="交易管理"></el-checkbox>
                            <el-checkbox label="财务管理"></el-checkbox>
                            <el-checkbox label="客户管理"></el-checkbox>
                            <el-checkbox label="数据分析"></el-checkbox>
                            <el-checkbox label="售后管理"></el-checkbox>
                            <el-checkbox label="权限管理"></el-checkbox>
                        </el-checkbox-group>

                    </div>

                </div>
                <!--确定按钮-->
                <div class="changeRootBtn">
                    <button @click="rootChangeYes">确定</button>
                </div>
            </div>

        </div>
        <Alert ref="rootChangeAlertName"></Alert>
        <Confirm ref="rootChangeConfirmName"></Confirm>


    </div>

</template>

<script>
    //引入alert弹框
    import Alert from './../components/Alert';
    import Confirm from './../components/Confirm';



    export default {
        name: "changeRoot",
        data:function () {
            return {
                //当前状态
                rootStateShow:'正常',
                //性别选择
                rootChangeSex:'男',
                //权限选择框
                rootCheckList:['概况','权限管理'],
                //用户名对错
                rootNameYes:false,
                rootNameNo:false,
                //手机号对错
                //用户名对错
                rootPhoneYes:false,
                rootPhoneNo:false,
                //Alert弹框的返回值
                AlertNum:0,
                //ConfirmNum弹框的返回值
                ConfirmNum:0
            }
        },
        components:{
            Alert,
            Confirm
        },
        methods:{
            //点击返回按钮
            rootChangeBack(){
                this.$parent.rootShowWho='Root';
            },
            //点击账号
            userAlertShow(){
                this.$refs.rootChangeAlertName.AlertContent='系统自动分配，禁止修改！';
                this.$refs.rootChangeAlertName.showAlert=true;
                this.AlertNum=0;
            },
            //点击确定按钮
            rootChangeYes(){
                this.$refs.rootChangeConfirmName.ConfirmHead='确认';
                this.$refs.rootChangeConfirmName.ConfirmContent='确认修改？';
                this.$refs.rootChangeConfirmName.showConfirm=true;

            },
        },
        updated(){
            console.log(this.ConfirmNum,this.AlertNum);
            if(this.ConfirmNum==1){
                console.log('con进来啦');
                //发送修改请求成功后
                this.$refs.rootChangeAlertName.AlertContent='修改成功';
                this.$refs.rootChangeAlertName.showAlert=true;
                if (this.AlertNum){
                    console.log('alert进来啦');
                    this.ConfirmNum=0;
                    this.AlertNum=0;
                    this.$refs.rootChangeAlertName.showAlert=false;
                    this.$parent.rootShowWho='Root';
                }
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


    //下拉菜单
    .el-dropdown-link {
        cursor: pointer;
        font-size: 16px;
        color: #000;
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