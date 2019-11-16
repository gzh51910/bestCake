<template>
  <div class="shopCart">
    {{selectnum}}
    <!-- 1shoppingCart -->
    <div class="shopCart-list clear">
      <ul ref="wrap">
        <li v-for="item in shoplist" :key="item.ID">
          <!-- (1)购物车内容 -->

          <div class="shopCart-content clear">
            <!-- 单选框 -->
            <div class="selected">
              <img :src="selectimg" alt @click="cartSelected($event)" data-select="true" />
            </div>
            <!-- 商品信息 -->
            <div class="list-product">
              <!-- 商品图 -->
              <img class="list-product-l" :src="getListUrl(item.Name,item)" alt />

              <!-- 商品（名称、规格、数量、单价） -->
              <div class="list-product-r">
                <h4 class="shopCart-title">{{item.Name}}</h4>

                <div class="shopCart-des">
                  <div class="shopCart-des-sn clear">
                    <span class="shopCart-des-size">{{item.Size}}</span>

                    <div class="shopCart-des-num">
                      <span class="num-red" @click="reduceNum(item)">-</span>
                      <i class="BNUM">{{item.num}}</i>
                      <span class="num-add" @click="addNum(item)">+</span>
                    </div>
                  </div>
                  <!-- 价格 -->
                  <div class="shopCart-des-price">{{item.CurrentPrice*item.num}}.00</div>
                  <div class="shopCart-des-price-dis">
                    <s>{{item.CurrentPrice*item.num/0.8}}.00</s>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- (2)优惠方式 -->
          <div class="shopCart-discount">
            <span class="discount-l">优惠方式</span>
            <span class="discount-way">不参与活动</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 2hotList -->
    <div class="hotList-box">
      <div class="hotList-title">
        <h2>Hot Recommend</h2>
        <span class="title-line"></span>
        <p>热销新品推荐</p>
      </div>
      <div class="hotList">
        <ul class="clear">
          <li v-for="(item,idx) in list" :key="idx">
            <img class="list-img-top" :src="item.img" alt />
            <h4>{{item.Name}}</h4>
            <div class="des">
              <span class="price">
                {{item.CurrentPrice}}
                <i>{{item.Size}}</i>
              </span>
              <img class="shopIcon" src="../assets/imgs/cart_firm_gwc.jpg" alt @click="addCart(item)"/>
            </div>
          </li>
          <!-- <li>
            <img
              class="list-img-top"
              src="https://res.bestcake.com\m-images\cart\mw_firm_sq.jpg"
              alt
            />
            <h4>伴手礼系列-吉致生巧</h4>
            <div class="des">
              <span class="price">
                168.00
                <i>/1盒</i>
              </span>
              <img class="shopIcon" src="../assets/imgs/cart_firm_gwc.jpg" alt @click="toshopcar"/>
            </div>
          </li>

          <li>
            <img
              class="list-img-top"
              src="https://res.bestcake.com\m-images\cart\mw_firm_nzt_v1.jpg"
              alt
            />
            <h4>伴手礼系列-吉致牛轧糖</h4>
            <div class="des">
              <span class="price">
                68.00
                <i>/16粒装</i>
              </span>
              <img class="shopIcon" src="../assets/imgs/cart_firm_gwc.jpg" alt @click="addCart" />
            </div>
          </li>

          <li>
            <img
              class="list-img-top"
              src="https://res.bestcake.com\m-images\cart\mw_firm_pf_v1.jpg"
              alt
            />
            <h4>伴手礼系列-吉致泡芙</h4>
            <div class="des">
              <span class="price">
                88.00
                <i>0.8磅</i>
              </span>
              <img class="shopIcon" src="../assets/imgs/cart_firm_gwc.jpg" alt />
            </div>
          </li>-->
        </ul>
      </div>
    </div>
    <!-- 3totalPrices -->
    <div class="totalPrices">
      <div class="totalPrices-l">
        <span>
          <!-- 全选框 -->
          <img
            ref="selectall"
            src="../assets/imgs/cart-mw_firm_duihao_1.jpg"
            alt
            @click="cartAllSelected($event)"
          />全选
          <i class="totalPrices-clear" @click="clesrSelect">清空</i>
        </span>
      </div>

      <div class="totalPrices-r">
        <!-- 合计 -->
        <div class="totalPrices-td">
          <p class="total">
            合计：
            <span class="total-prices">{{totalPrices}}</span>
          </p>
          <p class="discount">
            已优惠：
            <span class="discount-prices">{{totalPricesDis}}</span>
          </p>
        </div>
        <!-- 结算 -->
        <div class="accounr">
          <a href="#">结算</a>
        </div>
      </div>
    </div>
    <!-- {{aaa(index)}} -->
    <!-- 添加购物车提示 -->
    <div class="pop" v-show="showpop">已添加到购物车</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datamsg: [],
      arr: [],
      list: [
        {
          img: "https://res.bestcake.com\\m-images\\cart\\mw_firm_sq.jpg",
          Name: "伴手礼系列-吉致生巧",
          CurrentPrice: 168,
          Size: "一盒",
          num: 1
        },
        {
          img: "https://res.bestcake.com\\m-images\\cart\\mw_firm_nzt_v1.jpg",
          Name: "伴手礼系列-吉致牛轧糖",
          CurrentPrice: 68,
          Size: "/16粒装",
          num: 1
        },
        {
          img: "https://res.bestcake.com\\m-images\\cart\\mw_firm_pf_v1.jpg",
          Name: "伴手礼系列-吉致泡芙",
          CurrentPrice: 88,
          Size: "0.8磅",
          num: 1
        }
      ],
      ifselectall: true,
      selectimg: require("../assets/imgs/cart-mw_firm_duihao_1.jpg"), //选中时的图（初始为默认选中）
      selectnum: 0,
      showpop: false,
    };
  },
  methods: {
    getListUrl(name, item) {
      console.log(item);

      if (item.Brand == "卡思客") {
        return `https://res.bestcake.com/m-images/ww/jd/${name}.png?`;
      } else if (item.Brand == "女神系列") {
        return `https://res.bestcake.com/m-images/ww/ns/${name}.jpg?`;
      } else if (item.Brand == "极致蛋糕") {
        return `https://res.bestcake.com/m-images/ww/jz/${name}.png?`;
      } else if (item.Brand == "乳品系列") {
        return `https://res.bestcake.com/m-images/ww/rp/${name}.jpg?`;
      } else {
        return item.img;
      }
    },
    reduceNum(item) {
      if (item.num > 0) {
        if (item.num == 1) {
          item.num = 1;
        } else {
          item.num -= 1;
          // item.CurrentPrice=
        }
      }
      console.log("num-1=", item.num);
    },
    addNum(item) {
      if (item.num > 0) {
        item.num++;
      }
      console.log("num+1=", item.num);
    },
    addCart(item) {
      this.showpop=true;
      setTimeout(()=>{
        this.showpop=false
      },1500)
      if (localStorage.getItem("ShoppingCart")) {
        this.arr = JSON.parse(localStorage.getItem("ShoppingCart"));
      } else {
        this.arr = [];
      }
      let newdata = JSON.parse(JSON.stringify(item));

      let str = JSON.stringify(this.arr);
      if (str.indexOf(newdata.Name) == -1) {
        this.arr.unshift(newdata);
      } else {
        this.arr.forEach(ele => {
          if (ele.Name == newdata.Name) {
            ele.num += 1;
          }
        });
      }

      localStorage.setItem("ShoppingCart", JSON.stringify(this.arr));
      let updata = JSON.parse(localStorage.getItem("ShoppingCart"));
      this.datamsg = updata;
    },
    // （1）全选
    cartAllSelected(event) {
      if (this.ifselectall) {
        //ifselectall=true
        // 实现点击时替换不全选的图--模块化引入本地图片路径
        event.target.src = require("../assets/imgs/cart-mw_firm_duihao_2.jpg"); //  全选被点击后不勾选，event.target=当前被点击的img
        this.selectimg = require("../assets/imgs/cart-mw_firm_duihao_2.jpg"); //全选不勾选，所有商品也不勾选
        this.ifselectall = !this.ifselectall; //不被勾选，为false
        console.log(this.$ref);
      } else {
        event.target.src = require("../assets/imgs/cart-mw_firm_duihao_1.jpg");
        this.selectimg = require("../assets/imgs/cart-mw_firm_duihao_1.jpg");
        this.ifselectall = !this.ifselectall;
      }
      console.log("event", event.target.src);
      console.dir(this.$refs.wrap);
    },
    // （2）单选
    cartSelected(event) {
      if (event.target.dataset.select == "true") {
        //自定义属性data-select==select,显示当前单选框是否为勾选，true为勾选
        // 点击被勾选的单选框，即取消勾选，计算当前被勾选中的单选框数量
        this.selectnum--;
        // 判断当前被勾选的单选框的数量=？当前商品数相同，不等则全选框取消勾选
        if (this.selectnum != this.datamsg.length) {
          this.$refs.selectall.src = require("../assets/imgs/cart-mw_firm_duihao_2.jpg"); //全选框
        }
        event.target.src = require("../assets/imgs/cart-mw_firm_duihao_2.jpg"); //当前被点击的单选框，自己本身也要取消选中
        event.target.dataset.select = "false"; //此时该单选框为不被选中状态
      } else {
        // 当前单选框为没勾选状态
        this.selectnum++;

        if (this.selectnum == this.datamsg.length) {
          this.$refs.selectall.src = require("../assets/imgs/cart-mw_firm_duihao_1.jpg");
        }
        event.target.src = require("../assets/imgs/cart-mw_firm_duihao_1.jpg");
        event.target.dataset.select = "true";
      }
    },
    // （3）清空
    clesrSelect() {
      if (this.ifselectall) {
        confirm("是否清空")
        localStorage.setItem("ShoppingCart", "");
        this.datamsg=[];
      }
    }
  },
  computed: {
    shoplist() {
      return this.datamsg;
    },
    totalPrices() {
      let total = 0;
      console.log(this, "====");

      this.shoplist.forEach(item => {
        total += item.CurrentPrice * item.num;
      });
      return total.toFixed(2);
    },
    totalPricesDis() {
      let discount = 0;
      this.shoplist.forEach(item => {
        discount += item.CurrentPrice * item.num * (1 - 0.8);
      });
      return discount.toFixed(2);
    }
    // aaa(index){
    //   return function totalPrices(){
    //     let total=index;
    //     this.shoplist.forEach((item)=>{
    //       total+=item.CurrentPrice*item.num;
    //     })
    //     return total.toFixed(2);
    //   }
    // }
  },
  created() {
    if (localStorage.getItem("ShoppingCart")) {
      this.datamsg = JSON.parse(localStorage.getItem("ShoppingCart"));
      this.selectnum = this.datamsg.length; //获取目前在购物车的商品数据的数量的长度
    } else {
      this.datamsg = [];
    }
  }
};
</script>
<style lang="scss">
// shopCart
.shopCart {
  width: 100%;
  // padding-top: 4.26vw;
  box-sizing: border-box;
  background: #f7f7f7;
}
.shopCart-list {
  width: 100%;
}
.shopCart-list ul {
  width: 100%;
  margin: 0;
  padding: 0;
  float: left;
}
.shopCart-list li {
  padding: 4.26vw 6vw 0vw 4vw;
  margin-bottom: 4vw;
  background: #fff;
}
// (1)购物车内容
.shopCart-content {
  width: 100%;
}
// selected
.selected {
  float: left;
  margin-right: 3vw;
}
.selected img {
  display: block;
  width: 5.33vw;
  margin-top: 12.74vw;
}
// 商品信息
.list-product {
  width: 81vw;
  float: left;
  // border-bottom: 0.133vw solid #ddd;
}
.list-product-l {
  float: left;
  width: 30.4vw;
  margin-right: 4vw;
  padding-top: 4.26vw;
}

