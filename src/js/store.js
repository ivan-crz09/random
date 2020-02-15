import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store=new Vuex.Store({
    key: "vuex",
    state: {
        user: "",
        token: false
    },
    mutations: {
        // :: Set a user
        setUser (state, user) {
            state.user = user
        },
        setToken (state, token) {
            state.token = token
        },

    },
    getters: {
        user: state => { return state.user},
        token: state => { return state.token},
    },
    plugins:[createPersistedState()]
});

export default store
