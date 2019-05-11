<template>
    <div class="row">
        <!--<card :body-style="{ padding: '0px' }">-->
        <card title="Test" subTitle="test2">
            <el-button type="primary" @click="getNews">获取新闻</el-button>
            <el-button type="primary" @click="getNewsTwo">获取新闻2</el-button>
            <el-button type="primary" @click="getWeather">天气</el-button>
            <el-button type="primary" @click="flaskTest">本地测试</el-button>
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
import api from '@/api/test_api.js';

export default {
    components: {
        PaperTable
    },
    data() {
        return {
            newsData: '',
            loginData: {
                username: 'zhangsan',
                password: '123'
            },
            newsDataBody: [{
                pageSize: '6',
                pageIndex: '0',
                copyright: 'osc'
            }],
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
            }],
            weatherData: {
                cityname: '莱芜',
                format: '2',
                key: '089715687549aadad2d391f94f5b5dd7'
            }
        };
    },
    methods: {
        getNews() {
            this.axios.post("http://api.komavideo.com/news/list").then(body => {
                this.newsData = body.data;
            })
        },
        getNewsTwo() {
            api.getnew(this.newsDataBody).then(({ data }) => {
                this.newsData = body.data;
            })
        },
        getWeather() {
            // let instance = axios.create({
            //     headers: {
            //         'Access-Control-Allow-Origin': '*'
            //     }
            // })
            // this.axios
            //     .post('http://v.juhe.cn/weather/index', this.weatherData,
            //     )
            //     .then(data => {
            //         console.log(data.data)
            //     })
            api.getWeather(this.weatherData).then(({ data }) => {
                console.log("获取天气数据")
            })
        },
        flaskTest() {
            api.flaskLogin(this.loginData).then(({ data }) => {
                console.log("获取flasktask")
            })
            // api.getnew('http://127.0.0.1:5000/login').then(({ data }) => {
            //     this.newsData = body.data;
            // })
            // this.axios.post("http://127.0.0.1:5000/login", this.loginData).then(body => {
            //     this.newsData = body.data;
            // })
        }
    }
};
</script>
