import axios from 'axios'

export default {
    servoHorizontal (angle) {
        return axios({
            url: '/servoControl/horizontal?angle='+angle,
            method: 'get'
        })
    }
}
