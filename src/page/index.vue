<template>
  <div>
    <!-- {{getspecial}} -->
    <!-- banner -->
    <div class="block">

      <!-- <span class="demonstration">Click 指示器触发</span> -->

      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item,idx) in getbannerdata" :key="idx">
          <div>
            <img :src="item.ImgUrl" alt />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- title -->
    <div class="titleImg">
      <img src="../assets/imgs/home-title.png" alt />
    </div>
    <!-- advImg -->
    <div class="advImg">
      <a href class="adv">
        <img src="../assets/imgs/home-fc.gif" alt />
      </a>
    </div>
    <!-- classify -->
    <div class="classify">
      <ul class="clear">
        <li v-for="item in getclassify" :key="item.Id">
          <img :src="item.ImgUrl" alt />
          <span>{{item.ActName}}</span>
        </li>
      </ul>
    </div>
    <!-- notice -->
    <div class="notive">
      <span>通知</span>
      <marquee class="notive-text"
        behavior
        direction
      >贝思客官方申明：我司近期发现有客户通过非正常渠道售卖的代金卡无法正常使用，目前我司正通过法律途径解决此问题。我司在此郑重申明，从未授权过任何渠道售卖我司代金卡，请客户通过正常渠道（如：官网、公司销售）进行购买消费。</marquee>
    </div>
    <!-- special -->
    <div class="special">
      <ul class="clear">
        <li v-for="item in getspecial" :key="item.Id">
          <img :src="item.ImgUrl" alt />
        </li>
      </ul>
    </div>

    <!-- box-wonderFultime -->
    <HomeBox :data="getwonderfulTime">
      <img src="../assets/imgs/home-571060506020139900.jpg" alt class="box-top-img" />
    </HomeBox>

    <!-- box-leisureFood -->
    <HomeBox :data="getleisureFood">
      <img src="../assets/imgs/home-427276281583982800.jpg" alt class="box-top-img" />
    </HomeBox>

    <!-- box-iceCream -->
    <HomeBox :data="geticeCream" class="HomeBox-bottom">
      <img src="../assets/imgs/home-3427276281583982800.jpg" alt class="box-top-img" />
    </HomeBox>

    <!-- <div class="wonderfultime">
      <a href=""><img src="../assets/imgs/home-571060506020139900.jpg" alt="" class="wonderfultime-top-img"></a>

      <div class="wonderfultime-list">
        <ul>
          <li v-for="(item) in getwonderfultime" :key="item.id">
            <img src="" alt="">
            '
            <h4>{{item.Name}}</h4>
            <p>
              <span class="current-price">￥{{}}</span>
              <span class="original-price"></span>
            </p>
          </li>
        </ul>
    </div>-->
    <!-- </div> -->
  </div>
</template>
<script>
import HomeBox from "../components/home-box-wonderfulTime";
export default {
  data() {
    return {};
  },
  computed: {
    getbannerdata() {
      if (this.$store.state.homeData) {
        //判断数据是否获取，并返回进行渲染
        return this.$store.state.homeData.SwiperBannerList;
      }
      return [];
    },
    getclassify() {
      if (this.$store.state.homeData != "") {
        return this.$store.state.homeData.TopIconList;
      }
      return [];
    },
    getspecial() {
      if (this.$store.state.homeData != "") {
        return this.$store.state.homeData.CenterContentList;
      }
      return [];
    },
    getwonderfulTime() {
      if (this.$store.state.homeData != "") {
        //0/null/undefined/""   []
        let data=JSON.parse(this.$store.state.homeData.SaleList[0].CakeList.replace(/'/g,"\""));
        return data; //字符串->对象
      }
      return [];
    },
    getleisureFood() {
      if (this.$store.state.homeData != "") {
        let data=JSON.parse(this.$store.state.homeData.SaleList[1].CakeList.replace(/'/g,"\""));
        
        return data;
      }
      return [];
    },
    geticeCream() {
      if (this.$store.state.homeData != "") {
        let data=JSON.parse(this.$store.state.homeData.SaleList[2].CakeList.replace(/'/g,"\""));
        
        return data;
      }
      return [];
    }
  },

  components: {
    HomeBox
  },
  methods: {
    goodsT(id){
        this.$router.push({path:'goods',query:{id},params:{id}})
    }

  }
};
</script>



<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
ul {
  padding: 0vw;
  margin: 0vw;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

//   banner
.el-carousel__item img {
  display: block;
  width: 100%;
  height: 100%;
}
.el-carouse .el-carousel__indicators .el-carousel__indicator--horizontal{
  padding: 2px 4px;
}

// title
.titleImg {
  width: 100%;
}
.titleImg img {
  display: block;
  width: 100%;
  height: 100%;
}

// advImg
.advImg {
  width: 100%;
  margin: 0 auto;
}

// advImg
.advImg {
  width: 100%;
}
.adv {
  display: block;
  width: 91.4667vw;
  height: 22.93vw;
  margin: 0 auto;
}
.adv img {
  display: block;
  width: 100%;
  height: 1005;
}

// classify
.classify {
  width: 100%;
  padding-bottom: 5.334vw;
  box-sizing: border-box;
}
.classify li {
  width: 15.8667vw;
  text-align: center;
  float: left;
  white-space: nowrap;
  padding: 0 4.567vw;
}
.classify li img {
  display: block;
  width: 13.8667vw;
  height: 13.8667vw;
  margin: 0 auto;
  margin-top: 4.2667vw;
  //   background:red;
}
.classify li span {
  margin-top: 2.9334vw;
  font-size: 3.2vw;
}

// notive
.notive {
  width: 100%;
  height: 15vw;
  margin: 0 auto;
  position: relative;
  color: #1fb1b8;
  overflow: hidden;
  border-top: 2.1334vw solid #fafafa;
  border-bottom: 2.1334vw solid #fafafa;
}
.notive span {
  display: block;
  width: 9.6vw;
  height: 4.8vw;
  position: absolute;
  top: 5.1vw;
  left:4.4vw;
  color: #fafafa;
  font-size: 3.2vw;
  text-align: center;
  line-height: 4.8vw;
  // margin-left: 4.2667vw;
  background: #1fb1b8;
  border-radius: 1.0667vw;
  // margin-top: 3vw;
}
.notive-text{
  margin: 2.6vw 6.4vw 0 16vw ;
  font-size: 3.7334vw;
  line-height: 9.6vw;
}

// special
.special {
  width: 100%;
  padding: 3.4vw;
  box-sizing: border-box; //因加了padding
}

.special li {
  width: 44.533vw;
  height: 26.667vw;
  float: left;
  overflow: hidden;
  padding: 1vw;
  // margin-bottom: 2.4vw;
  border-radius: 5vw;
}
.special li img {
  display: block;
  width: 100%;
}
.clear::after {
  content: "";
  height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}
// HomeBox
.HomeBox-bottom {
  padding-bottom: 15vw;
}
</style>