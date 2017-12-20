<template>
<div class="wrap">
    <keep-alive include="home">
    <router-view></router-view>
    </keep-alive>
    <footer>
        <footerTab/>
    </footer>
</div>
</template>
<script>

import footerTab from './footer_child/tab'
export default {
  name: 'index',
  created(){
  },
  components: {
    footerTab
  }
}
</script>

<style lang='less'>
.wrap{
    width: 100%;
    height:auto;
    display: flex;
    box-sizing: border-box;
    padding-bottom: 50px;
    flex-direction: column;
    .big{
        flex-shrink: 1;
        flex-grow: 1;
        margin:5px 0;
    }
    footer{
        position: fixed;
        bottom:0;
        left:0;
        width: 100%;
        height: auto;
    }

}
// section{
//     width: 100%;
//     display: flex;
//     over
//     .bigbox{
//         width: 100%;
//         flex-shrink: 0;
//     }
// }
</style>
