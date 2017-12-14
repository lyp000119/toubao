<template>
  <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;" v-if="nums.plan_list.length >= 2">
      <tab style="width:500px;" bar-active-color="#668599" :line-width="1">
        <tab-item v-for="(item, index) in nums.plan_list" :key='index'>{{item.plan_title}}</tab-item>
        <!-- <tab-item selected>未发货</tab-ite -->
      </tab>
    </div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
export default {
    props:['nums'],
    name: 'check',
    methods: {
        datas(val){
            console.log('1');  
        }
    },
    components:{
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem
    }
}
</script>

<style>

</style>
