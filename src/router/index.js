import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../page"
import goodslist from "../page/goodsList.vue"
import shopcar from "../page/shopCar.vue"
import log from "../page/log.vue"
import goods from "../page/goods.vue"

import reg from "../page/reg.vue"
import mine from "../page/mine.vue"
import Myorder from "../page/Myorder.vue"
import inf from "../page/inf.vue"
import address from "../page/address.vue"

import comment from "../page/comment.vue"

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: home
  },
  {
    path: "/goodslist",
    component: goodslist
  },
  {
    path: "/shopcar",
    component: shopcar
  },
  {
    path: "/log",
    component: log,

  },
  {
    path: "/goods",
    component: goods
  },
  {
    path: "/reg",
    component: reg
  },
  {
    path: "/mine",
    component: mine,
    meta: {
      check: true
    }
  },
  {
    path: "/Myorder",
    component: Myorder
  },
  {
    path: "/inf",
    component: inf
  },
  {
    path: "/address",
    component: address
  },
  {
    path: "/goods",
    name: "goods",
    component: goods
  },
  {
    path: "/comment",
    name: "comment",
    component: comment
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async function (to, from, next) {
  console.log(to, from);
  if (to.meta.check) {
    let token = localStorage.getItem("Authrization");
    let username = localStorage.getItem("username");
    if (token) {
      let result = await Vue.prototype.getdata("/checktoken",{
        params:{
          username,
          token
        }
      })
      console.log(result);

      next()
    } else {
      next("/log")
    }
  }
  next()
})

export default router