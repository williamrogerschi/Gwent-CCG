const { Schema } = require('mongoose')

const raceSchema = new Schema (
    {
    subclass: [{ type: String, required: true }],
    },
    { timestamps: true },
)

module.exports = raceSchema