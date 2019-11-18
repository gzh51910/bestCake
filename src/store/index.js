import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    operationData: [],
    homeData: [],
    username: localStorage.getItem("username"),
    num:localStorage.getItem("ShoppingCart")?JSON.parse(localStorage.getItem("ShoppingCart")).length:0
  },
  mutations: {
    getGoddessData(state, data) {
      // state.operationData=data.data.Tag.cakelist;

      state.operationData = data.data;
    },
    getHomeData(state, data) {

      state.homeData = data.data[0].mainresult;
      console.log("homeData", state.homeData);
    },
    pushusername(state, username) {
      state.username = username;
    },
    addcartnum(state){
      state.num +=1;
    },
    deccartnum(state){
      state.num -=1;
    },
    clearcart(state){
      state.num=0;
    }


  },
  actions: {},
  modules: {

  }
})