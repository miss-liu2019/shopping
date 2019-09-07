import React from 'react'
class Vip extends React.Component{
    
    render(){
        let id=window.location.href.substr(-1);
        if(id==1){
            return (
                <div className='vip'>  
                     <img src='https://j-image.missfresh.cn/img_20171027191121679.png' />
                </div>
            )
        }else if(id ==2){
            return (
                <div className='vip'>  
                     <img src='https://p-h5.missfresh.cn/h5_file/FEC127488DF4C1A77993F9360CAB58D6/statics/img/1xiaoshi.jpg' />
                </div>
            )
        }else if(id==3){
            return (
                <div className='vip'>  
                     <img src='https://p-h5.missfresh.cn/h5_file/EE3E3FCFD035C5CEECB215A18D2A3613/statics/img/vip-service.png' />
                </div>
            )
        }
      
    }
}

export default Vip;