const  {Faction}  = require('../models/ccIndex.js')

module.exports = {
    getAllFactions,
    getFactionById,
    createFaction,
    updateFaction,
    deleteFaction,
}

async function getAllFactions (req, res) {
    try {
        const factions = await Faction.find()
        res.status(200).send(factions)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getFactionById (req, res) {
    try {
        const faction = await Faction.findById(req.params.id)
        res.status(200).send(faction)
    } catch(e) {
        return res.status(500).json( {error: e.message} )
    }
}

async function createFaction (req, res) {
    try {
        const faction = await Faction(req.body)
        await faction.save()
        return res.status(201).json({
            faction
        })
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}

async function updateFaction (req, res) {
    try {
        const id = req.params.id
        const faction = await Faction.findByIdAndUpdate(id, req.body, { new: true } )
        if(faction) {
            return res.status(201).json(faction)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteFaction (req, res) {
    try {
        const id = req.params.id
        let faction = await Faction.findByIdAndDelete(id)
        if(faction) {
            return res.status(201).json(faction)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}