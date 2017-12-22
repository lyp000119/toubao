import axios from 'axios';
export default {
    namespaced: true,
    actions: {
        job({commit},{
            product_id
        }){
            return new Promise ((resolve, reject) =>{
                axios.get('/api/insured/job',{
                    params:{
                        product_id
                    }
                }).then((res) =>{
                    resolve(res);
                })
            })
        },
        money({commit},{
            product_id,
            genes
        }){
            return new Promise((resolve, reject) =>{
                axios({
                    url:'/api/trial/submit',
                    method: 'post',
                    data:{
                        product_id,
                        genes
                    },transformRequest: [function (data) {
                        let ret = ''
                        for (let it in data) {
                            if(typeof data[it] == 'object'){
                                ret += encodeURIComponent(it) + '=' + encodeURIComponent(JSON.stringify(data[it])) + '&'
                            }else{
                                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                            }
                        }
                        return ret
                      }],
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
                }).then((res) =>{
                    resolve([200, res])
                })
            })
        },
        details({commit},{
            id
        }){
            return new Promise ((resolve,reject) =>{
                axios.get('/api/article/info',{
                    params:{
                      id
                    }
                }).then((res) =>{
                    resolve([200, res])
                })
            })
        },
        findlist({commit},{
            page,
            page_size
        }){
            return new Promise ((resolve,reject) =>{
                axios.get('/api/article/list',{
                    params:{
                        page,
                        page_size
                    }
                }).then((res) =>{
                    resolve([200, res])
                })
            })
        },
        listcont ({commit},{
            page,
            page_size
        }) {
            return new Promise((resolve, reject) => {
                axios.get('/api/product/list',{
                    params:{
                      page,
                      page_size
                    }
                }).then((res) =>{
                    resolve(res);
                })
            })
        },
        childlist ({commit}, {product_id}) {
            return new Promise((resolve, reject) =>{
                axios.get('/api/product/view',{
                    params:{
                        product_id
                    }
                }).then((res) =>{
                    resolve(res);
                })
            })
        }
    }    
};
