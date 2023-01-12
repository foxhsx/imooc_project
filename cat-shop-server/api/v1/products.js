const router = require('express').Router();
const Product = require('../../models/product');

router.get('/', async (req, res, next) => {
  try {
    const { per = 10, page = 1, name } = req.query;
    let query = {};
    if (name) {
      query.name = new RegExp(name, 'i')
    }
    const totalCount = await Product.find(query).count();
    const products = await Product.find(query).populate('productCategory').sort({ createdAt: -1 })
      .limit(per)
      .skip(per * (page - 1))

    res.json({
      totalCount,
      pages: Math.ceil(totalCount/per),
      products,
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const productSave = await product.save();
    res.json(productSave)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateRes = await Product.findByIdAndUpdate(id, req.body);
    res.json(updateRes)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const delRes = await Product.findByIdAndDelete(id);
    res.json(delRes)
  } catch (error) {
    next(error)
  }
})

module.exports = router;