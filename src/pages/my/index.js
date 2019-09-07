import React from 'react'
import UserMesg from '../../components/my/userMsg'
import UserImtegration from '../../components/my/userIntegration'
import '../../assets/css/my/index.css'
import AboutUser from '../../components/my/aboutUser';
export default class My extends React.Component{
    render(){
        return (
            <div>
                <UserMesg/>
                <UserImtegration/>
                <AboutUser/>
            </div>
        )
    }
}