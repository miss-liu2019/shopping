import { observable, action, runInAction} from 'mobx'
import {getDomesticDiscountDetail} from '../../../api/index'

export default class DomesticDiscountDetailStore{
    constructor(RootStore){
        this.RootStore = RootStore
    }
    //定义商品
    @observable product = [{ }] 
    //获取商品方法
    @action getList(params={}){ 
        let _this =this 
        //调用接口获取数据
        getDomesticDiscountDetail(params).then(res=>{ 
            runInAction(function(){
                //获取的商品放入product
                _this.product = res.data.result
            })
        }).catch(err=>{
            console.log(err)
        })
    }
}

