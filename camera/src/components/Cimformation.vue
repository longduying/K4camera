<template>
    <div id="el-tab">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="账号明细" name="first">   <el-table

                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="商品名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="支付时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="订单号">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="客户昵称">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="金额（元）">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="状态">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="操作">
            </el-table-column>
            </el-table></el-tab-pane>
            <el-tab-pane label="结算记录" name="second">   <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="商品名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="支付时间"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="订单号">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="客户昵称">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="金额（元）">
                </el-table-column>

                <el-table-column
                    prop="address"
                    label="操作">
            </el-table-column>
            </el-table></el-tab-pane>
        </el-tabs>

        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {

            return {

                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                activeName: 'first',
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
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
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