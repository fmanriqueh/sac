import ApiService from "@/services/api.service.js";

// action types
export const LOGIN = 'login';
export const LOGOUT = 'logout';

// mutation types
export const SET_AUTH = 'setUser';
export const PURGE_AUTH = 'logOut';
export const SET_ERROR = 'setError';

const state = {
    currentUser: false,
    authErrors: null
};

const getters = {
    getCurrentUser(state){
        return state.currentUser;
    }
};

const actions = {
    [LOGIN](context, credentials){
        return new Promise( resolve => {
                ApiService.post("validacion/remesa", credentials)
                .then( ({data}) => {
                    context.commit(SET_AUTH, data);
                    resolve(data);
                })
                .catch( ({error}) => {
                    context.commit(SET_ERROR, error)
                });
            }
        );
    },
    [LOGOUT](context){
        context.commit(PURGE_AUTH);
    }
};

const mutations = {
    [SET_ERROR](state, error){
        state.authErrors = error;
    },
    [SET_AUTH](state, user){
        state.currentUser = user;
    },
    [PURGE_AUTH](state){
        state.currentUser = false;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};