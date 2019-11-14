<template>
  <div>
      <!-- {{getspecial}} -->
    <!-- banner -->
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
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
    <!-- special -->
    <div class="special">
        <ul>
            <li v-for="item in getspecial" :key="item.Id">
                <img :src="item.ImgUrl" alt="">
            </li>
        </ul>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  computed: {
    getbannerdata() {
      if (this.$store.state.homeData) {        //判断数据是否获取，并返回进行渲染
        return this.$store.state.homeData.SwiperBannerList;
      }
      return [];
    },
    getclassify() {
      if (this.$store.state.homeData) {
        return this.$store.state.homeData.TopIconList;
      }
      return [];
    },
    getspecial(){
        if (this.$store.state.homeData) {
        return this.$store.state.homeData.CenterContentList;
        }
        return [];
    }
  },
  methods: {}
};
</script>
<style lang="scss">
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

// special
.special{
    width: 100%;
    padding:3.4vw;
}
// .special ul{
//     // width: 100%;
    
// }
.special li{
    width: 44.533vw;
    height: 26.667vw;
    float: left;
    overflow: hidden;
    padding:1vw;
    // margin-bottom: 2.4vw;
    border-radius: 5.0vw;
}
.special li img{
    display: block;
    width: 100%;
    
}
</style>