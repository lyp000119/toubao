<template> 
<transition name="fade" v-on:before-enter='beforeEnter'>
<div class="mack" @click='close'>
    <transition  name="slide-fade">
    <div class="small"  ref="small" v-show="contflag">
        <p class="imgp">
        <span>{{product.title}}</span>
        <span><img :src="logo" alt=""></span>
        </p>
            <scroller lock-x scrollbarY	height='250px' @on-scroll="onScroll">
        <ul>
        <li v-for="(item, index) in genescont" :key ='index' id="box">
        <p v-if="item.type == 'fixed'">
            <span>{{item.label}}:</span>
            <span>{{item.value}}</span>
        </p>
        <p v-else-if="item.type == 'fixed.jobs'">
            <span>{{item.label}}:</span>
            <span>{{item.value}}</span>
            <span class="check" @click='job'>查询职业</span>
        </p>
        <checker v-else-if="item.type == 'list' && item.options.indexOf('list') != -1" v-model='genes[item.gene_key]'radio-required default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <span class="sps">{{item.label}}:</span>
        <checker-item v-for="item in JSON.parse(item.options).list" :value='item.value'>{{item.value}}</checker-item>
        </checker>
        <popuppicker v-else-if='item.type == "list"' :title="item.label" :datas='nums()' v-model='genes[item.gene_key]' :defaults='item.value' id="list"></popuppicker>
        </li>
        
    </ul>
    </scroller>
    <div class="footer">
        <span>价格：￥{{this.$store.state.money}}</span>
        <span>立即投保</span>
    </div>
    </div>
    </transition>
    <div class="jobs" v-if="jobfalg" @click='stop'>
        <h2>职业查询</h2>
    <item :model='model' v-for="model in works" ></item>
    </div>
</div>
</transition>
</template>
<script>
import {Group, Cell, Scroller, Checker, CheckerItem} from 'vux';
import popuppicker from '../../../../components/popuppicker';
import item from '../../../../components/items'
export default {
    name: 'genes',
    components:{
        Group,
        Cell,
        popuppicker,
        Scroller,
        item,
        Checker,
        CheckerItem
    },
    props:{
        genescont:{
            type:Array,
            default:function(){
                return{}
            }
        },
        product:{
            type:Object,
            default:function(){
                return{}
            }
        },
        logo:{
            type:String,
            default:''
        }
    },
    data () {
       return {
            contflag:false,
            numbers:'1万元',
            ids:'',
            genes:{},
            scrollY:true,
            works:[],
            jobfalg:false,

        }
    },
    watch:{
        genes(n,o){
        }
    },
    mounted () {
        this.$refs.small.addEventListener('click',function(e){
            e.stopPropagation()
            return false;
        })
    },
    created () {
        let that = this
        this.genescont.map((item,index) =>{
            this.$set(that.genes, item.gene_key, item.value)
            if(item.type !== 'fixed'){
                this.$watch(function(){
                    return that.genes[[item.gene_key]]
                },(o,n) =>{
                        this.$store.dispatch('MD/money',{
                            product_id:this.$route.params.id,
                            genes:that.genes
                        }).then((res) =>{
                            this.$store.state.money = res[1].data.price
                        })
                })
            }
        })
        
    },
    methods:{
        stop(e){
            e.stopPropagation();
            return false;  
        },
        onScroll (pos) {
            this.scrollTop = pos.top
        },
        job () {
            this.$store.dispatch('MD/job',{
                product_id:this.$route.params.id
            }).then((res) =>{
                this.works = res.data;
                this.jobfalg = true
            })
        },
        beforeEnter () {
            this.contflag = true
        },
        close(){         
            this.contflag = false;   
            this.$emit('fun', false);
        },
        nums () {
            let arrar = []
            let arrs = []
            for(var i=0;i<this.genescont.length;i++){
                if(this.genescont[i].gene_key == "buyCount" && this.genescont[i].gene_id == 111) {
                    let genescont = JSON.parse(this.genescont[i].options) || []
                    for(var i=genescont.step.min;i<genescont.step.max;i+=genescont.step.step){
                         arrar.push(i+genescont.step.unit)
                    }
                }
            }
             arrs.push(arrar)
            return arrs;
        } 
    }
} 
</script>
<style lang='less'>
.sps{
    display: inline-block;
    width: 60px;
    height: 20px;
    text-align: center;
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 5px;
}
.demo1-item-selected {
      background: #ff4774;
    color: #fff;
    border-color: #ff4774;
}
.jobs{
     position: fixed; 
    top:0;
    left: 0;
     z-index: 300; 
     width: 100%; 
     height:100%; 
    background: #fff;
    color:#000;
    overflow-y: auto;
}
.check{
    color:#ff4774;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity: 0
}
.slide-fade-enter-active {
  animation: slide-up .5s;
}
.slide-fade-leave-active {
  animation: slide-down .5s ;
}
@keyframes slide-up {
    0%{
        transform: translateY(100%);
        opacity: 0;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    }
}
@keyframes slide-down {
    0%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(100%)
    }
}
.mack{
    background: rgba(0, 0, 0, .5);
    position: fixed;
    bottom:0%;
    left:0;
    width: 100%;
    height:100%;
    z-index: 100;
    .small{
        width: 100%;
        height:50%;
        background: #fff;
        position: absolute;
        bottom:0;
        left:0;
        font-size: 12px;
        .imgp{
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            height: 35px;
            padding: 0 10px;
            font-size: 15px;
            span{
                
                img{
                    width: 100%;
                    height:100%;
                }
            }
            span:nth-child(2){
                width: 81px;
                height:30px;
            }
        }
        ul{
            #list .vux-popup-picker-value{
                margin-left: 30px !important;
                color:#000;
            }
            p{
                display: flex;
                padding:5px 10px;
                border-bottom: 1px solid rgb(236, 236, 236);
                span:nth-child(2){
                    margin-left:30px;
                }
            }
            li{
                padding:10px 0;
            }
        }
    }
}
.footer{
    position: absolute;
    bottom:0;
    left:0;
    width: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    span{
        padding:10px 0;
    }
    span:nth-child(1){
        width: 70%;
        height: 100%;
        padding-left:10px;
        color:#ff4774;
        font-size: 16px;
    }
    span:nth-child(2){
        width: 30%;
        height: 100%;
        background: #ff4774;
        color:#fff;
        text-align: center;
    }
}
</style>
