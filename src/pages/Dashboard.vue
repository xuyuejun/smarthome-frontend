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
                        在线状态
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
                        在线状态
                    </div>
                </stats-card>
            </div>
            <!--Thermometer cards-->
            <div class="col-md-6 col-xl-3">
                <stats-card>
                    <div
                        class="icon-big text-center"
                        slot="header">
                        <img src="../icon/thermometer.png"/>
                        <!--<i :class="stats.icon"></i>-->
                    </div>
                    <div class="numbers" slot="content">
                        <p>温度计</p>
                        开启
                    </div>
                    <div class="stats" slot="footer">
                        <span class="ti-reload"></span>
                        <!--<i :class="stats.footerIcon"></i>-->
                        在线状态
                    </div>
                </stats-card>
            </div>
            <!--Thermometer cards-->
            <div class="col-md-6 col-xl-3">
                <stats-card>
                    <div
                        class="icon-big text-center"
                        slot="header">
                        <img src="../icon/thermometer.png"/>
                        <!--<i :class="stats.icon"></i>-->
                    </div>
                    <div class="numbers" slot="content">
                        <p>摄像头</p>
                        开启
                    </div>
                    <div class="stats" slot="footer">
                        <span class="ti-reload"></span>
                        <!--<i :class="stats.footerIcon"></i>-->
                        在线状态
                    </div>
                </stats-card>
            </div>
        </div>

        <!--Charts-->
        <div class="row">
            <div class="col-12">
                <chart-card
                    title="24小时温度"
                    sub-title="All products including Taxes"
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
            statsCards: [
                {
                    type: "warning",
                    icon: "ti-server",
                    title: "智能插座",
                    value: "开启",
                    footerText: "在线状态",
                    footerIcon: "ti-reload"
                },
                {
                    type: "success",
                    icon: "ti-wallet",
                    title: "Revenue",
                    value: "$1,345",
                    footerText: "Last day",
                    footerIcon: "ti-calendar"
                },
                {
                    type: "danger",
                    icon: "ti-pulse",
                    title: "Errors",
                    value: "23",
                    footerText: "In the last hour",
                    footerIcon: "ti-timer"
                },
                {
                    type: "info",
                    icon: "ti-twitter-alt",
                    title: "Followers",
                    value: "+45",
                    footerText: "Updated now",
                    footerIcon: "ti-reload"
                }
            ],
            usersChart: {
                data: {
                    labels: [
                        "9:00AM",
                        "12:00AM",
                        "3:00PM",
                        "6:00PM",
                        "9:00PM",
                        "12:00PM",
                        "3:00AM",
                        "6:00AM"
                    ],
                    series: [
                        [287, 385, 490, 562, 594, 626, 698, 895, 952],
                        [67, 152, 193, 240, 387, 435, 535, 642, 744],
                        [23, 113, 67, 108, 190, 239, 307, 410, 410]
                    ]
                },
                options: {
                    low: 0,
                    high: 1000,
                    showArea: true,
                    height: "245px",
                    axisX: {
                        showGrid: false
                    },
                    lineSmooth: Chartist.Interpolation.simple({
                        divisor: 3
                    }),
                    showLine: true,
                    showPoint: false
                }
            },
            activityChart: {
                data: {
                    labels: [
                        "0点",
                        "3点",
                        "6点",
                        "9点",
                        "12点",
                        "15点",
                        "18点",
                        "21点",
                    ],
                    series: [
                        [
                            14.2,
                            13.3,
                            18.7,
                            20.6,
                            24.5,
                            26.9,
                            18.5,
                            16.3
                        ]
                    ]
                },
                options: {
                    seriesBarDistance: 10,
                    axisX: {
                        showGrid: false
                    },
                    height: "245px"
                }
            },
            preferencesChart: {
                data: {
                    labels: ["62%", "32%", "6%"],
                    series: [62, 32, 6]
                },
                options: {}
            }
        };
    }
};
</script>
<style></style>
