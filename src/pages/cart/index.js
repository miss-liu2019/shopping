import React from 'react'
import CartList from './List'
import './Cart/index.css'
import Nav from './nav'
export default class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            checked: false,
        }
    }
    componentDidMount() {
        this.setState({
            title: '购物车'
        })
    }
    changeStatus() {
        const checked = !this.state.checked
        this.setState({
            checked
        })
    }

    render() {
        let goods = JSON.parse(localStorage.getItem("goods"))
        if (goods !== null) {
            return (
                <div className="cart">
                    <Nav />
                    {/* 商品 */}
                    {goods.map((item, index) => (
                        <CartList {...item} key={index} {...this.state} />
                    ))}
                    {/* 结算 */}
                    <div className="selectAll">
                        <p>
                            <input type="checkbox" defaultChecked={this.props.checked} onClick={this.changeStatus.bind(this)} />
                        </p>
                        <p>
                            去结算
                        </p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="cart">
                    <Nav />
                    <h1 className='null'>购物车为空</h1>
                </div>
            )
        }

    }
}