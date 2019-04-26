import axios from 'axios'

export default {
    getWeather (body) {
        return axios({
            url: '/weather/index',
            baseURL: 'http://v.juhe.cn',
            withCredentials: true,
            method: 'jsonp',
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
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: '/login',
            baseURL: 'http://127.0.0.1:5000',
            method: 'post',
            data: body
        })
    }
}
