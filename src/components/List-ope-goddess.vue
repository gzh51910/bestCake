<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.ID">
        <!-- <img src="https://res.bestcake.com/m-images/ww/ns/许愿天使3.2(月饼兑换款).jpg?v=10" class="am-img-responsive"> -->
        <div class="listImg"><img :src="geturl(item.Name)" alt /></div>
        <div class="details">
          <p class="title">{{item.Name}}</p>
          <p class="des">{{item.Means}}</p>
          <p class="price">
            <span class="priceNew">￥{{item.CurrentPrice}}.00</span>
            <span class="weight">/{{item.LabelText}}</span>
            <img class="shopcart" src="../assets/imgs/list-cart.png" alt />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
    props:["data","type"],
    data() {
        return {
        // data: []
        };
    },
    methods: {
        geturl(name) {
            console.log(this.type);
            
            return `https://res.bestcake.com/m-images/ww/${this.type}/${name}.png?v=10`;
        }
    },
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
ul{
    list-style-type: none;
}
ul::after{
    content:"";
    height: 0;
    display: block;
    clear:both;
    visibility: hidden;
}
li {
  width: 48vw;
  float: left;
  position: relative;
  margin-bottom: 5.334vw;
  font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;

}
li:nth-child(2n + 1) {
  margin-right: 4vw;
}
.listImg{
    width: 44vw;
    height: 44vw;
}
.listImg img{
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
.priceNew{
    color: rgb(255,50,0);
    font-size: 3.2vw;
    padding-left: 2vw;
}

.price span{
    float:left;
    display: inline-block;
    height: 100%;
}
.price .weight{
    color: rgb(188, 188, 188);
    font-size: 2vw;
}
.shopcart {
    height: 100%;
    position: absolute;
    right: 2vw;
    // float: right;
}
</style>