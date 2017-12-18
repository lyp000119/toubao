<template>
  <div class="detail">
    <div id="sections">
    <div class="title">
      <img :src="nums.cover" alt="">
    </div>
    <p class="tit">
      <span>{{nums.title}}</span>
      <span>
          <img :src="logo">
      </span>
      
    </p>
    <p class="price"><span>${{nums.price}}</span> <span>已售{{nums.sale_num}}</span></p>
    <p class="age">承包年龄:{{ress.min_age}}周岁-{{ress.max_age}}周岁
      <span>保障期限：{{ress.guarantee_period}}</span>
    </p>
    <p class="conts">
        <span v-for="(item,index) in nums.features" :key='index'><icon type="success"></icon>{{item}}</span>
    </p>
    <checks :nums = 'datas' :numbers='numbers' />
    <detailsss :data='datas'/>
    </div>
    <genes v-if="falg" :genescont='genescont' :product='nums' :logo='logo' @fun='flagfn'/>
    <footer id="footer">
      <ul>
        <li><span>联系客服</span></li>
        <li>
        <span>1102.22</span>
        <span @click='flagfn'>立即投保</span>
        </li>
      </ul>
    </footer>

  </div>
</template> 

<script>
import { Tab, TabItem, Swiper,Icon} from 'vux';
import checks from './child/check.vue';
import details from './child/details'
import genes from './child/genes'
export default {
    name: 'index',
    data () {
      return{
          nums:[],
          ress:'',
          datas:{},
          numbers:0,
          logo:'',
          falg:false,
          genescont:[],
          company:[]
      } 
    },
    components:{
      Tab,
      TabItem,
      checks,
      detailsss:details,
      Icon,
      genes
    },
    created(){
      this.fn()
    },
    watch:{
      '$route':function(){
        this.fn()
      }
    },
    methods:{
      fn(){
        this.$store.dispatch('MD/childlist',{
        product_id: this.$route.params.id
      }).then((res) =>{
        this.nums = res.data.product
        this.ress = res.data.options
        this.datas= res.data;
        this.genescont = res.data.genes
        this.logo = res.data.company.logo
        this.numbers = res.data.plan_list.length
        console.log(res);
        })
      },
      flagfn(){
        this.falg = !this.falg
      }
    }
};
</script>

<style lang='less'>
#sections{
 flex-shrink: 1;
  overflow-y: auto;
}
#footer{
  width: 100%;
  height: 45px;
  ul{
    width: 100%;
    height:100%;
    display: flex;
    line-height: 45px;
    color:#fff;
    list-style: none;
    li{
        width: 25%;
        font-size: 14px;
        background: #333;
        // text-align: center;
    }
    li:nth-child(1){
        text-align: center;
    }
    // li:nth-child(1)::after{
    //   content: '';
    //   width: 1px;
    //   background: #ccc;
    // }
    li:nth-child(2){
      display: flex;
      width: 75%;
      background: #333;
      border-left:1px solid #ccc;
      span:nth-child(1){
        width: 40%;
        padding-left:5px;
      }
      span:nth-child(2){
        width: 60%;
        text-align: center;
        background: #ff4774;
      }
    }
  }
}
.detail{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  z-index: 44;
}
.tit{
  display: flex;
  height: 34px;
  justify-content: space-between;
  align-items: center;
  img{
    width: 100%;
    height:100%;
  }
  span:nth-child(1){
    font-size: 15px;
    flex:1;
  }
  span:nth-child(2){
    width:80px;
    text-align: right;
  }
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
  width: 100%;
  display: flex;
  font-size: 14px;
  overflow-y: auto;
  overflow-x: auto; 
  span{
    flex-shrink: 0;
    margin-left:20px;
    .weui-icon{
      color:#ff4774;
    }
  }
}
</style>
