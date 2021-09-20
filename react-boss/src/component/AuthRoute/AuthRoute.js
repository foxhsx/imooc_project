import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { userinfo } from '../../redux/user.redux'

@withRouter
@connect(
  null,
  {userinfo}
)
class AuthRoute extends Component {
  componentDidMount() {
    const publicList = ['/login', '/register']
    // 获取当前的路由信息，判断现在的 url 地址 如果是login那就不需要跳转的
    const pathname = this.props.location.pathname;
    // 如果已经在登录或者注册页面，就不用获取用户信息了，因为这俩页面是需要登录和注册的
    if (publicList.indexOf(pathname) > -1) return;
    this.props.userinfo()
  }
  render() {
    return <span> </span>
  }
}

export default AuthRoute