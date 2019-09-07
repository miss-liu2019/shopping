import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from "react-router-dom"

@inject('CategoryStore')
@observer

class List extends React.Component {
    render() {
        const { content } = this.props.CategoryStore
        return (
            <ul className="item_ul">
                {content.map((item,index,array)=>(
                    <Link to={"/category/list"+"?id="+item.categoryId} key={item["_id"]} className="item_li">
                        {item.category}
                    </Link>
                ))}
            </ul>
        )
    }
}

export default List