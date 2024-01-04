const express = require('express')
const connectDB = require('./db/index.js')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')

//controllers
const factionController = require('./controllers/factionController.js')
const raceController = require('./controllers/raceController.js')
const cardFunctionController = require('./controllers/cardFunctionController.js')
const tagController = require('./controllers/tagController.js')
const cardController = require('./controllers/cardController.js')
const typeController = require('./controllers/typeController.js')

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json())

connectDB()
    .then((db) => {
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    })
    .catch((error) => console.error(error))


////////MAIN BODY////////
app.get('/', (req, res) => res.send('I am a Gwent homepage, and you will not break me!'))

//factions
app.get('/factions', factionController.getAllFactions)
app.get('/factions/:id', factionController.getFactionById)
app.post('/factions', factionController.createFaction)
app.put('/factions/:id', factionController.updateFaction)
app.delete('/factions/:id', factionController.deleteFaction)

//races
app.get('/races', raceController.getAllRaces)
app.get('/races/:id', raceController.getRacesById)
app.post('/races', raceController.createRace)
app.put('/races/:id', raceController.updateRace)
app.delete('/races/:id', raceController.deleteRace)

//interactions
app.get('/interactions', cardFunctionController.getAllCardFunctions)
app.get('/interactions/:id', cardFunctionController.getInteractionsById)
app.post('/interactions', cardFunctionController.createCF)
app.put('/interactions/:id', cardFunctionController.updateCF)
app.delete('/interactions/:id', cardFunctionController.deleteCF)

//type
app.get('/types', typeController.getAllTypes)
app.get('/types/:id', typeController.getTypesById)
app.post('/types', typeController.createType)
app.put('/types/:id', typeController.updateType)
app.delete('/types/:id', typeController.deleteType)

//tags
app.get('/tags', tagController.getAllTags)
app.get('/tags/:id', tagController.getTagsById)
app.post('/tags', tagController.createTag)
app.put('/tags/:id', tagController.updateTag)
app.delete('/tags/:id', tagController.deleteTag)

//custom cards
app.get('/cards', cardController.getAllCustomCards)
app.get('/cards/:id', cardController.getCustomCardsById)
app.post('/cards', cardController.createCard)
app.put('/cards/:id', cardController.updateCard)
app.delete('/cards/:id', cardController.deleteCard)


// app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))