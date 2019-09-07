import React from "react"

import Category from './pages/category/index'//比价
import ProList from './pages/category/ProList/index'
import ProDetail from './pages/ProDetail/index'


import TabBar from './pages/index'   //tab选项卡

import DomesticDiscoun from './pages/domesticDiscount'   //国内折扣
import DiscountDetail from './pages/domesticDiscount/detail/Detail'


import Vegetable from './pages/vegetable/index'    //白菜价

import SaveMoney from './pages/overSeaDiscount/index'//海外购
import SaveDetail from './pages/overSeaDiscount/detail/Detail'



import CouponTitle from './pages/coupon/CouponTitle/index' //优惠券
import CouponList from './pages/coupon/CouponList/index'


import Navigate from './pages/navigate'   //商城导航
import Brand from './pages/brand'    //品牌大全
import Vip from './components/my/vip'  //会员专享价
import Login from './pages/login'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import BrandLists from "./pages/brand/brandsproductdetail";
import Comments from "./pages/brand/comments";
export default class Shopping extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/category/list" component={ProList} />
                        <Route path="/category/detail" component={ProDetail} />
                        <Route path="/category" component={Category} />

                        <Route path="/domesticDiscoun" component={DomesticDiscoun} />
                        <Route path='/domesticDiscount/:id' component={DiscountDetail} exact />

                        <Route path="/vegetable" component={Vegetable} />

                        {/* 毕 */}
                        <Route path="/overSeaDiscount/:id" component={SaveDetail} exact />
                        <Route path="/overSeaDiscount" component={SaveMoney} />


                        <Route path="/coupon/list" component={CouponList} />>
                        <Route path="/coupon" component={CouponTitle} /> {/* 优惠券 */}

                        <Route path="/navigate" component={Navigate} />
                        <Route path="/brandAll" component={Brand} exact />
                        <Route path="/brandAll/brand" component={BrandLists} exact />
                        <Route path="/comment" component={Comments} exact />
                        <Route path="/my/:id" component={Vip} />
                        <Route path="/login" component={Login} />
                        <Route path='/' component={TabBar} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
{/* <Route path="/category/detail" component={ProDetail} exact></Route>
    <Route path="/category/list" component={ProList} exact></Route>
    <Route path="/category" component={Category} exact></Route>
    <Route path="/coupon" component={CouponTitle} exact></Route>
    <Route path="/coupon/list" component={CouponList}></Route>
    <Route path="/sort" component={Sort} exact></Route> */}
