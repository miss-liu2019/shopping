import React from 'react'
import { Link } from 'react-router-dom'

class ProInfo extends React.Component {
    render() {
        const pro = this.props
        return (
           <div>
              
                <Link to={"/category/detail?id="+pro.productId+"&price="+pro.productPrice.slice(1,-3)}>
                <ul className="pro_item">
                    <li className="left" dangerouslySetInnerHTML={{__html:pro.productImg}}></li>
                    <li className="right">
                        <p className="right_name">{pro.productName}</p>
                        <p className="right_price">{pro.productPrice}</p>
                        <p className="right_count">
                            <b>{pro.productQuote}</b>
                            <b>{pro.productCom}</b>
                        </p>
                    </li>
                </ul>
            </Link>
           </div>
        )
    }
}

export default ProInfo