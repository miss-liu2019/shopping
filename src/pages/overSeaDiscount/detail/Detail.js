import React from 'react'
import { observer, inject } from 'mobx-react';
import Header from '../common/header'
import '../../../assets/css/reset.css'
import "../css/index.css"
@inject("SaveMoneyDetailStore")
@observer
class Detail extends React.Component{
    componentWillMount(){
        const id = this.props.location.search.substring(4)
        this.props.SaveMoneyDetailStore.getList({productid:id})
    }
    //添加到购物车事件 放入localStorage
    goshopping(productName,productPrice,imgSrc){
        if (localStorage.getItem('goods') === null) {
            localStorage.setItem('goods', '[]')
        }
            let shop_arr = JSON.parse(localStorage.getItem("goods"))
            let productCart = {};
            productCart.productName = productName;
            productCart.productPrice = productPrice;
            productCart.imgSrc = imgSrc;
            shop_arr.push(productCart);
            localStorage.setItem("goods",JSON.stringify(shop_arr))      
    }
    render(){
        //获取商品信息,从store中拉过的数据
        const {product} = this.props.SaveMoneyDetailStore
        let lis = ""
        // 正则获取图片的src
        var imgReg = /<img.*?(?:>|\/>)/gi; 
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
       try{
            lis = product.map((item)=>{
                let arr = (item.productImgSm).match(imgReg)
                let imgSrc= ""//用来接收src
                for (var i = 0; i < arr.length; i++) {
                    var src = arr[i].match(srcReg);
                    //获取图片地址
                    if(src[1]){
                     imgSrc = src[1].split(';')[1]
                     imgSrc = imgSrc.substring(7)
                    }
                }
                return(
                   <div key={item._id}>
                        <p className="productName2">{item.productName}</p>
                        <p className="productTime">{item.productFrom}  {item.productTime} {item.productTips}</p>
                        <div className="productInfo">
                            <p className="infoLeft">{item.productInfo2}</p>
                            <img src={imgSrc} className="infoRight" />
                        </div>
                        <img src = {imgSrc} />
                        <ul>
                            <li dangerouslySetInnerHTML={{__html:item.productCity}}>
                            </li>
                        </ul>
                        <button className="goshopping" onClick = {this.goshopping.bind(this,item.productName,item.productPinkage,imgSrc)} >添加到购物车</button>
                        <div dangerouslySetInnerHTML={{__html:item.productComment}}>
                        </div>
                   </div> 
                )
            })
       }catch(e){}
        return(
            <div>
                <Header />
                {lis}
            </div>
        )
    }
}
export default Detail