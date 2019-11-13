import axios from 'axios';

axios.defaults.baseURL="http://localhost:1910/"

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