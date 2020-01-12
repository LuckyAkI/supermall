<template>
  <div class="cart-list">
    <scroll class="content">
        <cart-list-item 
        v-for="(item,index) in CartList" 
        :key="index" 
        :cart-list="item" />
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import CartListItem from "./CartListItem";
import scroll from "components/common/scroll/BetterScroll";

export default {
  name: "",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CartList"])
  },
  components: {
    CartListItem,
    scroll
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.cart-list{
   height: 100vh;
}
.content {
  height: calc(100% - 44px - 44px - 40px);
  overflow: hidden;
}
</style>
