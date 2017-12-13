<template>
  <div class="big">
    <header>
        <headerSwiper/>
        <headerTab/>
    </header>
    <section>
        <sections/>
    </section>
    </div>
</template>

<script>
import headerSwiper from './header_child/swiper'
import headerTab from './header_child/tab'
import sections from './section_child/cont'
export default {
    name: 'home',
    components:{
       headerSwiper,
       headerTab,
       sections
    }
}
</script>

<style>

</style>
