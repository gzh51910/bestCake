<template>
    <div class="order">
        <div class="order-btn">
            <router-link to="/mine">
            <div class="back"></div>
            </router-link>
        </div>
        <div class="title">
            <ul>
                <li>全部</li>
                <li>已处理</li>
                <li>已完成</li>
            </ul>
        </div>
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
.order {
    .order-btn {
        height: 9vw;
        background: #f7f7f7;
        .back {
            width: 3vw;
            height: 5vw;
            background-image: url(https://res.bestcake.com/act/exchange/jiantou.png);
            background-repeat: no-repeat;
            background-position: center;
            position: absolute;
            left: 4vw;
            top: 2vw;
            background-size: 100% 100%;
        }
    }
    .title {
        padding-top: 4vw;
        padding-bottom: 2.8vw;
        ul {
            display: flex;
            li {
                margin-left: 4vw;
                color: #ccc;
                font-size: 3.733vw;
            }
        }
    }
}
</style>
