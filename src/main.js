
import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App";
import router from "./router/index";
import axios from "axios";
import VueAxios from 'vue-axios';
// import config from "@/../build/config"
import PaperDashboard from "./plugins/paperDashboard";

Vue.use(PaperDashboard);
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

// Vue.axios.defaults.baseURL = 'http://127.0.0.1:5000';
// Vue.axios.defaults.baseURL = 'http://192.168.31.224:5000';
Vue.axios.defaults.baseURL = 'http://raspberrypi.local:5000';       //树莓派地址
Vue.axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.axios.defaults.headers.get['Content-Type'] = 'application/json';

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
