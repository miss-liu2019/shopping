import React from 'react'
import { observer, inject } from 'mobx-react'
import "../../assets/css/navigate/index.css"
import Nav from '../../components/commond/nav'
@inject('siteNav')
@observer

class Nodes extends React.Component {
    componentWillMount() {
        //   console.log(this.props)
        this.props.siteNav.getList()
        
    }
    render() {
        let siteNav = this.props.siteNav.siteNav
        //   console.log(siteNav)
        return (
            <div>
                <Nav />
                <div className="flex-container">
                    {siteNav.map((item, index) => {
                        return (
                            <a className="decorate" key={index} href={item.navHref}>
                                <img src={item.navImg} /> &nbsp;
                            {item.navTitle}
                            </a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Nodes
