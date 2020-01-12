export default {
  addCount(state,shop){
    shop.count += 1;
  },
  shopPush(state,paylod){
    paylod.count = 1;
    paylod.checked = true; 

    state.cartList.push(paylod);
  }
}