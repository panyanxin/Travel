<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class='banner-img' :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-tit">{{this.sightName}}</div>
                <div class="banner-num">
                    <span class='iconfont banner-icon'>&#xe625;</span>
                    {{this.gallaryImgs.length}}
                </div>
            </div>
        </div>
        <common-gallary 
        :imgs='gallaryImgs' 
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
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
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
