<template>
  <div>
      <Swiper ref="swiper" v-if="banners.length">
        <Swiper-item v-for=" item in banners ">
          <a :href="item.link">
            <img :src="item.image" alt @load="imgLod" />
          </a>
        </Swiper-item>
      </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper/index.js";

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  name: "",
  data() {
    return {};
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLod(){
      this.$emit('imgLod')
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
</style>
