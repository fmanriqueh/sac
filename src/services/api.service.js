import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios'

const ApiService = {
    init(){
        Vue.use(VueAxios, axios);
        Vue.axios.defaults.baseURL = "http://localhost";
    },
    query(resource, slug=""){
        Vue.axios.get(`${resource}/${slug}`).catch( (error) => {

        });
    },
    post(resorce, params){
        Vue.axios.post(`${resource}`, params).catch( (error) => {
            console.log(error);        
        });
    }

}

export default ApiService;