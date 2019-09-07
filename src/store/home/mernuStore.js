import { observable, action, runInAction} from 'mobx'
import {getindexmenu} from '../../api/index'

export default class getMenuList{
    constructor(RootStore){
    this.RootStore = RootStore
    }
    @observable menulList = [] //定义菜单列表
    @action getList(params={}){ //获取商品方法
        let _this =this 
        getindexmenu(params).then(res=>{ //调用接口获取数据
        // console.log(res)
            runInAction(function(){
            _this.menulList = res.data.result//获取的商品放入product
        })
        // console.log(_this.product)
        }).catch(err=>{
            console.log(err)
        })
    }
}