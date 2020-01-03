import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class User {
  // 用户登录
  login (loginInfo) {
    return _mm.request({
      // 为了避免跨域，我们把前面的域名去掉，在配置里去设置跨域的东西
      type: 'POST',
      url: '/manage/user/login.do',
      data: loginInfo
    })
  }
  // 登录表单验证
  checkLoginInfo (loginInfo) {
    let username = $.trim(loginInfo.username),
        password = $.trim(loginInfo.password);
    // 判断用户名为空
    if (typeof username != 'string' || username.length === 0) {
      // 不是字符串，或者为空
      return {
        status: false,
        msg: '用户名不能为空'
      }
    }
    // 判断密码为空
    if (typeof password != 'string' || password.length === 0) {
      // 不是字符串，或者为空
      return {
        status: false,
        msg: '密码不能为空'
      }
    }
    return {
      status: true,
      msg: '验证通过'
    }
  }
  // 退出登录
  logout () {
    return _mm.request({
      // 为了避免跨域，我们把前面的域名去掉，在配置里去设置跨域的东西
      type: 'POST',
      // 这个接口比较特殊，要在配置中单独配置
      url: '/user/logout.do'
    })
  }
  getUserList (pageNum) {
    return _mm.request({
      type: 'post',
      url: '/manage/user/list.do',
      data: {
        pageNum: pageNum
      }
    })
  }
}

export default User;