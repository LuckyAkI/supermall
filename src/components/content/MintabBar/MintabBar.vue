<template>
  <div class>
    <tabBar>
      <tab-bar-item path="/home">
        <img slot="tabbar-icon" src="~assets/img/tabbar/home.svg" alt />
        <img src="~assets/img/tabbar/home_active.svg" alt />
        <div slot="tabbar-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="tabbar-icon" src="~assets/img/tabbar/category.svg" alt />
        <img src="~assets/img/tabbar/category_active.svg" alt />
        <div slot="tabbar-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="tabbar-icon" src="~assets/img/tabbar/shopcart.svg" alt />
        <img src="~assets/img/tabbar/shopcart_active.svg" alt />
        <div slot="tabbar-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="tabbar-icon" src="~assets/img/tabbar/profile.svg" alt />
        <img src="~assets/img/tabbar/profile_active.svg" alt />
        <div slot="tabbar-text">我的</div>
      </tab-bar-item>
    </tabBar>
  </div>
</template>

<script>
import tabBar from "components/common/tabbar/tabBar";
import tabBarItem from "components/common/tabbar/tabBaritem";
export default {
  name: "mintabbar",
  data() {
    return {};
  },
  components: {
    tabBar,
    tabBarItem
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>
