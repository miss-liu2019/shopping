import React from "react"
// import { NavBar, Icon } from 'antd-mobile';
import { Accordion, List } from 'antd-mobile'
import { observer, inject } from "mobx-react"
import Nav from './nav'
import '../../assets/css/brands/branddetail.css'
@inject('BrandsStore')
@observer
class Brand extends React.Component {
    constructor() {
        super()
        this.state = {
            brandtitleid: ""
        }
    }

    componentDidMount() {
        const { BrandsStore } = this.props
        BrandsStore.getGetbrands()
    }
    onChange = (key) => {
        let oldkey = 1
        if (key) {
            const { BrandsStore } = this.props
            BrandsStore.getbrandslists(key)
        } else {
            const { BrandsStore } = this.props
            BrandsStore.getbrandslists(oldkey)
        }
    }
    onchange() {
        this.props.history.go(-1)
    }
    handleclick = (id) => {
        this.props.history.push("/brandAll/brand?" + id)
    }
    render() {
        const { brandslists, brandtitleslists } = this.props.BrandsStore
        return (
            <div>
                <Nav/>
                <div style={{ marginTop: 2, marginBottom: 2 }}>
                    <Accordion accordion className="my-accordion" onChange={this.onChange}>
                        {brandslists.map(item => {
                            return (
                                <Accordion.Panel header={item.brandTitle} key={item.brandTitleId}>
                                    <List className="my-list">
                                        {brandtitleslists.map(item => {
                                            return (
                                                <List.Item key={item.brandId} onClick={this.handleclick.bind(this, item.brandTitleId)} >
                                                    <p>{item.brandName}</p>
                                                    <p>{item.brandInfo}</p>
                                                </List.Item>
                                            )
                                        })}
                                    </List>

                                </Accordion.Panel>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        )
    }
}
export default Brand




