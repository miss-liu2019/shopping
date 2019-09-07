import { NavBar, Icon } from 'antd-mobile';
import React from "react"
class Navigate extends React.Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" style={{ color: '#d6358f' }} />}
                    onLeftClick={() => window.history.go(-1)}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px', color: '#d6358f' }} />,
                        <Icon key="1" type="ellipsis" style={{ color: '#d6358f' }} />,
                    ]}
                >商品详情</NavBar>
            </div>
        )
    }
}

export default Navigate
