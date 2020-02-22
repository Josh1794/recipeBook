const Sequelize = require("sequelize");
const db = require("../db");

const Ingredient = db.define("ingredient", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  quantity: {
    type: Sequelize.STRING
  }
});

module.exports = Ingredient;
