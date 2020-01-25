import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Pagination from 'util/pagination/index.jsx';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import TableList from 'util/table-list/index.jsx';
import ListSearch from './index-list-search.jsx';

import './index.scss';

// User是一个类，在调用的时候需要去new一个它出来
const _product = new Product();
const _mm = new MUtil();


class ProductList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // 首先初始化一个List，不然后面用map的时候会报错
      list: [],
      pageNum: 1,
      listType: 'list'
    }
  }
  componentDidMount () {
    this.loadProductList();
  }
  // 加载商品列表
  loadProductList () {
    // 先定义一个对象
    let listParam = {};
    // 必传得参数listType和pageNum
    listParam.listType = this.state.listType;
    listParam.pageNum = this.state.pageNum;
    // 判断如果是搜索得话，还要传searchType和keyword
    if (this.state.listType === 'search') {
      listParam.searchType = this.state.searchType;
      listParam.keyword = this.state.searchKeyWord;
    }
    _product.getProductList(listParam).then(res => {
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
  onSearch (searchType,searchKeyWord) {
    // 搜索关键字为空，那就是没有搜索
    let listType = searchKeyWord === '' ? 'list' : 'search';
    this.setState({
      listType: listType,
      pageNum: 1,
      searchType: searchType,
      searchKeyWord: searchKeyWord
    }, () => {
      this.loadProductList();
    })
  }
  // 页数发生变化的时候
  onPageNumChange (pageNum) {
    this.setState({
      pageNum: pageNum
    }, () => {
      // 回调
      this.loadProductList();
    })
  }
  // 改变商品状态，上架或下架
  onSetProductStatus(e, productId, currentStatus) {
    let newStatus = currentStatus == 1 ? 2 : 1,
        confirmTips = currentStatus == 1 ? '确定要下架该商品？' : '确定要上架该商品？'; 
    if (window.confirm(confirmTips)) {
      _product.setProductStatus({
        productId: productId,
        status: newStatus
      }).then(res => {
        _mm.successTips(res);
        this.loadProductList();
      }, errMsg => {
        _mm.errorTips(res);
      });
    }
  }
  render () {
    let tableHeads = [
      {name: '商品ID', width: '10%'},
      {name: '商品信息', width: '50%'},
      {name: '价格', width: '10%'},
      {name: '状态', width: '15%'},
      {name: '操作', width: '15%'}
    ]
    return (
      <div id="page-wrapper">
        <PageTitle title="商品列表">
          {/* 添加按钮 */}
          <div className="page-header-right">
            <Link to="/product/save" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              <span>添加商品</span>
            </Link>
          </div>
        </PageTitle>
        {/* 搜索框 */}
        <ListSearch onSearch={(searchType,searchKeyWord) => {this.onSearch(searchType, searchKeyWord)}}></ListSearch>
        <TableList tableHeads={tableHeads}>
          {
            this.state.list.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>
                    <p>{product.name}</p>
                    <p>{product.subtitle}</p>
                  </td>
                  <td>￥{product.price}</td>
                  <td>
                    <p>
                    {
                      product.status === 1 ? '在售' : '已下架'
                    }
                    </p>
                    <button className="btn btn-xs btn-warning" onClick={(e) => {this.onSetProductStatus(e, product.id, product.status)}}>
                      {
                        product.status === 1 ? '下架' : '上架'
                      }
                    </button>
                  </td>
                  <td>
                    <Link className="opear" to={`/product/detail/${product.id}`}>详情</Link>
                    <Link className="opear" to={`/product/save/${product.id}`}>编辑</Link>
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

export default ProductList;