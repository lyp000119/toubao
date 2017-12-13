<template>
<div class="wrap">
    
    <router-view></router-view>
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
    height:100%;
    display: flex;
    flex-direction: column;
    footer{
        position: fixed;
        bottom:0;
        left:0;
        width: 100%;
        height: auto;
        flex-shrink: 0
    }
    .big{
        flex-shrink: 1;
        flex-grow: 1;
        margin:5px 0;
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
