<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class='banner-img' src="http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg" alt="">
            <div class="banner-info">
                <div class="banner-tit">南山滑雪场</div>
                <div class="banner-num">
                    <span class='iconfont banner-icon'>&#xe625;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary 
        :imgs='imgs' 
        v-show='showGallary'
        @close='handlegallaryClose'
        ></common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    data(){
        return{
            showGallary:false,
            imgs:['https://himg4.qunarzz.com/imgs/201905/10/C.3ukLtwxSQIl59B_2x480.jpg','https://himg1.qunarzz.com/imgs/201812/12/C._M0DCii9aSIdbO0Ei480.jpg']
        }
    },
    components: {
        CommonGallary
    },
    methods: {
        handleBannerClick(){
           this.showGallary =true
        },
        handlegallaryClose(){
           this.showGallary =false
        }
    }
}
</script>
<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    background blue
    .banner-img
        width 100%
    .banner-info
        position: absolute
        left: 0
        right: 0
        bottom: 0
        display flex
        line-height .6rem
        color #fff
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-tit
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-num
            height: .32rem
            line-height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            border-radius: .2rem
            background: rgba(0, 0, 0, .8)
            font-size: .24rem
            .banner-icon
                font-size .24rem
        
</style>
