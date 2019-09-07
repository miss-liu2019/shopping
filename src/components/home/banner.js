//轮播图组件
import React from 'react'
import { Link } from 'react-router-dom'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper/dist/js/swiper.js'
class Banner extends React.Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            autoplay: true,   //自动播放
            effect: 'coverflow',  //切换效果
            loop: true, //循环模式开启
            //分液器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }
    render() {
        return (
            <div className="banner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            {/* 跳转到凑单页面 */}
                            <Link to='/brandAll'>
                                <img src={[require('../../assets/imges/banner1.png')]} />
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            {/* 跳转到比价搜索页面 */}
                            <Link to='/category'>
                                <img src={[require('../../assets/imges/banner2.png')]} />
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            {/* 跳转到海淘页面 */}
                            <Link to='overSeaDiscount'>
                                <img src={[require('../../assets/imges/banner3.png')]} />
                            </Link>
                        </div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}
export default Banner;