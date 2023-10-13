const { Schema } = require('mongoose')

const raceSchema = new Schema (
    {
    class: [{ type: String, required: true }],
    },
    { timestamps: true },
)

module.exports = raceSchema