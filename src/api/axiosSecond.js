import axios from 'axios';

axios.defaults.baseURL="http://118.31.77.168:3001/"

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