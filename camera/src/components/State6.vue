<template>
    <div class="state1-box">
        <!--标题-->
        <div class="root-head" >
            <span>物流详情</span>
            <button @click="this.$parent.starBackBtn">返回</button>
        </div>
        <!--显示主体-->
        <div class=" clearfix" >
            <!--进度条-->
            <div>
                <el-steps :active="5" finish-status="success" simple style="margin-top: 20px">
                    <el-step title="发起售后" ></el-step>
                    <el-step title="处理中" ></el-step>
                    <el-step title="送修中" ></el-step>
                    <el-step title="维修中" ></el-step>
                    <el-step title="返回中" ></el-step>
                    <el-step title="已完成" ></el-step>
                </el-steps>
            </div>
            <!--详情-->
            <div class="state6-con-boss">
                <div>
                    <b>物流单号：</b>{{state6Data[state6Length].starSF}}
                    <!--<input type="text" v-model="setState6SF" placeholder="物流单号" v-if="!state6Data[state6Length].starSF">-->
                    <el-tooltip  effect="dark" content="6-10位纯数字，且不能以0开头" placement="bottom">
                        <input type="text" v-model="setState6SF" placeholder="物流单号" v-if="!state6Data[state6Length].starSF" @blur="state6Trim">
                    </el-tooltip>
                    <span class="iconfont icon-cuo SFSpanNo" v-show="state6SpanNo"></span>
                    <span class="iconfont icon-dui SFSpanYes" v-show="state6SpanYes"></span>
                    <button v-if="!state6Data[state6Length].starSF" @click="setStateSF">确认</button>
                </div>
                <div class="state6-wu" >
                    <b>物流信息：</b>
                    <div v-if="state6Data[state6Length].starSF">
                        <el-steps :active="4" align-center>
                            <el-step title="已发货" description="包裹正在揽收中"></el-step>
                            <el-step title="已揽件" description="包裹已被物理公司揽收"></el-step>
                            <el-step title="成都市" description="包裹已经到达成都市"></el-step>
                            <el-step title="派送中" description="正在为您派送"></el-step>
                        </el-steps>
                    </div>
                    <div v-if="!state6Data[state6Length].starSF">暂无物流信息</div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: "state6",
        data:function () {
            return {
                //全部数据
                state6Data:this.$parent.starBoxData,
                //下标
                state6Length:this.$parent.starBoxDataLength,
                setState6SF:'',
                //正则
                SFReg:/^[1-9][0-9]{5,9}$/,

                //对错图标
                state6SpanNo:false,
                state6SpanYes:false,
            }
        },
        methods:{
            //非空验证
            state6Trim(){
                if (!this.setState6SF.trim()){
                    this.state6SpanNo=true;
                    this.state6SpanYes=!this.state6SpanNo;
                    return false;
                }
                if (this.SFReg.test(this.setState6SF)) {
                    this.state6SpanNo=false;
                    this.state6SpanYes=!this.state6SpanNo;
                    return true;
                }else {
                    this.state6SpanNo=true;
                    this.state6SpanYes=!this.state6SpanNo;
                    return false;
                }
            },
            //请求函数
            state6DataFn(){
                this.$axios.post('/api/star6SetSFData',{
                    orderId:this.state6Data[this.state6Length].orderId,
                    SF:this.setState6SF,
                }).then((res)=>{
                    if (res.data.error){
                        this.$alert('数据加载失败，请稍后再试。', '提示', {
                            confirmButtonText: '确定',
                        });
                    } else {
                        this.$alert('修改成功', '提示', {
                            confirmButtonText: '确定',
                            callback: () => {
                                this.state6Data[this.state6Length].starSF = this.setState6SF;
                                this.$parent.starBackBtn();
                            }
                        })
                    }
                })
            },
            //确定按钮
            setStateSF(){
                if (!this.state6Trim()){
                    return
                }
                this.$confirm('使用当前物流号？','提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.state6DataFn();
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });

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
    .state6-con-boss{
        width: 90%;
        margin-left: 3%;
        margin-top: 20px;
        border: #cccccc solid 1px;
        border-radius: 5px;
        padding: 1% 2%;

        >div{
            margin-top: 20px;
            position: relative;

            >input{
                height: 25px;
                width: 200px;
                position: relative;
                top:-1px;
                border: 1px solid #ccc;
                box-shadow: none;
                border-radius: 5px;
                padding-left: 5px;
                margin-right: 20px;

                &:focus{
                    border:  #a3e9f6 1px  solid;
                    outline: 0;
                    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px #77b4ad;
                }
            }

            >button{
                width: 80px;
                height: 28px;
                border: 1px solid skyblue;
                border-radius: 5px;
                background: #0aa0f6;
                color: white;
                cursor: pointer;
            }
        }

        //物流信息
        >.state6-wu{
            margin-top: 40px;
            margin-bottom: 130px;

            >div{
                margin-top: 30px;
            }

        }

    }

    //图标样式
    .SFSpan{
        font-size: 18px;
        font-weight: bold;
        position: absolute;
        top: 4px;
        left: 270px;
    }
    .SFSpanYes{
        .SFSpan();
        color: green;
    }
    .SFSpanNo{
        .SFSpan();
        color: red;
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