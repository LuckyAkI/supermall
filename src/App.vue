<template>
  <div id="app">
    <min-tab-bar></min-tab-bar>
   <keep-alive exclude="Detail">
      <router-view />
   </keep-alive>
  </div>
</template>
<script>
import minTabBar from "components/content/MintabBar/MintabBar";
export default {
  name: "App",
  components: {
    minTabBar
  }
 
};
</script>

<style>
   @import "assets/css/base.css";
</style>
