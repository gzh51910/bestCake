<template>
    <div>
     
    <el-carousel trigger="click" height="300px">
         <el-carousel-item v-for="item in 4" :key="item">
         
              <img
              style="width:100%;height:100%"
               src='https://res.bestcake.com/m-images/jd-detail/踏雪寻莓/踏雪寻莓-1.jpg?v=20170607' alt="" srcset="">
         </el-carousel-item>
    </el-carousel>
            <!--蛋糕图片和名称-->

            <div class="name1-11">
                    <div
                    @click="fanhui()"
                     style="position: absolute;top: 10vw;z-index: 10;right: -0.3vw;border: 0.3vw solid #666;padding: 2vw;">返回商品</div>
                <div class="m_cake_title am-u-sm-7 clplr am-u-sm-centered">
                    <div class="information-yw  ng-binding" style="display: none;">Blueberry Mousse</div>
                    <div class="information-zw ng-binding">{{this.data7.data.Tag.infos.Name}}</div>
                    <div class="promotion-activity">
                        <div class="promotion-activity-1">
                            <!--<div class="promotion-a" ng-show="proInfo.ListStyleObj.label">{{proInfo.ListStyleObj.label=='hot'?'热':proInfo.ListStyleObj.label=='new'?'新':proInfo.ListStyleObj.label=='cloud'?'极速云配送':'经'}}</div>-->
                            <div class="promotion-a ng-hide" ng-show="proInfo.ListStyleObj.label=='new'">新</div>
                            <!-- <div class="promotion-a" ng-show="yx.iszk">折</div>
                            <div class="promotion-a ng-hide" ng-show="yx.isms">秒</div>
                            <div class="promotion-a ng-hide" ng-show="yx.ismj">减</div> -->
                            <div id="mar" ng-show="yx.ismj" style="position: absolute; font-size: 3.467vw; color: #000; text-align: center; height: 25px; line-height: 25px; left: 0; bottom: -7vw;" class="ng-hide"></div>
                            <!--<div class="promotion-a">新</div>
                        <div class="promotion-a">新</div>-->
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
                            style="vertical-align: top; width: 22.4vw; margin-top: 0.6vw;"
                             :src='geturl()'
                                  
                             >
                        </div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-b">
                        <div class="cake-info-left qfc">口味</div>
                        <div class="cake-info-right hfc ng-binding">{{this.data7.data.Tag.infos.CategoryName}}</div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-c">
                        <div class="cake-info-left qfc">原材料</div>
                        <div class="cake-info-right hfc ng-binding">{{this.data7.data.Tag.infos.Resourse}}</div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-d">
                        <div class="cake-info-left qfc">适合人群</div>
                        <div class="cake-info-right hfc ng-binding">所有人群</div>
                    </div>
                    <div class="am-u-sm-12 clplr cake-info-datum-list cake-info-datum-e">
                        <div class="cake-info-left qfc">保鲜条件</div>
                        <div class="cake-info-right hfc ng-binding">{{this.data7.data.Tag.infos.KeepFresh}}</div>
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
                <div class="am-u-sm-6 clplr evaluate-b" align="right">
                    <div class="right">
                        <img 
                        src="https://res.bestcake.com/m-images/ww/detail/evaluate-b.png" 
                        class="am-img-responsive"
                        style="height: 4vw;width: 4vw;margin-top: 1.3vw;"
                        >
                    </div>
                    <div class="left qfc ng-binding">(4条)</div>
                    </div>
            </div>
            <div style="width:100%;height:1vw;clear:both"></div>

            <!-- 商品磅数 -->
            <div class="bang-t" style="clear:both;height:56vw:margin-top:3vw">
                <div class="tabbang">
                    <div class="tab-bang-x">1</div>
                    <div class="tab-bang-x">2</div>
                    <div class="tab-bang-x">3</div>
                    <div class="tab-bang-x">4</div>
                </div>
                 <!-- 商品类型 -->
                <div class="tabxinxi">
                    <div class="tab-x-n">
                        <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png" class="am-img-responsive"
                             src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png">
                        </div>
                        <div class="tab-x-n-right">13.5*13.5cm</div>
                        
                        </div>
                             <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png" class="am-img-responsive"
                             src="https://res.bestcake.com/m-images/ww/detail/icon-custom-2.png">
                        </div>
                        <div class="tab-x-n-right">13.5*13.5cm</div>
                        </div> <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png" class="am-img-responsive"
                             src="https://res.bestcake.com/m-images/ww/detail/icon-custom-3.png">
                        </div>
                        <div class="tab-x-n-right">13.5*13.5cm</div>
                        </div> <div class="tab-x-v">
                        <div class="tab-x-n-left">
                            <img ng-src="https://res.bestcake.com/m-images/ww/detail/icon-custom-1.png" class="am-img-responsive"
                             src="https://res.bestcake.com/m-images/ww/detail/icon-custom-4.png">
                        </div>
                        <div class="tab-x-n-right">13.5*13.5cm</div>
                        </div>

                        
                    </div>

                </div>
                     <!-- 商品购买数量 -->
                     <div class="shopnum" style="">
                         <div  style="font-size:4vw;line-height:5vw;margin-left:3vw;float:left">购买数量</div>

                                  <el-input-number style="float:right;margin-right:3vw" size="mini" v-model="num4"></el-input-number>
                  
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

            <div class="am-u-sm-12 clplr bgw mt4" style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 99; height: 14.6666vw;">
                <div class="purchase-c">
                <div class="purchase-c-1 ng-binding">798.00</div>
                <div class="purchase-c-2">
                    <div class="purchase-c-2-left">已优惠：</div>
                    <div class="purchase-c-2-right ng-binding">0.00</div>
                </div>
               </div>
                <div class="purchase-a" ng-click="buyItNow(true)">
                 <div class="purchase-1">立即购买</div>
               </div>
               <div class="purchase-b" ng-click="addcart(false)" style="color: rgb(0, 0, 0);">
                <div class="purchase-2" @click="gouwu()">加入购物车</div>
               </div>
           </div>

            <!-- 内容支撑 -->
            <div style="width:100%;
            height:20vw;"></div>

        </div>
