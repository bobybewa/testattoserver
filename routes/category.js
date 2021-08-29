const express = require('express')
const router = express.Router()
const categoryController = require('../controller/categoryController')

router.post('/category', categoryController.createCategory)
router.get('/category', categoryController.getAll)
router.delete('/category:id', categoryController.deleteCategory)
module.exports = router