import ApiService from "@/services/api.service.js";

// action types
export const LOGIN = 'login';
export const LOGOUT = 'logout';

// mutation types
export const SET_AUTH = 'setUser';
export const PURGE_AUTH = 'logOut';

const state = {
    currentUser: {}
};

const getters = {
    getUser(state){
        return state.currentUser;
    }
};

const actions = {
    [LOGIN](context, data){
        ApiService.query("api/", data);
    },
    [LOGOUT](context){
        context.commit(PURGE_AUTH);
    }
};

const mutations = {
    [SET_AUTH](state, payload){
        state.currentUser = payload;
    },
    [PURGE_AUTH](state){
        state.currentUser = {};
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};