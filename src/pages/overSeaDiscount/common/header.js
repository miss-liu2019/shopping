import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../css/index.css'
class Header extends React.Component{
    render(){
        return(
            <div>
              <NavBar
                style={{background:'#FFF',color:"#D32A99"}}
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => window.history.go(-1)}
                rightContent={[
                    <Icon key="1" type="ellipsis" />
                ]}
                >省钱控-最新优惠</NavBar>
            </div>
        )
    }
}
export default Header