import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)



const state = {
    spinnerShow:false,
};
const getters = {
    getSpinnerShow(state){
        return state.spinnerShow;
    }
};
const mutations = {
    setSpinnerShow(state,boolen){
       state.spinnerShow = boolen
    }
};
const actions = {
    updateSpinnerShow({commit},boolen){
        commit('setSpinnerShow',boolen)
    }
};


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})


export default store;