<template>
  <div class="detail">
    <div class="title">
      <img :src="nums.cover" alt="">
    </div>
    <p>
      <span>{{nums.title}}</span>
      <img src="" alt="">
    </p>
    <p class="price"><span>${{nums.price}}</span> <span>已售{{nums.sale_num}}</span></p>
    <p class="age">承包年龄:{{ress.min_age}}周岁-{{ress.max_age}}周岁
      <span>保障期限：{{ress.guarantee_period}}</span>
    </p>
    <p class="conts">
        <span v-for="(item,index) in nums.features" :key='index'>{{item}}</span>
    </p>
    <checks :nums = 'datas'/>
  </div>
</template> 

<script>
import { Tab, TabItem, Swiper} from 'vux';
import checks from './child/check.vue';
export default {
    name: 'index',
    data () {
      return{
          nums:[],
          ress:'',
          datas:[]
      } 
    },
    components:{
      Tab,
      TabItem,
      checks
    },
    created(){
      this.fn()
    },
    methods:{
      fn(){
        this.$store.dispatch('MD/childlist',{
        product_id: this.$route.params.id
      }).then((res) =>{
        this.nums = res.data.product
        this.ress = res.data.options
        this.datas= res.data;
        console.log(this.nums)
        console.log(res);
        })
      }
    }
};
</script>

<style lang='less'>
.detail{
  position: fixed;
  width: 100%;
  height:100%;
  background: #fff;
}
.title{
  img{
    width: 100%;
    height:100%
  }
}
p{
  margin-top:10px;
}
.age{
  color:#ccc;
  font-size: 13px;
}
.price{
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  span{
    color:#ff4774
  }
}
.conts{
  font-size: 14px;
  overflow-y: auto;
  span{
    margin-left:20px
  }
}
</style>
