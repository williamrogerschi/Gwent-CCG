const { Schema } = require('mongoose')

const cardTypeSchema = new Schema (
    {
        name: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = cardTypeSchema