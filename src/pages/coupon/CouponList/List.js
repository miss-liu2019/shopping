import React from 'react'

export default class List extends React.Component {
    render() {
        return (
            <div className="coupon_item">
                <div className="item_left" dangerouslySetInnerHTML={{__html:this.props.couponProductImg}}>
                     
                </div>
                <div className="item_right">
                    <p>{this.props.couponProductName}</p>
                    <p>{this.props.couponProductPrice}</p>
                    <p>{this.props.couponProductTime}</p>
                </div>
            </div>
        )
    }
}