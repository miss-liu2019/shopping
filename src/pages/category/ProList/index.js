import React from 'react'
import { inject, observer } from 'mobx-react'
import ProInfo from './List'
import { Pagination, Icon } from 'antd-mobile';
import "../../../assets/css/ProList/index.css"
import { Link } from "react-router-dom"
import Nav from '../../brand/nav3'
@inject('ProListStore')
@observer

class ProList extends React.Component {
    constructor() {
        super()
        this.state = {
            currentPage: 1
        }
    }

    componentWillMount() {
        const _id = this.props.location.search.substr(4)
        const { getCateName, getPro } = this.props.ProListStore
        getCateName(_id)
        getPro(_id, this.state.currentPage)
    }

    changePage(currentPage) {
        const { getPro } = this.props.ProListStore
        const _id = this.props.location.search.substr(4)
        getPro(_id, currentPage)
        this.setState({
            currentPage
        })
    }

    render() {
        const { category } = this.props.ProListStore.category
        const { result, pagesize, totalCount } = this.props.ProListStore.proInfo
        let totalPage = Math.ceil(totalCount / pagesize)
        if (isNaN(totalPage)) totalPage = 1
        return (
            <div>
                {/* 三级导航 */}
                <Nav/>
                <div className="minnav">
                    <Link to="/home">首页</Link>
                    >
                    <Link to="/category">全部分类</Link>
                    >
                    <a>{category}</a>
                </div>
                {/* 商品列表页 */}
                {result.map((item, index, array) => (
                    <ProInfo {...item} key={index} />
                ))}
                {/* 分页器 */}
                <div className="pagination-container" >
                    <Pagination total={totalPage}
                        className="custom-pagination-with-icon"
                        current={this.state.currentPage}
                        locale={{
                            prevText: (<span className="arrow-align"><Icon type="left" />上一页</span>),
                            nextText: (<span className="arrow-align">下一页<Icon type="right" /></span>),
                        }}
                        onChange={this.changePage.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default ProList



const locale = {
    prevText: 'Prev',
    nextText: 'Next',
};