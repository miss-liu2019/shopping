import React from "react"
import { observer, inject } from "mobx-react"
import { Toast } from 'antd-mobile';
import Nav from './nav2'
import "../../assets/css/brands/index.css"
@inject('BrandsStore')
@observer

class Comments extends React.Component {
    constructor() {
        super()
        this.state = { title: '商品详情' }
    }
    componentDidMount() {
        const productid = this.props.location.search.split("&")[0].substr(4)
        const { BrandsStore } = this.props
        BrandsStore.getspeack(productid)
        BrandsStore.getproductdetail(productid)

    }
    successToast() {
        Toast.success('加入购物车成功!!!', 1);
    }
    back() {
        this.props.history.go(-1)
    }
    onchange() {
        this.props.history.go(-1)
    }

    render() {
        let { getTenBrandLists, getbrandsproductdetaillists } = this.props.BrandsStore
        const price = this.props.location.search.split("&")[1].substr(6)
        return (
            <div>
                <Nav />
                <ul className="ul">
                    {getbrandsproductdetaillists.map(item => {
                        let imgscr = item.productImg.split("=")[1].split(" alt")[0]
                        var regex = /"/g
                        let imgsrc1 = imgscr.replace(regex, '')

                        return (
                            <li key={item._id} >
                                <div className='img_box'>
                                    <img src={imgsrc1} alt="" />
                                </div>
                                <div className='pro_msg'>
                                    <h2 > {item.productName}</h2>
                                    <h3>商品价格：<span>￥{price}元</span></h3>
                                </div>
                            </li>
                        )
                    })}
                </ul >
                <h3 className='pro_appraise'>商品评论</h3>
                <ul style={{ overflow: "hiddle" }}>
                    {
                        getTenBrandLists.map(item => {
                            return (
                                <li style={{ marginTop: "10px" }} key={item._id}>
                                    <p className='user_info'><span>{item.comName}</span><span>{item.comTime}</span></p>
                                    <div className='text'>{item.comContent}</div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='pro_footer'>
                    <button onClick={this.successToast.bind(this)}>加入购物车</button>
                </div>
            </div>
        )
    }
}
export default Comments