<template>
    <div style="z-index:30000;position: absolute;">
        <div>
        </div>
        <el-carousel trigger="click" height="300px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img style="width:100%;height:100%" :src="lunbo(item,nstext.Brand)" alt="" srcset="">
            </el-carousel-item>
        </el-carousel>
        <!--蛋糕图片和名称-->
        <div class="name1-11">
            <div class="papa" @click="fanhui()"
                style="    top: 10vw;
    z-index: 10; right: -0.3vw; border: 0.4vw solid rgb(0, 0, 0);padding: 2vw; border-radius: 5%;position: fixed;background: #333;opacity: 0.2;color: whitesmoke;">
                <i>返回商品</i>
            </div>
            <div class="m_cake_title am-u-sm-7 clplr am-u-sm-centered">
                <div class="information-yw  ng-binding" style="display: none;">Blueberry Mousse</div>
                <div class="information-zw ng-binding">{{this.nstext.Name}}</div>
                <div class="promotion-activity">
                    <div class="promotion-activity-1">
                        <div class="promotion-a ng-hide" ng-show="proInfo.ListStyleObj.label=='new'">新</div>
                        <div id="mar" ng-show="yx.ismj"
                            style="position: absolute; font-size: 3.467vw; color: #000; text-align: center; height: 25px; line-height: 25px; left: 0; bottom: -7vw;"
                            class="ng-hide"></div>
                    </div>
                </div>
            </div>
        </div>
        <div style="line-height: 190%;" class="am-u-sm-12 clplr bgw mt4">
            <div class="cake-info-datum">
                <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-a">
                    <div class="cake-info-left qfc">甜度</div>
                    <div class="cake-info-right hfc">
                        <img alt="" ng-src="https://res.bestcake.com/m-images/ww/jz/tiandu_3.png"
                            style="vertical-align: top; width: 22.4vw; margin-top: 0.6vw;" :src='geturl()'>
                    </div>
                </div>
                <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-b">
                    <div class="cake-info-left qfc">口味</div>
                    <div class="cake-info-right hfc ng-binding">{{this.nstext.CategoryName}}</div>
                </div>
                <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-c">
                    <div class="cake-info-left qfc">原材料 </div>
                    <div class="cake-info-right hfc ng-binding">{{this.nstext.Resource}}</div>
                </div>
                <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-d">
                    <div class="cake-info-left qfc">适合人群</div>
                    <div class="cake-info-right hfc ng-binding">所有人群</div>
                </div>
                <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-e">
                    <div class="cake-info-left qfc">保鲜条件</div>
                    <div class="cake-info-right hfc ng-binding">
                        {{!this.nstext.KeepFresh?"最适宜0℃~8℃冷藏保存，离开冷藏请勿超过2小时": this.nstext.KeepFresh}}</div>
                </div>
            </div>
        </div>
        <!-- 商品评价 -->
        <div class="am-u-sm-12 clplr bgw mt4 p4" ng-click="gopj()">
            <div class="am-u-sm-6 clplr evaluate-a" align="left">
                <div class="left">
                    <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-a.png" class="am-img-responsive">
                </div>
                <div class="right">商品评价</div>
            </div>
            <div class="am-u-sm-6 clplr evaluate-b" @click="comment_one(mmm)" align="right">
                <div class="right">
                    <img src="https://res.bestcake.com/m-images/ww/detail/evaluate-b.png" class="am-img-responsive"
                        style="height: 4vw;width: 4vw;margin-top: 1.3vw;">
                </div>
                <div class="left qfc ng-binding">（{{mmm}}）条</div>
            </div>
        </div>
        <div style="width:100%;height:1vw;clear:both"></div>
        <!-- 商品磅数 -->
        <div class="bang-t" style="clear:both;height:56vw:margin-top:3vw">
            <div class="tabbang" v-for="(item,idx) in this.zhong" :key="item.Sweet" :class="active==idx?'active':''">
                <div class="tab-bang-x" @click="hha(item.CurrentPrice,idx)">{{item.Size}}</div>
            </div>
            <!-- 商品类型 -->
            <div class="tabxinxi">
                <div class="tab-x-n" style="font-size:3vw">
                    <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png"
                                class="am-img-responsive"
                                src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png">
                        </div>
                        <div class="tab-x-n-right">直径15cm</div>
                    </div>
                    <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png"
                                class="am-img-responsive"
                                src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
                        </div>
                        <div class="tab-x-n-right">多人食用</div>
                    </div>
                    <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png"
                                class="am-img-responsive"
                                src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
                        </div>
                        <div class="tab-x-n-right">含餐具</div>
                    </div>
                    <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png"
                                class="am-img-responsive"
                                src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
                        </div>
                        <div class="tab-x-n-right">至少提前一天预定</div>
                    </div>
                </div>
            </div>
            <!-- 商品购买数量 -->
            <div class="shopnum" style="">
                <div style="font-size:4vw;line-height:5vw;margin-left:3vw;float:left">购买数量</div>
                <el-input-number id="numberone" style="float:right;margin-right:3vw" size="mini" v-model="num4"
                    @change="changeqty($event)"></el-input-number>
            </div>
        </div>
        <div style="width:100%;height:0.3vw;clear:both"></div>
        <div class="am-u-sm-12 clplr  mt4 p4 jg-gonggao">
            <div class="jg-gonggao1">
                <div class="jg-text-z">划线价格</div>
                <div class="jg-text-y">商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参考。 </div>
            </div>
            <div class="jg-gonggao1">
                <div class="jg-text-z">未划线价格</div>
                <div class="jg-text-y">商品的实时标价，不因表述的差异改变性质。具体成交价格根据商品参加活动，或会员使用优惠券、积分等发生变化，最终以订单结算页价格为准。</div>
            </div>
        </div>
        <!-- 购物车 -->
        <div class="am-u-sm-12 clplr bgw mt4"
            style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 99; height: 14.6666vw;">
            <div class="purchase-c">
                <div class="purchase-c-1 ng-binding price" style="height: 2rem;">{{this.price*num4}}.00</div>
                <div class="purchase-c-2">
                    <div class="purchase-c-2-left">已优惠：</div>
                    <div class="purchase-c-2-right ng-binding">0.00</div>
                </div>
            </div>
            <div class="purchase-a" ng-click="buyItNow(true)">
                <div class="purchase-1" @click="tobuy()">立即购买</div>
            </div>
            <div class="purchase-b" ng-click="addcart(false)" style="color: rgb(0, 0, 0);">
                <div class="purchase-2" @click="gouwu({id,p,a,num4,nstext,price,mmm,active,zhong,name})">加入购物车</div>
            </div>
        </div>
        <!-- 内容支撑 -->
        <div style="width:100%;
            height:20vw;"></div>
    </div>
