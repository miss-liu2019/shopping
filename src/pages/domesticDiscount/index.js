import React from 'react'
import Header from './common/header'
import { observer, inject } from 'mobx-react';
import './css/discount.css'
@inject("DiscountProductStore")
@observer
class Discount extends React.Component {

    componentWillMount() {
        //调用获取数据方法
        this.props.DiscountProductStore.getList()
    }
    //进入详情页方法,传递产品ID
    goDetail(productId) {
        console.log(productId)
        this.props.history.push('/DomesticDiscount/detail?id=' + productId)
    }
    render() {
        //获取商品信息,从store中拉过的数据
        let product = this.props.DiscountProductStore.product
        let lis = ""
        //正则获取图片的src
        var imgReg = /<img.*?(?:>|\/>)/gi;
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        try {
            lis = product.map((item) => {
                let arr = (item.productImg).match(imgReg)
                let imgSrc = ""//用来接收src
                for (var i = 0; i < arr.length; i++) {
                    var src = arr[i].match(srcReg);
                    //获取图片地址
                    if (src[1]) {
                        imgSrc = src[1]
                    }
                }
                return (
                    <div key={item.productId} className='container' onClick={this.goDetail.bind(this, item.productId)}>
                        <img src={imgSrc} className="img" />
                        <div className="">
                            <p className="DisproductName">{item.productName}</p>
                            <p className="productPrice">{item.productPrice}</p>
                            <p>{item.productFrom} | <span>{item.productTime}</span></p>
                        </div>
                    </div>
                )
            })
        } catch (e) { }
        return (
            <div>
                <Header />
                <div className="box">{lis}</div>
            </div>
        )
    }
}
export default Discount