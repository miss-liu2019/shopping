import { observable, action, runInAction } from "mobx"
import { Getlist, Product } from "../../api/index"
class carbageStore {
    constructor(Rootstore) {
        this.Rootstore = Rootstore
    }
    // tab栏
    @observable titlelist = []
    // 商品列
    @observable goods = []

    @action.bound shoplist() {
        Getlist()
            .then(res => {
                runInAction(
                    () => {
                        this.titlelist = res.data.result
                    }
                )
            })
    }

    @action.bound Getproduct(id) {
        Product(id)
            .then(res => {
                runInAction(() => {
                    this.goods = res.data.result
                })
            })
    }

}

export default carbageStore