<template>
    <div>
        <el-card>
            <div>
                <img src='http://raspberrypi.local:8080/?action=stream' style="width: 100%" height="auto"/>
                <!--<img src='../../images/mjpg-test.jpeg' style="width: 100%" maxhight="400px"/>-->
            </div>
            <el-card>
                <div class="buttonCenter">
                    <el-button-group>
                        <el-button v-if="controlModel === 1" type="primary">云台控制</el-button>
                        <el-button v-if="controlModel !== 1" @click="controlModel = 1">云台控制</el-button>
                        <el-button v-if="controlModel === 2" type="primary">参数设置</el-button>
                        <el-button v-if="controlModel !== 2" @click="controlModel = 2">参数设置</el-button>
                    </el-button-group>
                </div><br>
                <div v-if="controlModel === 1">
                    <div>
                        <span class="demonstration">水平舵机</span>
                        <el-slider v-model="PTZ.Horizontal" :max="180" @change="horizontalChange"></el-slider>
                    </div>
                    <div>
                        <span class="demonstration">垂直舵机</span>
                        <el-slider v-model="PTZ.Vertical" :max="180"></el-slider>
                    </div>
                </div>
                <div v-if="controlModel === 2">
                    <div>
                        参数设置界面
                    </div>
                </div>
            </el-card>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "CameraPage",
    data () {
        return {
            controlModel: '1',  //控制
            PTZ: {
                Horizontal: 90,
                Vertical: 90
            },
            //testValue
            value1: 0,
            value2: 0,
            num4: 10,
            num8: 0,
        }
    },
    methods: {
        horizontalChange() {
            console.log("水平改变")
        }
    },
    created(){
        this.controlModel = 1;
    }
}
</script>

<style scoped>
.buttonCenter{
    margin: 0 auto;
    text-align: center;
}
</style>
