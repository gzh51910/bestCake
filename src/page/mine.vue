<template>
    <html>
    <div class="mine-body">
        <div class="mine-top">
            <div class="mine-img" align="center">
                <img src="https://res.bestcake.com/m-images/order/mw-person-tx.png" alt="">
            </div>
            <div class="mine-username">1898897994</div>
        </div>
        <div class="mine-list">
            <ul>
                <li>
                    <p>余额</p>
                    <span>350000.00</span>
                </li>
                <li>
                    <p>吉致币</p>
                    <span>100000</span>
                </li>
                <li>
                    <p>优惠卷</p>
                    <span>5000</span>
                </li>
                <li>
                    <p>兑换券</p>
                    <span>10000</span>
                </li>
            </ul>
        </div>
        <div class="mine-main">
            <router-link to="/Myorder" tag="li">
                <div class="top">
                    <div class="top-left">
                        <img src="https://res.bestcake.com\m-images\order\mw-person-dd.png" alt="">
                        <p>我的订单</p>
                    </div>

                    <div class="top-right">
                        <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg" alt="">
                    </div>
                </div>
            </router-link>
            <router-link to="/inf" tag="li">
            <div class="foot">
                <div class="foot-left">
                    <img src="https://res.bestcake.com\m-images\order\mw_firm_ad.jpg" alt="">
                    <p>收货地址</p>
                </div>
                <div class="foot-right">
                    <img src="https://res.bestcake.com\m-images\order\mw_firm_right.jpg" alt="">
                    
                </div>
            </div>
            </router-link>
        </div>
        <div class="phone">客服热线：400-627-5757</div>
        <div class="end">服务协议与证照信息</div>
    </div>

    </html>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        
    }
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}



html {
    background: pink;
    height: 100%;
    .mine-body {
        width: 100%;
        background: rgb(247, 247, 247);
        .mine-top {
            width: 100%;
            padding-top: 6.66vw;
            background: #fff;
            .mine-img img {
                width: 21.06vw;
                border-radius: 50%;
                vertical-align: middle;
                border: 0;
            }
            .mine-username {
                text-align: center;
                padding-top: 1.33vw;
                line-height: 5.33vw;
                font-size: 3.73vw;
                color: #333;
            }
        }
        .mine-list {
            padding-top: 8.66vw;
            background: #fff;
            padding-bottom: 4vw;
            ul {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                p {
                    line-height: 4vw;
                    font-size: 2.93vw;
                    color: #ccc;
                    text-align: center;
                }
                span {
                    padding-top: 1.73vw;
                    line-height: 5.73vw;
                    font-size: 4.8vw;
                    color: #333;
                }
            }
        }
        .mine-main {
            margin-top: 4vw;
            background: #fff;
            width: 100%;
            overflow: hidden;
            align-items: center;
            .top {
                width: 100%;
                display: flex;
                height: 100%;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #ccc;
                .top-right {
                    color: #ccc;
                    img {
                        width: 2.4vw;
                        margin-right: 4vw;
                    }
                }
                .top-left {
                    display: flex;
                    img {
                        width: 4vw;
                        padding-left: 4vw;
                        padding-top: 3.38vw;
                        padding-bottom: 4vw;
                        display: inline-block;
                    }
                    p {
                        margin-top: 3.3vw;
                        margin-left: 2.66vw;
                    }
                }
            }
            .foot {
                width: 100%;
                display: flex;
                height: 100%;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #ccc;
                .foot-right {
                    color: #ccc;
                    img {
                        width: 2.4vw;
                        margin-right: 4vw;
                    }
                }
                .foot-left {
                    display: flex;
                    img {
                        width: 4vw;
                        padding-left: 4vw;
                        padding-top: 3.38vw;
                        padding-bottom: 4vw;
                        display: inline-block;
                    }
                    p {
                        margin-top: 3.3vw;
                        margin-left: 2.66vw;
                    }
                }
            }
        }
        .phone {
            margin-top: 35.73vw;
            line-height: 4vw;
            color: #999;
            font-size: 2.93vw;
            text-align: center;
        }
        .end {
            margin-top: 10vw;
            line-height: 4vw;
            color: #999;
            font-size: 2.93vw;
            text-align: center;
            padding-bottom: 25vw;
        }
    }
}
</style>
