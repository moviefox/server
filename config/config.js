require("dotenv").config();

module.exports = {
  development: {
    username: 'postgre',
    password: 'postgre',
    database: 'moviefox',
    host: process.env.DB_HOST,
    dialect: "postgres",
    operatorsAliases: 0
  },
}