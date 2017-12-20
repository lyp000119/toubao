<template>
<div>
<swipers></swipers>
<lists :list='contlist'></lists>
</div>
</template>

<script>
import swipers from './header_child/swiper'
import lists from './find_components/list'
export default {
    name:'find',
    components:{
        swipers,
        lists
    },
    data () {
      return {
        contlist:[]
      }
    },
    created(){
      let that = this;
      this.$store.dispatch('MD/findlist',{
        page:0,
        page_size:10
      }).then((res) =>{
        that.contlist =  res[1].data.list;
        console.log(that.contlist)
      })
    }
}
</script>

<style>

</style>
