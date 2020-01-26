const Sequelize = require('sequelize')
const db = require('../db')

const Step = db.define('step', {
  stepNum: {
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false
  },
  instruction: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Step
