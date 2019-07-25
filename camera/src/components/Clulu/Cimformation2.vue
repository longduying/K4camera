<template>
     <el-table
            :data="tit"
            border
            style="width: 100%">
        <el-table-column
                prop="main_head"
                label="商品名称"
                width="180">
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
                prop="details"
                label="操作">
        </el-table-column>
    </el-table>
</template>

<script>

    export default {
        data() {

            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '',
                    name: '',
                    address: ''
                }, {
                    date: '',
                    name: '',
                    address: ''
                }]
            }
        },
        props:['tit']
    }
</script>
<style>
    #el-tab{
        width:1140px;
        height:400px;
        position:absolute;
        top:250px;
        left:23px;

    }


</style>