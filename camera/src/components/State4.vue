<template>
    <div class="state1-box">
        <!--标题-->
        <div class="root-head" >
            <span>详情</span>
            <button  @click="this.$parent.starBackBtn">返回</button>
        </div>
        <!--显示主体-->
        <div class=" clearfix" >
            <!--进度条-->
            <div>
                <el-steps :active="6" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="发起售后" ></el-step>
                    <el-step title="处理中" ></el-step>
                    <el-step title="送修中" ></el-step>
                    <el-step title="维修中" ></el-step>
                    <el-step title="返回中" ></el-step>
                    <el-step title="已完成" ></el-step>
                </el-steps>
            </div>
            <!--详情-->
            <div class="state4-con-boss">
                <div>
                    <i class="el-icon-circle-check"></i>
                    <p>已完成</p>
                </div>
                <!--用户描述信息-->
                <div class="state4-user-con-box" >
                    <div class="state4-user-con1">
                        <p><b>用户描述：</b>{{state4Data[state4Length].star}}</p>
                    </div>
                    <div class="state4-user-con1">
                        <p><b>用户联系方式：</b>{{state4Data[state4Length].userPhone}}</p>
                    </div>
                    <div class="state4-user-con2">
                        <p><b>故障现象详细描述：</b></p>
                        <div >
                            {{state4Data[state4Length].starUserCon}}
                        </div>
                    </div>
                </div>

                <!--处理意见-->
                <div class="state4-user-con1-box">
                    <b>受理备注：</b>
                    <div >
                        {{state4Data[state4Length].starBossCon}}
                    </div>
                </div>
                <!--维修记录-->
                <div class="state4-user-con1-box">
                    <b>维修人员：</b>{{state4Data[state4Length].bossUserData}}
                    <br>
                    <b>维修记录：</b>
                    <div >
                        {{state4Data[state4Length].starBossCon}}
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>

    export default {
        name: "state4",
        data:function () {
            return {
                //全部数据
                state4Data:this.$parent.starBoxData,
                //下标
                state4Length:this.$parent.starBoxDataLength,
            }
        },
        methods:{

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
    .state4-con-boss{
        width: 90%;
        margin-left: 3%;
        margin-top: 20px;
        background: #f2f2f2;
        border: #cccccc solid 1px;
        border-radius: 5px;
        padding: 1% 2%;

        >div{
            width: 100%;
            margin: 40px 0 20px 0;

            text-align: center;

            >i{
                font-size: 150px;
                font-weight: bold;
                color: green;
            }
            >p{
                font-size: 20px;
                margin-top: 20px;
            }
        }

        >.state4-user-con-box{
            width: 95%;
            margin-left: 2%;
            padding-left: 10px;
            background: white;
            border: #cccccc solid 1px;
            border-radius: 5px;
            margin-top: 20px;
            text-align: left;

            //用户描述信息（简单）
            >.state4-user-con1{
                margin: 10px 0 10px 0;
                width: 100%;

            }

            //用户描述（详细）
            >.state4-user-con2{
                width: 100%;
                margin-bottom: 10px;

                >div{
                    width: 96%;
                    padding: 10px 2%;
                    overflow: hidden;
                }
            }
        }

        >.state4-user-con1-box{
            width: 95%;
            margin-left: 2%;
            padding:10px 0  0 10px;
            background: white;
            border: #cccccc solid 1px;
            border-radius: 5px;
            margin-top: 20px;
            text-align: left;

            >b{
                font-size: 16px;
            }
            >div{
                padding: 10px 2%;
            }
        }


    }















</style>