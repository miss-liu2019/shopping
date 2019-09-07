import React from 'react'
import '../../assets/css/login/index.css'
import Nav from "./nav"

import { observer, inject } from "mobx-react"
@inject('loginStore')
@observer

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""

        }
    }
    handleusername(e) {
        this.setState({
            username: e.target.value
        })

    }
    handlepassword(e) {
        this.setState({
            password: e.target.value
        })

    }

    // onFormSubmit(e) {

    //     e.preventDefault()
    //     console.log(localStorage.getItem("qftoken"));
    //     console.log(this.props);

    //     const { loginStore } = this.props
    //     let data = {
    //         username: this.state.username,
    //         password: this.state.password
    //     };
    //     loginStore.login(data)
    //     if (localStorage.getItem("qftoken") !== null) {
    //         this.props.history.push("/");
    //     }
    //     else {
    //         console.log(123);

    //         loginStore.successToast()
    //     }
    // }
    submit() {
        const { loginStore } = this.props
        let data = {
            username: this.state.username,
            password: this.state.password
        };
        loginStore.login(data)
        const _this = this
        setTimeout(function () {
            if (localStorage.getItem("qftoken") !== null) {
                loginStore.successToast1()
                _this.props.history.push("/");
            }
            else {
                loginStore.successToast()
            }
        }, 800)


    }
    render() {
        // console.log(this.props);

        return (
            <div>
                <Nav />
                <div className='login'>

                    <form >
                        <input type='text' placeholder='请输入用户名' value={this.state.username} onChange={this.handleusername.bind(this)} />
                        <input type='text' placeholder='请输入密码' value={this.state.password} onChange={this.handlepassword.bind(this)} />
                        <input type="submit" value="提交" className='btn_login' onClick={this.submit.bind(this)} />
                    </form>
                    <p>为方便您及时查询订单，需要验证您的用户名和密码</p>
                </div>

            </div>
        )
    }
}
export default Login