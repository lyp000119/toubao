<template>
    <div class="bigbox">
        <dl v-for="(item, index) in arr" :key='index' @click='childs(item.product_id)'>
            <dt><img :src="item.cover" alt=""></dt>
            <dd>
                <span>{{item.title}}</span>
                <span class="cont">{{item.features}}</span>
                <p>
                <span><b>{{item.price}}</b>元起购</span>
                <span>{{item.sale_num}}人购买</span>
                </p>
            </dd>
        </dl>
        
    </div>
</template>

<script>
export default {
  name: "cont",
  data() {
    return {
      arr: [],
      clietnx: 0,
      flag: true,
      page: 0
    };
  },
  created() {
    this.fn();
    document.addEventListener("scroll", this.scroll);
  },
  destroyed () {
      document.removeEventListener('scroll', this.scroll)
  },
  methods: {
    fn() {
      this.$store.dispatch("MD/listcont", {
          page: this.page,
          page_size: 10
        })
        .then((res) => {
          this.arr = [...this.arr, ...res.data.list];
        });
    },
    scroll() {
      let scrollY = window.pageYOffset;
      let winH = window.innerHeight;
      let bodyH = document.body.scrollHeight;
      if (scrollY + winH >= bodyH - 20) {
        console.log('加载数据');
        if (this.flag) {
          this.page += 1;
          this.fn();
          this.flag = false;
        }
      } else {
        this.flag = true;
      }
    },
    childs (val) {
        this.$router.push(`/projectDetail/${val}`)
    }
  }
};
</script>

<style lang='less' scoped>
.bigbox {
  overflow-y: auto;
}
dl {
  width: 100%;
  display: flex;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  padding: 8px 5px;
}
dt {
  margin-right: 5px;
  img {
    width: 150px;
    height: 100px;
  }
}
dd {
  font-size: 12px;
  .cont {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
span {
  display: block;
  margin-top: 5px;
}
p {
  display: flex;
  align-items: center;
  justify-content: space-between;
  span:nth-child(2) {
    float: right;
  }
  span:nth-child(1) {
    color: #ff4774;
  }
  b {
  }
}
</style>
