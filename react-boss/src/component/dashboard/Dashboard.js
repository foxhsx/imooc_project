import { NavBar } from "antd-mobile";
import { Component } from "react";
import { connect } from "react-redux";
import Boss from '../../container/boss/Boss'
import Genius from '../../container/genius/Genius'
import Msg from '../../container/msg/Msg'
import User from '../../container/user/User'

@connect(
  state => state
)
class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      navList: [
        {
          path: '/boss', 
          text: '牛人',
          icon: '',
          title: '牛人列表',
          component: Boss,
          hide: user.type === 'genius'
        },
        {
          path: '/genuis', 
          text: 'boss',
          icon: '',
          title: 'BOSS列表',
          component: Genius,
          hide: user.type === 'boss'
        },
        {
          path: '/msg', 
          text: '消息',
          icon: '',
          title: '消息列表',
          component: Msg,
        },
        {
          path: '/me', 
          text: '我',
          icon: '',
          title: '个人中心',
          component: User,
        }
      ]
    }
  }
  render() {
    const { pathname } = this.props.location;
    const { navList } = this.state;
    console.log(pathname);
    return (
      <div>
        <NavBar mode="dark">
          { navList.find(v => v.path === pathname).title }
        </NavBar>
        <h2>header</h2>
        <h2>footer</h2>
      </div>
    )
  }
}

export default Dashboard