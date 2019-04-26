import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//将所有组件都要调用的state放在这里，存数据
var state = {
    time_stamp:'',//之后可以设置时间戳的默认值
    data:[],
    counter:0
};

var getters = {
    data:(state)=>{
        return state.data
    }

};

var mutations = {

    submitTime(state,name){
        state.time_stamp = name
    },

    getdata(state,d){
        state.data = d;
    },

    increment(state){
        state.counter = state.counter + 1
    }
};

var actions = {
    getData(context,d){
        context.commit('submitTime',d);
        Vue.http.get(`/result?name=${d}`)
                .then(res=>{
                    // console.log(res.data);//证明可以取到res
                    context.commit('getdata',res.data)
                });
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;