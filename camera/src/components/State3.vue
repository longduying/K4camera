<template>
    <div class="state3-box">
        <!--标题-->
        <div class="root-head" >
            <span>维修详情</span>
            <button @click="this.$parent.starBackBtn">返回</button>
        </div>
        <!--显示主体-->
        <div class=" clearfix" >
            <!--进度条-->
            <div>
                <el-steps :active="3" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="发起售后" ></el-step>
                    <el-step title="处理中" ></el-step>
                    <el-step title="送修中" ></el-step>
                    <el-step title="维修中" ></el-step>
                    <el-step title="返回中" ></el-step>
                    <el-step title="已完成" ></el-step>
                </el-steps>
            </div>
            <!--详情-->
            <div class="state3-con-boss">
                <!--用户描述信息-->
                <div class="state3-user-con-box">
                    <div class="state3-user-con1">
                       <p><b>用户描述：</b>{{state3Data[state3Length].star}}</p>
                    </div>
                    <div class="state3-user-con1">
                        <p><b>用户联系方式：</b>{{state3Data[state3Length].userPhone}}</p>
                    </div>
                    <div class="state3-user-con2">
                        <p><b>故障现象详细描述：</b></p>
                        <div >
                            {{state3Data[state3Length].starUserCon}}
                        </div>
                    </div>
                </div>
                <hr>

                <!--处理意见-->
                <div class="state3-me-con">
                    <div>
                        <b>当前维修人员：</b>{{this.$parent.bossUser.userNum}}
                    </div>
                    <div>
                        <b>维修记录：</b>
                        <br>
                        <textarea placeholder="填写故障现象以及维修操作" v-model="state3StarData" @blur="state3NullFn"></textarea>
                        <span class="iconfont icon-dui state3-yes" v-show="state3SpanYes"></span>
                        <span class="iconfont icon-cuo state3-no" v-show="state3SpanNo"></span>
                    </div>
                </div>
                <div class="state3-btn">
                    <button @click="state3Go">确定</button>
                </div>
            </div>

        </div>


    </div>

</template>

<script>

    export default {
        name: "State3",
        data:function () {
            return {
                //全部数据
                state3Data:this.$parent.starBoxData,
                //下标
                state3Length:this.$parent.starBoxDataLength,

                //输入框图标
                state3SpanYes:false,
                state3SpanNo:false,

                //输入框内容
                state3StarData:'',

                //维修人员姓名
                userBossName:'',
            }
        },
        methods:{
            //非空判断
            state3NullFn(){
                if (this.state3StarData.trim()){
                    this.state3SpanYes=true;
                    this.state3SpanNo=!this.state3SpanYes;
                    return true;
                }else {
                    this.state3SpanYes=false;
                    this.state3SpanNo=!this.state3SpanYes;
                    return false;
                }
            },
            //点击确定按钮
            state3Go(){
                if (this.state3NullFn()) {
                    this.$confirm('确认提交维修信息？','提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$axios.post('/api/state3SetData',{
                            orderId:this.state3Data[this.state3Length].orderId,
                            con:this.state3StarData,
                            bossUser:this.$parent.bossUser.userNum
                        }).then((res)=>{
                            if (res.data.error){
                                this.$alert('数据加载失败，请稍后再试。', '提示', {
                                    confirmButtonText: '确定',
                                });
                            } else {
                                this.$alert('操作成功', '提示', {
                                    confirmButtonText: '确定',
                                    callback: () => {
                                        this.state3Data[this.state3Length].starState=6;
                                        this.$parent.starBackBtn();
                                    }
                                });
                            }
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消'
                        });
                    });
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
            cursor: pointer;
        }
    }

    //显示主体
    .state3-box{
        padding-bottom: 30px;
    }


    //详情
    .state3-con-boss{
        width: 90%;
        margin-left: 3%;
        margin-top: 20px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        padding: 1% 2%;
    }

    //用户描述信息（简单）
    .state3-user-con1{
        margin: 10px 0 10px 0;
        width: 100%;

    }

    //用户描述（详细）
    .state3-user-con2{
        width: 100%;
        margin-bottom: 10px;

        >div{
            width: 96%;
            height: 56px;
            padding: 10px 2%;
            overflow: hidden;
        }
    }

    //处理意见box
    .state3-me-con{
        margin-top: 10px;
        width: 100%;

        >div{
            margin-bottom: 10px;
            position: relative;

            >textarea{
                width: 98%;
                height: 150px;
                border-radius: 5px;
                resize: none;
                font-size: 16px;
                margin-top: 5px;
                padding: 1% 1%;
            }

            .spanShow{
                font-size: 20px;
                font-weight: bold;
                position: absolute;
                bottom: 7px;
                right: 3px;
            }

            >.state3-yes{
                .spanShow();
                color: green;
            }
            >.state3-no{
                .spanShow();
                color: red;
            }
        }
    }

    //确定按钮
    .state3-btn{
        width: 100%;
        text-align: center;
        margin: 40px 0 20px 0;


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





</style>