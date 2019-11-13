<template>
    <div @click="goodsparticulars(id=21212)">
        home
    </div>
</template>
<script>
    export default {
        data(){
            return {
               
                
            }
        },
        methods:{
           
            goodsparticulars(id){
                 this.$router.push({path:'/goods',query:{id},params:{id}})
            }
            

        }
    }
</script>
<style lang="scss">
    
</style>