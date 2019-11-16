import axios from 'axios';

axios.defaults.baseURL="http://120.24.166.74:3001/"

function getdata(url,data){
    return axios.get(url,data)
}
function postdata(url,data){
    return axios.post(url,data)
}

export default {
    getdata,
    postdata,
}