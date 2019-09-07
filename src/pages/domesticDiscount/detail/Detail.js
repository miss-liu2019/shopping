import React from 'react'
import { observer, inject } from 'mobx-react';
import Header from '../common/header'
import '../css/discount.css'
@inject("DomesticDiscountDetailStore")
@observer

class Detail extends React.Component {
    componentWillMount() {
        //获取指定的id传入接口调用执行的详情页
        const id = this.props.location.search.substring(4)
        this.props.DomesticDiscountDetailStore.getList({ productid: id })
    }
    //添加到购物车事件,放入到localStorage
    goshopping(productName, productPrice, imgSrc) {
        if (localStorage.getItem('goods') === null) {
            localStorage.setItem('goods', '[]')
        }
        let shop_arr = JSON.parse(localStorage.getItem("goods"))
        let productCart = {};
        productCart.productName = productName;
        productCart.productPrice = productPrice;
        productCart.imgSrc = imgSrc;
        shop_arr.push(productCart);
        localStorage.setItem("goods", JSON.stringify(shop_arr))
    }
    render() {
        let { product } = this.props.DomesticDiscountDetailStore
        let lis = ""
        //正则获取图片的src
        var imgReg = /<img.*?(?:>|\/>)/gi;
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        try {
            lis = product.map((item) => {
                let arr = (item.productImg).match(imgReg)
                // console.log(arr)
                let imgSrc = ""//用来接收src
                for (var i = 0; i < arr.length; i++) {
                    var src = arr[i].match(srcReg);
                    //获取图片地址
                    if (src[1]) {
                        imgSrc = src[1]
                    }
                }
                return (
                    <div key={item._id} >
                        <p className="productName2">{item.productName}</p>
                        <p className="productPrice">{item.productPrice}</p>
                        <p className="productTime">{item.productFrom} {item.productTime} {item.productTips}</p>
                        <div className="productInfos">
                            {item.productInfo}
                        </div>
                        <img src={imgSrc} className="imgs" />
                        <button className="goshopping" onClick={this.goshopping.bind(this, item.productName, item.productPrice, imgSrc)}>添加到购物车</button>
                        <div dangerouslySetInnerHTML={{ __html: item.productComment }}></div>
                    </div>
                )
            })
        } catch (e) { }
        return (
            <div>
                <Header />
                {lis}
            </div>
        )
    }
}
export default Detail