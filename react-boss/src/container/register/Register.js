import { Component } from "react";
import Logo from '../../component/logo/Logo'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from "react-redux";
import { register } from "../../redux/user.redux";
import { Redirect } from "react-router-dom";


const RadioItem = Radio.RadioItem

const errorMsg = {
  color: 'red'
}

@connect(
  state => state.user,
  {register}
)
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius',  // 天才
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  register() {
    this.props.register(this.state)
  }
  render() {
    const { type } = this.state
    return (
      <div>
        {
          this.props.redirectTo ?
          <Redirect to={this.props.redirectTo} />
          : null
        }
        <Logo></Logo>
        <h2>注册页面</h2>
        <WingBlank>
          {
            this.props.msg ? <p style={errorMsg}>{this.props.msg}</p> : null
          }
          <List>
            <InputItem
              onChange={ v => this.handleChange('user', v) }
            >用户名</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={ v => this.handleChange('pwd', v) }
            >密码</InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={ v => this.handleChange('repeatpwd', v) }
            >确认密码</InputItem>
            <WhiteSpace />
            <RadioItem 
              checked={type === 'genius'}
              onChange={ () => this.handleChange('type', 'genius') }
            >牛人</RadioItem>
            <WhiteSpace />
            <RadioItem 
              checked={type === 'boss'}
              onChange={ () => this.handleChange('type', 'boss') }
            >BOSS</RadioItem>
          </List>
          <Button
            type="primary"
            onClick={ () => this.register() }
          >注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register