import React from 'react'

class Comment extends React.Component {
    render() {
        const com = this.props
        return (
            <div className="comment_item">
                <div className="comment_top">
                    <div className="comment_left">
                        {com.comName}
                    </div>
                    <div className="comment_right">
                        <p>{com.comTime}</p>
                        <p>{com.comFrom}</p>
                    </div>
                </div>
                <div className="comment_bottom">{com.comContent}</div>
                <hr />
            </div>
        )
    }
}

export default Comment