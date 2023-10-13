const { Schema } = require('mongoose')

const factionSchema = new Schema (
    {
        name: [{ type: String, required: true }],
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = factionSchema