import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    operationData: [],
    homeData: [],
    username: localStorage.getItem("username"),
    num:localStorage.getItem("ShoppingCart")?JSON.parse(localStorage.getItem("ShoppingCart")).length:0,
    place:[]
  },
  mutations: {
    getGoddessData(state, data) {
      // state.operationData=data.data.Tag.cakelist;

      state.operationData = data.data;
    },
    getHomeData(state, data) {

      state.homeData = data.data[0].mainresult;
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
    },
    updatanum(state){
      state.num=localStorage.getItem("ShoppingCart")?JSON.parse(localStorage.getItem("ShoppingCart")).length:0
    },
    pushplace(state,data){
      if(data.map){
        state.place=data
      }else{
        state.place.push(data)
      }
      
    }
  },
  actions: {},
  modules: {

  }
})