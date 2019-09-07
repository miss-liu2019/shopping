import React from 'react'
import { Link } from 'react-router-dom'

export default class Title extends React.Component {
    constructor() {
        super()
        this.state = {
            imgSrc : [
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567071842283&di=3cbae76bd194d30ec400de749c8b0a7f&imgtype=0&src=http%3A%2F%2Fs.51kahui.com%2Fimg%2Fk%2F20160323%2Fl-brand-8dd4d4ba-0701-4fba-85a5-18c5ec579599.jpg",
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=540238436,3225569031&fm=26&gp=0.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567093971055&di=aa0e211b711756e2fcba97c169d9b2e2&imgtype=0&src=http%3A%2F%2Fpic.16pic.com%2F00%2F17%2F24%2F16pic_1724148_b.jpg",
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567094320677&di=8b9ba3f79500ae7f1fdc238236d15fdb&imgtype=0&src=http%3A%2F%2F806.s21i.faidns.com%2F665806%2F2%2FABUIABACGAAg-ZKOkwUo7KTE9wQwhAc4ggc.jpg"
            ]
        }
    }
    
    render() {
        return (
            <Link to={"/coupon/list?id="+this.props.couponId}>
                <div className="coupon_title">
                    <img src={this.state.imgSrc[this.props.index]} />
                    <p>{this.props.couponTitle}</p>
                </div>
            </Link>
        )
    }
}