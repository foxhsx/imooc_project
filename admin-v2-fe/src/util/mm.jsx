class MUtil {
  request (param) {
    // 使用链式调用promise
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        data: param.data || null,
        success: (res) => {
          // 数据状态码为0，则数据请求成功
          if (res.status === 0) {
            typeof resolve === 'function' && resolve(res.data, res.msg);
          }
          // 失败
          else if (res.status === 10) {
            // 做登录
            this.doLogin();
          }
          // 其他状态
          else {
            typeof reject === 'function' && reject(res.msg || res.data);
          }
        },
        error: (err) => {
          // statusText是http里的err对象里的东西
          typeof reject === 'function' && reject(err.statusText);
        }
      });
    });
  }
  doLogin () {
    // 带上参数，表示从哪儿调过来的,pathname可能会有特殊字符，所以我们还需要使用encodeURIComponent做下处理
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
  }
  getUrlParam (name) {
    // param=123&param1=456
    /*
    ("(^|&)" + name + "=([^&]*)(&|$)")  以任意字符开头或者以&开头，再加key值，也就是name值
    后面再拼接非&开头或者结尾的值
    querString 分割?后面的param
    reg 定义正则匹配
    result match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
    result = ['param=123&','','123','&']  我们要去第三个元素，即result[2]
    */
    let querString = window.location.search.split('?')[1] || '',
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        result = querString.match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }
  successTips(successMsg) {
    alert(successMsg || '操作成功~')
  }
  errorTips (errMsg) {
    alert(errMsg || '好像哪里不对了~')
  }
  // 进行信息的存储
  setStorage (name, data) {
    let dataType = typeof data;
    // json类型
    if (dataType === 'object') {
      window.localStorage.setItem(name, JSON.stringify(data));
    }
    // 基础类型
    else if (['number', 'string', 'boolean'].indexOf(dataType) >= 0) {
      window.localStorage.setItem(name, data);
    }
    // 不支持存储
    else {
      alert('该类型不能用于本地存储');
    }
  }
  // 取出存储
  getStorage (name) {
    let data = window.localStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    } else {
      return '';
    }
  }
  // 删除存储
  removeStorage (name) {
    window.localStorage.removeItem(name);
  }
}

export default MUtil;