<template>
    <div class="new-shp-boss">
        <!--标题-->
        <div class="root-head">
            <span>新增商品</span>
        </div>
        <!--显示主体-->
        <div class="new-shopping-box clearfix">
            <div class="clearfix">
                <!--商品标题-->
                <div class="new-spg-head">
                    <b>商品名称：</b><input type="text" placeholder="必填">
                </div>
                <!--次要标题-->
                <div><b>次要标题：</b><input type="text" placeholder="必填"></div>
                <!--商品类别-->
                <div  class="new-spg-tab clearfix">
                    <div><b>商品类别：</b></div>
                    <div class="new-spg-int">
                        <el-select v-model="value" size="mini">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <!--商品图片-->
                <div>
                    <b>商品图片：</b>
                    <div>
                        <el-upload
                                action="https://jsonplaceholder.typicode.com/posts/"
                                list-type="picture-card"
                                :multiple=true
                                :limit="5"
                                :on-exceed="handleExceed"
                                :on-preview="handlePictureCardPreview"
                                :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                </div>
                <!--商品详情-->
                <div>
                    <b>商品详情：</b>
                    <div>
                        <el-input
                                type="textarea"
                                resize="none"
                                rows="8"
                                placeholder="请输入商品描述，至少30个字符。"
                                v-model="textarea"
                                minlength="30"
                                maxlength="300"
                                show-word-limit
                        >
                        </el-input>
                    </div>
                </div>
                <!--商品信息-->
                <div>
                    <b>销售单价：</b><input type="text" placeholder="必填">
                </div>
                <div>
                    <b>产品库存：</b><input type="text" placeholder="必填">
                </div>

                <!--确定按钮-->
                <div class="new-shp-btn">
                    <button >确定</button>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        name: "NewShopping",
        data:function () {
            return {
                //照片上传
                dialogImageUrl: '',
                dialogVisible: false,
                //输入框
                text: '',
                textarea: '',
                //下拉框
                options: [{
                    value: '1',
                    label: '单反'
                }, {
                    value: '2',
                    label: '微单'
                }, {
                    value: '3',
                    label: '镜头'
                },],
                value: '1'
            }
        },

        methods:{
        /*----------照片上传 开始----------*/
            //当文件上传数量超过规定数后的提示
            handleExceed(files, fileList) {
                this.$message.warning('最多能上传5张照片，您已超出最高限制。请删除部分图片后重试！');
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        /*----------照片上传 结束----------*/
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

    //最大的框
    .new-shp-boss{
        padding-bottom: 10px;
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
    .new-shopping-box{
        width: 98%;
        margin-left: 1%;
        padding-top: 20px;
        min-height: 415px;
        margin-top: 15px;
        border: #eeeeee solid 1px ;
        overflow: hidden;
        background: #f2f2f2;


        //显示大框
        >div{
            margin-left: 2%;


            //分区显示的小框
            >div{
                width: 98%;
                margin: 5px 0 20px 0;

                >input{
                    margin-left: 5px;
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

                >div{
                    margin-top: 10px;
                }
            }

            >.new-spg-tab{
                >div{
                    float: left;
                    height: 25px;
                }
                >.new-spg-int{
                    position: relative;
                    top: -2px;
                    left: 0;
                }
            }

            //确定按钮
            >.new-shp-btn{
                width: 100%;
                height: 100px;
                line-height: 130px;
                text-align: center;
                border-top: solid 1px #ccc;
                margin: 50px 0 20px 0;


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







   /* //输入框的图标显示
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
    */





</style>