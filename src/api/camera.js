import axios from 'axios'

export default {
    getCameraStatus (angle) {
        return axios({
            url: '/servoControl/status',
            method: 'get'
        })
    }
}
