<template>
    <div>
        <el-card :body-style="{ padding: '0px' }">
            <img src="../../images/background.jpg" class="image">
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentDate: new Date()
            };
        }
    }
</script>
<style>
    .image {
        width: 500px;
        display: block;
    }
</style>
