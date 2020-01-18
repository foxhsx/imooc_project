import React from 'react';
import PageTitle from 'component/page-title/index.jsx';

import MUtil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';
import CategorySelector from './category-selector.jsx'
import FileUploader from 'util/file-uploader/index.jsx'
import RichEditor from 'util/rich-editor/index.jsx'

import './save.scss'

// User是一个类，在调用的时候需要去new一个它出来
const _product = new Product();
const _mm = new MUtil();

class ProductSave extends React.Component {
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
        // 定义一个变量将defaultDetail缓存起来，加载的时候是defaultDetail在变，其他时候是detail在变
        res.defaultDetail = res.detail;
        this.setState(res)
      }, errMsg => {
        _mm.errorTips(errMsg);
      })
    }
  }
  // 品类选择器得变化
  onCategoryChange (categoryId, parentCategoryId) {
    
    this.setState({
      categoryId: categoryId,
      parentCategoryId: parentCategoryId
    })
  }
  // 上传图片成功
  onUploadSuccess (res) {
    let subImages = this.state.subImages;
    subImages.push(res.data);
    this.setState({
      // subImages: this.state.subImages.push(res.data)  返回了数组得长度
      subImages: subImages
    })
  }
  // 上传图片失败
  onUploadError (error) {
    _mm.errorTips(error.message || "上传图片失败")
  }
  // 删除图片
  onImageDelete(e) {
    let index = paresInt(e.target.getAttribute("index")),
        subImages = this.state.subImages;
    // 删除对应图片
    subImages.splice(index, 1);
    this.setState({
      subImages: subImages
    })
  }
  // 富文本数据改变
  onDetailValueChange (value) {
    this.setState({
      detail: value
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
  // 将图片集合转义成字符串
  getsubImagesString () {
    return this.state.subImages.map((image) => image.uri).join(',')
  }
  // 提交表单
  onSubmit (e) {
    let product = {
      name: this.state.name,
      subtitle: this.state.subtitle,
      categoryId: parseInt(this.state.categoryId),
      subImages: this.getsubImagesString(),
      detail: this.state.detail,
      price: parseFloat(this.state.price),
      stock: parseInt(this.state.stock),
      status: this.state.status
    }
    // 表单验证
    let productCheckResult = _product.checkProduct(product);
    // 判断编辑提交
    if (this.state.id) {
      product.id = this.state.id;
    }
    
    // 成功
    if (productCheckResult.status) {
      _product.saveProduct(product).then(res => {
        _mm.successTips(res);
        this.props.history.push('/product/index');
      }, errorMsg => {
        _mm.errorTips(errorMsg);
      })
    }
    // 失败
    else {
      _mm.errorTips(productCheckResult.msg);
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
              <input type="text" className="form-control"
                placeholder="请输入商品名称"
                name="name"
                value={this.state.name}
                onChange={(e) => {this.onValueChange(e)}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品描述</label>
            <div className="col-md-5">
              <input type="text" className="form-control" 
              placeholder="请输入商品描述"
              name="subtitle"
              value={this.state.subtitle}
              onChange={(e) => {this.onValueChange(e)}}/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">所属分类</label>
            <CategorySelector
              categoryId={this.state.categoryId}
              parentCategoryId={this.state.parentCategoryId}
              onCategoryChange={(categoryId, parentCategoryId) => {
                this.onCategoryChange(categoryId, parentCategoryId);
              }} />
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品价格</label>
            <div className="col-md-3">
            <div className="input-group">
                <input type="number" className="form-control"
                      placeholder="请输入商品价格"
                      name="price"
                      value={this.state.price}
                      onChange={(e) => {this.onValueChange(e)}} />
                <span className="input-group-addon">元</span>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品库存</label>
            <div className="col-md-3">
              <div className="input-group">
                <input type="number" className="form-control"
                        placeholder="请输入商品库存"
                        name="stock"
                        value={this.state.stock}
                        onChange={(e) => {this.onValueChange(e)}}/>
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
                      <i className="fa fa-close" index={index} onClick={(e) => this.onImageDelete(e)}></i>
                    </div>
                  )
                ) : (<div>请上传图片</div>)
              }
            </div>
            <div className="col-md-offset-2 col-md-10 file-upload-con">
              <FileUploader
              onSuccess={(res)  => this.onUploadSuccess(res)}
              onError={(err) => this.onUploadError(err)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-2 control-label">商品详情</label>
            <div className="col-md-10">
              <RichEditor
                detail={this.state.detail}
                defaultDetail={this.state.defaultDetail}
                onValueChange={(value) => {this.onDetailValueChange(value)}}
              />
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
    )
  }
}

export default ProductSave;
