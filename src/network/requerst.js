import axios from 'axios'

export function requerst(config){
  const instance = axios.create({
    // 备用
    baseURL:'http://106.54.54.237:8000/api/hy',
    // baseURL:'http://123.207.32.32:8000/api/hy',
    timeout:5000
  })
   
  // 请求拦截器
  // instance.interceptors.request.use(
  //    res => {
  //      return res.data
  //    }
  // )

  // 响应拦截器  过滤了不需要的数据
  instance.interceptors.response.use(
    res => {
      return res.data
    },
    err => console.log('!!!!!!拦截响应失败')
  )


  return instance(config)

}