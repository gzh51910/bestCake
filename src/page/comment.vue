<template>
    <div>

        <div class="idea-main1 ng-scope" style="z-index:200000000" ng-repeat="cakeCmt in cakeCmtList"
            on-finish-render-filters="" v-for="item in this.data1" :key="item._id">
            <div class="idea-main-2">
                <div><img ng-src="/images/icon_user.jpg" src="../assets/imgs/ORI2TA)OPZ_4RIWJ_1{KLSO.png"></div>
            </div>
            <div class="idea-main-3">
                <div class="idea-main-4 ng-binding">{{item.name}}</div>
                <div class="cmt" style="font-size:3vw">{{item.cmt}}</div>
                <div class="idea-main-5">
                    <a ng-repeat="isc in cakeCmt.isscore" class="ng-scope"><img
                            src="https://res.bestcake.com\m-images\order\mw-reviews_3.png?v=1"></a>
                    <!-- end ngRepeat: isc in cakeCmt.isscore --><a ng-repeat="isc in cakeCmt.isscore"
                        class="ng-scope"><img src="https://res.bestcake.com\m-images\order\mw-reviews_3.png?v=1"></a>
                    <!-- end ngRepeat: isc in cakeCmt.isscore --><a ng-repeat="isc in cakeCmt.isscore"
                        class="ng-scope"><img src="https://res.bestcake.com\m-images\order\mw-reviews_3.png?v=1"></a>
                    <!-- end ngRepeat: isc in cakeCmt.isscore --><a ng-repeat="isc in cakeCmt.isscore"
                        class="ng-scope"><img src="https://res.bestcake.com\m-images\order\mw-reviews_3.png?v=1"></a>
                    <!-- end ngRepeat: isc in cakeCmt.isscore --><a ng-repeat="isc in cakeCmt.isscore"
                        class="ng-scope"><img src="https://res.bestcake.com\m-images\order\mw-reviews_3.png?v=1"></a>
                    <!-- end ngRepeat: isc in cakeCmt.isscore -->
                </div>
            </div>
            <div class="idea-main-6 ng-binding">{{gettime(item.CmtTime)}}</div>
            <div style="clear:both;"></div>
        </div>

    </div>
</template>



<script>
    import axios from "axios"
    import Vue from "vue"
    Vue.use(axios)
    export default {
        data() {
            return {
                id: "",
                data1: [],
                time: ""




            }
        },
        methods: {
            gettime(a) {
                var timestamp = a.slice(6, -2)

                function timestampToTime(timestamp) {
                    var date = new Date(timestamp * 1); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    var D = date.getDate() + ' ';
                    // var h = date.getHours() + ':';
                    // var m = date.getMinutes() + ':';
                    // var s = date.getSeconds();
                    return Y + M + D;
                }

                let timer = timestampToTime(timestamp)

                return timer
            }


        },
        mounted() {

        },
        created() {
            this.id = this.$route.query;

            console.log(this.id);


            axios.get("http://120.24.166.74:3001/getcomment").then((dda) => {

                this.data1 = dda.data
                console.log("dda:", dda.data[0].CmtTime);
                this.time = dda.data[0].CmtTime.slice(6, -2)
                console.log((this.time * 1));


            })
        },



    }
</script>













<style lang="scss" scoped>
    .idea-main1 {
        margin-left: 4vw;
        padding-right: 4vw;
        border-bottom: 0.26vw solid #ddd;
        padding-top: 4vw;
        padding-bottom: 4vw;
    }

    .idea-main-2 {
        float: left;
        margin-right: 4vw;
    }

    .idea-main-2 div img {
        width: 9.373vw;
    }

    .idea-main-3 {
        float: left;
        width: 70%;
    }

    .idea-main-6 {
        float: right;
        position: absolute;
        right: 10vw;
        font-size: 3.2vw;
        color: #a9a9a9;
        line-height: 4.4vw;
        margin-top: 0.96618vw;
    }

    .idea-main-4 {
        line-height: 5.6vw;
        color: #333;
        font-size: 4vw;
        margin-bottom: 4vw;
    }

    .idea-main-5 a {
        margin-right: 3vw;
    }

    a {
        color: #0e90d2;
    }

    a,
    ins {
        text-decoration: none;
    }

    a {
        background-color: transparent;
    }

    .idea-main-5 a img {
        width: 5.333vw;
    }

    img {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        vertical-align: middle;
        border: 0;
    }
</style>