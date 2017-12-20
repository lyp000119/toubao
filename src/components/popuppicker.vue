<template>
<popup-picker :title="title" :data="datas" v-model="valueArr">
</popup-picker>
</template>

<script>
import { PopupPicker } from 'vux'
export default {
    name: 'PopupPickers',
    components:{
        PopupPicker
    },
    props:['datas', 'title', 'defaults'],
    data () {
        return {
            valueArr:[]
        }
    },
    watch:{
        valueArr(newval, oldval){
            this.$emit('input', newval[0])
        }
    },
    created () {
        this.valueArr.push(this.defaults)
    }
}
</script>

<style>

</style>