</template>
<script>
    import axios from "axios"
    import Vue from "vue"
    Vue.use(axios)
    export default {
        data() {
            return {
                p: {},
                num4: 0,
                a: {},
                id: "",
                nstext: {},
                price: "",
                mmm: 0,
                active: -1,
                zhong:{},
                name:{},
                arr:[]

            }
        },
        methods: {
            geturl() {
                return `https://res.bestcake.com/m-images/ww/jz/tiandu_${this.nstext.Sweet}.png`
            },
            fanhui() {
                this.$router.push({
                    path: 'goodsList'
                })
            },
            async gouwu(msg) {
                if(this.active>=0){
                    let item={
                        img:this.lunbo(1, msg.nstext.Brand),
                        Brand:msg.nstext.Brand,
                        CategoryName:msg.nstext.CategoryName,
                        Name:msg.nstext.Name,
                        Sweet:msg.nstext.Sweet,
                        size:msg.zhong[this.active].Size,
                        num:this.num4,
                        ID:msg.zhong[this.active].Id,
                        CurrentPrice:this.price
                    };

                    if (localStorage.getItem("ShoppingCart")){
                        this.arr = JSON.parse(localStorage.getItem("ShoppingCart"));
                    } else {
                        this.arr = [];
                    }
                    
                    let newdata = JSON.parse(JSON.stringify(item)); //深拷贝（给arr添加属性num）
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
                    this.$router.push({
                        path: 'shopcar',
                        query: {
                            id
                        }
                    })
                    let username = localStorage.getItem("username");
                    let token = localStorage.getItem("Authrization");
                    if (username && token) {
                        let result = await this.getdata("/checktoken", {
                            params: { username, token }
                        });
                        if (result.data.status == 1) {
                            let msg = localStorage.getItem("ShoppingCart");
                            await this.postdata("http://120.24.166.74:3001/setshopcart", { msg, username });
                        }
                    }
                }
            },
            lunbo(idp, ppp) {
                if (ppp == "女神系列") {
                    return `https://res.bestcake.com/m-images/ns-detail/${this.nstext.Name}/${this.nstext.Name}-${idp}.jpg?v=20170525?v=1`
                } else if (ppp == "卡思客") {
                    return `https://res.bestcake.com/m-images/jd-detail/${this.nstext.Name}/${this.nstext.Name}-${idp}.jpg?v=20170525?v=1`
                } else if (ppp == "极致蛋糕") {
                    return `https://res.bestcake.com/m-images/jz-detail/${this.nstext.Name}/${this.nstext.Name}-${idp}.jpg?v=20170525?v=1`
                } else if (ppp == "乳品系列") {
                    return `https://res.bestcake.com/m-images/rp-detail/${this.nstext.Name}/${this.nstext.Name}-${idp}.jpg?v=20170525?v=1`
                }
            },
            hha(a, idx) {
                this.active = idx
                this.price = a
            },
            changeqty($event) {
                this.num4 = $event
                if ($event <= 0) {
                    this.num4 = 0
                    alert("不能再少了")
                }
            },
            comment_one(mmm) {
      
                this.$router.push({
                    name: 'comment',
                    query: mmm
                })
            },
            tobuy(){
                this.$router.push({path:"/PlaceOrder",query:{
                    img:this.lunbo(1,this.nstext.Brand),
                    name:this.nstext.Name,
                    size:this.nstext.Size,
                    price:this.nstext.CurrentPrice
                }})
            }
        },
        async mounted() {
            
            if (this.$route.query.brand == "女神系列") {
                this.data8 = await this.getdata(`http://120.24.166.74:3004/?Name=${this.$route.query.id}&c=NsCakeCenter&m=GetNSCakeByName`)
                this.nstext = this.data8.data.Tag[0]
                this.nstext.Resource = this.data8.data.Tag[0].Resource
                this.nstext.Sweet = this.data8.data.Tag[0].Sweet
                this.nstext.KeepFresh = this.data8.data.Tag[0].KeepFresh
                this.zhong = [{Size: this.data8.data.Tag[0].Size,CurrentPrice: this.data8.data.Tag[0].CurrentPrice}];
                this.price = this.data8.data.Tag[0].CurrentPrice
            } else if (this.$route.query.brand == "卡思客") {
                this.data8 = await this.getdata(
                    `http://120.24.166.74:3004/?City=杭州&ProName=${this.$route.query.id}&c=Product&m=GetCakeByName&v=1573724141778`)
                this.zhong = this.data8.data.Tag.infos.CakeType
                this.nstext = this.data8.data.Tag.infos
                this.nstext.Resource = this.data8.data.Tag.infos.Resourse
                this.nstext.Sweet = this.data8.data.Tag.infos.CakeType[0].Sweet
                this.nstext.KeepFresh = this.nstext.KeepFresh
            } else if (this.$route.query.brand == "极致蛋糕") {
                this.data8 = await this.getdata(
                    `http://120.24.166.74:3004/?City=%E6%9D%AD%E5%B7%9E&ProName=${this.$route.query.id}&c=IndexCenter&m=GetjzCakeInfo&v=1573724235797`
                    )
                this.nstext = this.data8.data.Tag[0]
                this.zhong = this.data8.data.Tag[0].CakeType
                this.nstext.Resource = this.data8.data.Tag[0].Resourse
                this.nstext.Sweet = this.nstext.CurrentPro.Sweet
            } else if (this.$route.query.brand == "乳品系列") {
                this.data8 = await this.getdata(

                    `http://120.24.166.74:3004/?Name=${this.$route.query.id}(125mlx4)&c=NsCakeCenter&m=GetRuPCakeByName&v=1573724319821`)

                    // ?Name=麦趣尔一号牧场纯牛奶(250ml×12)&c=NsCakeCenter&m=GetRuPCakeByName&v=1573867403309
                    //`?Name=${this.$route.query.id}&c=NsCakeCenter&m=GetRuPCakeByName&v=1573724319821`)
                // console.log(this.data8, this.$route.query.id, this.$route.query.brand);

                this.nstext = this.data8.data.Tag[0]
                this.zhong1 = [this.data8.data.Tag[0],this.data8.data.Tag[10]==undefined?0:this.data8.data.Tag[10],this.data8.data.Tag[18]==undefined?0:this.data8.data.Tag[18]]
            var ph = []
                for (let index = 0; index < this.zhong1.length; index++) {
           var p = {}
                   if(this.zhong1[index] !=0){
                       p = this.zhong1[index]
                  ph.push(p)
                   }
                
                }
               
                    this.zhong = ph
               
 }
        },
        created() {
            axios.get("http://120.24.166.74:3001/getdetail").then((ppa) => {
                this.p = ppa.data;
                this.id = this.$route.query.id
                for (let index = 0; index < ppa.data[1].length; index++) {
                    if (ppa.data[1][index]._id == this.id) {
                        this.a = ppa.data[index]
                    }
                }
            })
            axios.get("http://120.24.166.74:3001/getcomment").then((dda) => {function number(max, min) {
                dda
                    return parseInt(Math.random() * (max - min + 1) + min, 10);
                }
                this.mmm = number(50, 1)
            })
        }
    }
</script>
<style lang="scss" scoped>
    @import '../css/goods.css';
    .el-menu.el-menu--horizontal {
        display: none;
    }
    .active {
        background: pink;
    }
 
</style>