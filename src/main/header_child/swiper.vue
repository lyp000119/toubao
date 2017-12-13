<template>
    <Swiper class="swiper" auto loop :list='arr' :index="0" :showDescMask=false></Swiper>
</template>
<script>
import { Swiper } from "vux";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      arr: [
        {
          url: "javascript:",
          img: "static/img/banner1.jpg"
        },
        {
          url: "javascript:",
          img: "static/img/banner2.jpg"
        },
        {
          url: "javascript:",
          img: "static/img/banner3.jpg"
        }
      ]
    };
  },
  methods: {
    onItemClick(index) {
      console.log("on item click:", index);
    }
  },
  components: {
    Swiper
  }
};
</script>

<style>

</style>
