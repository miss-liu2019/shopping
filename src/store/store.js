import MenuStore from './home/mernuStore'
import MoneyControlStore from './home/moneyCotrolStore'
import BrandsStore from "../store/brand/brandstore"
import carbageStore from "./catgory/carbagestore"
import CategoryStore from './CategoryStore'
import ProListStore from './home/ProListStore'
import ProDetailStore from './ProDetailStore'
import CouponStore from './CouponStore'

// 毕
import ProductStore from './overSeaDiscount/index'
import DiscountProductStore from './DomesticDiscount/index'
import SaveMoneyDetailStore from './overSeaDiscount/detail/detail'
import DomesticDiscountDetailStore from './DomesticDiscount/detail/detail'

// 陶
import siteNav from './navigate/navigateStore'

// 登入
import loginStore from "./login/loginstore"

class Store {
    constructor() {
        this.MenuStore = new MenuStore(this)
        this.MoneyControlStore = new MoneyControlStore(this)

        // 品牌大全
        this.BrandsStore = new BrandsStore(this)

        // 啊坤
        this.carbageStore = new carbageStore(this)

        // 分类页
        this.CategoryStore = new CategoryStore(this)

        // 商品展示页
        this.ProListStore = new ProListStore(this)

        // 商品详情页
        this.ProDetailStore = new ProDetailStore(this)

        // 优惠劵页
        this.CouponStore = new CouponStore(this)

        // 毕
        this.ProductStore = new ProductStore(this)
        this.DiscountProductStore = new DiscountProductStore(this)
        this.SaveMoneyDetailStore = new SaveMoneyDetailStore(this)
        this.DomesticDiscountDetailStore = new DomesticDiscountDetailStore(this)

        // 陶
        this.siteNav = new siteNav(this)

        // 登入
        this.loginStore = new loginStore(this)
    }
}
export default new Store()