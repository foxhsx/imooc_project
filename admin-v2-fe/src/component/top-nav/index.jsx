import React from 'react';
import MUtil from 'util/mm.jsx';
import { Link } from 'react-router-dom';
import User from 'service/user-service.jsx';

const _mm = new MUtil();
const _user = new User();

class TopNav extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: _mm.getStorage('userInfo').username || ''
    }
  }
  // 这是退出登录
  onLogout () {
    _user.logout().then(res => {
      // 先删除localStorage
      _mm.removeStorage('userInfo');
      // 然后跳到登录页面
      window.location.href = '/login';
      // this.props.history.push('/login');
    }, errMsg => {
      _mm.errorTips(errMsg)
    })
  }
  render () {
    return (
      <div className="navbar navbar-default top-navbar">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/"><b>HAPPY</b>MMALL</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle" href="javascript:;">
                        <i className="fa fa-user fa-fw"></i>
                        {
                          this.state.username
                          ? <span>欢迎，{this.state.username}</span>
                          : <span>欢迎您</span>
                        }
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li>
                          <a onClick={() => {this.onLogout()}}>
                            <i className="fa fa-sign-out fa-fw"></i>
                            <span>退出登录</span>  
                          </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
  }
}

export default TopNav;