const express = require('express')
const authantication = require('./authantication')
const category = require('../api/category')
const merchant = require('../api/merchant')
const product = require('../api/product')
const discount = require('../api/discount')
const router = express.Router()



router.use("/authantication", authantication);
router.use("/category", category);
router.use('/merchant', merchant);
router.use('/product', product)
router.use('/discount',discount)

module.exports = router