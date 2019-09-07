import React from 'react'
import Header from './common/header'
import { observer, inject } from 'mobx-react';
// import './css/index.css'
import '../../assets/css/home/home.css'
import Sorter from './sorter/Sorter'
import PublicFooter from '../PublicFooter'
@inject("ProductStore")
@observer
class SaveMoney extends React.Component {
    componentWillMount() {
        //调用获取数据方法
        this.props.ProductStore.getList()
    }
    //进入详情页方法
    goDetail(productId) {
        //接收productId传值到接口,获取指定的详情页
        this.props.history.push('/overSeaDiscount/detail?id=' + productId)
    }
    render() {
        //获取商品信息,从store中拉过的数据
        const product = this.props.ProductStore.product.result
        let lis = ""
        // 正则获取图片的src
        var imgReg = /<img.*?(?:>|\/>)/gi;
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        try {
            lis = product.map((item) => {
                let arr = (item.productImgSm).match(imgReg)
                let imgSrc = ""//用来接收src
                for (var i = 0; i < arr.length; i++) {
                    var src = arr[i].match(srcReg);
                    //获取图片地址
                    if (src[1]) {
                        imgSrc = src[1].split(';')[1]
                        imgSrc = imgSrc.substring(7)
                    }
                }
                return (
                    <li key={item._id} onClick={this.goDetail.bind(this, item.productId)} >
                    <div className='img_container'>
                        <img src={imgSrc} />
                    </div>
                    <div className='recommend_text'>
                        <p> {item.productName} <b>{item.productPinkage}</b> </p>
                        <p>
                            <span>{item.productFrom} | {item.productTime}</span>
                            <span>{item.productComCount}</span>
                        </p>
                    </div>
                </li>
                )
            })
        } catch (e) { }
        return (
            <div className='recommend'>
                <Header />
                <ul>
                   {lis}
                </ul>
               
                {/* 分页器 */}
                <Sorter />
                {/* 底部 */}
                <PublicFooter />
            </div>
        )
    }
}
export default SaveMoney