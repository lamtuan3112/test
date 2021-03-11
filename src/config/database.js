const Sequelize = require("sequelize");
const sequelize = new Sequelize("demo", "postgres", "lamtuan3112", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
const Op = Sequelize.Op;

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require('../models/employeeModel')(sequelize , Sequelize);

module.exports = db;