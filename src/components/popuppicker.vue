<template>
<PopupPicker
    :title='title',
    :data='datas',
    value-text-align = 'left',
    v-module = 'valueArr'
>
</PopupPicker>
</template>

<script>
import { PopupPicker } from 'vux'
export default {
    name: 'PopupPickers',
    components:{
        PopupPicker
    },
    props:['datas', 'title','defaults'],
    data () {
        return {
            valueArr:[],
        }
    },
    watch:{
        valueArr (oldVal, newVal){
            console.log(oldVal);
            console.log(newVal);
        }  
    },
    created () {
        console.log(this.datas, this.title, this.defaults)
        this.valueArr.push(this.defaults)
    }
}
</script>

<style>

</style>
