<template>
  <div>
    <transition name="toast">
      <div class="toast" v-show="isShow">
        <div>{{message}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      message:'',
      isShow:false
    };
  },
  components: {},
  methods: {
    show(message,time = 1500){
      // console.log(message)
      this.message = message;
      this.isShow = true;
      
     const t = setInterval(() => {
        clearInterval(t)
        this.message = '';
        this.isShow = false;
      }, time);
     
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang='scss' scoped>
.toast {
  width: 150px;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 15px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  z-index: 999;
}
.toast-enter{
  opacity: 0;
}
.toast-leave-active,
.toast-enter-active{
  transition: all 0.5s;
}
.toast-leave{
  opacity: 1;
}
.toast-leave-active{
  opacity: 0;
}

</style>
