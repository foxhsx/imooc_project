import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Statisitic {
  // 首页数据统级
  getHomeCount () {
    return _mm.request({
      // 为了避免跨域，我们把前面的域名去掉，在配置里去设置跨域的东西
      url: '/manage/statistic/base_count.do'
    })
  }
}

export default Statisitic;