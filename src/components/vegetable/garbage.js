import React from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { inject, observer } from 'mobx-react';
@inject('carbageStore')
@observer

class TabExample extends React.Component {
    // tab栏切换
    emits(id) {
        const { carbageStore } = this.props
        carbageStore.Getproduct(id)
    }
    // 获取商品列
    getproduct = (id) => {
        const { carbageStore } = this.props
        carbageStore.Getproduct(id)
    }
    render() {
        const _this = this
        const { titlelist } = this.props.carbageStore;
        console.log(titlelist)
        const tabs = titlelist.map((item) => { return { title: item.title, key: item.titleId } })
        this.getproduct(0)
        return (
            <div>
                <StickyContainer style={{color: '#333'}}>
                    <Tabs tabs={tabs} initialPage={'t2'} tabBarUnderlineStyle={{color:'#d82ea0'}}  tabBarActiveTextColor='#d82ea0' onTabClick={(item, index) => { this.emits(index) }}>
                    </Tabs>
                </StickyContainer>
            </div>
        )
    }
}

export default TabExample