import React from 'react'
import { Link } from 'react-router-dom'
export default class UserImtegration extends React.Component{
    render(){
        return (
            <div className='userImtegration'>
                <ul>
               
                    <li>
                        <span>0</span>
                        <span>余额</span>
                    </li>
                    <li>
                        <span>0</span>
                        <span>红包</span>
                    </li>
                    <li>
                        <span>0</span>
                        <span>商品券</span>
                    </li>
                    <li>
                        <span>积分兑换</span>
                        
                    </li>
                </ul>
                <div className='userAuthorization'>
                    <p>会员权益<span>开通会员 > </span></p>
                    <span>成为优享会员，预计一年为你<b>节省1121.30元</b></span>
                </div>
                <ul className='Vip_user'>
                     <Link to='/my/1'>
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20171103161358679.png" />
                            <span>会员专享价</span>
                        </li>
                    </Link>
                   <Link to='/my/2'>
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20171028202735028.png"/>
                            <span>1小时送达</span>
                        </li>
                   </Link>
                   <Link to='/my/3'>
                        <li>
                            < img  src="https://j-image.missfresh.cn/img_20171028202909231.png"/>
                            <span>专属客服</span>
                        </li>
                   </Link>
                   <Link to='/my'>
                        <li>
                            <img src="https://j-image.missfresh.cn/img_20180105021607945.png"/>
                            <span>敬请期待</span>
                        </li>
                   </Link>
                   
                </ul>
            </div>
        )
    }
}