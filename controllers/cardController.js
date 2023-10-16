const { Card } = require('../models/ccIndex.js')

module.exports = {
    getAllCustomCards,
}

async function getAllCustomCards (req, res) {
    try {
        const customCards = await Card.find()
        res.status(201).send(customCards)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}