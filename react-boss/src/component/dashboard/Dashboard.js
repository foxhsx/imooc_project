import { NavBar } from "antd-mobile";
import { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Boss from '../../container/boss/Boss'
import Genius from '../../container/genius/Genius'
import Msg from '../../container/msg/Msg'
import User from '../../container/user/User'
import NavLinkBar from '../navlink/NavLinkBar'
import { getMsgList, recvMsg } from '../../redux/chat.redux'
import { userinfo } from '../../redux/user.redux'

const routeStyle = {
  marginTop: '45px'
}

@connect(
  state => state,
  {getMsgList, recvMsg, userinfo},
)
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {chat, user} = this.props
    if (!user.type) {
      this.props.userinfo()
    }
    if (!chat.chatMsg.length) {
      this.props.getMsgList()
      this.props.recvMsg()
    }
  }
  render() {
    const { user } = this.props;
    const { pathname } = this.props.location;
    const navList = [
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
    ];
    const currentPage = navList.find(v => v.path == pathname)
    return (
      <div>
        <NavBar className="fixd-header" mode="dark">
          {
            currentPage ? currentPage.title : user.type && this.props.history.push(user.type)
          }
        </NavBar>
        <div style={routeStyle}>
          <Switch>
            {
              navList.map(v => (
                <Route key={v.path} path={v.path} component={v.component}></Route>
              ))
            }
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default Dashboard