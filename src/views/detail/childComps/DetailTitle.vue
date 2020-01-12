<template>
  <div class='tab-contrl'>
    <nav-title class="tab">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="back">
      </div>
      <div slot="center" class="title">
          <div v-for="(item,index) in titles" 
          :key="item" class="title-item" 
          :class="{ active: index === countIndex }"
          @click="titleItemClick(index)"
          >
             <div>{{item}}</div>
          </div>
      </div>
    </nav-title>
  </div>
</template>

<script>
import navTitle from 'components/common/navtab/NavTab'
export default {
  name: '',
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      countIndex:0
    }
  },
  components: {
    navTitle
  },
  methods: {
    backClick(){
      this.$router.back()
    },
    titleItemClick(index){
      this.countIndex = index;
      this.$emit('indexClick',index)
    }
  },
  created(){},
  mounted(){},
}
</script>
<style lang='scss' scoped>
.back{
  margin-top: 11px;
}
.title{
  display: flex;
  font-size: 14px;
}
.title-item{
 flex: 1;
}
.active{
  color: var(--color-tint)
}
.tab-contrl{
  padding-bottom: 38px;
}
.tab{
  position: fixed;
  left:0;
  right:0;
  z-index: 20;
  background-color: #fff;
}
</style>
