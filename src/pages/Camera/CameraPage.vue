<template>
    <div>
        <el-card>
            <el-card>
                <iframe :src="url" frameborder="0" align="left" width="100%" height="100%" scrolling="auto" marginWidth=0 marginHeight=0></iframe>
            </el-card>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "CameraPage",
    data () {
        return {
            url: 'http://192.168.31.21:8080/?action=stream'
        }
    }
}
</script>

<style scoped>

</style>
