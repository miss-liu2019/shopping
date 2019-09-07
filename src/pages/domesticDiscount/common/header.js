import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
class Header extends React.Component{
    render(){
        return(
            <div>
              <NavBar
                style={{background:'#fff',color:"#D82EA0"}}
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() =>window.history.go(-1)}
                rightContent={[
                    <Icon key="1" type="ellipsis" />
                ]}
                >国内折扣</NavBar>
            </div>
        )
    }
}
export default Header