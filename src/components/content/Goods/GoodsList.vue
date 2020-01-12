<template>
  <div class='goodslist'>
    <goods-list-item class="item"
     v-for="(item,index) in goodslist" 
     :goodListitem="item"
     :key="index"
     />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListitem'
export default {
  name: '',
  props:{
    goodslist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {}
  },
  components: {
    GoodsListItem
  },
  methods: {},
  created(){},
  mounted(){},
}
</script>
<style lang='scss' scoped>
.goodslist{
   display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
}
.goodslist .item {
    width: 48%;
  }
</style>
