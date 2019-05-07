import axios from 'axios'

export default {
    getWeather (body) {
        return axios({
            // headers: {
            //     'content-type': 'application/x-www-form-urlencoded'
            // },
            // credentials: 'same-origin',
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
            withCredentials: true,
            credentials: 'same-origin',
            url: '/login',
            baseURL: 'http://127.0.0.1:5000',
            method: 'post',
            data: body
        })
    }
}
