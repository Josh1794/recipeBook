const Sequelize = require("sequelize");
const db = require("../db");

const Recipe = db.define("recipe", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imgURL: {
    type: Sequelize.STRING,
    allowNull: true
  },
  vidURL: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Recipe;
