//此页面为首页的菜单
import React from 'react'
import { Link } from 'react-router-dom'
class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <ul className='menu_min'>
          <Link to="/category">
            <li>
              <img src={[require('../../assets/imges/PriceSearch_bg.png')]} />
              <span>比价搜索</span>
            </li>
          </Link>
          <Link to='/domesticDiscoun'>
            <li>
              <img src={[require('../../assets/imges/DomesticDiscount_bg.png')]} />
              <span>国内折扣</span>
            </li>
          </Link>
          <Link to='/vegetable'>
            <li>
              <img src={[require('../../assets/imges/Vegetable_bg.png')]} />
              <span>白菜价</span>
            </li>
          </Link>
          <Link to='/overSeaDiscount'>
            <li>
              <img src={[require('../../assets/imges/overSeaDiscount_bg.png')]} />
              <span>海淘折扣</span>
            </li>
          </Link>
          <Link to='/coupon'>
            <li>
              <img src={[require('../../assets/imges/coupon_bg.png')]} />
              <span>优惠券</span>
            </li>
          </Link>
          <Link to='/brandAll'>
            <li>
              <img src={[require('../../assets/imges/single_bg.png')]} />
              <span>凑单品</span>
            </li>
          </Link>
          <Link to='/navigate'>
            <li>
              <img src={[require('../../assets/imges/navigate_bg.png')]} />
              <span>品牌大全</span>
            </li>
          </Link>
          <Link to='/brandAll'>
            <li>
              <img src={[require('../../assets/imges/bandall_bg.png')]} />
              <span>商城导航</span>
            </li>
          </Link>
        </ul>

      </div>
    )
  }
}
export default Menu;