<template>
    <div>
        <div class="Dhead">评论管理</div>
        <div class="Dmain">
            <div style="margin-top: 20px;padding-bottom: 25px;font-size: 15px;">
                <label style="margin-left: 10px">评价时间：</label>
                <input type="date">
                <label style="margin-left: 25%">评价类型：</label>
                <div class="xiala">
                    <span style="width:105px;font-size: 14px;padding-left: 5px">全部</span>
                    <span class="iconfont icon-xiala-"></span>
                </div>
                <label style="margin-left: 3%;">评价内容：</label>
                <div class="xiala">
                    <span style="width:105px;font-size: 14px;padding-left: 5px">全部</span>
                    <span class="iconfont icon-xiala-"></span>
                </div>

                <div class="Dsearch">搜索</div>
            </div>
            <div class="dhead">
                <div style="margin-left: 5%;width: 7%">评价</div>
                <div style="width: 30%;text-align: center">评论内容</div>
                <span>评论时间</span>
                <span>评论人</span>
                <span>商品名称</span>
                <div>操作</div>
            </div>
            <div class="OrderList">
                <div style="border-bottom: 1px solid gainsboro;height: 50px;line-height: 50px">
                    <span style="margin-left: 4.5%;width:5%">好评</span>
                    <span style="margin-left: 2%;width: 32%;text-align: center">
                        五星红旗迎风飘扬,胜利歌
                    </span>
                    <span style="width: 13%;">2019-07-18</span>
                    <span style="width: 10%;text-align: center">李白</span>
                    <span style="width: 25.5%;text-align: center" class="agree">Sonia新款X型号相机</span>
                    <span class="refuse" style="color: #31b0d5;cursor: default">回复</span>
                </div>
                <div style="border-bottom: 1px solid gainsboro;height: 50px;line-height: 50px">
                    <span style="margin-left: 4.5%;width:5%">好评</span>
                    <span style="margin-left: 2%;width: 32%;text-align: center">
                        五星红旗迎风飘扬,胜利歌
                    </span>
                    <span style="width: 13%;">2019-07-18</span>
                    <span style="width: 10%;text-align: center">李白</span>
                    <span style="width: 25.5%;text-align: center" class="agree">Sonia新款X型号相机</span>
                    <span class="refuse" style="color: #31b0d5;cursor: default">回复</span>
                </div>
                <div style="border-bottom: 1px solid gainsboro;height: 50px;line-height: 50px">
                    <span style="margin-left: 4.5%;width:5%">好评</span>
                    <span style="margin-left: 2%;width: 32%;text-align: center">
                        五星红旗迎风飘扬,胜利歌
                    </span>
                    <span style="width: 13%;">2019-07-18</span>
                    <span style="width: 10%;text-align: center">李白</span>
                    <span style="width: 25.5%;text-align: center" class="agree">Sonia新款X型号相机</span>
                    <span class="refuse" style="color: #31b0d5;cursor: default">回复</span>
                </div>
                <div style="border-bottom: 1px solid gainsboro;height: 50px;line-height: 50px">
                    <span style="margin-left: 4.5%;width:5%">好评</span>
                    <span style="margin-left: 2%;width: 32%;text-align: center">
                        五星红旗迎风飘扬,胜利歌
                    </span>
                    <span style="width: 13%;">2019-07-18</span>
                    <span style="width: 10%;text-align: center">李白</span>
                    <span style="width: 25.5%;text-align: center" class="agree">Sonia新款X型号相机</span>
                    <span class="refuse" style="color: #31b0d5;cursor: default">回复</span>
                </div>
            </div>
            <div style="margin-top: 30px;padding-left: 1%">
                <span style="margin-left:200px ">
                    分页
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EvailManage"
    }
</script>

<style scoped lang="less">
    .Dhead{
        height: 50px;
        background: white;
        line-height: 50px;
        padding-left: 3%;
        border-bottom: 1px solid gainsboro;
    }
    .Dmain{
        padding-left: 3%;
    .Dsearch{
        display: inline-block;
        width: 65px;
        height: 32px;
        border-radius: 3px;
        background: #31b0d5;
        color: white;
        font-size: 15px;
        margin-left: 10px;
        line-height: 32px;
        text-align: center;
        cursor: default;
    }
    }
    .xiala{
        display: inline-block;
        width: 133px;
        height: 21px;
        border: 1px solid gray;
        span{
            display: inline-block;
        }
    }
    .dhead{
        margin-top: 10px;
        width: 96.2%;
        height: 40px;
        line-height:40px;
        font-size: 14px;
        background: gainsboro;
        div{
            display: inline-block;
            margin-right: 10px;
        }
        span{
            display: inline-block;
            width:16%;
        }
    }
    .OrderList{
        width: 96%;
        border-left: 1px solid gainsboro;
        border-bottom: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
        font-size: 14px;
        span{
            display: inline-block;
            /*border: 1px solid gainsboro;*/
        }
    }
</style>