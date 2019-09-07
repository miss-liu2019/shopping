import React from "react"
import "../../assets/css/backToTop/index.css"

class BackTop extends React.Component {
    backTop() {
        console.log(document.documentElement.scrollTop);
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    render() {
        return (
            <div>
                <a className="top" onClick={this.backTop.bind(this)}>↑</a>
            </div>
        )
    }
}

export default BackTop