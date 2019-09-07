import { NavBar,Icon,Popover } from 'antd-mobile';
import React from "react"
import { Link } from 'react-router-dom'
// class Navigate extends React.Component{
//     render(){
//             return (
//                 <div className='nav'>
//                 <NavBar
//                     mode="light"
//                     leftContent={<img src={[require ('../../assets/imges/logo.png')]} />}
//                     rightContent={[
//                         <Icon key="0" type="search" style={{ marginRight: '16px',color:'#d6358f' }} />,
//                         <Icon key="1" type="ellipsis" style={{color:'#d6358f'}} />]}>
//                         <span>淘虾米</span>
//                 </NavBar>
//                 </div>
//                     )
//     }
// }


const Item = Popover.Item;
class Navigate extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: true,
      selected: opt.props.value,
    });
    
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (<div className='nav'>
      <NavBar
        mode="light"
        leftContent={<img src={[require ('../../assets/imges/logo.png')]} />}
        rightContent={
          <Popover mask
            // overlayClassName="fortest"
            overlayStyle={{ color:'#d6358f' }}
            visible={this.state.visible}
            overlay={[
              (<Item >登录</Item>),
              (<Item >注册</Item>),
              (<Item >
                <span style={{ marginRight: 5 }}>帮助</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [-10, 0],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect.bind(this)}
          >
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon key="0" type="search" style={{ marginRight: '16px',color:'#d6358f' }} />,
              <Icon key="1" type="ellipsis" style={{color:'#d6358f'}} />
            </div>
          </Popover>
        }
      >
        <span>淘虾米</span>
      </NavBar>
    </div>);
  }
}

export default Navigate