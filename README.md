# Gwent-CCG
Gwent: The Witcher Card Game - Deck-builder and Card Database

## Description
This full-stack application is based of Gwent, which is a CCG (Collectible Card Game) that was originally a game within a game. The first origins of Gwent came from the famous video game series 'The Witcher'. Within The Witcher - Gwent was a card game that you could play (as a player) against opponents (NPCs). This game got so popular, that the devs for The Witcher decided to create a standalone version of this game. My application will be a database that stores Gwents current card pool, and allows the user to create a deck based off of the current card pool.

### Wireframing - Page Layout

![Screenshot 2023-10-12 at 5 36 03 PM](https://github.com/williamrogerschi/Gwent-DeckBuilder/assets/143743893/dadc9530-b190-4900-8013-124015ba2193)



### Wireframing - ERD relationships

![Screenshot 2023-10-12 at 5 27 38 PM](https://github.com/williamrogerschi/Gwent-DeckBuilder/assets/143743893/1a3429ad-69d1-4d74-a478-f5d16b4dacd5)


### Code Used
HTML
CSS
Javascript

### Sources/References


## Sudo-coding

#### High-level
AAU - I want to be able to create a custom card from a pre selected set of options.

##### Preface: Name the card
AAU - I want the ability to name the card and have it render on the custom card image block.
Naming the card first before anything might give the user the ability to give the card a sense of realism, theme, and backstory to their abilities and faction choices.

##### First:
AAU - pick my faction that this card will go through
Nilfgaard, Syndicate, Scoia, NR, Monsters, Skellige, Neutral
Then I will have a suggestion of potential archetypes for each faction - this will help the user design a card ability with faction synergy in mind.

##### Second:
AAU - I will have a dropdown list of potential races/subclasses based off their faction choice. (e.g. Nilfgaard will have Aristocrat, Solider, etc.)
This will help the user understand potential synergies (some cards have stronger effects if you have X amount of that type in your hand, battlefield, etc.)

##### Third:
AAU - I will have another dropdown list of the three main card deploys.
    Order: An ability triggered manually by the player. Cards with Order cannot be used for 1 turn after being placed on the battlefield.
    Order Zeal: An Order ability can be used on the same turn the card is placed on the battlefield.
    Deploy: Triggers an ability when the card is played (as opposite from "Summons").

###### Faction archetype specific tags:
ST: Symbiosis, Harmony, Ambush, etc.
NG: Assimilate, etc.
SK: Veteran, etc.
NR: Formation, Resupply, Crew, etc.
SY: Intimidate, Insanity, etc.
MO: Deathwish, Sabbath, Thrive, etc.
All: Disloyal, Echo, Doomed, Resilience, Bonded, Shield, etc.

##### Fourth: I want to give the user an option to have the card be Bronze or Gold - the user will have to keep this in mind when balancing themselves (as you can have 2x bronze cards in a deck and only 1 gold card)

##### Fifth: Power and Provisions
This doesn't really have a limit (obv. people can be unreasonable, but Ill let them decide that.) so I think i will just have inputs in the box from a range of 1-100 for both Power and then Provisions

###### Power: The value of a unit card - this is the base amount (irregardless of the card effect) the player will get when played on the battlefield.
###### Provisions: This is the amount that the card will cost you to put into your deckbuilder. As a frame of reference I can tell the user that the base amount (w/o choosing a leader) is 150 provisions for a 25 (min.) card deck. 
    On top of that, the average leader plays for a 15 provision add-on.
    So we are looking at a base of 165 provisions over 25 cards which is an average of 6.6 Provisions per card. So hopefully the user keeps this in mind when creating a provision value for their card.

##### Sixth: Choose the rarity of the card (STRETCH) this isn't necessarily needed, but can be important to newer players.
Rarity of the card is essentially how rare you can get the card when opening up a keg(card package).

##### Seventh: Image (STRETCH)
- I can have a preset amount of images if I can't figure out how to have the user upload an image from their personal site - not sure how much coding is involved.
- I will create an image pool for each faction and Neutral, that the user can choose from (click the image and it will drag over)
I believe the image will be hardest part, even though it's pretty crucial to give the card some life. But we will see how I can implement it into my APP.
