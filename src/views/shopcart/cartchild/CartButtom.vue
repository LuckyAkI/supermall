<template>
  <div class="buttom">
    <div class="check-all">
      <check-button :is-active="isActive" @click.native="isall" />
      <span class="all">全选</span>
    </div>
    <div class="heji">合计：{{carPrice}}</div>
    <div class="xiaofei" @click="xiaofei">结 算 ({{carLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    CheckButton
  },
  computed: {
    // 总价
    carPrice() {
      return this.$store.state.cartList
        .filter(item => item.checked)
        .reduce((prveValue, item) => {
          return prveValue + item.count * item.price;
        }, 0)
        .toFixed(2);
    },

    // 结算length
    carLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },

    //  全选状态
    isActive() {
      // console.log(this.$store.state.cartList);
      // 如果 没有加入购物车 应该为 false
      if (this.$store.state.cartList.length === 0) return false;
      //  如果有一个商品不选中 判断他的length有值的话取反就是false
      return !this.$store.state.cartList.filter(item => !item.checked).length;
    }
  },
  methods: {
    isall() {
      const aa = !this.$store.state.cartList.filter(item => !item.checked).length;
      if (aa) {
        this.$store.state.cartList.forEach(item => item.checked = false);
      } else {
        this.$store.state.cartList.forEach(item => item.checked = true);
      }
    },
    
    // 没有商品去结算的弹窗
    xiaofei(){
      // console.log(this.isall())
      if(!this.isActive){
        // console.log(123)
        this.$toast.show('请添加一个商品',1500)
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.buttom {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 46px;
  height: 42px;
  background-color: #eee;
  color: #444;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  font-size: 16px;
}
.check-all {
  display: flex;
  align-items: center;
  width: 80px;
}
.all {
  margin-left: 4px;
}
.xiaofei {
  width: 120px;
  text-align: center;
  height: 100%;
  color: #fff;
  font-weight: 550;
  font-size: 16px;
  line-height: 44px;
  background-color: orangered;
}
.heji {
  flex: 1;
}
</style>
