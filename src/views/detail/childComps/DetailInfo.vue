<template>
  <div class="desc-info" v-if="infoItem.itemInfo">
    <!-- {{InfoItem}} -->
    <div class="title">{{infoItem.itemInfo.title}}</div>
    <div
      class="price"
      :style="{ 'color': infoItem.itemInfo.discountBgColor }"
    >{{ '￥' + infoItem.itemInfo.highNowPrice}}</div>
    <div class="info">
      <span v-for="item in infoItem.columns" :key="item">{{item}}</span>
    </div>

    <div class="baozhang">
      <div v-for="item in title" :key="item" class="titles">
        <img src="~assets/img/detail/01.png" alt />
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    infoItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      title: ["延误必赔", "退货补运费", "全国包邮", "7天无理由退货"]
    };
  },
  components: {},
  methods: {},
  created() {},
  mounted() {
    // console.log(this)
  }
};
</script>
<style lang='scss' scoped>
.title {
  color: #000;
  padding: 10px 6px;
}
.desc-info {
  // height: 246px;
  border-bottom: 6px solid #eee;
}
.price {
  font-weight: bold;
  font-size: 20px;
  padding: 0 0 20px 10px;
  position: relative;
}
.price::after {
  content: "今日特价";
  font-size: 12px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  position: absolute;
  top: -6px;
  left: 90px;
  width: 60px;
  height: 20px;
  border-radius: 10px;
  background-color: #fc79db;
}
.info {
  display: flex;
  font-size: 13px;
  color: #999;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  padding-bottom: 8px;
}
.baozhang {
  display: flex;
  font-size: 12px;
  margin-top: 25px;
  padding: 0 8px 25px 8px;
  justify-content: space-between;
}
.baozhang img {
  display: block;
  height: 14px;
  width: 14px;
  margin-top: -1px;
}
.titles {
  display: flex;
  margin-right: 3px;
}
</style>
