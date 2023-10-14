const  {Race}  = require('../models/ccIndex.js')

module.exports = {
    getAllRaces,
}

async function getAllRaces (req, res) {
    try {
        const races = await Race.find()
        res.status(201).send(races)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}