import { requerst } from './requerst'

export function getDetail(id){
  return requerst({
    url:'/detail',
    params:{
      iid:id
    }
  })
}


export class Goods {
   constructor(columns,itemInfo){
       this.columns = columns;
       this.itemInfo = itemInfo.itemInfo;
   }
}

export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods
	}
}


export class Parms {
  constructor(itemParams){
     this.info = itemParams.info.set;
     this.rule = itemParams.rule.tables[0]
  }
}

export function getRecommend(){
  return requerst({
    url:'/recommend'
  })
}