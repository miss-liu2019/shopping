import { observable, action, runInAction } from "mobx"
import { getCategoryName, getProList } from '../../api/index'

export default class ProListStore {
    // 用于存储当前浏览商品的分类
    @observable category = {
        categoryId: 225,
        category: "",
        titleId: 0,
        _id: "5806e6ea48985cb016b082e9",
        __v: 0
    }

    // 用于存储当前分类下商品的总页数/当前页的商品信息等
    @observable proInfo = {
        pagesize: 0,
        totalCount: 0,
        result: [
            {
                brandId: 0,
                brandName: "初始化",
                brandTitleId: 0,
                categoryId: 0,
                productCom: "评论(0)",
                productId: 0,
                productImg: "",
                productName: "初始化",
                productPrice: "￥100.00",
                productQuote: "报价(0)",
                _id: 0
            }
        ]
    }

    // 用于获取当前浏览商品的分类
    @action.bound getCateName(id = 20) {
        const _this = this
        getCategoryName(id).then(res => {
            runInAction(function () {
                _this.category = res.data.result[0]
            })
        })
    }

    // 用于获取当前分类下的商品
    @action.bound getPro(categoryid, pageid) {
        const _this = this
        getProList(categoryid, pageid).then(res => {
            runInAction(function () {
                _this.proInfo = res.data
            })
        })
    }
}