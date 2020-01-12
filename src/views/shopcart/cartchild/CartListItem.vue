<template>
  <div>
    <div class="car-list-item">
      <check-button 
      @click.native="ClickBtn"
      :is-active="CartList.checked" 
     />
      <!-- 图片 -->
      <div class="car-img">
        <img :src="CartList.img" alt />
      </div>
     
     <!-- 描述 -->
      <div class="car-desc">
        <div class="title">{{CartList.title}}</div>
        <div class="desc">商品描述：{{CartList.desc}}</div>
        <div class="price-count">
          <div class="price">{{'￥' + CartList.price}}</div>
          <div class="count">x{{CartList.count}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton';
export default {
  name: "",
  props: {
    CartList: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  methods: {
    ClickBtn(){
      console.log(this.CartList)
      this.CartList.checked = !this.CartList.checked;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.car-list-item {
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  margin-right: 5px;
}
.car-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.car-desc{
  line-height: 35px;
  margin-left:3px;
}
.car-desc .title,.desc{
  font-size: 18px;
  color: #000;
  width:240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.car-desc .desc{
  font-size: 14px;
  color: #999;
}
 .car-desc .price-count{
   display: flex;
   justify-content: space-between;
 }
 .price-count .price{
   color: red;
 }
  .price-count .count{
    font-size: 18px;
    color: #444;
  }
</style>
