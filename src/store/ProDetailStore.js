import { observable, action, runInAction } from "mobx"
import { getProDetail, getProComment } from "../api/index"

export default class ProDetailStore {
    // 用于存储某一商品的详情
    @observable detail = {
        bjShop: "",
        categoryId: 0,
        productId: 0,
        productImg: "",
        productName: "",
        _id: ""
    }

    // 用于存储某一商品的评价
    @observable comments = [
        {
            category: 0,
            comContent: "",
            comFrom: "",
            comId: 0,
            comName: "",
            comTime: "",
            productId: 0,
            _id: ""
        }
    ]

    // 用于获取某一商品的详情
    @action.bound getDetail(id) {
        const _this = this
        getProDetail(id).then(res=>{
            runInAction(function(){
                _this.detail = res.data.result[0]
            })
        })
    }

    // 用于获取某一商品的评价
    @action.bound getComment(id) {
        const _this = this
        getProComment(id).then(res=>{
            runInAction(function(){
                _this.comments = res.data.result
            })
        })
    }

    constructor(Store) {
        this.Store = Store
    }
}