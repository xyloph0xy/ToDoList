'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lampiran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ToDo)
    }
  }
  Lampiran.init({
    alamatPath: DataTypes.STRING,
    todoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lampiran',
  });
  return Lampiran;
};