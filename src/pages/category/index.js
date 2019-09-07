import React from 'react'
import List from './List'
import { inject, observer } from 'mobx-react'
import { Accordion, NavBar, Icon } from 'antd-mobile';
import Nav from './nav'
import '../../assets/css/Category/index.css'

@inject('CategoryStore')
@observer

class Category extends React.Component {
    componentWillMount() {
        const { getCateTitle } = this.props.CategoryStore
        getCateTitle()
    }

    onChange = (key) => {
        const { getCate } = this.props.CategoryStore
        getCate(key)
    }
    onchange() {
        this.props.history.go(-1)
    }
    render() {
        const { titles } = this.props.CategoryStore
        return (
            <div style={{ marginBottom: 10 ,padding:"0 10px"}}>
                <Nav/>
                <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
                    {titles.map((item, index, array) => (
                        <Accordion.Panel header={item.title} key={item.titleId} className="pad">
                            <List {...this.state} />
                        </Accordion.Panel>
                    ))}
                </Accordion>
            </div>
        )
    }
}

export default Category