import Vue from 'vue'
import VueResource from 'vue-resource'
import Echarts from "echarts"
import * as d3 from 'd3';
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from "./App.vue"

import $ from 'jquery'
import './assets/css/bootstrap.min.css'



//使用vue-resource(不光要引入)
Vue.use(VueResource)

// Vue.use(VueAxios,axios)
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'


Vue.use(Echarts)
Vue.component('chart', Echarts)

//把Echarts绑定在Vue原型上，这样组建里面就可以通过this.$echarts来访问了
Vue.prototype.$echarts = Echarts

// Vue.prototype.d3  = d3



new Vue({
    el:'#app',
    template:'<App/>',
    components:{App}
})