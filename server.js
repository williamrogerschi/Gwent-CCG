const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
//controllers
const factionController = require('./controllers/factionController.js')
const raceController = require('./controllers/raceController.js')
const cardFunctionController = require('./controllers/cardFunctionController.js')
const tagController = require('./controllers/tagController.js')



const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json())

////////MAIN BODY////////

//homepage
app.get('/', (req, res) => res.send('I am a Gwent homepage, and you will not break me!'))

//factions
app.get('/factions', factionController.getAllFactions)
//races
app.get('/races', raceController.getAllRaces)
//interactions
app.get('/interactions', cardFunctionController.getAllCardFunctions)
//tags
app.get('/tags', tagController.getAllTags)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))