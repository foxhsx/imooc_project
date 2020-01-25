import MUtil from 'util/mm.jsx';

const _mm = new MUtil();

class Product {
  // 获取商品列表
  getProductList (listParam) {
    let url = '',
        data = {};
    // 如果是list，只传pageNum
    if (listParam.listType === 'list') {
      url = '/manage/product/list.do';
      data.pageNum = listParam.pageNum;
    }
    // 如果是search，需要传pgaeNum和type参数
    else if (listParam.listType === 'search') {
      url = '/manage/product/search.do';
      data.pageNum = listParam.pageNum;
      data[listParam.searchType] = listParam.keyword;
    }
    return _mm.request({
      type: 'post',
      url: url,
      data: data
    })
  }
  // 编辑页面
  getProduct (productId) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/detail.do',
      data: {
        productId: productId || 0
      }
    })
  }
  setProductStatus (productInfo) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/set_sale_status.do',
      data: productInfo
    })
  }
  // 检查表单保存商品
  checkProduct (product) {
    let result = {
      status: true,
      msg: "验证通过"
    };
    // 判断商品名为空
    if (typeof product.name != 'string' || product.name.length === 0) {
      // 不是字符串，或者为空
      return {
        status: false,
        msg: '商品名称不能为空'
      }
    }
    // 判断商品描述为空
    if (typeof product.subtitle != 'string' || product.subtitle.length === 0) {
      // 不是字符串，或者为空
      return {
        status: false,
        msg: '商品描述不能为空'
      }
    }
    // 品类ID
    if (typeof product.categoryId != 'number' || !(product.categoryId > 0)) {
      // 不是字符串，或者为空
      return {
        status: false,
        msg: '请选择商品品类'
      }
    }
    // 判断商品价格为数字，且大于0
    if (typeof product.price != 'number' || !(product.price >= 0)) {
      // 不是字符串，或者为空
      return {
        status: false,
        msg: '请输入正确的商品价格'
      }
    }
    // 判断商品库存大于或等于0，且为数字
    if (typeof product.stock != 'number' || !(product.stock >= 0)) {
      // 不是字符串，或者为空
      return {
        status: false,
        msg: '请输入正确的库存数量'
      }
    }
    return result;
  }
  // 保存商品
  saveProduct (product) {
    return _mm.request({
      type: 'post',
      url: '/manage/product/save.do',
      data: product
    })
  }

  // 更新品类名称
  updateCategoryName (category) {
    return _mm.request({
      type: 'post',
      url: '/manage/category/set_category_name.do',
      data: category
    })
  }

  // 品类相关
  getCategoryList(parentCategoryId) {
    return _mm.request({
      type: 'post',
      url: '/manage/category/get_category.do',
      data: {
        categoryId: parentCategoryId || 0
      }
    })
  }
  // 添加品类
  saveCategory (category) {
    return _mm.request({
      type: 'post',
      url: '/manage/category/add_category.do',
      data: category
    })
  }
}

export default Product;