.list-product-r {
  // padding-top: 5.06vw;
  float: left;
  width: 46.6vw;
}

// shopCart-title
.shopCart-title {
  width: 46.6vw;
  font-size: 4.26vw;
  line-height: 5.06vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

// shopCart-des
.shopCart-des {
  width: 100%;
}

// size
.shopCart-des-size {
  width: 50%;
  float: left;
  font-size: 2.93vw;
  color: #ccc;
  line-height: 3.46vw;
  margin-top: 1.69vw;
}

// num
.shopCart-des-num {
  float: left;
  color: #333;
  // font-weight: bold;
  line-height: 6vw;
}

// -
.num-red {
  font-size: 9vw;
  display: block;
  float: left;
  width: 6vw;
  text-align: center;
}

// BNUM
.BNUM {
  display: block;
  float: left;
  padding: 0 3vw;
  font-style: normal;
}

// +
.num-add {
  font-size: 6vw;
  display: block;
  float: left;
  width: 6vw;
  text-align: center;
}

// shopCart-des-price
.shopCart-des-price {
  float: left;
  margin-right: 2vw;
  font-size: 3vw;
  color: #030303;
  font-weight: bold;
  line-height: 4vw;
  margin-top: 2.66vw;
}
.shopCart-des-price-dis {
  float: left;
  font-size: 3vw;
  color: #ccc;
  font-weight: bold;
  line-height: 4vw;
  margin-top: 2.66vw;
}

// 2优惠方式
.shopCart-discount {
  // width: 100%;
  margin-left: 8.33vw;
  line-height: 5.33vw;
  padding: 3.86vw 0 3.86vw 0vw;
  font-size: 3.73vw;
  border-top: 0.133vw solid #ddd;
}
.discount-l {
  float: left;
  color: #f2495e;
  margin-right: 1.333vw;
  font-weight: bold;
}
.discount-way {
  color: #333;
}

// hotList-box
.hotList-box {
  width: 100%;
  padding-top: 17.2vw;
}
.hotList {
  width: 100%;
  padding: 0 1.8vw;
  background: #f7f7f7;
  box-sizing: border-box;
}
.hotList-title {
  margin-bottom: 12.26vw;
}
.hotList-title h2 {
  color: #333;
  margin: 0 auto;
  text-align: center;
  // font-weight: bold;
  line-height: 7.46vw;
  font-size: 6.4vw;
}
.title-line {
  display: block;
  width: 52.3vw;
  margin: 2vw 22.3vw 2vw 22.3vw;
  height: 2px;
  background: #333;
}
.hotList-title p {
  font-size: 4vw;
  text-align: center;
}

.hotList ul {
  padding: 0;
  margin: 0;
  padding-bottom: 30vw;
}
.hotList li {
  width: 44vw;
  color: #333;
  float: left;
  margin: 0 1.8vw;
  padding-bottom: 8.26vw;
}
.list-img-top {
  width: 100%;
  margin: 0;
  padding: 0;
}
.hotList li h4 {
  width: 100%;
  line-height: 5.33vw;
  font-size: 3.73vw;
  padding: 0;
  margin: 0;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-emphasis: ellipsis;
}
.des {
  width: 100%;
  margin-top: 2.4vw;
  line-height: 3.46vw;
  position: relative;
  font-size: 3.446vw;
  font-weight: bold;
}
.price {
  float: left;
  line-height: 3.36vw;
}
.price i {
  // display: block;
  font-style: normal;
  font-weight: normal;
}
.shopIcon {
  display: block;
  width: 5.6vw;
  position: absolute;
  right: 0;
  top: -1vw;
}
.total {
  font-size: 2.933vw;
  line-height: 6vw;
}
.total-prices {
  font-size: 4.8vw;
  color: #f2495e;
  font-weight: bold;
}
// totalPrices
.totalPrices {
  width: 100%;
  // height: 13.333vw;
  position: fixed; //
  bottom: 14vw;
  left: 0;
  background: #fff;
  z-index: 999;
  box-sizing: border-box;
}

// selected-l
.totalPrices-l {
  width: 30vw;
  float: left;
  margin-top: 4.15vw;
  padding-left: 3vw;
  margin-right: 3vw;
  font-size: 4vw;
  color: #333;
  line-height: 5.6vw;
}
.totalPrices-l img {
  float: left;
  display: block;
  width: 5.33vw;
  margin-right: 2.15vw;
}

// clear
.totalPrices-clear {
  font-size: 3.46vw;
  font-style: normal;
  margin-left: 4vw;
}

// totalPrices-r
.totalPrices-r {
  float: right;
  text-align: right;
}
.totalPrices-td {
  float: left;
  margin-top: 2vw;
  padding-right: 3vw;
  // background: #fff;
}
.totalPrices-td p {
  margin: 0;
  padding: 0;
}
// 合计

// 已优惠
.discount {
  font-size: 2.4vw;
}
.discount-prices {
  font-weight: bold;
}
.accounr {
  float: right;
  text-align: center;
  width: 30.66vw;
  display: block;
  line-height: 15vw;

  font-weight: bold;
  background: #02d4d7;
}
.accounr a {
  color: #fff;
}

.clear::after {
  content: "";
  height: 0;
  display: block;
  visibility: hidden;
}
// 提示
.pop {
  width: 32%;
  margin: auto;
  height: 5.5vw;
  line-height: 5vw;
  padding: 4vw;
  color: #666;
  background: rgb(231, 239, 252);
  position: fixed;
  top: 40%;
  left: 0;
  right: 0;
  border-radius: 5%;
}
</style>