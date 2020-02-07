'use strict';
module.exports = (sequelize, DataTypes) => {
  class MovieUser extends sequelize.Sequelize.Model{
    static associate(models){
      
    }
  }
  MovieUser.init({
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    sequelize
  });
  
  return MovieUser;
};