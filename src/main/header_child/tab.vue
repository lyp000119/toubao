<template>
  <tab bar-active-color='#e76081' active-color='#e76081' :line-width=1 :id="searchBarFixed == true ? 'tab' :''" class="tabs">
  <tab-item v-for="(item, index) in arr" :key='index'>{{item.cat_name}}</tab-item>
  </tab>
</template>

<script>
import {Tab, TabItem } from 'vux'
export default {
  name: 'tabs',
  data() {
    return {
      arr: ['推荐', '成人', '少儿', '父母', '家庭'],
      top:0,
      searchBarFixed:false
    }
  },
  created(){
   this.cont()
   document.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    cont(){
      this.$http.get('/api/home/index').then((res) =>{
        this.arr = res.data.cart_list
      })
    },
    onItemClick (index) {
      console.log(index)
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTops = document.querySelector('.tabs').offsetTop 
      if (scrollTop > 180) {
        this.searchBarFixed = true
      } else if (scrollTop < 170) {
        this.searchBarFixed = false
      }
    },
  },
  destroyed () {
      document.removeEventListener('scroll', this.handleScroll)
  },
  components: {
    Tab,
    TabItem
  }
}
</script>

<style>
#tab{
  width: 100%;
  position: fixed;
  left: 0;
  top:0;
}
</style>
