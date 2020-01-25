import React from 'react';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

// User是一个类，在调用的时候需要去new一个它出来
const _user = new User();
const _mm = new MUtil();

import './index.scss';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirect: _mm.getUrlParam('redirect') || '/'
    }
  }
  componentWillMount() {
    document.title = "登录"
  }
  // 当用户名发生改变
  // onUserNameChange (e) {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // 密码改变
  // onPassWordChange (e) {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }

  /* 
    以上两种方法太繁琐，我们用name来去动态获取到对应input里的值
  */
  onInputChange (e) {
    let inputName = e.target.name,
        inputValue = e.target.value;
    
    this.setState({
      [inputName]: inputValue
    })
  }

  // 当用户提交表单
  onSubmit(e) {
    // 在service里做表单验证
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    },
      checkResult = _user.checkLoginInfo(loginInfo);
  
    // 验证通过
    if (checkResult.status) {
      _user.login(loginInfo).then((res) => {
        // 将返回值存到localstorage里
        _mm.setStorage('userInfo', res)
        // 成功以后跳回原来的页面
        // react-router提供的history对象
        this.props.history.push(this.state.redirect);
      }, (errMsg) => {
        // 失败的回调
        _mm.errorTips(errMsg);
      })
    }
    // 验证失败提示信息
    else {
      _mm.errorTips(checkResult.msg);
    }
    
  }

  onInputKeyup (e) {
    if (e.keyCode === 13) {
      this.onSubmit();
    }
  }

  render () {
    return (
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
          <div className="panel-heading">欢迎登录管理系统</div>
          <div className="panel-body">
            <div>
              <div className="form-group">
                <input type="text"
                  name="username"
                  className="form-control"
                  placeholder="请输入用户名"
                  onKeyUp={e => this.onInputKeyup(e)}
                  onChange={(e) => {this.onInputChange(e)}} />
              </div>
              <div className="form-group">
                <input type="password"
                  name="password"
                  className="form-control"
                  placeholder="请输入密码"
                  onKeyUp={e => this.onInputKeyup(e)}
                  onChange={e => {this.onInputChange(e)}} />
              </div>
              <button className="btn btn-lg btn-block btn-primary"
                onClick={e => {this.onSubmit(e)}}>登录</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;