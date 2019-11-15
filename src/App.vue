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
        <el-col :span="6"><el-menu-item >
          <router-link to="/"><img src="./assets/imgs/home.png" alt="home"></router-link>
        </el-menu-item></el-col>
        <el-col :span="6"><el-menu-item >
          <router-link to="/goodslist"><img src="./assets/imgs/list.png" alt=""></router-link>
        </el-menu-item></el-col>
        <el-col :span="6"><el-menu-item >
          <router-link to="/shopcar"><img src="./assets/imgs/shopcar.png" alt=""></router-link>
        </el-menu-item></el-col>
        <el-col :span="6"><el-menu-item >
          <router-link to="/log"><img src="./assets/imgs/user.png" alt=""></router-link>
        </el-menu-item></el-col>
      </el-row>
      
    </el-menu>
  </div>
</template>
<script>
 

  export default {
    data(){
      return {

      }
    },
    methods:{

    },
    async created() {
      // let data = await this.getdata(
      //   "?v=1573608979780&c=NsCakeCenter&m=GetJdListNew"
      // );
      let data = await this.getdata(
        "getdata"
      );
      this.$store.commit("getGoddessData",data)    //提交数据给仓库

      // let homedata = await this.getdata(
      //   "?v=1573643930562&c=NewIndexController&m=index"
      // );
      let homedata = await this.getdata(
        "getindex"
      );
      this.$store.commit("getHomeData",homedata)
    //console.log(this.data.data.Tag.cakelist);
  },
  }
</script>

<style lang="scss" scoped>
  .el-menu-demo{
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
  .el-menu-demo a{
    display: block;
  }
  .el-menu-demo li{
    padding:5px 10px;
    height: auto;
  }
  .el-menu-demo img{
    display: block;
    width: 50%;
    margin: 0 auto;
  }
</style>
