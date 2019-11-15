<template>
    <div>
        <div class="inf-title">
            <router-link to="/mine">
                <div class="back"></div>
            </router-link>
        </div>
        <div class="inf-foot">
            <router-link to="/address">
            <div class="btn">
                新增地址
            </div>
             </router-link>
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
<style lang="scss" scoped>
.inf-title {
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
.inf-foot {
    padding: 1vw 0 2vw 0;
    position: fixed;
    width: 100%;
    bottom: 15vw;
    background: #fff;
    .btn {
        line-height: 11.73vw;
        width: 92vw;
        height: 11.73vw;
        background: #01d5d8;
        color: #fff;
        text-align: center;
        font-weight: bolder;
        margin: 0 auto;
        border-radius: 3px;
    }
}
</style>