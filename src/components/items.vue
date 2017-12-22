<template slot-scope>
    <li class="fixedli">
         <div @click='toggle'>
             <p v-if="model.child" class="father">{{model.name}} <span>></span></p>
             <p v-else class="son">{{model.name}} </p>
        </div>
        <ul v-show="open" v-if='isFolder'>
            <items v-for='cel in model.child' :model='cel'></items>
        </ul> 
    </li>
</template>
<script type="text/javascript">
import { Cell,Scroller } from 'vux';
    export default {
        name: 'items',
        props: ['model'],
        components: {
            Cell,
            Scroller
        },
        data() {
            return {
                open: false,
                showContent004:false
            }
        },
        computed: {
            isFolder: function() {
                return this.model.child && this.model.child.length
            }
        },
        methods: {
            toggle: function(e) {
                e.stopPropagation();
                if(this.isFolder) {
                    this.open = !this.open
                }
                return false
            },
        }
    }
</script>
<style>
li{
    list-style: none;
}
</style>
