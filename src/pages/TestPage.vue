<template>
    <div>
        <el-card :body-style="{ padding: '0px' }">
            <el-row :gutter="10">
                <el-col class="col-xs-12 col-md-8"><div class="grid-content bg-purple">模块1</div></el-col>
                <el-col class="col-xs-6 col-md-4"><div class="grid-content bg-purple-light">模块2</div></el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>

export default {

};
</script>

<style>
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>
