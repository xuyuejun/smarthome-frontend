import axios from 'axios'

export default {
    changeSocketOn (angle) {
        return axios({
            url: '/socket/switch-on',
            method: 'get'
        })
    },
    changeSocketOff (angle) {
        return axios({
            url: '/socket/switch-off',
            method: 'get'
        })
    }
}
