<template>
    <div class="list" ref='wrapper'>
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrap">
                        <!-- <div class="button">北京</div> -->
                        <!-- <div class="button">{{this.$store.state.city}}</div> -->
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div 
                        class="button-wrap" 
                        v-for='item of hot' 
                        :key='item.id'
                        @click="handleCityClick(item.name)"
                    > 
                            <div class="button">{{item.name}}</div>
                    </div>
                   
                </div>
            </div>
            <div 
                class="area" 
                v-for="(item,key) of cities" 
                :key='key'
                :ref='key'
                >
                <div class="title border-topbottom">{{key}}</div>
                <div 
                    class="item-list"  
                    v-for="innerItem of item" 
                    :key="innerItem.id"
                    @click="handleCityClick(innerItem.name)"
                >
                    <div class="item border-bottom">{{innerItem.name}}</div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        cities:Object,
        hot:Array,
        letter:String
    },
    computed: {
      ...mapState({
          currentCity:'city'
      })  
    },
    methods: {
        handleCityClick(city){
            //   this.$store.dispatch('changeCity',city)
        //   this.$store.commit('changeCity',city)
        this.changeCity(city)
          this.$router.push('/')
        },
        ...mapMutations(['changeCity'])  
    },
    watch: {
        letter(){
            if(this.letter){
                const element =this.$refs[this.letter][0]
                // console.log(element)
                this.scroll.scrollToElement(element)
            }
            // console.log(this.letter + ',,,')
        }
    },
    mounted() {
         this.scroll = new Bscroll(this.$refs.wrapper)
    }
};
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #cccccc
        &:after
            border-color #cccccc
    .border-bottom
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        
        .title
            line-height .54rem
            background #eee
            padding-left .2rem
            font-size .26rem
            color #666
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrap
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item    
                line-height  .54rem
                padding-left  .2rem     
</style>
