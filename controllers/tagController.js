const  {Tag}  = require('../models/ccIndex.js')

module.exports = {
    getAllTags,
}

async function getAllTags (req, res) {
    try {
        const tags = await Tag.find()
        res.status(201).send(tags)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}