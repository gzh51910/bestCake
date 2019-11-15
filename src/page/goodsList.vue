<template>
  <div id="goodslist">
    <el-tabs v-model="activeName" @tab-click="handleClick" id="nav1">
      <!-- 自营 -->
      <el-tab-pane label="自营" name="first" class="operation" >
        <el-tabs class="operationMenu" v-model="activeNametwo" @tab-click="handleClick" id="nav2">
          <!-- 女神 -->
          <el-tab-pane label="女神" name="goddess" class="goddess">
            <OpeList :data="goddessdata" type="ns"></OpeList>
          </el-tab-pane>
          <!-- 经典 -->
          <el-tab-pane label="经典" name="classics" class="classics">
            <OpeList :data="classicsdata" type="jd"></OpeList>
          </el-tab-pane>
          <!-- 伴手礼 -->
          <el-tab-pane label="伴手礼" name="gift" class="gift">
            <OpeList :data="giftdata" type="jz"></OpeList>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <!-- 贝式严选 -->
      <el-tab-pane label="贝式严选" name="second" class="manage">
        <el-tabs class="operationMenu" v-model="activeNamethree" @tab-click="handleClick">
          <!-- 乳品 -->
          <el-tab-pane label="乳品" name="dairy" class="dairy">
            <OpeList :data="dairydata" type="rp"></OpeList>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <!-- footer -->
    <!-- <div class="goodslist-footer">
      <div class="gonggao clear">
        <div class="gonggao-l">划线价格</div>
        <div class="gonggao-r">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。</div>
      </div>
      <div class="gonggao clear">
        <div class="gonggao-l">未划线价格</div>
        <div class="gonggao-r">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
      </div>
    </div> -->
  </div>
</template>


<script>
// 引入自营的女神、经典、伴手礼组件
import OpeList from "../components/List-ope-goddess";
export default {
  data() {
    return {
      activeName: "first",     //默认显示
      activeNametwo: "goddess",
      activeNamethree: "dairy"
    };
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  computed: {
    goddessdata() {
      if (this.$store.state.operationData) {
        return this.$store.state.operationData.filter(  //过滤输出符合条件的数据
          ele => ele.Brand == "女神系列"
        );
      }
      return [];
    },
    classicsdata() {
      if (this.$store.state.operationData) {
        return this.$store.state.operationData.filter(
          ele => ele.Brand == "卡思客"
        );
      }
      return [];
    },
    giftdata() {
      if(this.$store.state.operationData){
        return this.$store.state.operationData.filter(
          ele => ele.Brand == "极致蛋糕"
        )
      }
      return [];
    },
    dairydata(){
      if(this.$store.state.operationData){
        return this.$store.state.operationData.filter(
          ele => ele.Brand == "乳品系列"
        )
      }
      return [];
    }
  },
  components: {
    OpeList
  }
};
</script>

<style lang="scss">
.operation {
  width: 50%;
  // float: left;
  font-size: 4.266vw;
  text-align: center;
  // height: 8.533vw;
  // height: 13vw;
  line-height: 12vw;
}
.manage {
  width: 50%;
  float: right;
  font-size: 4.266vw;
  text-align: center;
  height: 8.533vw;
  height: 13vw;
  line-height: 12vw;
}
.el-tabs__nav{
  width: 100%;
}
#goodslist .el-tabs__item {
  padding: 0 !important;
  width: 50%;
  text-align: center;
}
#goodslist .el-tabs__item:hover {
  color: #1db0b8;
  cursor: pointer;
}
#goodslist .el-tabs__content {
  overflow: inherit;
}
.operationMenu {
  width: 200%;
}
#goodslist .operationMenu .el-tabs__item {
  width: 33.3%;
}

// 乳品
#pane-second{
  transform: translateX(-100%);
  // width:100%
}
#pane-second .el-tabs__active-bar{
  transform: translateX(100%) !important;
}
#pane-second .el-tabs__nav-wrap::after{
  content: "";
  background: white;
}
// footer
.goodslist-footer {
  margin: 0 4vw;
  margin-bottom: 4vw;

  padding: 2vw 0;
  padding-bottom: 20vw;
  font-size: 3.734vw;
}
.gonggao-l {
  float: left;
  width: 27vw;
  color: #181818;
}
.gonggao-r {
  float: right;
  width: 65vw;
  color: #a2a2a2;
}
.clear::after {
  content: "";
  height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}
</style>