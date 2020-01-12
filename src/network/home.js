import { requerst } from "./requerst";

export function getHomedata(){
    return requerst({
      url:'/home/multidata'
    })
}

export function getHomelist(type,page){
  return requerst({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}