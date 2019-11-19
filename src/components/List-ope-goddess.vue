<template>
  <div>
    <ul>
      <li v-for="(item,idx) in data" :key="item.ID" @click="goodsT(item.Name,item.Brand)">
        <!-- <img src="https://res.bestcake.com/m-images/ww/ns/许愿天使3.2(月饼兑换款).jpg?v=10" class="am-img-responsive"> -->
        <div class="listImg">
          <img :src="geturl(item.Name)" alt />
        </div>
        <!-- cart-mw_firm_duihao_2.jpg -->
        <div class="details">
          <p class="title">{{item.Name}}</p>
          <p class="des">{{item.Means}}</p>
          <p class="price">
            <span class="priceNew">￥{{item.CurrentPrice}}.00</span>
            <span class="weight">/{{item.LabelText}}</span>
            <img
              class="shopcart"
              src="../assets/imgs/list-cart.png"
              alt
              @click.stop="addtocar(idx)"
            />
          </p>
        </div>
      </li>
    </ul>
    <!-- 添加购物车提示 -->
    <div class="pop" v-show="showpop">已添加到购物车</div>
  </div>
</template>

<script>
export default {
  props: ["data", "type"],
  data() {
    return {
      // data: []
      arr: [],
      showpop: false
    };
  },
  methods: {
    geturl(name) {
      return `https://res.bestcake.com/m-images/ww/${this.type}/${name}.png?v=10`;
    },
    // 添加商品到购物车（存数据）
    async addtocar(idx) {
      // 提示信息框
      this.showpop = true;
      setTimeout(() => {
        this.showpop = false;
      }, 1500);
      // let data=localStorage.getItem("ShoppingCart");                   //获取数据
      // if(!data){
      // this.arr=JSON.parse(localStorage.getItem("ShoppingCart"))
      if (localStorage.getItem("ShoppingCart")) {
        this.arr = JSON.parse(localStorage.getItem("ShoppingCart"));
      } else {
        this.arr = [];
      }

      let newdata = JSON.parse(JSON.stringify(this.data[idx])); //深拷贝（给arr添加属性num）
      let id = newdata.ID;
      let str = JSON.stringify(this.arr);

      if (str.indexOf(id) == -1) {
        newdata.num = 1;
        this.arr.unshift(newdata);
        this.$store.commit("addcartnum");
      } else {

        this.arr.forEach(ele => {
          if (ele.ID == id) {
            ele.num += 1;
          }
        });
      }
      //把该商品数据存起来
      localStorage.setItem("ShoppingCart", JSON.stringify(this.arr)); //把数组-》对象
      // }
      let username = localStorage.getItem("username");
      let token = localStorage.getItem("Authrization");
      if (username && token) {
        let result = await this.getdata("/checktoken", {
          params: { username, token }
        });
        if (result.data.status == 1) {
          let msg = localStorage.getItem("ShoppingCart");
          await this.postdata("http://118.31.77.168:3001/setshopcart", { msg, username });
        }
      }
    },
    goodsT(id, brand) {
      this.$router.push({
        path: "goods",
        query: { id, brand },
        params: { id }
      });
    }
  }
  // computed: {
  //     goddessdata() {
  //         if(this.$store.state.goddessData){
  //             return this.$store.state.goddessData.filter(ele => ele.Brand == "女神系列");
  //         }
  //         return []
  //     }
  // },
  // async created() {
  //     let data = await this.getdata(
  //     "?v=1573608979780&c=NsCakeCenter&m=GetJdListNew"
  //     );
  //     this.data = data.data.Tag.cakelist;
  // }
};
</script>

<style lang="scss" scoped>
ul,
li,
p {
  padding: 0px;
  margin: 0px;
}
ul {
  list-style-type: none;
}
ul::after {
  content: "";
  height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}
li {
  width: 48vw;
  float: left;
  position: relative;
  margin-bottom: 5.334vw;
  font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei",
    FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB",
    "Hiragino Sans GB W3", FontAwesome, sans-serif;
}
li:nth-child(2n + 1) {
  margin-right: 4vw;
}
.listImg {
  width: 44vw;
  height: 44vw;
}
.listImg img {
  display: block;
  width: 100%;
}
// details

// title
.title {
  text-align: left;
  margin-top: 1.867vw;
  line-height: 3.734vw;
  font-size: 3.734vw;
  color: #333;
  padding-left: 2vw;
}
//des
.des {
  width: 40vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 5vw;
  font-size: 3.2vw;
  color: #999;
  padding-left: 2vw;
}

// price
.price {
  width: 100%;
  height: 5.334vw;
  line-height: 1.6;
  position: relative;
  //   right: 0vw;
  //   bottom: 1vw;
}
.priceNew {
  color: rgb(255, 50, 0);
  font-size: 3.2vw;
  padding-left: 2vw;
}

.price span {
  float: left;
  display: inline-block;
  height: 100%;
}
.price .weight {
  color: rgb(188, 188, 188);
  font-size: 2vw;
}
.shopcart {
  height: 100%;
  position: absolute;
  right: 2vw;
  // float: right;
}
.pop {
  width: 40%;
  margin: auto;
  height: 11vw;
  line-height: 5vw;
  padding: 3vw;
  color: #666;
  background: rgb(231, 239, 252);
  position: fixed;
  top: 40%;
  left: 0;
  right: 0;
  border-radius: 5%;
}

</style>