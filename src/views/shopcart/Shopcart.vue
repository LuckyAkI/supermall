<template>
  <div class="cart">
    <!-- 顶部topTab -->
    <nav-tab class="nav-tab">
      <div slot="center">购物车({{CartLength}})</div>
    </nav-tab>

    <!-- 商品列表 -->
    <cart-list />

    <!-- 底部结算及其他按钮 -->
    <cart-buttom/>
  </div>
</template>

<script>
import NavTab from "components/common/navtab/NavTab";


import CartList from "./cartchild/CartList";
import CartButtom from './cartchild/CartButtom';

// vuex官方提供映射的一个函数 仅仅针对计算属性  getters 中的一些方法
import { mapGetters } from "vuex";

export default {
  name: "",
  data() {
    return {};
  },
  components: {
    NavTab,
    CartList,
    CartButtom
  },
  computed: {
    ...mapGetters(["CartLength"])
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.nav-tab {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
