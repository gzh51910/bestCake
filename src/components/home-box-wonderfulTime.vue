<template>
  <div class="wonderfultime">
    <!-- product-picture -->
    <a href>
      <slot></slot>
    </a>
    <!-- slide-list -->
    <div class="wonderfultime-list clear">
      <!-- @touchmove="aa($event)" @touchstart="bb($event)" ref="oul" :style="{left:disx}" -->
      <ul :style="{width:wid}">
        <li v-for="(item) in data" :key="item.id">
          <img :src="getListUrl(item.Name,item.Brand)" alt />
          <h4>{{item.Name}}</h4>
          <p>
            <span class="current-price">￥{{item.Price}}</span>
            <span class="original-size">/{{item.Size}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
  data() {
    return {
      // startx:0,
      // disx:0
    };
  },
  computed: {
    wid() {
      return 44.8 * this.data.length + 4 + "vw";
    }
  },
  methods: {
    getListUrl(name, brand) {
      if (brand == "卡思客") {
        return `https://res.bestcake.com/m-images/ww/jd/${name}.png?`;
      } else if (brand == "女神系列") {
        return `https://res.bestcake.com/m-images/ww/ns/${name}.jpg?`;
      } else if (brand == "极致蛋糕") {
        return `https://res.bestcake.com/m-images/ww/jz/${name}.png?`;
      } else {
        return `https://res.bestcake.com/m-images/ww/rp/${name}.jpg?`;
      }
    }
    // aa(e){
    //   this.disx=e.changedTouches["0"].pageX-this.startx;
    // },
    // bb(e){
    //   this.startx=e.changedTouches["0"].pageX;

    // }
  }
};
</script>
<style lang="scss" scoped>
.wonderfultime {
  width: 100%; //
  overflow: hidden; //
  border-top: 2.1334vw solid #fafafa;
  box-sizing: border-box;
  position: relative;

  // margin-bottom: 20vw;
}
.box-top-img {
  width: 100%;
}
.wonderfultime {
  background: #fafafa;
}
.wonderfultime-list {
  overflow-x: scroll;
}
.wonderfultime-list ul {
  float: left;
  // overflow-x: scroll;
  padding: 0;
  margin: 0;
  padding-bottom: 6vw;
}
.wonderfultime-list li {
  width: 41.6vw;
  float: left;
  margin-top: 3.2vw; //
  padding: 4vw 0;
  margin-left: 3.2vw;
  border-radius: 2vw;
  box-shadow: 0 2px 6px rgba($color: #000000, $alpha: 0.1);
}
.wonderfultime-list img {
  width: 32vw;
  height: 32vw;
  display: block;
  margin: 0 auto;
}
.wonderfultime-list h4 {
  font-size: 3.7334vw;
  width: 31.5vw;
  margin: 0 auto;
  height: 10.667vw;
  margin-top: 1.334vw;
  overflow: hidden;
  line-height: 5.33vw;
}
.wonderfultime-list p {
  width: 31.5vw;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;//省略号
}
.current-price {
  color: #cc2825;
  font-size: 4.2667vw;
}
.original-size {
  color: #999;
  font-size: 3.7334vw;
}
</style>