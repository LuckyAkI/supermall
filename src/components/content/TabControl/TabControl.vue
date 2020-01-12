<template>
  <div>
    <div class="control">
      <div
        class="control-item"
        v-for="(item,index) in titles"
        :key="item"
        @click="tabitem(index)"
        :class="{isActive: index === count}"
      >
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0
    };
  },
  components: {},
  methods: {
    tabitem(index) {
      this.count = index;
     this.$emit('tabitem',index)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.control {
  display: flex;
  padding-top: 11px;
  height: 50px;
  text-align: center;
  background-color: #fff;
}
.control-item {
  flex: 1;
}

.isActive {
  color: var(--color-tint);
}
.isActive span {
  padding: 6px 4px;
  border-bottom: 3px solid var(--color-tint);
}
</style>
