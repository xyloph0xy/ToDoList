'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User)
      this.hasMany(models.Rincian)
      this.hasMany(models.Lampiran)
      this.hasOne(models.Pengumpulan)
      this.belongsToMany(models.Tags, { through: models.Todo_Tags})
    }
  }
  ToDo.init({
    UserId: DataTypes.INTEGER,
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('doing','done')  
    },
    Tenggat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};