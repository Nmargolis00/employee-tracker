const Sequelize = require("sequelize");
require("dotenv").config();

// Create a connection object
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }

  sequelize.connect(function (err){
    if(err) {
      throw err;
    }
  })
);

module.exports = connection;
