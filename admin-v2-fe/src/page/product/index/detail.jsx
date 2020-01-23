import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import CategorySelector from './category-selector.jsx'

import './save.scss'

// User是一个类，在调用的时候需要去new一个它出来
const _product = new Product();
const _mm = new MUtil();

class ProductDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: this.props.match.params.pid,
      name: '',       // 商品名称
      subtitle: '',   // 商品描述
      categoryId: 0,  // 品类ID
      parentCategoryId: 0,
      subImages: [],
      price: '',    // 商品价格
      stock: '',    // 库存
      detail: '',   // 详情
      status: 1    // 商品状态    1代售
    }
  }
  // 页面加载
  componentDidMount() {
    this.loadProduct()
  }
  // 加载商品详情
  loadProduct () {
    // 如果又这个id，就是编辑，需要表单回填
    if (this.state.id) {
      _product.getProduct(this.state.id).then(res => {
        let images = res.subImages.split(',');
        res.subImages = images.map((imgUri) => {
          return {
            uri: imgUri,
            // imageHost是返回的字段里的地址信息
            url: res.imageHost + imgUri
          }
        })
        this.setState(res)
      }, errMsg => {
        _mm.errorTips(errMsg);
      })
    }
  }
  render() {
    return (
      <div id="page-wrapper">
        <PageTitle title="添加商品" />
        <div className="form-horizontal">
          <div className="form-group">
            <label className="col-md-2 control-label">商品名称</label>
            <div className="col-md-5">
              <p className="form-control-static">{this.state.name}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品描述</label>
            <div className="col-md-5">
              <p className="form-control-static">{this.state.subtitle}</p>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">所属分类</label>
            <CategorySelector
              readOnly
              categoryId={this.state.categoryId}
              parentCategoryId={this.state.parentCategoryId}
              />
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品价格</label>
            <div className="col-md-3">
            <div className="input-group">
                <input type="number" className="form-control"
                      value={this.state.price}
                      readOnly/>
                <span className="input-group-addon">元</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品库存</label>
            <div className="col-md-3">
              <div className="input-group">
                <input type="number" className="form-control"
                        value={this.state.stock}
                        readOnly/>
                <span className="input-group-addon">件</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品图片</label>
            <div className="col-md-10">
              {
                this.state.subImages.length ? this.state.subImages.map(
                  (image, index) => (
                    <div key={index} className="img-con">
                      <img src={image.url} />
                    </div>
                  )
                ) : (<div>暂无图片</div>)
              }
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品详情</label>
            {/* dangerouslySetInnerHTML将html格式的数据渲染到页面上 */}
            <div className="col-md-10" dangerouslySetInnerHTML={{__html:this.state.detail}}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail;
    // 成功
