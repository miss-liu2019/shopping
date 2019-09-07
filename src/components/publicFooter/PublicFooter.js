import React from 'react'
import "./publicFooter.css"
import BackTop from '../publicFooter/BackTop'
export default class Public extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>
                    <span>手机APP下载</span>
                    <span>淘虾米手机版</span>
                    <span>-- 掌上比价平台</span>
                </p>
                <p>m.buywhat.com</p>
                <BackTop />
            </div>
        )
    }
}