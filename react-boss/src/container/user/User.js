import { List, Result, WhiteSpace, Modal } from "antd-mobile";
import { Brief } from "antd-mobile/lib/list/ListItem";
import { Component } from "react";
import { connect } from "react-redux";
import browserCookie from 'browser-cookies';
import { logoutSubmit } from '../../redux/user.redux'
import { Redirect } from "react-router";

const thumbStyle = {
  width: '50px'
}

@connect(
  state => state.user,
  { logoutSubmit }
)
class User extends Component {
  logout = () => {
    const alert = Modal.alert;

    alert('注销', '确认退出吗？', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '退出', onPress: () => {
        browserCookie.erase('userid')
        this.props.logoutSubmit()
      } },
    ])
  }
  render() {
    const { avatar, user, type, company, title, desc, money, redirectTo } = this.props;
    return user ? (
      <div>
        
        <Result 
          img={<img style={thumbStyle} src={avatar} alt="" />}
          title={user}
          message={type === 'boss' ? company : null}
        />
        <List
          renderHeader={() => '简介'}
        >
          <List.Item multipleLine>
            {title}
            {
              desc.split('\n').map(v => (<Brief key={v}>{v}</Brief>))
            }
            { money? <Brief>薪资：{money}</Brief> :null }
          </List.Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <List>
          <List.Item onClick={() => this.logout()}>退出登录</List.Item>
        </List>
      </div>
    ) : redirectTo ?
      <Redirect to={redirectTo} />
      : null
  }
}

export default User