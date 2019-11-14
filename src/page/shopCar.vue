<template>
  <div>
    <!-- shoppingCart -->

    <!-- hotList -->
    <div class="hotList-box">
      <div class="hotList-title">
        <h2>Hot Recommend</h2>
        <span class="title-line"></span>
        <p>热销新品推荐</p>
      </div>
      <div class="hotList">
        <ul>
          <li>
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
              <img class="shopIcon" src="../assets/imgs/cart_firm_gwc.jpg" alt />
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
              <img class="shopIcon" src="../assets/imgs/cart_firm_gwc.jpg" alt />
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
          </li>
        </ul>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.hotList-box{
    width: 100%;
    padding-top: 17.2vw;
}
.hotList {
  width: 100%;
  margin: 0 1.8vw;
  background: #f7f7f7;
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
</style>