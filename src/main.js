import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyFooter from '@/components/MyFooter';

Vue.config.productionTip = false
Vue.component("MyFooter", MyFooter)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')