const express = require("express");
const sequelize = require("./config/connection");
const startProgram = require("./index.js");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

//middleware for parsing JSON and url encoded from data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

sequelize
  //force false ensures that seeded data stays there every time
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  })
  .then(() => {
    startProgram();
  });
