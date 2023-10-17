const db = require('../db/index')

const { Card, Faction, Race, Tag, CardFunction, Type } = require('../models/ccIndex.js')

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
const human = await new Race({
        name: `Human`
    })
human.save()

const soldier = await new Race({
    name: `Soldier`
})
soldier.save()

const warrior = await new Race({
    name: `Warrior`
})
warrior.save()

const vampire = await new Race({
    name: `Vampire`
})
vampire.save()

const beast = await new Race({
    name: `Beast`
})
beast.save()

const elf = await new Race({
    name: `Elf`
})
elf.save()

const bandit = await new Race({
    name: `Bandit`
})
bandit.save()

const dryad = await new Race({
    name: `Dryad`
})
dryad.save()

const gnome = await new Race({
    name: `Gnome`
})
gnome.save()

const dwarf = await new Race({
    name: `Dwarf`
})
dwarf.save()

const dragon = await new Race({
    name: `Dragon`
})
dragon.save()

const relict = await new Race({
    name: `Relict`
})
relict.save()

const ogroid = await new Race({
    name: `Ogroid`
})
ogroid.save()

const aristocrat = await new Race({
    name: `Aristocrat`
})
aristocrat.save()

console.log(`Created some races!`)

    //Card Interaction
    const order = await new CardFunction({
        name: `Order`,
        description: `An ability triggered manually by the player. Cards with Order cannot be used for 1 turn after being placed on the battlefield.`
    })
    order.save()

    const zeal = await new CardFunction({
        name: `Zeal`,
        description: `An Order ability can be used on the same turn the card is placed on the battlefield.`
    })
    zeal.save()

    const deploy = await new CardFunction({
        name: `Deploy`,
        description: `Triggers an ability when the card is played (as opposite from "Summons").`
    })
    deploy.save()
    console.log(`Created some interactions!`)

    //Tags
    const adrenaline = await new Tag({
        name: `Adrenaline`
    })
    adrenaline.save()

    const ambush = await new Tag({
        name: `Ambush`
    })
    ambush.save()

    const assimilate = await new Tag({
        name: `Assimilate`
    })
    assimilate.save()

    const berserk = await new Tag({
        name: `Berserk`
    })
    berserk.save()

    const bonded = await new Tag({
        name: `Bonded`
    })
    bonded.save()

    const crew = await new Tag({
        name: `Crew`
    })
    crew.save()

    const deathwish = await new Tag({
        name: `Deathwish`
    })
    deathwish.save()

    const devotion = await new Tag({
        name: `Devotion`
    })
    devotion.save()

    const disloyal = await new Tag({
        name: `Disloyal`
    })
    disloyal.save()

    const echo = await new Tag({
        name: `Echo`
    })
    echo.save()

    const formation = await new Tag({
        name: `Formation`
    })
    formation.save()

    const insanity = await new Tag({
        name: `Insanity`
    })
    insanity.save()

    const resupply = await new Tag({
        name: `Resupply`
    })
    resupply.save()

    const symbiosis = await new Tag({
        name: `Symbiosis`
    })
    symbiosis.save()

    const thrive = await new Tag({
        name: `Thrive`
    })
    thrive.save()

    const veteran = await new Tag({
        name: `Veteran`
    })
    veteran.save()

    const bleeding = await new Tag({
        name: `Bleeding`
    })
    bleeding.save()

    const bounty = await new Tag({
        name: `Bounty`
    })
    bounty.save()

    const defender = await new Tag({
        name: `Defender`
    })
    defender.save()

    const doomed = await new Tag({
        name: `Doomed`
    })
    doomed.save()

    const immunity = await new Tag({
        name: `Immunity`
    })
    immunity.save()

    const shield = await new Tag({
        name: `Shield`
    })
    shield.save()

    console.log(`Created some statuses!`)

    const gold = await new Type({
        name: `Gold`
    })
    gold.save()

    const bronze = await new Type({
        name: `Bronze`
    })
    bronze.save()

    const customCard = [
        {
            name: `Benji`,
            faction: [MO._id],
            race: [beast._id],
            cardFunction: [deploy._id],
            ability: `If this Card is the only card on the battlefield, spawn Saiorse and Sade to the left and right of this card.`,
            tag: [thrive._id, doomed._id, immunity._id],
            cardType: `Gold`,
            power: `8`,
            provision: `10`,
            imgURL: `https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80`
        }
    ]

    await Card.insertMany(customCard)
    console.log(`I have created a card!`)

}

const run = async () => {
    await main()
    db.close()
}

run()