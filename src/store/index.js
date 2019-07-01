import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//将所有组件都要调用的state放在这里，存数据
let state = {
    time_stamp:'',//之后可以设置时间戳的默认值
    data:[],
    counter:0,
    warningArray:[],
    inst_name:''
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
    },

    submitInst(state,d){
        state.inst_name = d
    }
};

let actions = {
    getData(context,d){
        context.commit('submitTime',d);
        Vue.http.get(`/result?name=${d}`)
                .then(res=>{
                    // console.log(res.data);//证明可以取到res
                    //将一个接口里的数据分成两部分，可以省下一个接口，不过速度偏慢
                    context.commit('getdata',res.data.result);
                    context.commit('getarray',res.data.warningArray)
                    
                });
    },

    getInst(context,d){
        context.commit('submitInst',d);
// 该方法是在js文件中引用vuex 的状态参数的 
        let time = store.state.time_stamp;
        // console.log(time);
        Vue.http.get(`/usage?id=${d}&name=${time}`)
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;