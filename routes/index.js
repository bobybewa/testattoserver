const express = require('express')
const router = express()
const categoryRoute = require('./category')
const taskRoute = require('./task')
router.use(taskRoute)
router.use(categoryRoute)


module.exports = router