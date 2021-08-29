const { Category, Task } = require('../models')
class categoryController{
    static async getAll(req,res){
        try {
            const data = await Category.findAll()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async createCategory(req, res){
        try {
            let { name } = req.body
            let newData = { 
                name
            }
            let createdData = await Category.create(newData)
            res.status(201).json({
                msg : 'Category created successfully'
            })
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async deleteCategory(req, res){
        let { id } = req.params
        Task.findOne({
            where: { categoryId: id },
        })
        .then(data => {
            if(data) res.status(400).json({msg : 'clear all data first'})
            return Category.destroy({ where : { id }})

            .then(result => {
                res.status(200).json({msg : `category id ${id} successfully deleted`})
            })
        })
    }
}

module.exports = categoryController