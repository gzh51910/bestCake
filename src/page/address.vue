<template>
    <div class="address-title">
        <router-link to="/mine">
            <div class="back"></div>
        </router-link>
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
.address-title {
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
</style>