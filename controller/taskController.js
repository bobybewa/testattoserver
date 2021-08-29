const { Category, Task }  = require('../models')


class taskController{
    static async createTask(req,res){
        try {
            let { title, categoryId } = req.body
            let createdData = await Task.create({title, categoryId})
            res.status(201).json({
                msg: 'task created successfully'
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async getTask(req, res){
        try {
            let data = await  Task.findAll({
                include: [Category], order: [
                    ['id', 'ASC'],
                ],
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteTask(req, res){
        try {
            let { id } = req.params
            let deleted = await Task.destroy({ where: { id: id } })
            res.status(200).json({
                msg : 'successfully deleted'
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async updateTask(req, res){
        try {
            let { id } = req.params
            let { title } = req.body
            let updated = await Task.update({ title }, { where: { id }, returning: true})
            let success = updated[0]
            if(success){
                let response = updated[1][0]
                res.status(200).json(response)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async patchTask(req, res){
        try {
            let { id } = req.params
            let { categoryId } = req.body
            let updated = await Task.update({ categoryId }, { where: { id }, returning: true})
            let success = updated[0]
            if(success){
                let response = updated[1][0]
                res.status(200).json(response)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = taskController