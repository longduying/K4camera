<template>
    <el-main id="C-main7"><div>{{oDate.getFullYear()+'年'+oDate.getMonth()+'月'+oDate.getDate()+'日'}}</div>
        <div>星期{{oDate.getDay() | datehandler()}}</div></el-main>
</template>

<script>
    export default {
        name: "Rili",
        data:function(){
            return{

                oDate:new Date(),

            }
        },
         filters:{
            datehandler(i){
               switch (i) {
                   case 1:
                       return '一';
                   case 2:
                       return '二';
                   case 3:
                       return '三';
                   case 4:
                       return '四';
                   case 5:
                       return '五';
                   case 6:
                       return '六';
                   case 0:
                       return '天';

               }
            }

         }
        }

</script>

<style lang="less" scoped>

    .b{
        border:1px solid rgb(242,242,242);
        background:white ;
        padding:0;
    }
    #C-main7{
        height:153px;
        float:right;
        width:240px;
        font-size:20px;
        font-weight:bold;
        line-height: 3;
        .b();
    }

</style>