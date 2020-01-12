export default {
  addCart(context,paylod){
    //  console.log(this,arguments)
    // 判断constList是否有改商品 如果有返回改商品  
    // find遍历数组中每一项成员的id是否等于要新添加payload.id  
    // 因为商品id是唯一表示 也是做购物车必须传进来
    // 如果有返回改商品做下一步判断 没有返回undefined 也做下一步判断
   return new Promise( (resolve,reject) => {
    const shop = context.state.cartList.find( item => item.id === paylod.id )

    // 如果有改商品让就给该商品添加一个count计算数量
     if(shop){
       context.commit('addCount',shop)
       resolve('加入购物车成功')
     }else{
      // 如果没有就让传过来的商品就是payload，push改商品到shopList中并且默认 count为1
      context.commit('shopPush',paylod)
      resolve('加入购物车成功')
     }
   })
  }
}