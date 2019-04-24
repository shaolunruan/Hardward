import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//将所有组件都要调用的state放在这里，存数据
var state = {
    counter : function(){
        return 222
    }
};

var getters = {

};

var mutations = {
    increment(state){
        return state.counter = state.counter+1;
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;