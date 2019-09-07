import React from 'react'
import { inject, observer } from 'mobx-react'
import '../../assets/css/ProComment/index.css'
import Comment from "./Comment"
import { Link } from 'react-router-dom'
import { Toast, WhiteSpace, WingBlank, Button, } from 'antd-mobile';
import Nav from '../brand/nav2'
@inject('ProDetailStore')
@observer

class ProDetail extends React.Component {
    componentWillMount() {
        const id =  this.props.location.search.split("&")[0].substr(4)
        const { getDetail, getComment } = this.props.ProDetailStore
        getDetail(id)
        getComment(id)
    }
    successToast() {
        Toast.success('加入购物车成功!!!', 1);
        const { productName, productImg } = this.props.ProDetailStore.detail
        const productPrice = this.props.location.search.split("&")[1].substr(6)
        if (localStorage.getItem("goods") == null) localStorage.setItem("goods", JSON.stringify([]))
        let arr = JSON.parse(localStorage.getItem("goods"))
        let obj = {
            productName,
            productPrice,
            productImg
        }
        arr.push(obj)
        localStorage.setItem("goods", JSON.stringify(arr))
    }
    render() {
        const { productName, productImg, bjShop } = this.props.ProDetailStore.detail
        const { comments } = this.props.ProDetailStore
        return (
            <div className='detail'>
                <Nav/>
                {/* 三级导航 */}
                <div className="minnav">
                    <Link to="/home">首页</Link>
                    >
                    <Link to="/category">全部分类</Link>
                    >
                    <a>{productName.split(" ")[0]}</a>
                </div>
                {/* 商品详情 */}
                <div className="detail">
                    <h3>{productName}</h3>
                    <p dangerouslySetInnerHTML={{__html:productImg}} className="detail_img"></p>
                </div>
                {/* 加入购物车 */}
                <p className="btn-container"> 
                    <button onClick={this.successToast.bind(this)}>加入购物车</button>
                    {/* <button className="add_to_cart" onClick={this.addPro.bind(this)}>加入购物车</button> */}
                </p>
                <ul className="comment_tab">
                    <li className="active">比价购买</li>
                    <li>产品参数</li>
                    <li>评价({comments.length})</li>
                </ul>
                <p dangerouslySetInnerHTML={{__html:bjShop}}></p>
                <hr />
                <p className="price_notice">* 实际价格以各网站列出的实时售价为准,我们提供的价格可能有数小时至数日的延迟</p>
                {/* 商品评论 */}
                <div className='pinglun'>
                    <p className="comment_notice">优选网友评价</p>
                    {comments.map((item,index,array)=>(
                        <Comment {...item} key={index} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ProDetail


