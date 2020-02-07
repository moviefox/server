'use strict';
module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{
    static associate(models){
      User.belongsToMany(models.Movie, {through: models.MovieUser})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize
  });
  
  return User;
};