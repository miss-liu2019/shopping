import { action, runInAction, observable } from "mobx"
import { Getbrands, getbrandslists, getTenListData, getspeack, getproductdetail } from "../../api/index"
class BrandsStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    // 初始化品牌大全标题列表
    @observable brandslists = []

    // 初始化品牌标题对应的十大品牌
    @observable brandtitleslists = []

    // 初始化品牌标题对应的十大品牌的销量排行商品列表
    @observable getTenBrandLists = []

    // 初始化销量排行商品的评论
    @observable getcommentlists = []

    // 初始化品牌商品详情
    @observable getbrandsproductdetaillists = []


    // 定义获取品牌函数
    @action.bound getGetbrands() {
        Getbrands()
            .then(res => {
                // console.log(res);
                runInAction(() => {
                    this.brandslists = res.data.result
                })
            })
    }

    // 定义获取品牌列表函数
    @action.bound getbrandslists(op1, op2) {
        getbrandslists(op1, op2)
            .then(res => {
                // console.log(res);
                runInAction(() => {
                    this.brandtitleslists = res.data.result
                })
            })
    }

    // 定义品牌标题对应的十大品牌的销量排行商品列表函数
    @action.bound getTenListData(op1, op2) {
        getTenListData(op1, op2)
            .then(res => {
                // console.log(res);
                runInAction(() => {
                    this.getcommentlists = res.data.result
                })
            })

    }

    // 定义销量排行商品的评论函数
    @action.bound getspeack(op1) {
        getspeack(op1)
            .then(res => {
                // console.log(res)
                runInAction(() => {
                    this.getTenBrandLists = res.data.result
                })
            })
    }

    // 获取商品详情
    @action.bound getproductdetail(op1) {
        getproductdetail(op1)
            .then(res => {
                // console.log(res)
                runInAction(() => {
                    this.getbrandsproductdetaillists = res.data.result
                })
            })
    }
}
export default BrandsStore

