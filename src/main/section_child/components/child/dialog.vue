<template>
<transition name="fade" v-on:before-enter='beforeEnter'>
<div class="mack" @click='close'>
    <transition  name="slide-fade">
    <div class="small"  ref="small" v-show="contflag">
        <p>
        <span></span>
        <span>{{cont.label}}</span>
        <span @click='close'>X</span>
        </p>
        <p v-html='cont.description'></p>
    </div>
    </transition>
</div>
</transition>
</template>

<script>
export default {
    name: 'dialogs',
    props:['cont'],
    data () {
       return {
            contflag:false
        }
    },
    mounted () {
            this.$refs.small.addEventListener('click',function(e){
                e.stopPropagation()
                return false;
            })  
    },
    methods:{
        
        beforeEnter () {
            this.contflag = true
        },
        close(){         
            this.contflag = false;   
            this.$emit('fun', false);
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
        p:nth-child(1){
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            height: 35px;
            span:nth-child(3){
                padding-right:10px;
                font-size: 15px;
            }
            &:after{
            content:'';
            width: 200%;
            height: 2px;
            background: #ccc;
            position: absolute;
            bottom: 0;
            left:0;
        }
        }
        
    }
}
</style>
