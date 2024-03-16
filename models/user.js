'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ToDo)
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:{
        args: true,
        msg: "username tidak boleh sama"
      }
    },
    password: DataTypes.STRING,
    email:{
      type: DataTypes.STRING,
      isEmail: {
        args: true,
        msg: 'Yang anda masukan bukan email',
      }
    
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};