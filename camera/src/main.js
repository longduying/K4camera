import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*import './assets/D-font/iconfont.css'
import './assets/D-font1/iconfont.css'
import './assets/E-font/iconfont.css'*/
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

