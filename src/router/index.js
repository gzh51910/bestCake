
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../page"
// import goodslist from "../page/goodsList.vue"
// import shopcar from "../page/shopCar.vue"
// import log from "../page/log.vue"
// import goods from "../page/goods.vue"

// import reg from "../page/reg.vue"
// import mine from "../page/mine.vue"
// import Myorder from "../page/Myorder.vue"
// import inf from "../page/inf.vue"
// import address from "../page/address.vue"

// import comment from "../page/comment.vue"
// import CarouselShow from "../page/CarouselShow.vue"
// import CarouselShow2 from "../page/CarouselShow-02.vue"
// import CarouselShow3 from "../page/CarouselShow-03.vue"
// import CarouselShow4 from "../page/CarouselShow-04.vue"
// import PlaceOrder from "../page/PlaceOrder.vue"
const goodslist = ()=>import("../page/goodsList.vue")
const shopcar = ()=>import("../page/shopCar.vue")
const log = ()=>import("../page/log.vue")
const goods = ()=>import("../page/goods.vue")

const reg = ()=>import("../page/reg.vue")
const mine = ()=>import("../page/mine.vue")
const Myorder = ()=>import("../page/Myorder.vue")
const inf = ()=>import("../page/inf.vue")
const address = ()=>import("../page/address.vue")

const comment = ()=>import("../page/comment.vue")
const CarouselShow = ()=>import("../page/CarouselShow.vue")
const CarouselShow2 = ()=>import("../page/CarouselShow-02.vue")
const CarouselShow3 = ()=>import("../page/CarouselShow-03.vue")
const CarouselShow4 = ()=>import("../page/CarouselShow-04.vue")
const PlaceOrder = ()=>import("../page/PlaceOrder.vue")

Vue.use(VueRouter);

const routes = [
  {
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
    path:"/comment",
    name:"comment",
    component:comment
  },
  {
    path:"/CarouselShow-01",
    name:"CarouselShow-01",
    component:CarouselShow
  },
  {
    path:"/CarouselShow-02",
    name:"CarouselShow-02",
    component:CarouselShow2
  },
  {
    path:"/CarouselShow-03",
    name:"CarouselShow-03",
    component:CarouselShow3
  },
  {
    path:"/CarouselShow-04",
    name:"CarouselShow-04",
    component:CarouselShow4
  },{
    
    path:"/PlaceOrder",
    name:"PlaceOrder",
    component:PlaceOrder
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async function (to, from, next) {
  
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
      
      if(result.data.status==1){
        next()
      }else{
        next({path:"/log"})
      }
      
    } else {
      next("/log")
    }
  }
  next()
})


export default router
