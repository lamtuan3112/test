const Sequelize = require("sequelize");
const sequelize = require("../config/database").sequelize;

module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employees", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUID4,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  return Employee;
};