<template>
  <div class>
    <div class="cart" :class="{checkcart: isActive}">
      <img src="~assets/img/cart/tick.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.checkcart {
  border: 1px solid #888;
  background-color: var(--color-tint);
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  text-align: center;
}
.cart {
  border: 1px solid #888;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
</style>
