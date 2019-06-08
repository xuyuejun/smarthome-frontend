<template>
    <div>
        <div class="row">
            <!--XiaoMi smart socket cards-->
            <div class="col-md-6 col-xl-3">
                <stats-card>
                    <div
                        class="icon-big text-center"
                        slot="header">
                        <img src="../icon/smart-controller.png"/>
                    </div>
                    <div class="numbers" slot="content">
                        <p>智能插座</p>
                        <!--开启-->
                        <el-switch
                            v-model="socketStatus">
                        </el-switch>
                    </div>
                    <div class="stats" slot="footer">
                        <span class="ti-reload"></span>
                        在线
                    </div>
                </stats-card>
            </div>
            <!--Camera cards-->
            <div class="col-md-6 col-xl-3">
                <stats-card>
                    <div
                        class="icon-big text-center"
                        slot="header">
                        <img src="../icon/camera.png"/>
                        <!--<i :class="stats.icon"></i>-->
                    </div>
                    <div class="numbers" slot="content">
                        <p>摄像头</p>
                        开启
                    </div>
                    <div class="stats" slot="footer">
                        <span class="ti-reload"></span>
                        <!--<i :class="stats.footerIcon"></i>-->
                        在线
                    </div>
                </stats-card>
            </div>
            <!--Thermometer cards-->
            <div class="col-md-6 col-xl-3">
                <stats-card>
                    <div
                        class="icon-big text-center"
                        slot="header">
                        <img src="../icon/thermometer.png" @click="getTemperature"/>
                        <!--<i :class="stats.icon"></i>-->
                    </div>
                    <div class="numbers" slot="content">
                        <p>温度计</p>
                        {{ this.temperature.data + "℃" }}
                    </div>
                    <div class="stats" slot="footer">
                        <span class="ti-reload" @click="getTemperature"></span>
                        <!--<i :class="stats.footerIcon"></i>-->
                        {{ this.temperature.getTime }}
                    </div>
                </stats-card>
            </div>
            <!--Thermometer cards-->
            <div class="col-md-6 col-xl-3">
                <stats-card>
                    <div
                        class="icon-big text-center"
                        slot="header">
                        <img src="../icon/humidity.png" @click="getHumidity"/>
                        <!--<i :class="stats.icon"></i>-->
                    </div>
                    <div class="numbers" slot="content">
                        <p>湿度计</p>
                        {{ this.humidity.data + "%" }}
                    </div>
                    <div class="stats" slot="footer">
                        <span class="ti-reload" @click="getHumidity"></span>
                        <!--<i :class="stats.footerIcon"></i>-->
                        {{ this.humidity.getTime }}
                    </div>
                </stats-card>
            </div>
        </div>

        <!--Charts-->
        <div class="row">
            <div class="col-12">
                <chart-card
                    title="24小时温度"
                    sub-title="2019年 5月20日"
                    :chart-data="activityChart.data"
                    :chart-options="activityChart.options">
                    <span slot="footer">
                        <i class="ti-check"></i> Data information certified
                    </span>
                    <div slot="legend">
                        <i class="fa fa-circle text-info"></i> Tesla Model S
                        <i class="fa fa-circle text-warning"></i> BMW 5 Series
                    </div>
                </chart-card>
            </div>
        </div>
    </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from "chartist";
import temApi from '@/api/temperature_humidity.js';
export default {
    components: {
        StatsCard,
        ChartCard
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data() {
        return {
            socketStatus: 1,
            temperature: {
                data: 0,
                getTime: '温度计离线'
            },
            humidity: {
                data: 0,
                getTime: '湿度计离线'
            },
            activityChart: {
                data: {
                    labels: ["0点", "3点", "6点", "9点", "12点", "15点", "18点", "21点",],
                    series: [[14.2, 13.3, 18.7, 20.6, 24.5, 26.9, 18.5, 16.3]]
                },
                options: {
                    seriesBarDistance: 10,
                    axisX: {
                        showGrid: false
                    },
                    height: "245px"
                }
            }
        };
    },
    methods: {
        getTemperatureHumidity() {
            temApi.getTemperatureHumidity().then(({ data }) => {
                this.temperature.data = data.temperature;
                this.temperature.getTime = data.time;
                this.humidity.data = data.humidity;
                this.humidity.getTime = data.time;
            })
        },
        getTemperature() {
            temApi.getTemperatureHumidity().then(({ data }) => {
                this.temperature.data = data.temperature;
                this.temperature.getTime = data.time;
            })
        },
        getHumidity() {
            temApi.getTemperatureHumidity().then(({ data }) => {
                this.humidity.data = data.humidity;
                this.humidity.getTime = data.time;
            })
        }
    },
    mounted() {
        this.getTemperatureHumidity();
    }
};
</script>
<style></style>
