<template>
    <div>
        <div class="address-title">
            <router-link to="/mine">
                <div class="back"></div>
            </router-link>
        </div>
        <div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="用户姓名" width="100">
                </el-table-column>
                <el-table-column prop="name" label="联系电话" width="90">
                </el-table-column>
                <el-table-column prop="address" label="家庭地址">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: "老谢",
                    name: "87563222",
                    address: "上海市普陀区金沙江路 1518 弄"
                }
            ]
        };
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