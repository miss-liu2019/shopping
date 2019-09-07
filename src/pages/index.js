import React from 'react'
import { TabBar } from 'antd-mobile'
import Home from './home'
import My from './my'
import Sort from './Sort/index'
import Cart from './cart'
import { Route, withRouter } from 'react-router-dom'
class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: true,
    };
  }

  componentWillReceiveProps(newProps) {
    const path = newProps.location.pathname;
    this.setState({
      selectedTab: path
    })
  }
  componentDidMount() {
    //  console.log(this.props)
    const path = this.props.location.pathname
    if (path == '/') {
      this.setState({
        selectedTab: '/home'
      })
    } else {
      this.setState({
        selectedTab: path
      })
    }
  }
  //隐藏tab栏
  hiddenTabBar() {
    this.setState({
      hidden: true
    })
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#D82EA0"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + require('../assets/imges/home_bg.png') + ') center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + require('../assets/imges/home_active.png') + ') center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === '/home'}
            onPress={() => {
              console.log(this.props)
              this.props.history.push('/home')
              this.setState({
                selectedTab: '/home',
              });
            }}
            data-seed="logId"
          >
            <Route path='/home' children={(props) => {
              return <Home hidden={this.hiddenTabBar.bind(this)} {...props} />
            }} />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + require('../assets/imges/category_bg .png') + ') center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + require('../assets/imges/category_active.png') + ') center center /  21px 21px no-repeat'
              }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === '/sort'}
            onPress={() => {
              this.props.history.push('/sort')
              this.setState({
                selectedTab: '/sort',
              });
            }}
            data-seed="logId1"
          >
            <Route path='/sort' children={() => {
              return <Sort />
            }} />

          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + require('../assets/imges/cart_bg.png') + ') center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + require('../assets/imges/cart_active.png') + ') center center /  21px 21px no-repeat'
              }}
              />
            }
            title="购物车"
            key="cart"
            selected={this.state.selectedTab === '/cart'}
            onPress={() => {
              this.props.history.push('/cart')
              this.setState({
                selectedTab: '/cart',
              });
            }}
          >
            <Route path='/cart' children={() => {
              return <Cart />
            }} />

          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require('../assets/imges/my_bg.png') }}
            selectedIcon={{ uri: require('../assets/imges/my_active.png') }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === '/my'}
            onPress={() => {
              this.props.history.push('/my')
              this.setState({
                selectedTab: '/my',
              });
            }}
          >
            <Route path='/my' children={() => {
              return <My />
            }} />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(TabBarExample)