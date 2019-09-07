import React from 'react'
import { inject, observer } from 'mobx-react'
import "../../../assets/css/Coupon/index.css"
import List from "./List"
import Nav from './nav'
@inject('CouponStore')
@observer

class CouponList extends React.Component {
    componentWillMount() {
        const { getCouponList } = this.props.CouponStore
        const id = this.props.location.search.substr(4)
        getCouponList(id)
    }

    render() {
        const { couponList } = this.props.CouponStore
        return (
            <div>
                <Nav/>
                {couponList.map((item, index) => (
                    <List {...item} key={index} />
                ))}
            </div>
        )
    }
}

export default CouponList