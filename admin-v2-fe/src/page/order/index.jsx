import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Order from 'service/order-service.jsx';
import TableList from 'util/table-list/index.jsx';
import ListSearch from './index-list-search.jsx';

// User是一个类，在调用的时候需要去new一个它出来
const _order = new Order();
const _mm = new MUtil();


class OrderList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // 首先初始化一个List，不然后面用map的时候会报错
      list: [],
      pageNum: 1,
      listType: 'list'      // list or search
    }
  }
  componentDidMount () {
    this.loadOrderList();
  }
  // 加载商品列表
  loadOrderList () {
    // 先定义一个对象
    let listParam = {};
    // 必传得参数listType和pageNum
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;
    // 判断如果是搜索得话，还要传searchType和keyword
    if (this.state.listType === 'search') {
      listParam.orderNo = this.state.orderNumber;
    }
    _order.getOrderList(listParam).then(res => {
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
  // 搜索
  onSearch (orderNumber) {
    // 搜索关键字为空，那就是没有搜索
    let listType = orderNumber === '' ? 'list' : 'search';
    this.setState({
      listType: listType,
      pageNum: 1,
      orderNumber: orderNumber
    }, () => {
      this.loadOrderList();
    })
  }
  // 页数发生变化的时候
  onPageNumChange (pageNum) {
    this.setState({
      pageNum: pageNum
    }, () => {
      // 回调
      this.loadOrderList();
    })
  }
  render () {
    let tableHeads = ['订单号','收件人','订单状态','订单总价','创建时间','操作'];
    return (
      <div id="page-wrapper">
        <PageTitle title="订单列表"/>
        {/* 搜索框 */}
        <ListSearch onSearch={(orderNumber) => {this.onSearch(orderNumber)}}></ListSearch>
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((order, index) => {
              return (
                <tr key={index}>
                  <td>
                    <Link to={`/order/detail/${order.orderNo}`}>{order.orderNo}</Link>
                  </td>
                  <td>{order.receiverName}</td>
                  <td>{order.statusDesc}</td>
                  <td>￥{order.payment}</td>
                  <td>{order.createTime}</td>
                  <td>
                    <Link to={`/order/detail/${order.orderNo}`}>详情</Link>
                  </td>
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

export default OrderList;