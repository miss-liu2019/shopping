import { observable, action, runInAction} from 'mobx'
import {getDiscount} from '../../api/index'
// import {Route,withRouter} from 'react-router-dom'

export default class DiscountProductStore{
    constructor(RootStore){
        this.RootStore = RootStore
    }
    //定义商品
    @observable product = [] 
     //获取商品方法
    @action getList(params={}){
        let _this =this 
         //调用接口获取数据
        getDiscount(params).then(res=>{
            runInAction(function(){
                //获取的商品放入product
                _this.product = res.data.result
            })
        }).catch(err=>{
            console.log(err)
        })
    }
}

