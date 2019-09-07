import { observable, action, runInAction } from 'mobx'
import { getSiteNav } from '../../api/index'


export default class siteNav {
    constructor(RootStore) {
        this.RootStore = RootStore
    }
    @observable siteNav = []
    @action getList(params = {}) {
        let _this = this
        getSiteNav(params).then(res => {
            runInAction(function () {
                _this.siteNav = res.data.result
            })
        }).catch(err => {
            console.log(err)
        })
    }
}
