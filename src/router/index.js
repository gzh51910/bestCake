import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../page"
import goodslist from "../page/goodsList.vue"
import shopcar from "../page/shopCar.vue"
import log from "../page/log.vue"
import goods from "../page/goods.vue"

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:home
  },
  {
    path:"/goodslist",
    component:goodslist
  },
  {
    path:"/shopcar",
    component:shopcar
  },
  {
    path:"/log",
    component:log
  },
  {
    path:"/goods",
    component:goods
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
