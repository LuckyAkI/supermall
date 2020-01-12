<template>
  <div class="tabbar-item" @click="tabBarbtn">
    <div v-if="isActive">
      <slot name="tabbar-icon"></slot>
    </div>
    <div v-else>
      <slot></slot>
    </div>
    <div :style="isColor">
      <slot name="tabbar-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    styleColor: {
      type: String,
      default: "deeppink"
    }
  },
  name: "",
  data() {
    return {
      // isActive:false
    };
  },
  computed: {
    isActive() {
      return this.$route.path !== this.path;
    },
    isColor() {
      return !this.isActive ? { color: this.styleColor } : {};
    }
  },
  components: {},
  methods: {
    tabBarbtn() {
      if (this.$route.path === this.path) {
        // this.$router.push(this.path);
        return;
      }
      this.$router.push(this.path);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 3px 0 1px 0;
}
</style>
