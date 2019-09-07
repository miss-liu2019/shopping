import React from 'react'

export default class AboutUser extends React.Component{
    render(){
      return (
          <ul className='aboutUser'>
              
                <li>
                    我的订单
                    <span>></span>
                </li>
            
              <li>
                  我的地址
                  <span>></span>
              </li>
              <li>
                  账户安全与帮助
                  <span>></span>
              </li>
              <li>
                  意见反馈
                  <span>></span>
                  </li>
              <li>
                  关于我们
                  <span>></span>
                </li>
            
          </ul>
      )
    }
}