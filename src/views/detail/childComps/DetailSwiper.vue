<template>
  <div v-if="SwiperImg">
    <swiper class="swiper-item">
      <swiper-item v-for="item in SwiperImg" :key="item">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "",
  props: {
    SwiperImg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.swiper-item {
  height: 300px;
  margin-top: 6px;
}
</style>
