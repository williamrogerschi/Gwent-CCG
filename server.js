const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
//controllers


const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json())

////////MAIN BODY////////


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))