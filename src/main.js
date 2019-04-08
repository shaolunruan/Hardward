import Vue from 'vue'
import VueResource from 'vue-resource'
import Echarts from "echarts"

import App from "./App.vue"

import $ from 'jquery'
import './assets/css/bootstrap.min.css'



// new Vue({
//     render: h => h(App)
// }).$mount("#app")

//使用vue-resource(不光要引入)
 Vue.use(VueResource)

//使用vuescroll滚动条，全局配置及其使用
//  Vue.use(vueScroller);
//废弃，暂时使用Bootstrap自带的滚动条

// Vue.use(echarts)
// Vue.component('chart', echarts)

//把Echarts绑定在Vue原型上，这样组建里面就可以通过this.$echarts来访问了
Vue.prototype.$echarts = Echarts



new Vue({
    el:'#app',
    template:'<App/>',
    components:{App}
})