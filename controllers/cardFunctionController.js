const  {CardFunction, Card}  = require('../models/ccIndex.js')

module.exports = {
    getAllCardFunctions,
    getInteractionsById,
    createCF,
    updateCF,
    deleteCF,
}

async function getAllCardFunctions (req, res) {
    try {
        const interactions = await CardFunction.find()
        res.status(200).send(interactions)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getInteractionsById (req, res) {
    try {
        const interaction = await CardFunction.findById(req.params.id)
        res.status(200).send(interaction)
    } catch(e) {
        return res.status(500).json( {error: e.message} )
    }
}

async function createCF (req, res) {
    try {
        const interaction = await CardFunction(req.body)
        await interaction.save()
        return res.status(201).json({
            interaction
        })
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}

async function updateCF (req ,res) {
    try {
        const id = req.params.id
        const interaction = await CardFunction.findByIdAndUpdate(id, req.body, { new: true } )
        if(interaction) {
            return res.status(201).json(interaction)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteCF (req, res) {
    try {
        const id = req.params.id
        const interaction = await CardFunction.findByIdAndDelete
        (id, req.body, { new: true } )
        if(interaction) {
            return res.status(201).json(interaction)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}