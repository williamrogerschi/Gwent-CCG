const { Schema } = require('mongoose')

const cardBuilderSchema = new Schema(
    {
        name: { type: String, require: true },
        faction: { type: Schema.Types.ObjectId, ref: 'Faction' },
        race: [{ type: Schema.Types.ObjectId, ref: 'Race' }],
        cardFunction : { type: Schema.Types.ObjectId, ref: 'Function' },
        ability: { type: String, required: true },
        tag: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
        cardType: { type: String, required: true },
        power: { type: Number, required: true },
        provision: { type: Number, required: true },
        imgURL: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = cardBuilderSchema