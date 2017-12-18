<template> 
<transition name="fade" v-on:before-enter='beforeEnter'>
<div class="mack" @click='close'>
    <transition  name="slide-fade">
    <div class="small"  ref="small" v-show="contflag">
        <p class="imgp">
        <span>{{nums.title}}</span>
        <span><img :src="logo" alt=""></span>
        </p>
        <ul>
        <li v-for="(item, index) in genescont" :key ='index' id="box">
        <p v-if="item.type == 'fixed'">
            <span>{{item.label}}:</span>
            <span>{{item.value}}</span>
        </p>
        <popuppicker v-else-if='item.type == "list"' :title="item.label" :datas='nums()' :defaults='item.value' id="list"></popuppicker>
        </li>
    </ul>
    </div>
    </transition>
</div>
</transition>
</template>

<script>
import {Group, Cell} from 'vux';
import popuppicker from '../../../../components/popuppicker';
export default {
    name: 'genes',
    components:{
        Group,
        Cell,
        popuppicker
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
            array:[['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']]
        }
    },
    mounted () {
        this.$refs.small.addEventListener('click',function(e){
            e.stopPropagation()
            return false;
        })
    },
    created () {
        
    },
    methods:{
        beforeEnter () {
            this.contflag = true
        },
        close(){         
            this.contflag = false;   
            this.$emit('fun', false);
        },
        nums () {
            // let that = this
            let arrar = []
            let arrs = []
            for(var i=0;i<this.genescont.length;i++){
                if(this.genescont[i].type == "list") {
                    console.log(this.genescont[i].options)
                    let genescont = JSON.parse(this.genescont[i].options)
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
        }
    }
}
</style>
