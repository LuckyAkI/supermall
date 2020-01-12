<template>
  <div id="home">
      <nav-tab class="home"><div slot="center">lucky-购物街</div></nav-tab>
       <tab-control
        v-show="offset" 
        @tabitem="tabitem" 
        class="tab-control" 
        :titles="['流行', '新款', '精选']" 
        ref="tabControl1"
        />
      <scroll  
      ref="tabtop" 
      class="wrap" 
      :probe-type="3" 
      @probetype="probetype" 
      :pull-up-load="true"
      @pullingUp="pullingUp"
      >
        <home-swiper :banners="banners" @imgLod="imgLod"/>
        <recom-mend :recommends="recommends" />
        <work-new />
        <tab-control 
        @tabitem="tabitem" 
        class="tab-control" 
        :titles="['流行', '新款', '精选']" 
        ref="tabControl2"
        />
        <goods-list :goodslist="goods[type].list" />
     </scroll>
     <bartop @click.native="tabtop" class="top" v-show="isShow" />
  </div>
</template>

<script>


import NavTab from "components/common/navtab/NavTab";
import TabControl from "components/content/TabControl/TabControl";
import GoodsList from "components/content/Goods/GoodsList";
import scroll from 'components/common/scroll/BetterScroll';
import bartop from 'components/content/tabtop/TabTop';

import homeSwiper from "./homeChild/homeSwiper";
import RecomMend from "./homeChild/Recommend";
import WorkNew from "./homeChild/WorkNew";

import { getHomedata, getHomelist } from "network/home.js";
export default {
  name: "",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      type: "pop",
      isShow:false,
      offsetTop:0,
      offset:false,
      saveY:0
    };
  },
  components: {
    NavTab,
    homeSwiper,
    RecomMend,
    WorkNew,
    TabControl,
    GoodsList,
    scroll,
    bartop
  },
  created() {
    // console.log(this)
    // 调用首页轮播图 横幅的以及数据方法
    this.getHomedata();
    // 调用list数据 并且传递不同的类型的数据
    this.getHomelist("sell");
    this.getHomelist("new");
    this.getHomelist("pop");
    // this.getHomelist('pop')
  },
  methods: {
              //  事件监听

    // 匹配点击那个类型获取 那个类型数据
    tabitem(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
      // console.log( this.$refs.tabControl2.count)
       this.$refs.tabControl2.count = index;
       this.$refs.tabControl1.count = index;
    },
     tabtop(){
        this.$refs.tabtop.scroll.scrollTo(0,0,600)
      },
  
    // 实时监测滚动位置
    probetype(p){
      //  console.log(-(p.y))
       //控制图标显隐
       this.isShow = -(p.y) > 700;
       //模拟判断tabControl显隐  
       this.offset = this.offsetTop < -(p.y)
    },
    // 获取offsetTop值
    imgLod(){
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    // 拉到底部加载一次数据 但是需要再下调用finishPullUp方法实现上拉加载
    pullingUp(){
      this.getHomelist(this.type)
    },
     

              // 网路请求
    
    // 轮播图等数据
    getHomedata() {
      getHomedata().then(res => {
        // console.log(res.recommend.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求列表数据
    getHomelist(type) {
      // 获取现在data中的page 并且+1
      let page = this.goods[type].page + 1;
      // console.log(page)
      getHomelist(type, page).then(res => {
        // console.log(res)
        // 获取当前类型的数据
        const newlist = res.data.list;
        // 把当前类型的数据的数组 push进去 请求的数据
        this.goods[type].list.push(...newlist);
        // push完数据 要当前page ＋1
        this.goods[type].page += 1;
        // console.log(this.goods[type]);
        this.$refs.tabtop.scroll.finishPullUp()
      });
    }
  },
  mounted() {
    // 监测到图片全部加载完 强制刷新一次 让better-scroll从新计算scrollHeight
     this.$bus.$on('Onimg',() => {
        this.$refs.tabtop.scroll.refresh()
     })
  },
   activated() {
    this.$refs.tabtop.scroll.refresh()
    console.log('activated')
    this.$refs.tabtop.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    // console.log('deactivated')
    // console.log(this.$refs.tabtop.scroll.y)
    this.saveY = this.$refs.tabtop.scroll.y
  },
};
</script>





<style scoped>

.home {
  background-color: var(--color-tint);
  color: aliceblue;
}
#home {
   height: 100vh;
   position: relative;
}
.tab-control {
  position: relative;
  z-index: 10;
}
.wrap{
   position: absolute;
   top:44px;
   bottom: 48px;
   left:0;
   right:0;
   overflow: hidden;
}
</style>
