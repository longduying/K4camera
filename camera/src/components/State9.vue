<template>
    <div class="state1-box">
        <!--标题-->
        <div class="root-head" >
            <span>详情</span>
            <button>返回</button>
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
                <div class="state4-con">
                    <div class="clearfix">
                        <div>维修记录</div>
                        <div class="state4-con-btn"><button>查看详情</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "State4",
        data:function () {
            return {
                State1YesOrNo:'1'
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
    .state1-box{
        padding-bottom: 30px;
    }


    //详情
    .state4-con-boss{
        width: 90%;
        margin-left: 3%;
        margin-top: 20px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        padding: 1% 2%;

        >div{
            width: 100%;
            margin-top: 40px;
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

        //查看维修记录
        .state4-con{
            width: 100%;
            margin-top: 70px;
            margin-bottom:40px;

            >div{
                width: 96%;
                height: 50px;
                line-height: 50px;
                margin-left: 2%;
                border: #cccccc solid 1px;
                border-radius: 5px;
                font-size: 18px;

                >div{
                    float: left;
                    width: 48%;
                    text-align: left;
                    margin-left: 2%;
                }

                >.state4-con-btn{
                    text-align: right;
                    margin-left: 0;
                    margin-right: 2%;

                    >button{
                        width: 120px;
                        height: 31px;
                        border: 1px solid #cccccc;
                        border-radius: 5px;
                        cursor: pointer;
                    }
                }



            }
        }


    }











</style>