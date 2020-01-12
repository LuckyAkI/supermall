<template>
  <div class>
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style>
#tabbar {
  display: flex;
  height: 48px;
  position: fixed;
    z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -2px 3px rgba(175, 166, 166, 0.2);
}
</style>
