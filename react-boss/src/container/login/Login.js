import React, { Component } from "react";
import Logo from '../../component/logo/Logo'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import hsxForm from '../../component/hsx-form/hsx-form'

const errorMsg = {
  color: 'red'
}

@connect(
  state => state.user,
  { login }  
)
@hsxForm
class Login extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.handleChange('type', 'boss')
  }
  register() {
    this.props.history.push('/register')
  }
  handleLogin() {
    this.props.login(this.props.state)
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
              onChange={ v => this.props.handleChange('user', v) }
            >用户</InputItem>
            <WhiteSpace />
            <InputItem
              onChange={ v => this.props.handleChange('pwd', v) }
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