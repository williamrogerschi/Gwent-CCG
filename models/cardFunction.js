const { Schema } = require('mongoose')

const cardFunctionSchema = new Schema (
    {
        functionType: [{ type: String, required: true }],
    },
    { timestamps: true },
)

module.exports = cardFunctionSchema