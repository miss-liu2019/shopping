import React from 'react'
import { withRouter } from "react-router-dom"

class CartList extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 1
        }
    }

    getLess(name) {
        if (this.state.num > 0) {
            const num = this.state.num - 1
            this.setState({
                num
            })
        } else {
            const goods = JSON.parse(localStorage.getItem("goods"))
            let _index = 0
            goods.forEach((item, index) => {
                if (item.productName === name) {
                    _index = index
                }
            })
            goods.splice(_index, 1)
            localStorage.setItem("goods", JSON.stringify(goods))
            this.props.history.go(0)
        }
    }
    getMore() {
        const num = this.state.num + 1
        this.setState({
            num
        })
    }


    render() {
        // console.log(this.props);

        const goods = this.props
        return (
            <div className="cart_item">
                <div className="item_middle" dangerouslySetInnerHTML={{ __html: goods.productImg }}>

                </div>
                <div className="item_right">
                    <p>{goods.productName}</p>
                    <p>
                        <b>{"￥" + goods.productPrice + ".00"}</b>
                        <b>
                            <button onClick={this.getLess.bind(this, goods.productName)}>-</button>
                            <span className='price'>{this.state.num}</span>
                            <button onClick={this.getMore.bind(this)}>+</button>
                        </b>
                    </p>
                </div>
            </div>
        )
    }
}
export default withRouter(CartList)