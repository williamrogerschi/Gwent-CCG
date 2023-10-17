const { Card } = require('../models/ccIndex.js')

module.exports = {
    getAllCustomCards,
    getCustomCardsById,
    createCard,
    updateCard,
    deleteCard,
}

async function getAllCustomCards (req, res) {
    try {
        const customCards = await Card.find()
        res.status(200).send(customCards)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getCustomCardsById (req, res) {
    try {
        const card = await Card.findById(req.params.id)
        res.status(200).send(card)
    } catch(e) {
        return res.status(500).json( {error: e.message} )
    }
}

async function createCard (req, res) {
    try {
        const card = await Card(req.body)
        await card.save()
        return res.status(201).json({
                card
        })
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function updateCard (req, res) {
    try {
        const id = req.params.id
        const card = await Card.findByIdAndUpdate(id, req.body, { new: true } )
        if(card) {
            return res.status(201).json(card)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteCard (req, res) {
    try {
        const id = req.params.id
        const card = await Card.findByIdAndDelete(id, req.body, { new: true } )
        if(card) {
            return res.status(201).json(card)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}