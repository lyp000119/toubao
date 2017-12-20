import vue from 'vue';
import vuex from 'vuex';
import MD from './module/cont';
vue.use(vuex);
const store = new vuex.Store({
    state:{
        money:''
    },
    mutations:{

    },
    actions:{

    },
    modules:{
        MD
    }
})
export default store;
