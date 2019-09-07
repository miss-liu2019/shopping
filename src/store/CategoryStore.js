import { observable, action, runInAction } from "mobx"

import { getCategoryTitle, getCategory } from ".././api/index"


export default class CategoryStore {
    // 用于存储分类标题
    @observable titles = [
        {
            "_id": "5687s7a810fa7s7a8x6da272",
            "titleId": 233,
            "title": "初始化"
        }
    ]

    // 用于存储分类列表
    @observable content = [
        {
            "categoryId": 996,
            "category": "初始化",
            "titleId": 996,
            "_id": "56877a81s0fa7s71a8x6da72",
            "__v": 0
        }
    ]

    // 用于获取分类标题
    @action.bound getCateTitle() {
        const _this = this
        getCategoryTitle().then(res => {
            runInAction(function () {
                _this.titles = res.data.result
            })
        })
    }

    // 用于获取分类列表
    @action.bound getCate(id) {
        const _this = this
        getCategory(id).then(res => {
            runInAction(function () {
                _this.content = res.data.result
            })
        })
    }

    constructor(Store) {
        this.Store = Store
    }
}