</template>
<script>

    export default {
        data(){
            return {
                data:{},
                data7:{},
                data1:{},
                num4:1
            }
        },
        methods:{
            geturl(){
                return `https://res.bestcake.com/m-images/ww/jz/tiandu_${this.data7.data.Tag.infos.CakeType[0].Sweet}.png`
            },fanhui(){
                console.log(11111);  ///连接地址
                
            },gouwu(){
                console.log("+++++++");   //购物车地址
                
            }
        },
        async mounted() {
            
     
        this.data=await this.getdata("?c=NsCakeCenter&m=GetClientSizeConfig&v=1573631182931")
        this.data1=await this.getdata("?c=Item&cakeName=%E8%B8%8F%E9%9B%AA%E5%AF%BB%E8%8E%93&m=GetSellCount&v=1573631182935")
        this.data2=await this.getdata("?City=%E6%9D%AD%E5%B7%9E&ProName=%E8%B8%8F%E9%9B%AA%E5%AF%BB%E8%8E%93&c=Product&m=GetCakeByName&v=1573631182934")
        this.data3=await this.getdata("?City=%E6%9D%AD%E5%B7%9E&c=ListCenter&m=GetCakeInfo&v=1573631182937")
        this.data4=await this.getdata("?c=CityCenter&m=GetCitys&v=1573631182938")
        this.data5=await this.getdata("?c=CakeAssess&m=GetSumAndAvgAccessInfo&pid=1295&v=1573631184621")
        this.data6=await this.getdata("?c=ItemCenter&m=GetProductAction&v=1573631185408")
        this.data7 = await this.getdata("?City=%E6%9D%AD%E5%B7%9E&ProName=%E8%B8%8F%E9%9B%AA%E5%AF%BB%E8%8E%93&c=Product&m=GetCakeByName&v=1573631749231")
//    /* 口味 */  console.log(this.data7.data.Tag.infos.CategoryName);
        
//     /* 原材料 */    console.log(this.data7.data.Tag.infos.Resourse);
//      /* 保鲜条件KeepFresh */console.log(this.data7.data.Tag.infos.KeepFresh);

        

        console.log(this.data1.data);   //3186
        console.log(this.data6.data);
         console.log(this.data5.data);
     
        
        

          
        },
    }
</script>

<style lang="scss" scoped>
     @import '../css/goods.css';
     .el-menu-demo{
         display: none;
     }
</style>