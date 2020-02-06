'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    username: DataTypes.STRING,
    emai: DataTypes.STRING,
    password: DataTypes.STRING
  }, { sequelize })
  return User;
};