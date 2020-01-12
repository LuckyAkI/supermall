<template>
  <div class="recomd">
    <div class="recomd-item"
     v-for="(item,index) in recommends"
     :key="index"
     >
      <a :href="item.link">
        <img v-lazy="item.image" alt />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
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
.recomd{
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
.recomd-item{
  font-size: 14px;
  text-align: center;
  flex: 1;
}
.recomd-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
