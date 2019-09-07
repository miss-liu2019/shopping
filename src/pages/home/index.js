import React from 'react'
import Banner from '../../components/home/banner'
import Menu from '../../components/home/menu'
import Nav from '../../components/home/nav'
import Recommend from '../../components/home/recommend'
import '../../assets/css/home/home.css'
export default class Home extends React.Component{
    search(){
        this.props.history.push('/search')
        //隐藏tabbar
        this.props.hidden()
    }
    render(){
        // console.log(this.props)
        return (
            <div>
                {/* 导航栏 */}
               <Nav/>
               {/* 轮播图 */}
               <Banner/>
            {/* 菜单栏 */}
                <Menu/>
            {/* 折扣推荐 */}
                <Recommend/>
          
            </div>
        )
    }
}