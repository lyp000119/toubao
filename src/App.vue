<template>

  <div id="app">
    <mains/>
  </div>
</template>
<script>
import mains from './main/index'
export default {
  name: 'app',
  components:{
    mains
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
body,html{
  width: 100%;
  height:100%;
}
#app{
  width: 100%;
  height:100%;
}
</style>
