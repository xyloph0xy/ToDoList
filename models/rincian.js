'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rincian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ToDo)
    }
  }
  Rincian.init({
    todoId: DataTypes.INTEGER,
    Deskripsi: DataTypes.STRING,
    Status: {
      type: DataTypes.ENUM('doing', 'done'),
      validate: {
        isIn: {
          args: [['doing', 'done']],
          msg: 'status harus (doing / done)',
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Rincian',
  });
  return Rincian;
};