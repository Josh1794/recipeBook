const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlphanumeric: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Book;
