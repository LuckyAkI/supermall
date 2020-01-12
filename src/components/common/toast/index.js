import Toast from './Toast.vue'
const obj = {}

obj.install = function(Vue) {

  //① 创建一个构造器
  const toastConstructor = Vue.extend(Toast);
  
  //② new的方式创建出来组件对象
  const toast = new toastConstructor();
  
  // ③ 将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // ④ toast.$el 对应就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

export default obj