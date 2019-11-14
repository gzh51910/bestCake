import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    operationData:[],
    homeData:[]
  },
  mutations: {
    getGoddessData(state,data){
      state.operationData=data.data.Tag.cakelist;
      console.log("operationData",state.operationData);
    },
    getHomeData(state,data){
      state.homeData=data.data.Tag.mainresult;
      console.log("homeData",state.homeData);
    }
    
    
  },
  actions: {
  },
  modules: {
    
  }
})
