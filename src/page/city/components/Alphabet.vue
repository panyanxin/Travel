<template>
    <ul class="list">
        <!-- <li 
        class="item" 
        v-for='(item,key) of cities' 
        :key='key'
        @click="handleLetterClick"
        >{{key}}</li> -->
          <li 
        class="item" 
        v-for='item of letters' 
        :key='item'
        :ref='item'
        @click="handleLetterClick"
        @touchstart='handleTouchstart'
        @touchmove='handleTouchmove'
        @touchend='handleTouchend'
        >{{item}}</li>
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data(){
        return{
            touchsStart:false,
            startY:0,
            timer:null
        }
    },
    updated () {
        this.startY =  this.$refs['A'][0].offsetTop
    },
    computed: {
        letters(){
             const letters=[]
             for(let i in this.cities){
                 letters.push(i)
             }
             return letters
        }
    },
    methods: {
        // 点击传值到city中
        handleLetterClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleTouchstart(){
            this.touchsStart=true
        },
         handleTouchmove(e){
             if(this.touchsStart){
                 if(this.timer){
                    clearTimeout(this.timer) 
                 }
                 this.timer =setTimeout(()=>{
                     //  获取字母A的距离
                     const startY =this.$refs['A'][0].offsetTop
                     const touchY= e.touches[0].clientY -79
                     const index =Math.floor((touchY-this.startY)/20)
                      console.log(index)
                     if(index>=0&&index<this.letters.length){
                         this.$emit('change',this.letters[index])
                     }
                 },16)
            }
        },
         handleTouchend(){
                 this.touchsStart=false
        }
    },
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        top 1.58rem
        bottom 0
        width .4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>
