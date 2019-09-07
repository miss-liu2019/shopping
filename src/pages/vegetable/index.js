import React from 'react'
// import { Icon } from 'antd-mobile'
import { observer, inject } from "mobx-react"
import TabExample from '../../components/vegetable/garbage'
import '../../assets/css/carbage/header.css'
import '../../assets/css/carbage/public.css'
import Nav from './nav'
@inject('carbageStore')
@observer
class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            titleid: ''
        }
    }
    // 获取tab栏
    componentDidMount() {
        this.props.carbageStore.shoplist()
    }
    // 获取商品
    getproduct = (id) => {
        const { carbageStore } = this.props
        carbageStore.Getproduct(id)
    }
    render() {
        let { titlelist } = this.props.carbageStore
        let { goods } = this.props.carbageStore

        return (
            <div>
                {/* 顶部 */}
                <div className='header'>
                  <Nav/>
                    {/* 滑动tab栏 */}
                    <div className='list'>
                        <TabExample />
                        <div className='right'></div>
                    </div>
                </div>
                {/* 商品展示 */}
                <div className='body'>
                    <ol>
                        {goods.map((item) => {
                            return (
                                <li className="body_case" key={item.productId} >
                                    <div className='body_img' dangerouslySetInnerHTML={{ __html: item.productImg }}></div>
                                    <div className="body_list">
                                        <div className='body_list_title' dangerouslySetInnerHTML={{ __html: item.productName }}></div>
                                        <div className="body_list-price" dangerouslySetInnerHTML={{ __html: item.productPrice }}></div>
                                        <div className="body_list-coupon" dangerouslySetInnerHTML={{ __html: item.productCoupon }}></div>
                                        <div className="body_list-coupon" dangerouslySetInnerHTML={{ __html: item.productHref }}></div>
                                        <div className="" dangerouslySetInnerHTML={{ __html: item.productRemain }}></div>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Header