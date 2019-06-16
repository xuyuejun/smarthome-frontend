<template>
    <div>
        <el-card>
            <el-row :gutter="10">
                <el-col class="col-xs-12 col-md-8">
                    <el-card :body-style="{ padding: '0px' }">
                        <img v-if="cameraOnline === true" src='http://raspberrypi.local:8080/?action=stream' style="width: 100%" height="auto"/>
                        <img v-if="cameraOnline === false" src='../../images/camera-offline.png' style="width: 100%" height="auto"/>
                    </el-card>
                </el-col>
                <el-col class="col-xs-6 col-md-4">
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
                            <el-form ref="form" :model="outputPlugin" label-width="80px">
                                <el-form-item label="在线状态" prop="delivery">
                                    <el-switch v-model="cameraOnline"></el-switch>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
import servoApi from '@/api/servo.js';
import cameraApi from '@/api/camera.js';
export default {
    name: "CameraPage",
    data () {
        return {
            cameraOnline: false,
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
            outputPlugin: {
                name: ''
            }
        }
    },
    methods: {
        horizontalChange() {
            servoApi.servoHorizontal(this.PTZ.Horizontal).then(({ data }) => {
                console.log(data)
            })
        },
        cameraStatus() {
            cameraApi.getCameraStatus().then(({ data }) => {
                console.log(data);
                if (data === "Camera is Online") {
                    this.cameraOnline = true;
                } else {
                    this.cameraOnline = false;
                }
            })
        }
    },
    created(){
        this.controlModel = 1;
        this.cameraStatus()
    }
}
</script>

<style scoped>
.buttonCenter{
    margin: 0 auto;
    text-align: center;
}
</style>
