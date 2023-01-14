const product =  (state = { products: [], page: 1, totalCount: 0 }, action) => {
  switch (action.type) {
    case 'PRODUCT_LOADED':
    return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default product;
