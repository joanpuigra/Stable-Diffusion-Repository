const mongoose = require('mongoose')
const config = require('../config')

const dbConnection = () => {
  mongoose
    .connect(config.MONGO_URL)
    .then(() => {
      console.log('Database connection successful')
    })
    .catch((error) => {
      console.error('Database connection failed: ', error)
    })
}

module.exports = dbConnection
