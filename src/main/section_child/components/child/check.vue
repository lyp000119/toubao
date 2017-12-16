<template>
  <div v-if=' numbers >=2 ' style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
      <tab bar-active-color="#668599" :line-width="1">
        <tab-item v-for="(item, index) in nums.plan_list" :key='index' @click.native='getcont(item.product_id)' >{{item.plan_title}}</tab-item>
      </tab>
    </div>
</template>
<script>
import {
  Tab,
  TabItem,
  Sticky,
  Divider,
  XButton,
  Swiper,
  SwiperItem
} from "vux";
import detailss from "./details";
export default {
  props: {
    nums: {
      type: Object,
      default: function() {
        return { message: "hello" };
      }
    },
    numbers: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  name: "check",
  methods: {
    datas(val) {
      console.log("1");
    },
    getcont(val) {
      this.$router.replace(`/projectDetail/${val}`);
    }
  },
  components: {
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    Swiper,
    SwiperItem,
    detailss
  }
};
</script>

<style>

</style>
