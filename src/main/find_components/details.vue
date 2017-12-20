<template>
<div class="box">
    <img :src="contont.cover" alt="">
    <div class="content">
    <h3>{{contont.title}}</h3>
    <h5>文章</h5>
    <div v-html="contont.content">
    </div>
    </div>
</div>
</template>

<script>
export default {
    name:'details',
    data () {
        return {
            contont: ''
        }
    },
    created(){
        let that = this;
        this.$store.dispatch('MD/details',{
            id:this.$route.params.id
        }).then((res) =>{
            that.contont = res[1].data
            console.log(res);
        })
    }
}
</script>

<style lang='less'>
.box{
    overflow-y: auto;
}
.content{
    box-sizing: border-box;
    padding:0 20px;
    h5{
    margin-top:10px;
    margin-bottom: 40px;
    color:#ccc;
    }
}
img{
    width: 100%;
    height:100%;
}
</style>
