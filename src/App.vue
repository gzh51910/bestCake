<template>
  <div id="app">
    <router-view></router-view>

    <el-menu
      default-active="home"
      class="el-menu-demo"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <el-menu-item>
            <router-link to="/">
              <img src="./assets/imgs/home.png" alt="home" />
            </router-link>
          </el-menu-item>
        </el-col>
        <el-col :span="6">
          <el-menu-item>
            <router-link to="/goodslist">
              <img src="./assets/imgs/list.png" alt />
            </router-link>
          </el-menu-item>
        </el-col>
        <el-col :span="6">
          <el-menu-item>
            <router-link  to="/shopcar">
              <!-- 购物车商品数量 -->
              <img src="./assets/imgs/shopcar.png" alt />
              
              <!-- <el-badge :value="this.$store.state.num" class="item" id="itemshopcart">
                <img src="./assets/imgs/shopcar.png" alt />
              </el-badge> -->
            </router-link>
          </el-menu-item>
        </el-col>
        <el-col :span="6">
          <el-menu-item>
            <router-link to="/mine">
              <img src="./assets/imgs/user.png" alt />
            </router-link>
          </el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
    <p class="badge">{{parseInt(this.$store.state.num)}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
    
    };
  },
  methods: {},
  async created() {
    // let data = await this.getdata(
    //   "?v=1573608979780&c=NsCakeCenter&m=GetJdListNew"
    // );
    let data = await this.getdata("getdata");
    this.$store.commit("getGoddessData", data); //提交数据给仓库

    // let homedata = await this.getdata(
    //   "?v=1573643930562&c=NewIndexController&m=index"
    // );
    let homedata = await this.getdata("getindex");
    this.$store.commit("getHomeData", homedata);
    //console.log(this.data.data.Tag.cakelist);
    let place = await this.getdata(
      "http://118.31.77.168:3001/getplace",
      {
          params: {
              username:this.$store.state.username,
          }
      }
    );
    
    this.$store.commit("pushplace",place.data)
  }
};
</script>

<style lang="scss" scoped>
.el-menu-demo {
  position: fixed !important;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  background: white !important;
  z-index: 999;
  border-top: 1px solid #eee;
  height: 13.333vw;
}
.el-menu-demo a {
  display: block;
}
.el-menu-demo li {
  padding: 5px 10px;
  height: auto;
}
.el-menu-demo img {
  display: block;
  width: 50%;
  margin: 0 auto;
}
.item {
  // margin-top: 10px;
  // margin-right: 40px;
  position: absolute;
  padding: 0;
  margin: 0;
  width: auto;
  height: auto;
}
.el-menu-item:hover {
  background-color: #fff;
}

sup{
  top: -4vw !important;
  right: 10vw;
}
.el-badge__content {
//   position: absolute;
//   top: 1vw;
//   right: 1vw;
//   background-color: #f56c6c;
//   border-radius: 10px;
//   color: #fff;
//   display: inline-block;
//   font-size: 12px;
//   height: 18px;
  line-height: 16px;
//   padding: 0 6px;
//   text-align: center;
//   white-space: nowrap;
//   border: 1px solid #fff;
}
.el-menu{
  .el-badge{
    .el-badge__content{
      top:15px;
    }
  }
}
font{
  line-height: 12px;
  float: left;  

}
.badge{
  position: fixed;   
  bottom: 2vw;
  right: 30vw;
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  height: 18px;
  width:18px;
  line-height: 16px;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
  z-index: 20000
}
</style>
