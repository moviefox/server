'use strict';
module.exports = (sequelize, DataTypes) => {
  class Movie extends sequelize.Sequelize.Model{
    static associate(models){
      Movie.belongsToMany(models.User, {through: models.MovieUser})

    }
  }
  Movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    poster: DataTypes.STRING,
    plot: DataTypes.STRING
  }, {
    sequelize
  });
  return Movie;
};