import { action, runInAction, observable } from "mobx"
import { login } from "../../api/index"
import { Toast } from 'antd-mobile';

class BrandsStore {
    constructor(rootStore) {
        this.rootStore = rootStore
    }
    // 登入
    @action.bound login(op1, op2) {
        login(op1, op2)
            .then(res => {
                if (res.data.state) {
                    //登入成功 将token保存到localstorage
                    let qftoken = res.data.token;
                    localStorage.setItem("qftoken", qftoken);
                    //跳转到欢迎页面
                } else {
                }
            })

    }
    @action.bound successToast() {
        Toast.success('请检查您的用户名或密码!!!', 1);
    }
    @action.bound successToast1() {
        Toast.success('正在登入，请稍后', 1);
    }
}
export default BrandsStore

