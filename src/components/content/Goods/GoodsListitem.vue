<template>
  <!-- {{goodListitem}} -->
  <div class="goods-item" @click="detailClick">
    <img v-lazy="showImag" alt @load="Onimg" />
    <div class="goods-info">
      <p>{{goodListitem.title}}</p>
      <span class="price">{{goodListitem.price}}</span>
      <span class="collect">{{goodListitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    goodListitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    showImag(){
      return this.goodListitem.image || this.goodListitem.show.img
    }
  },
  components: {},
  methods: {
    Onimg() {
      this.$bus.$emit("Onimg");
    },
    detailClick() {
      // console.log(this.goodListitem)
      // console.log(this.$route)
      //  if(this.$route.path){
      //     return this.$router.replace('/detail/' + this.goodListitem.iid)
      //  }
      // if(this.$route.path === undefined){
      //  this.router.push(this.goodListitem.item_url)
      // }
      this.$router.push('/detail/' + this.goodListitem.iid)
    }
  },
  created() {},
  mounted() {
    // console.log(this)
  }
};
</script>
<style lang='scss' scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
