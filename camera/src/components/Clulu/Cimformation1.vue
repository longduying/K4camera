<template>

      <el-table
              :data="tit"
            border
            style="width: 100%">
        <el-table-column
                prop="main_head"
                label="商品名称"
                width="180"
                >
        </el-table-column>
        <el-table-column
                prop="buy_time"
                label="支付时间"
                width="180">
        </el-table-column>
        <el-table-column
                prop="order_num"
                label="订单号">
        </el-table-column>
        <el-table-column
                prop="user_name"
                label="客户昵称">
        </el-table-column>
        <el-table-column
                prop="allmount"
                label="金额（元）">
        </el-table-column>
        <el-table-column
                prop="state"
                label="状态">
        </el-table-column>
        <el-table-column
                prop="details"
                label="操作">
        </el-table-column>
    </el-table>


</template>

<script>
    export default {
        name: "Cimformation1",
        data() {
            return {
               msg:' '
            }
        },
      mounted(){
          /*this.msg=*/
      },



      props:['tit'],
    }
</script>

<style scoped>
td{
  text-align: center;
}

</style>