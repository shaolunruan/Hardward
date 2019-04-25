import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//将所有组件都要调用的state放在这里，存数据
var state = {
    counter : 0,
    time_stamp:0,//之后可以设置时间戳的默认值
    data:[]
};

var getters = {
    counter:(state)=>{
        return state.counter
    },

    data:(state)=>{
        return state.data
    }

};

var mutations = {
    increment(state){
        return state.counter = state.counter+1;
    },

    submitTime(state,name){
        state.time_stamp = name
    },

    getdata(state,d){
        state.data = d;
    }
};

var actions = {
    getData(context,d){
        Vue.http.post(('/result'),d)
        .then(res=>{
            console.log(d);
            context.commit('getdata',res.data)

        })
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;