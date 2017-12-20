<template>
<div>
  <dl v-for="(item, index) in list" :key='index' @click='childs(item.article_id)'>
            <dd>
                <span class="title">{{item.title}}</span>
                <span class="cont">{{item.description}}</span>
            </dd>
            <dt><img :src="item.cover" alt=""></dt>
        </dl>
</div>
</template>

<script>
export default {
    name: 'lists',
    props:{
        list:{
            type:Array,
            default:function(){
                return []
            }
        }
    },
    methods:{
        childs(val){
             this.$router.push(`/details/${val}`)
        }
    }
}
</script>

<style lang='less'>
dl {
  width: 100%;
  display: flex;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  padding: 8px 5px;
}
dt {
  margin-left: 5px;
  img {
    width: 150px;
    height: 100px;
  }
}
dd {
  font-size: 12px;
  .cont {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color:#ccc;
  }
  .title{
    font-size: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
span {
  display: block;
  margin-top: 5px;
}
p {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span:nth-child(2) {
    float: right;
  }
  span:nth-child(1) {
    color: #ff4774;
  }
  b {
  }
}
</style>
