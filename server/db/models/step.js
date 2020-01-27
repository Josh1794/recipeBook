const Sequelize = require("sequelize");
const db = require("../db");

const Step = db.define("step", {
  stepNum: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  instruction: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Step;
