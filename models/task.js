'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Category, {foreignKey: 'categoryId'})
    }
  };
  Task.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'title must not be empty'
        }
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: 'categoryId must not be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};