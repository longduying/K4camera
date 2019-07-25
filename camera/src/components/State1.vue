<template>
    <div class="state1-box">
        <!--标题-->
        <div class="root-head" >
            <span>申请详情</span>
            <button @click="this.$parent.starBackBtn">返回</button>
        </div>
        <!--显示主体-->
        <div class=" clearfix" >
            <!--进度条-->
            <div>
                <el-steps :active="1" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="发起售后" ></el-step>
                    <el-step title="处理中" ></el-step>
                    <el-step title="送修中" ></el-step>
                    <el-step title="维修中" ></el-step>
                    <el-step title="返回中" ></el-step>
                    <el-step title="已完成" ></el-step>
                </el-steps>
            </div>
            <!--详情-->
            <div class="state1-con-boss">

                <!--用户描述信息-->
                <div class="state1-user-con-box" >
                    <div class="state1-user-con1">
                       <p><b>用户描述：</b>{{state1Data[state1Length].star}}</p>
                    </div>
                    <div class="state1-user-con1">
                        <p><b>用户联系方式：</b>{{state1Data[state1Length].userPhone}}</p>
                    </div>
                    <div class="state1-user-con2">
                        <p><b>故障现象详细描述：</b></p>
                        <div >
                            {{state1Data[state1Length].starUserCon}}
                        </div>
                    </div>
                </div>
                <hr>
                <!--处理意见-->
                <div class="state1-me-con">
                    <div>
                        <b>当前受理工号：</b>{{this.$parent.bossUser.userNum}}
                    </div>
                    <div>
                        <b>处理意见：</b>
                        <el-radio v-model="State1YesOrNo" label="5">同意送修</el-radio>
                        <el-radio v-model="State1YesOrNo" label="2">拒绝送修</el-radio>
                    </div>
                    <div>
                        <b>备注：</b>
                        <br>
                        <textarea placeholder="该项必填" v-model="starBossCon" @blur="star1Null"></textarea>
                        <span class="iconfont icon-dui state1-yes" v-show="starSpanShowYes"></span>
                        <span class="iconfont icon-cuo state1-no" v-show="starSpanShowNo"></span>
                    </div>
                </div>

                <div class="state1-btn">
                    <button @click="star1Go">确定</button>
                </div>
            </div>
        </div>


    </div>

</template>

<script>

    export default {
        name: "State1",
        data:function () {
            return {
                //全部数据
                state1Data:this.$parent.starBoxData,
                //下标
                state1Length:this.$parent.starBoxDataLength,



                //是否同意送修，5-同意，2-拒绝
                State1YesOrNo:'5',
                //输入库输入内容
                starBossCon:'',
                //备注输入框的图标显示隐藏
                starSpanShowYes:false,
                starSpanShowNo:false,
            }
        },
        methods:{
            //非空判断
            star1Null(){
                if(this.starBossCon.trim()){
                    this.starSpanShowNo=false;
                    this.starSpanShowYes=!this.starSpanShowNo;
                    return true;
                }else {
                    this.starSpanShowNo=true;
                    this.starSpanShowYes=!this.starSpanShowNo;
                    return false;
                }
            },
            //点击确定按钮
            star1Go(){
                if (this.star1Null()){
                    this.star1OpenYes();
                }
            },
            //修改信息发送请求的函数
            star1SetData(){
                this.$axios.post('/api/star1SetData',{
                    starStateId:this.State1YesOrNo,
                    starBossCon:this.starBossCon,
                    orderId:this.state1Data[this.state1Length].orderId,
                    bossUser:this.$parent.bossUser.userNum
                }).then((res)=>{
                    if (res.data.error){
                        this.$alert('数据加载失败，请稍后再试。', '提示', {
                            confirmButtonText: '确定',
                        });
                    } else{
                        this.$alert('修改成功', '提示', {
                            confirmButtonText: '确定',
                            callback: () => {
                                this.state1Data[this.state1Length].starState=this.State1YesOrNo;
                                this.state1Data[this.state1Length].bossUserData=this.$parent.bossUser.userNum;
                                this.state1Data[this.state1Length].starBossCon=this.starBossCon;
                                this.$parent.starBackBtn();
                            }
                        });
                    }
                })
            },
            //点击确定后的弹框
            star1OpenYes() {
                this.$confirm('确认提交处理信息？','提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.star1SetData();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
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
    .state1-box{
        padding-bottom: 30px;
    }


    //详情
    .state1-con-boss{
        width: 90%;
        margin-left: 3%;
        margin-top: 20px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        padding: 1% 2%;
    }

    //用户描述信息（简单）
    .state1-user-con1{
        margin: 10px 0 10px 0;
        width: 100%;

    }

    //用户描述（详细）
    .state1-user-con2{
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
    .state1-me-con{
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

            >.state1-yes{
                .spanShow();
                color: green;
            }
            >.state1-no{
                .spanShow();
                color: red;
            }
        }
    }

    //确定按钮
    .state1-btn{
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