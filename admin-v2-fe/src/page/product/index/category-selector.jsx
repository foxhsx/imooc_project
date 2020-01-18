import React from 'react';
import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';

import './category-selector.scss';

const _mm = new MUtil();
const _product = new Product();

class CategorySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstCategoryList: [],    // 一级分类的List
      firstCategoryId  : 0,     // 一级分类的id
      secondCategoryList: [],   // 二级分类的list
      secondCategoryId : 0      // 二级分类的id
    }
  }
  // 页面渲染的时候加载一级分类的下拉框
  componentDidMount () {
    this.loadFirstCategory();
  }
  // 当props变化时才触发的函数
  componentWillReceiveProps(nextProps) {
    // 函数触发之后判断当前的id和传进来的id是否相同
    let categoryIdChange = this.props.categoryId !== nextProps.categoryId,
        parentCategoryIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId;

    // 数据没有变化的时候，直接不做处理 为了避免这个组件改变父组件的值之后发生操作
    if (!categoryIdChange && !parentCategoryIdChange) {
      return;
    }
    // 有几级品类

    // 假如只有一级品类
    if (nextProps.parentCategoryId == 0) {
      this.setState({
        firstCategoryId: nextProps.categoryId,
        secondCategoryId: 0
      });
    }
    // 假如有两级品类
    else {
      this.setState({
        firstCategoryId: nextProps.parentCategoryId,
        secondCategoryId: nextProps.categoryId
      }, () => {
        // 假如二级品类没有发生变化，就不执行后面的loadSecondCategory
        parentCategoryIdChange && this.loadSecondCategory();
      })
    }
  }
  // 这是加载一级分类
  loadFirstCategory () {
    _product.getCategoryList().then(res => {
      this.setState({
        firstCategoryList: res
      })
    }, errMsg => {
      _mm.errorTips(errMsg);
    });
  }
  // 加载二级
  loadSecondCategory () {
    // 调用二级分类的时候，把一级分类的id传过去
    _product.getCategoryList(this.state.firstCategoryId).then(res => {
      this.setState({
        secondCategoryList: res
      })
    }, errMsg => {
      _mm.errorTips(errMsg);
    });
  }
  // 加载一级品类的变化
  onFirstCategoryChange (e) {
    // 如果是readOnly则把它return掉
    if (this.props.readOnly) {
      return
    }
    // 获取一级分类的id，也就是当前选中项的option的value
    let newValue = e.target.value || 0;
    // 每一次选中之后把二级品类的东西清空掉
    this.setState({
      firstCategoryId: newValue,      // 当选中一级分类以后，这个一级分类的Id需要更改
      secondCategoryId: 0,            // 二级的分类id重置为0
      secondCategoryList: []          // 二级的list也重置为空
    }, () => {
      // 更新二级
      this.loadSecondCategory();
      // 选完之后调用父类的方法
      this.onPropsCategoryChange();
    });
  }
  // 加载二级品类的变化
  onsecondCategoryChange (e) {
    // 如果是readOnly则把它return掉
    if (this.props.readOnly) {
      return
    }
    // 同样重置二级的id
    let newValue = e.target.value || 0;
    // 每一次选中之后把二级品类的东西清空掉
    this.setState({
      secondCategoryId: newValue
    }, () => {
      // 选完之后调用父类的方法
      this.onPropsCategoryChange();
    });
  }
  // 传给父组件选中的结果
  onPropsCategoryChange () {
    // 判断props里的回调函数是否存在
    let categoryChangeable = typeof this.props.onCategoryChange === 'function';
    // 如果右二级品类
    if (this.state.secondCategoryId) {
      // 两个都选中的时候，吧两个id都传递过去
      categoryChangeable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId);
    } else {
      // 如果只有一级，父级的id默认为0
      categoryChangeable && this.props.onCategoryChange(this.state.firstCategoryId, 0);
    }
  }
  render () {
    return (
      <div className="col-md-10">
        <select className="form-control cate-select"
          value={this.state.firstCategoryId}
          onChange={e => this.onFirstCategoryChange(e)}
          readOnly={this.props.readOnly}>
          <option value="">请选择以及分类</option>
          {
            this.state.firstCategoryList.map((category, index) => {
              return (
              <option value={category.id} key={index}>{category.name}</option>
              )
            })
          }
        </select>
        {
          // 如果没有二级，就不渲染
          this.state.secondCategoryList.length ?
              (
                <select className="form-control cate-select"
                  value={this.state.secondCategoryId}
                  onChange={e => this.onsecondCategoryChange(e)}
                  readOnly={this.props.readOnly}>
                  <option value="">请选择以及分类</option>
                  {
                    this.state.secondCategoryList.map((category, index) => {
                      return (
                      <option value={category.id} key={index}>{category.name}</option>
                      )
                    })
                  }
                </select>
              ) : null
        }
      </div>
    )
  }
}

export default CategorySelector;