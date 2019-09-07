import React from 'react'
import { inject, observer } from 'mobx-react'
import Title from './Title'
import Nav from './nav'
import "../../../assets/css/Coupon/index.css"

@inject('CouponStore')
@observer

class CouponTitle extends React.Component {
    componentWillMount() {
        const { getCouponTitle } = this.props.CouponStore
        getCouponTitle()
    }

    render() {
        const { couponTitle } = this.props.CouponStore
        return (
            <div>
                <Nav/>
                <div className="title_container">
                    {couponTitle.map((item, index, array) => (
                        <Title {...item} key={index} index={index} />
                    ))}
                </div>
            </div>
        )
    }
}

export default CouponTitle