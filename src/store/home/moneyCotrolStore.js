import { observable, action, runInAction} from 'mobx'
import {getmoneyctrl} from '../../api/index'
export default class getMoneyContrl{
    constructor(RootStore){
    this.RootStore = RootStore
    }
    @observable moneyContrlList = [] //定义菜单列表
    @action getMoneyControlList(params={}){ //获取商品方法
        let _this =this 
        getmoneyctrl(params).then(res=>{ //调用接口获取数据
        // console.log(res)
            runInAction(function(){
            _this.moneyContrlList = res.data.result//获取的商品放入product
        })
        // console.log(_this.product)
        }).catch(err=>{
            console.log(err)
        })
    }
}