<template>
  <div ref="scroll">
      <div>
        <slot></slot>
      </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  name: '',
  props:{
   probeType:{
     type:Number,
     default:3
   },
   pullUpLoad:{
     type:Boolean,
     default: false
   }
  },
  data(){
    return {
      scroll:null
    }
  },
  components: {},
  methods: {},
  created(){},
  mounted(){
    this.scroll = new Bscroll(this.$refs.scroll,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
    })

    this.scroll.on('scroll', p => {
      this.$emit('probetype',p)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
}
</script>
<style lang='scss' scoped>

</style>
