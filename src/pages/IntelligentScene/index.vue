<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>回家模式</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-time-select
                    size="small"
                    style="width:100px"
                    v-model="startTime"
                    :picker-options="{start: '08:30', step: '00:15',end: '18:30'}">
                </el-time-select>
                <span> ~ </span>
                <el-time-select
                    size="small"
                    style="width:100px"
                    v-model="endTime"
                    :picker-options="{ start: '08:30', step: '00:15', end: '18:30', minTime: startTime}">
                </el-time-select>
                <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                </el-switch><br>
                <span> 周一 周二 周三 周四 周五 周六 </span>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "index.vue",
        data() {
            return {
                startTime: '08:30',
                endTime: '10:00'
            };
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
