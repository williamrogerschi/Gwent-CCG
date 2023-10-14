const  {CardFunction}  = require('../models/ccIndex.js')

module.exports = {
    getAllCardFunctions,
}

async function getAllCardFunctions (req, res) {
    try {
        const interactions = await CardFunction.find()
        res.status(201).send(interactions)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}