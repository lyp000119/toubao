<template>
  <div class="hello">
  <tab bar-active-color='#000' active-color='#000' line-width=0>
  <tab-item  selected @on-item-click="onItemClick">1</tab-item>
  <tab-item  selected @on-item-click="onItemClick">1</tab-item>
  <tab-item  selected @on-item-click="onItemClick">1</tab-item>
  <tab-item  selected @on-item-click="onItemClick">1</tab-item>
  </tab>
  </div>
</template>
<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.swiper{
  img{
    width: 100%;
    height:100%;
  }
}
</style>
