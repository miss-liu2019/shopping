import React from 'react'
import {Link} from 'react-router-dom'
class UserMesg extends React.Component{
    render(){
        return (
            <div className='userMesg'>
                <div className='bg_blue'> </div>
                <Link to='/login'>
                    <button className='login_btn'> 
                        用户登录
                    </button>
                </Link>
            </div>
        )
    }
}

export default UserMesg;