const db = require('../db/index')

const { Builder, Faction, Race, Tag, CardFunction } = require('../models/ccIndex.js')

db.on('error', console.error.bind(console, `MongoDB connection error:`))

const main = async () => {

    //FACTIONS//
    const NG = await new Faction({
        name: `Nilfgaard`,
        description: `More than any other faction, Nilfgaard relies on diplomacy and subterfuge to disrupt enemy strategies and enact its own. The empire plants Spies behind enemy lines to perform sabotage and reveal cards in the opponent’s hand. Well-aware of power’s benefits, Nilfgaardians target the strongest enemy units, crippling them or eliminating them altogether.`
    })
    NG.save()

    const ST = await new Faction({
        name: `Scoia'tael`,
        description: `As befits guerilla fighters, they often set ambushes: cards played face down which reveal themselves only when the trap has already sprung. To bolster their numbers, the Scoia'tael quickly raise new Commandos, zealous neophytes that take the opponent by surprise.`
    })
    ST.save()

    const SY = await new Faction({
        name: `Syndicate`,
        description: `The Syndicate features unique mechanics revolving around coins, including Hoard, Tribute, and Insanity.`
    })
    SY.save()

    const MO = await new Faction({
        name: `Monsters`,
        description: `The world of The Witcher is infested with unspeakable horrors, most of which are gathered in the fearsome Monsters faction. They attack in vast numbers that grow into hordes and when brute strength is needed instead, they consume their kin and absorb their strength.`
    })
    MO.save()

    const SK = await new Faction({
        name: `Skellige`,
        description: `Skelligers embrace death’s glory, knowing their priestesses and medics can summon departed heroes from the Graveyard to fight another day. A Skellige player sends units to the Graveyard on purpose… only to bring them back later, stronger than ever. Skelligers also turn wounds to their favor by inciting their bloodied warriors to attack with redoubled strength.`
    })
    SK.save()

    const NR = await new Faction({
        name: `Northern Realms`,
        description: `The Northern Realms seek to gain control of the battlefield by reinforcing their numbers. Their valiant commanders march in the front lines to inspire their units and boost their strength. Their troops can be protected against attacks and weather spells thanks to Armor and Shields.`
    })
    NR.save()

    //RACE
    const races = [
        { name: `Human`}, { name: `Soldier`}, { name: `Warrior`}, { name: `Vampire`}, { name: `Beast`}, { name: `Elf`}, { name: `Bandit`}, { name: `Dryad`}, { name: `Gnome`}, { name: `Dwarf`}, { name: `Dragon`}, { name: `Relict`}, { name: `Ogroid`}, { name: `Aristocrat`},
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