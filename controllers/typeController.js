const { Type } = require('../models/ccIndex.js')

module.exports = {
    getAllTypes,
    getTypesById,
    createType,
    updateType,
    deleteType,
}

async function getAllTypes (req, res) {
    try {
        const types = await Type.find()
        res.status(200).send(types)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getTypesById (req, res) {
    try {
        const type = await Type.findById(req.params.id)
        res.status(200).send(type)
    } catch(e) {
        return res.status(500).json( {error: e.message} )
    }
}

async function createType (req, res) {
    try {
        const type = await Type(req.body)
        await type.save()
        return res.status(201).json({
            type
        })
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}

async function updateType (req, res) {
    try {
        const id = req.params.id
        const type = await Type.findByIdAndUpdate(id, req.body, { new: true } )
        if(type) {
            return res.status(201).json(type)
        }
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteType (req, res) {
    try {
        const id = req.params.id
        const type = await Type.findByIdAndDelete(id, req.body, { new: true } )
        if(type) {
            return res.status(201).json(type)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}