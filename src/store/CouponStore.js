import { observable, action, runInAction } from "mobx"
import { getCouponTitles, getCouponLists } from "../api/index"

export default class CouponStore {
    // 用于存储优惠劵分类
    @observable couponTitle = [
        {
            "_id": "",
            "couponId": 0,
            "couponImg": "",
            "couponLink": "",
            "couponTitle": ""
        }
    ]

    // 用于存储优惠劵列表
    @observable couponList = [
        {
            couponId: 0,
            couponProductId: 0,
            couponProductImg: "",
            couponProductName: "",
            couponProductPrice: "",
            couponProductTime: "",
            _id: ""
        }
    ]
    
    // 用于获取优惠劵分类
    @action.bound getCouponTitle(){
        const _this = this
        getCouponTitles().then(res=>{
            runInAction(function(){
                _this.couponTitle = res.data.result
            })
        })
    }

    // 用于获取优惠劵列表
    @action.bound getCouponList(couponid){
        const _this = this
        getCouponLists(couponid).then(res=>{
            runInAction(function(){
                _this.couponList = res.data.result
            })
        })
    }
}