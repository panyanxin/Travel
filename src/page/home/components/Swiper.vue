<template>
    <div class='wrap'>
        <swiper :options="swiperOption" v-if='showSwiper'>
            <!-- slides -->
            <swiper-slide v-for="item of list" :key='item.id'>
                <img
                    class="swiper-img"
                    :src="item.imgUrl"
                >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeSwiper",

  data() {
    return {
      swiperOption: {
          pagination:'.swiper-pagination',
          loop:true
      }
    }
  },
    props:{
      list:Array
  },
  computed:{
      showSwiper(){
          return this.list.length
      }
  }
 
}
</script>
<style lang="stylus" scoped>
    .wrap >>>  .swiper-pagination-bullet-active 
            background #fff !important 
    .wrap
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        background #eee
        .swiper-img 
            width: 100%;
      
</style>