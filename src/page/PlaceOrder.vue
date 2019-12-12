<template>
    <div style="background:#eee;width:100%;height:100%">
        <div class="fanhui heard" @click="back">&nbsp;&nbsp;&nbsp;&nbsp;《&nbsp;返回</div>
        <div class="fanhui"></div>
        <div class="peisong">
            <div class="peisong-1 left">配送方式：</div>
            <div class="wuliu right"><img style="height: 2rem;
    margin-top: -0.3rem;" src="http://res.bestcake.com/act/lucky/lucky13.png" alt=""> 物流</div>
            <div class="address left">配送地址：</div>
            <div class="getaddress left">选择配送地址</div>
            <div class="right hh">》</div>
        </div>
        <div class="peisong-time">
            <div class="day">
                <div class="left">配送日期：</div>
                <div class="right">

                    <el-date-picker style="width: 130px;margin-top: 1rem" size="mini" v-model="value1" type="date"
                        placeholder="选择日期">
                    </el-date-picker>

                </div>
            </div>
            <div class="day">
                <div class="left">配送时间：</div>
                <div class="right">
                    <el-time-select style="width: 130px;margin-top: 1rem" size="mini" v-model="value" :picker-options="{start: '08:30',step: '00:15',end: '18:30'}" placeholder="选择时间">
                    </el-time-select>

                </div>
            </div>
            <div class="day">
                <div class="left">配送服务：</div>
                <div class="right">标准配送</div>
            </div>
            <div class="day">
                <div class="left">配送费：</div>
                <div class="right">10￥</div>
            </div>




        </div>
        <div class="shangpin">
            <div class="shop_show">
                <img :src="img" alt="">
            </div>
            <div class="left" style="width:53%"> 
                <div  style="height:3rem;margin-top:0.3rem">商品名字：<strong>{{name}}</strong></div>
                <div  style="height:3rem;margin-top:0.3rem">重量：<strong>{{size}}</strong></div>
                <div  style="height:3rem;margin-top:0.3rem">price：<strong>{{price}}</strong></div>
            </div>
           
            <div style="margin-top:1rem;float:left" class="day">
                <div class="left">蛋糕牌：</div>
                <div class="right">请请添加》</div>
            </div>
            <div class="day">
                <div class="left"></div>
                <div class="right">小计：￥ <strong>{{price*1+10}}</strong></div>
            </div>

        </div>
        <div style="margin-top:1rem;float:left" class="day">
            <div class="left">备注：</div>
            <div class="right">请填写》</div>
        </div>
        <div style="margin-top:1rem;float:left" class="day">
            <div class="left">配送范围</div>
            <div class="right">添加》</div>
        </div>
        <div class="peisong-time" style="height: 4rem;">
        </div>
        <div class="peisong-time" style="height: 4rem;">
        </div>
        <div style="height:5rem"></div>
<div class="payment" style="z-index:30000">
<div class="payment_money">
    <span style="color: rgb(208, 22, 123); font-size: 4.2667vw;">¥{{price*1+10}}</span> 
    <span style="color: rgb(153, 153, 153); font-size: 3.2vw; margin-left: 2vw;">已优惠¥100.00</span>
</div>
    <div class="payment_btn">提交订单</div>
</div>

    
    </div>

</template>
<script>
import Vue from 'vue'
import { DatePicker, TimeSelect } from 'element-ui';
import 'element-ui/lib/theme-chalk/date-picker.css'
import 'element-ui/lib/theme-chalk/time-select.css'
Vue.use(DatePicker)
Vue.use(TimeSelect)
    export default {
        data() {
            return {
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '',
                value2: '',
                value: '',
                name:"",
                img:"",
                size:"",
                price:"",
            };
        },
        methods:{
            back(){
                window.location.href=this.$route.query.backpath;
            }
        },
        created(){
            let data=this.$route.query;
            this.img=data.img;
            this.size=data.size;
            this.name=data.name;
            this.price=data.price;
        }
    };
</script>
<style lang="css" scoped>
.payment {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 13.334vw;
    line-height: 13.334vw;
    background: white;
    border-top: 1px solid #f6f6f6;
}
    .shop_show {
        width: 47%;
        height: 10rem;
        padding-top: 0.5rem;
        padding-left:2rem;
        float: left;
    }
    .shop_show img{
        width: 100%;
        height: 100%;
    }
    .fanhui {
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        background: white;
        color: pink
    }

    .peisong {
        width: 100%;
        height: 13rem;
        margin-top: 1rem;
        background: white
    }

    .peisong-time {
        width: 100%;
        height: 20rem;
        margin-top: 1rem;
        background: white
    }

    .day {
        width: 100%;
        height: 4rem;
        margin-top: 1rem;
        line-height: 4rem;
    }

    .shangpin {
        width: 100%;
        height: 20rem;
        margin-top: 1rem;
        background: white;
        margin-top: 0.5rem;
        padding-top: 0.5rem;
    }

    .peisong-1 {
        width: 30%;
        line-height: 3rem;
        height: 3rem;
    }
    .fl{
        float: left;
        box-sizing: border-box;
    }
    .left {
        float: left;
        padding-left: 2rem;
        box-sizing: border-box;
    }

    .right {
        float: right;
        margin-right: 2rem;
        color: #666
    }

    .wuliu {
        line-height: 3rem;
    }
    .wuliu img{
        vertical-align: middle;
    }

    .address {
        width: 100%;
        height: 3rem;
        margin-top: 1rem;
    }

    .getaddress {
        width: 70%;
        height: 4rem;
        margin-top: 1rem;
        color: #666
    }

    .hh {
        margin-top: 1rem;
    }

    .heard {
        position: fixed;
        top: 0;
        left: 0;
    }
    .payment {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 13.334vw;
    line-height: 13.334vw;
    background: white;
    border-top: 1px solid #f6f6f6;
}
.payment_money {
    float: left;
    width: 65vw;
    height: 13.334vw;
    padding-left: 4vw;
}
.payment_btn {
    float: right;
    width: 35vw;
    height: 13.334vw;
    background: #0A3A6F;
    color: #fff;
    text-align: center;
    font-size: 4.7vw;
}
*, :after, :before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.payment {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 13.334vw;
    line-height: 13.334vw;
    background: white;
    border-top: 1px solid #f6f6f6;
}
</style>