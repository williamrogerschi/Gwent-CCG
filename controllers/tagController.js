const  {Tag}  = require('../models/ccIndex.js')

module.exports = {
    getAllTags,
    getTagsById,
    createTag,
    updateTag,
    deleteTag,
}

async function getAllTags (req, res) {
    try {
        const tags = await Tag.find()
        res.status(200).send(tags)
    } catch(e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getTagsById (req, res) {
    try {
        const tag = await Tag.findById(req.params.id)
        res.status(200).send(tag)
    } catch(e) {
        return res.status(500).json( {error: e.message} )
    }
}

async function createTag (req, res) {
    try {
        const tag = await Tag(req.body)
        await tag.save()
        return res.status(201).json({
            tag
        })
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}

async function updateTag (req, res) {
    try {
        const id = req.params.id
        const tag = await Tag.findByIdAndUpdate(id, req.body, { new: true } )
        if(tag) {
            return res.status(201).json(tag) //wondering why under update I don't need {}
        }
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteTag (req, res) {
    try {
        const id = req.params.id
        const tag = await Tag.findByIdAndDelete(id, req.body, { new: true } )
        if(tag) {
            return res.status(201).json(tag)
        }
    } catch(e) {
        return res.status(500).json({error: e.message})
    }
}