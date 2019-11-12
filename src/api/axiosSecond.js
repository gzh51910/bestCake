import axios from 'axios';

axios.defaults.baseURL="http://localhost:8080/"

function getdata(url,data){
    axios.get(url,data)
}
function postdata(url,data){
    axios.post(url,data)
}

export default {
    getdata,
    postdata,
}