const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./config')
const dbConnection = require('./database/database')

const api = require('./routes/api')

const app = express()

// Authorize to access the client
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
)

app.use(bodyParser.json())

app.use('/api', api)

app.listen(config.PORT, () => {
  dbConnection()
  console.log(`Server running on ${config.PORT}`)
})
