import axios from 'axios'

export default {
    getWeather (body) {
        return axios({
            url: '/weather/index',
            baseURL: 'http://v.juhe.cn',
            withCredentials: true,
            method: 'get',
            data: body
        })
    },
    getnew (body) {
        return axios({
            url: '/news/list',
            baseURL: 'http://api.komavideo.com',
            method: 'post',
            data: body
        })
    },
    flaskLogin (body) {
        return axios({
            url: '/login',
            method: 'post',
            data: body
        })
    }
}
