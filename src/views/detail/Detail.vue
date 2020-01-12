<template>
  <div class="detail">
    <detail-title @indexClick="indexClick" ref="title" />
     
     <!-- {{$store.state.constList}} -->

    <scroll class="content" ref="scroll" @probetype="probetype">
      <detail-swiper :SwiperImg="swiperImg" />
      <detail-info :info-item="iteminfo" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @Onimg="Onimg" />
      <detail-parmas ref="parmas" :parmas-info="parmsInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :goodslist="recommends" />
    </scroll>
    <detail-bottom-bar @ShopCart="ShopCart" />
    <bartop @click.native="tabtop" v-show="isShow" />
  </div>
</template>

   
<script>
import DetailTitle from "./childComps/DetailTitle";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailInfo from "./childComps/DetailInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParmas from "./childComps/DetailParmas";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";

import { BackTopMixin } from "common/mixin";
import bartop from "components/content/tabtop/TabTop";
import GoodsList from "components/content/Goods/GoodsList";
import scroll from "components/common/scroll/BetterScroll";

import {
  getDetail,
  Goods,
  Shop,
  Goodss,
  Parms,
  getRecommend
} from "network/detail";

export default {
  name: "Detail",
  mixins: [BackTopMixin],
  data() {
    return {
      id: null,
      swiperImg: [],
      iteminfo: {},
      shop: {},
      detailInfo: {},
      parmsInfo: {},
      commentInfo: {},
      recommends: [],
      tops: [],
      couns: []
    };
  },
  components: {
    DetailTitle,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParmas,
    DetailCommentInfo,
    GoodsList,
    scroll,
    DetailBottomBar,
    bartop
  },
  methods: {
    // detail请求数据方法
    getDetail(id) {
      getDetail(id).then(res => {
        // console.log(res);

        let data = res.result;

        // 1请求轮播数据
        this.swiperImg = data.itemInfo.topImages;
        // 2请求商品描述数据
        this.iteminfo = new Goods(data.columns, data);

        // 3.获取店铺信息
        this.shop = new Shop(data.shopInfo);

        // 4.获取商品信息
        this.detailInfo = data.detailInfo;

        // 5.商品尺寸和质量数据
        this.parmsInfo = new Parms(data.itemParams);

        // 6.保存评论数据
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },

    //推荐数据方法
    getRecommend() {
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list;
      });
    },

    // 加载完图片让better-scrol从新计算高度
    Onimg() {
      this.$refs.scroll.scroll.refresh();

      // 获取参数 评论 推荐 offsetTop值并且保存
      this.tops = [];
      this.tops.push(0);
      this.tops.push(this.$refs.parmas.$el.offsetTop);
      this.tops.push(this.$refs.comment.$el.offsetTop);
      this.tops.push(this.$refs.recommend.$el.offsetTop);
      this.tops.push(Number.MAX_VALUE);
    },

    //点击对应的参数 跳转对应的位置
    indexClick(index) {
      // console.log(index)
      this.$refs.scroll.scroll.scrollTo(0, -this.tops[index], 500);
    },

    //实时监听滚动位置联动对应标题
    probetype(p) {
      // console.log(p)
      const Y = -p.y;

      //  console.log(Y)
      for (let i = 0; i < this.tops.length - 1; i++) {
        if (this.couns !== i && this.tops[i] < Y && this.tops[i + 1] > Y) {
          console.log(i);
          // couns那个判断能不频繁 检测  有利于性能
          this.couns = i;
          this.$refs.title.countIndex = this.couns;
        }
      }

      this.isShow = -p.y > 700;
    },

    // tabtop(){
    // 使用混合
    //   console.log(this.$refs.scroll.scroll)
    //   this.$refs.scroll.scroll.scrollTo(0,0,600)
    // },

    // 监听添加购物车点击
    ShopCart(){
      // console.log('添加购物车')
      // const itemInfo = iteminfo.itemInfo;
      const ShopObj = {}
      ShopObj.img =  this.iteminfo.itemInfo.topImages[0];
      ShopObj.title = this.iteminfo.itemInfo.title;
      ShopObj.desc = this.iteminfo.itemInfo.desc;
      ShopObj.price = this.iteminfo.itemInfo.lowNowPrice;
      ShopObj.id = this.id;
      // console.log(ShopObj)
       
      this.$store.dispatch('addCart',ShopObj).then(res => {
        console.log(res)
      // 购物车弹窗
      this.$toast.show(res,1500)

      })
    }
  },
  created() {
    this.id = this.$route.params.id;
    // 请求detail数据
    this.getDetail(this.id);

    // 推荐数据
    this.getRecommend();
  },

  mounted() {}
};
</script>


<style lang='scss' scoped>
.detail {
  position: relative;
  background-color: #fff;
  z-index: 20;
  height: 100vh;
}
.content {
  height: calc(100% - 44px - 54px);
}
</style>
