const db = require('../db/index')

const { Builder, Faction, Race, Tag, CardFunction } = require('../models/ccIndex.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const main = async () => {

    //FACTIONS//
    const NG = await new Faction({
        name: `Nilfgaard`,
        description: ``
    })
    NG.save()

    const ST = await new Faction({
        name: `Scoia'tael`,
        description: ``
    })
    ST.save()

    const SY = await new Faction({
        name: `Syndicate`,
        description: ``
    })
    SY.save()

    const MO = await new Faction({
        name: `Monsters`,
        descrption: ``
    })
    MO.save()

    const SK = await new Faction({
        name: `Skellige`,
        descrption: ``
    })
    SK.save()

    const NR = await new Faction({
        name: `Northern Realms`,
        description: ``
    })
    NR.save()

    //RACE
    const races = [
        { name: `Human`}, { name: `Soldier`}, { name: `Warrior`}, { name: `Vampire`}, { name: `Beast`}, { name: `Elf`}, { name: `Bandit`}, { name: `Dryad`}, { name: `Gnome`}, { name: `Dwarf`}, { name: `Dragon`}, { name: `Relict`}, { name: `Ogroid`}, { name: `Aristocrat`}
    ]

    await Race.insertMany(races)
    console.log(`Created some races!`)

    //Card Interaction
    const interactions = [
        {
            name: `Order`,
            description: `An ability triggered manually by the player. Cards with Order cannot be used for 1 turn after being placed on the battlefield.`
        },
        {
            name: `Zeal`,
            description: `An Order ability can be used on the same turn the card is placed on the battlefield.`
        },
        {
            name: `Deploy`,
            description: `Triggers an ability when the card is played (as opposite from "Summons").`
        },
    ]
    await CardFunction.insertMany(interactions)
    console.log(`Created some interactions!`)

    const tags = [
        {name: `Adrenaline`}, {name: `Ambush`}, {name: `Assimilate`}, {name: `Berserk`}, {name: `Bonded`}, {name: `Crew`}, {name: `Deathwish`}, {name: `Devotion`}, {name: `Disloyal`},  {name: `Echo`}, {name: `Formation`}, {name: `Insanity`}, {name: `Resupply`}, {name: `Symbiosis`}, {name: `Thrive`}, {name: `Veteran`}, {name: `Bleeding`}, {name: `Bounty`}, {name: `Defender`}, {name: `Doomed`}, {name: `Immunity`}, {name: `Poison`}, {name: `Shield`}, {name: `Spying`}, {name: `Locked`}, {name: `Vitality`}
    ]
    await Tag.insertMany(tags)
    console.log(`Created some statuses!`)

    // const customCard = [
    //     {
    //         faction: [NG._id, ST._id, SY._id, MO._id, SK._id, NR._id],
    //         race: [races[i]],
    //         cardFunction: [interactions[i]],
    //         ability: ``,
    //         tag: [tags[i]],
    //         cardType: ``,
    //         power: ``,
    //         provision: ``
    //     }
    // ]

    // await Builder.insertOne(customCard)
    // console.log(`I have created a card!`)

}

const run = async () => {
    await main()
    db.close()
}

run()