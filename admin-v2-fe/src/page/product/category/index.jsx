import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import TableList from 'util/table-list/index.jsx';

// Product是一个类，在调用的时候需要去new一个它出来
const _product = new Product();
const _mm = new MUtil();


class CategoryList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // 首先初始化一个List，不然后面用map的时候会报错
      list: [],
      parentCategoryId: this.props.match.params.categoryId || 0
    }
  }
  componentDidMount () {
    this.loadCategoryList();
  }
  // 进入子品类调用的方法
  componentDidUpdate(prevProps, prevState) {
    let oldPath = prevProps.location.pathname,
        newPath = this.props.location.pathname,
        newId = this.props.match.params.categoryId || 0;
    if (oldPath !== newPath) {
      this.setState({
        parentCategoryId: newId
      }, () => {
        this.loadCategoryList();
      })
    }
  }
  // 加载品类列表
  loadCategoryList () {
    _product.getCategoryList(this.state.parentCategoryId).then(res => {
      // 先重置其他的，再重置firstLoading
      this.setState({
        list: res
      });
    }, errMsg => {
      // 错误时，将list重置为空
      this.setState({
        list: []
      })
      _mm.errorTips(errMsg)
    })
  }
  // 这是更新品类的名字
  onUpdateName (categoryId, categoryName) {
    let newName = window.prompt('请输入新的品类名称', categoryName);
    if (newName) {
      _product.updateCategoryName({
        categoryId: categoryId,
        categoryName: newName
      }).then(res => {
        _mm.successTips(res);
        this.loadCategoryList();
      }, errMsg => {
        _mm.errorTips(errMsg);
      });
    }
  }
  render () {
    let listBody = this.state.list.map((category, index) => {
      return (
        <tr key={index}>
          <td>{category.id}</td>
          <td>{category.name}</td>
          <td>
            <a className="opear"
              onClick={(e) => {this.onUpdateName(category.id, category.name)}}>修改名称</a>
              {
                category.parentId === 0 ?
                <Link to={`/product-category/index/${category.id}`}>查看子品类</Link>
                : null
              }
          </td>
        </tr>
      )
    })
    return (
      <div id="page-wrapper">
        <PageTitle title="品类列表">
          {/* 添加按钮 */}
          <div className="page-header-right">
            <Link to="/product-category/add" className="btn btn-primary">
              <i className="fa fa-plus"></i>
              <span>添加品类</span>
            </Link>
          </div>
        </PageTitle>
        <div className="row">
          <div className="col-md-12">
            <p>父品类ID：{this.state.parentCategoryId}</p>
          </div>
        </div>
        <TableList tableHeads={['品类ID','品类名称','操作']}>
          { listBody }
        </TableList>
      </div>
    )
  }
}

export default CategoryList;