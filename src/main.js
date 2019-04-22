import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";

Vue.use(PaperDashboard);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
