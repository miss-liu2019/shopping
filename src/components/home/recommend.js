import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

@inject('MoneyControlStore', 'ProductStore')
@observer
class Recommend extends React.Component {
    componentWillMount() {
        this.props.MoneyControlStore.getMoneyControlList();
    }
    //进入详情页
    goDetail(productId) {
        //接收productId传值到接口,获取指定的详情页
        this.props.history.push('/overSeaDiscount/detail?id=' + productId)
    }
    render() {
        let moneyControlList = this.props.MoneyControlStore.moneyContrlList
        var imgReg = /<img.*?(?:>|\/>)/gi;
        var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
        let lis = '';
        try {
            lis = moneyControlList.map(item => {
                let arr = (item.productImgSm).match(imgReg)
                let imgSrc = '';
                for (var i = 0; i < arr.length; i++) {
                    let src = arr[i].match(srcReg);
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
        } catch (e) {
            console.log(e);
        }
        return (
            <div className='recommend'>
                <h1>超值折扣推荐</h1>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}
export default withRouter(Recommend)