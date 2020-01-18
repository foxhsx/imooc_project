import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';
import TableList from 'util/table-list/index.jsx';

// User是一个类，在调用的时候需要去new一个它出来
const _user = new User();
const _mm = new MUtil();


class UserList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // 首先初始化一个List，不然后面用map的时候会报错
      list: [],
      pageNum: 1
    }
  }
  componentDidMount () {
    this.loadUserList();
  }
  loadUserList () {
    _user.getUserList(this.state.pageNum).then(res => {
      // 先重置其他的，再重置firstLoading
      this.setState(res);
    }, errMsg => {
      // 错误时，将list重置为空
      this.setState({
        list: []
      })
      _mm.errorTips(errMsg)
    })
  }
  // 页数发生变化的时候
  onPageNumChange (pageNum) {
    this.setState({
      pageNum: pageNum
    }, () => {
      // 回调
      this.loadUserList();
    })
  }
  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="用户列表"/>
        <TableList tableHeads={['ID','用户名','邮箱','电话','注册时间']}>
          {
            this.state.list.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{new Date(user.createTime).toLocaleString()}</td>
                </tr>
              )
            })
          }
        </TableList>
        <Pagination 
          current={this.state.pageNum} 
          total={this.state.total} 
          onChange={(pageNum) => {this.onPageNumChange(pageNum)}} />
      </div>
    )
  }
}

export default UserList;