const express = require('express')
const cors = require('cors')
const routes = require('./config/routes')

const app = express()
app.use(express.json())
app.use(cors())

routes(app)

module.exports = app






