import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';

// Product是一个类，在调用的时候需要去new一个它出来
const _product = new Product();
const _mm = new MUtil();


class CategoryAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // 首先初始化一个List，不然后面用map的时候会报错
      categoryList: [],
      parentId: 0,
      categoryName: ''
    }
  }
  componentDidMount () {
    this.loadCategoryList();
  }
  // 加载品类列表，显示父级品类列表
  loadCategoryList () {
    // 这里不用传id，直接传一级品类
    _product.getCategoryList().then(res => {
      // 先重置其他的，再重置firstLoading
      this.setState({
        categoryList: res
      });
    }, errMsg => {
      _mm.errorTips(errMsg)
    })
  }
  // 文本变化
  onValueChange (e) {
    let name = e.target.name,
        value = e.target.value.trim();
    this.setState({
      [name]: value
    })
  }
  // 提交表单
  onSubmit (e) {
    let categoryName = this.state.categoryName.trim();
    // 品类名称不为空，直接提交数据
    if (categoryName) {
      _product.saveCategory({
        parentId: this.state.parentId,
        categoryName: categoryName
      }).then(res => {
        _mm.successTips(res);
        // 提交成功以后跳回到上一页
        this.props.history.push('/product-category/index');
      }, errMsg => {
        _mm.errorTips(errMsg);
      });
    } else {
      _mm.errorTips('请输入品类名称！');
    }
  }
  render () {
    return (
      <div id="page-wrapper">
        <PageTitle title="品类列表"/>
        <div className="row">
          <div className="col-md-12">
            <div className="form-horizontal">
              <div className="form-group">
                <label className="col-md-2 control-label">所属品类</label>
                <div className="col-md-5">
                  <select name="parentId"
                    onChange={(e) => this.onValueChange(e)}
                    className="form-control">
                    <option value="0">根品类/</option>
                    {
                      this.state.categoryList.map((category, index) => {
                        return <option value={category.id} key={index}>
                          根品类/{category.name}
                        </option>
                      })
                    }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 control-label">品类名称</label>
                <div className="col-md-5">
                  <input type="text" className="form-control"
                    placeholder="请输入品类名称"
                    name="categoryName"
                    value={this.state.categoryName}
                    onChange={(e) => {this.onValueChange(e)}}/>
                </div>
              </div>
              <div className="form-group">
              <div className="col-md-offset-2 col-md-10">
                <button type="submit" className="btn btn-primary"
                  onClick={(e) => this.onSubmit(e)}>提交</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryAdd;