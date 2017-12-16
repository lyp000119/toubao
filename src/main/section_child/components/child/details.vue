<template>
  <div>
      <group>
      <cell v-for="(item, index) in data.items" :key ='index' :title="item.label" :value="item.value" is-link  id="box" @click.native='fn(index)'>
      </cell>
    </group>
    <dialoghtml v-if='show1' @fun='fun' :cont='data.items[index]'/>
  </div>
  </div>
  </div>
</template>

<script>
import { PopupHeader, Popup, TransferDom, XSwitch, Radio,Group, Cell, CellBox } from 'vux';
import dialoghtml from './dialog';
export default {
    props:{
        data:{
            type: Object,
            default: function () {
                return {  }
            }
        },
    },
    directives: {
        TransferDom
    },
    components: {
        PopupHeader,
        Popup,
        Group,
        XSwitch,
        Radio,
        Group,
        Cell, 
        CellBox,
        dialoghtml
    },
    data () {
        return {
        show1: false,
        index:0
        }
    },
    methods:{
        fn(index){
            this.index = index;
            console.log(index);
           this.show1 = true; 
        },
        fun(val){
            this.show1 = val
        }
    }
}
</script>

<style scoped>
#box{
    font-size: 12px;
    color:#666;
}
</style>
