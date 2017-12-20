<template>
<div class="box">
  <util/>
  <ul class="ul">
    <li v-for="(item, index) in arr" :key='index'>
      <span><img :src="item.url"></span>
      <span>{{item.name}}</span>
    </li>
  </ul>
</div>
</template>

<script>
import util from '../plugins/index'
export default {
  name:'myself',
  data () {
    return {
        arr:[{
    name:'我的保单',
    url:'./static/img/1.png'
  },{
    name:'投保人信息',
    url:'./static/img/2.png'
  },{
    name:'申请理赔',
    url:'./static/img/3.png'
  },{
    name:'申请退保',
    url:'./static/img/4.png'
  },{
    name:'申请续保',
    url:'./static/img/5.png'
  },{
    name:'销售记录',
    url:'./static/img/6.png'
  },{
      name:'设置',
      url:'./static/img/7.png'
  }]
    }
  },
  components:{
    util
  }
  
}
</script>

<style lang='less' scoped>
.box{
  overflow: hidden;
}
ul{
  display: flex;
  flex-wrap: wrap;
  li{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:20px;
    span{
      text-align: center;
        img{
            width: 30%;
            height:30%;
        }
    } 
  }
}
.ul{
  position: absolute;
  top:250px;
  left:0;
  color: #666;
  font-size: 12px
}
</style>
