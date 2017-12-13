<template>
   <tabbar>
      <tabbar-item link='/home'>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link='/find'>
        <span slot="label">寻找</span>
      </tabbar-item>
      <tabbar-item link="/myself">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </tab>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'tabs',
  data() {
    return {
      arr: ['首页', '发现', '我的']
    }
  },
  methods: {
    onItemClick (index) {
      console.log(index)
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>

</style>
