const  {Faction}  = require('../models/ccIndex.js')

module.exports = {
    getAllFactions,
}

async function getAllFactions (req, res) {
    try {
        const factions = await Faction.find()
        res.status(201).send(factions)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}