import axios from 'axios'

export default {
    getTemperatureHumidity () {
        return axios({
            url: '/temp/getLatest',
            method: 'get'
        })
    }
}
