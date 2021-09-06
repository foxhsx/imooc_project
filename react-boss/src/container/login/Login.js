import { Component } from "react";
import Logo from '../../component/logo/Logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const errorMsg = {
  color: 'red'
}

@connect(
  state => state.user,
  { login }  
)
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
  }
  register() {
    this.props.history.push('/register')
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleLogin() {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {
          (this.props.redirectTo && this.props.redirectTo !== '/login') ?
          <Redirect to={this.props.redirectTo} />
          : null
        }
        <Logo></Logo>
        <h2>登录页面</h2>
        <WingBlank>
          {
            this.props.msg ? <p style={errorMsg}>{this.props.msg}</p> : null
          }
          <List>
            <InputItem
              onChange={ v => this.handleChange('user', v) }
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={ v => this.handleChange('pwd', v) }
              type="password"
            >密码</InputItem>
          </List>
          <Button 
            onClick={ () => this.handleLogin() }
            type="primary"
          >登录</Button>
          <WhiteSpace />
          <Button
            type="primary"
            onClick={ () => this.register() }
          >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login