import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//将所有组件都要调用的state放在这里，存数据
let state = {
    time_stamp:'',//之后可以设置时间戳的默认值
    data:[],
    counter:0,
    warningArray:[]
};

let getters = {
    data:(state)=>{
        return state.data
    }

};

let mutations = {

    submitTime(state,name){
        state.time_stamp = name
    },

    getdata(state,d){
        state.data = d;
    },

    getarray(state,d){
        state.warningArray = d;
    },

    increment(state,d){
        state.counter = d
    }
};

let actions = {
    getData(context,d){
        context.commit('submitTime',d);
        Vue.http.get(`/result?name=${d}`)
                .then(res=>{
                    // console.log(res.data);//证明可以取到res
                    context.commit('getdata',res.data.result);
                    context.commit('getarray',res.data.warningArray)
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