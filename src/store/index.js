import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    operationData: [],
    homeData: [],
    username: localStorage.getItem("username"),
  },
  mutations: {
    getGoddessData(state, data) {
      // state.operationData=data.data.Tag.cakelist;
      console.log(data);

      state.operationData = data.data;

      console.log("operationData", state.operationData);
    },
    getHomeData(state, data) {

      state.homeData = data.data[0].mainresult;
      console.log("homeData", state.homeData);
    },
    pushusername(state, username) {
      state.username = username;
    }


  },
  actions: {},
  modules: {

  }
})