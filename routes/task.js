const express = require('express')
const router = express.Router()
const taskController = require('../controller/taskController')

router.post('/task', taskController.createTask)
router.get('/task', taskController.getTask)
router.delete('/task/:id', taskController.deleteTask)
router.put('/task/:id', taskController.updateTask)
router.patch('/task/:id', taskController.patchTask)
module.exports = router