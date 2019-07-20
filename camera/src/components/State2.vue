<template>
    <div class="state1-box">
        <!--标题-->
        <div class="root-head" >
            <span>物流详情</span>
            <button>返回</button>
        </div>
        <!--显示主体-->
        <div class=" clearfix" >
            <!--进度条-->
            <div>
                <el-steps :active="2" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="发起售后" ></el-step>
                    <el-step title="处理中" ></el-step>
                    <el-step title="送修中" ></el-step>
                    <el-step title="维修中" ></el-step>
                    <el-step title="返回中" ></el-step>
                    <el-step title="已完成" ></el-step>
                </el-steps>
            </div>
            <!--详情-->
            <div class="state2-con-boss">
                <div>
                    <b>物流单号：</b>102010101010
                </div>
                <div class="state2-wu">
                    <b>物理信息：</b>
                    <div>
                        <el-steps :active="4" align-center>
                            <el-step title="已发货" description="包裹正在揽收中"></el-step>
                            <el-step title="已揽件" description="包裹已被物理公司揽收"></el-step>
                            <el-step title="成都市" description="包裹已经到达成都市"></el-step>
                            <el-step title="派送中" description="正在为您派送"></el-step>
                        </el-steps>
                    </div>
                </div>

                <div class="state1-btn">
                    <button>已收到包裹</button>
                </div>
            </div>

        </div>


    </div>

</template>

<script>

    export default {
        name: "State2",
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
    .state2-con-boss{
        width: 90%;
        margin-left: 3%;
        margin-top: 20px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        padding: 1% 2%;

        >div{
            margin-top: 20px;
        }

        //物流信息
        >.state2-wu{
            margin-top: 40px;
            margin-bottom: 130px;

            >div{
                margin-top: 30px;
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