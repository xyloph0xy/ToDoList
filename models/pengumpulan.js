'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pengumpulan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ToDo)
    }
  }
  Pengumpulan.init({
    todoId: {
      type:DataTypes.INTEGER,
    },
    nama: DataTypes.STRING,
    link: DataTypes.STRING,
    deskripsi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pengumpulan',
  });
  return Pengumpulan;
};