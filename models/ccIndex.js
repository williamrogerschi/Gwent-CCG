 const mongoose = require('mongoose')
 const cardBuilderSchema = require('./card.js')
 const factionSchema = require('./faction.js')
 const raceSchema = require('./race.js')
 const tagSchema = require('./tag.js')
 const cardFunctionSchema = require('./cardFunction.js')
 const cardTypeSchema = require('./type.js')

 const Card = mongoose.model('card', cardBuilderSchema)
 const Faction = mongoose.model('faction', factionSchema)
 const Race = mongoose.model('race', raceSchema)
const Tag = mongoose.model('tag', tagSchema)
const CardFunction = mongoose.model('cardFunction', cardFunctionSchema)
const Type = mongoose.model('type', cardTypeSchema)


module.exports = {
    Card,
    Faction,
    Race,
    Tag,
    CardFunction,
    Type,
}