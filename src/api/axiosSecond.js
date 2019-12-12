
import Vue from 'vue'
import axios from 'axios';
Vue.prototype.$axios = axios

axios.defaults.baseURL="http://118.31.77.168:3001/"

async function getdata(url,data){
    return await axios.get(url,data)
}
async function postdata(url,data){
    return await axios.post(url,data)
}

export default {
    getdata,
    postdata,
}