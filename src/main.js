import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.prototype.$bus = new Vue()

// 封装弹窗
import Toast from 'components/common/toast'
Vue.use(Toast)

// fastclcik 解决移动延迟300ms
import FastClick from 'fastclick'
FastClick.attach(document.body);


// 图片懒加载
import Lazyload from 'vue-lazyload';
Vue.use(Lazyload,{
 loading:require('./assets/img/lazyload-loadding/loadding.jpg')
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
