<template>
    <div class="row">
        <!--<card :body-style="{ padding: '0px' }">-->
        <card title="Test" subTitle="test2">
            <div class="table-full-width table-responsive">
                <el-table
                    :data="tableData"
                    size="small"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="240">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址"
                        width="220">
                    </el-table-column>
                </el-table>
            </div>
        </card>
    </div>
</template>
<script>
import { PaperTable } from "@/components";

export default {
    components: {
        PaperTable
    },
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
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        };
    }
};
</script>
