const { Schema } = require('mongoose')

const cardFunctionSchema = new Schema (
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = cardFunctionSchema