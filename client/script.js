////////variables for my dropdown pulls////////
let factionDB = new Array
let raceDB = new Array
let typeDB = new Array
let interactionDB = new Array
let base = `http://localhost:3001/`

////////GLOBAL VARIABLES////////
const ccgName = document.querySelector('.ccg-name')
const ccgFaction = document.querySelector('.ccg-faction')
const ccgRace = document.querySelector('.ccg-race')
const ccgCardFunction = document.querySelector('.ccg-cf')
const ccgAbility = document.querySelector('.ccg-ability')
const ccgTag = document.querySelector('.ccg-tags')
const ccgType = document.querySelector('.ccg-type')
const ccgPower = document.querySelector('.ccg-power')
const ccgProvision = document.querySelector('.ccg-provision')


////////MAIN FUNCTION////////
window.addEventListener('DOMContentLoaded', async (event) => {
    event.preventDefault()
    console.log("Loading")

    //name field - posting to card from card editor//
    const  cardNameInput = document.getElementById('card-name')
   
    cardNameInput.addEventListener('input', function(event) {
    if(this.value.length > 0) {
        // document.getElementById('card-name').value = cardName
        ccgName.innerText = `${this.value}`
    }
})

const  abilityInput = document.getElementById('freeform')
   
abilityInput.addEventListener('input', function(event) {
if(this.value.length > 0) {
    // document.getElementById('card-name').value = cardName
    ccgAbility.innerText = `${this.value}`
}
})

const  powerInput = document.getElementById('card-power')
   
powerInput.addEventListener('input', function(event) {
if(this.value.length > 0) {
    // document.getElementById('card-name').value = cardName
    ccgPower.innerText = `${this.value}`
}
})

const  provisionInput = document.getElementById('card-provision')
   
provisionInput.addEventListener('input', function(event) {
if(this.value.length > 0) {
    // document.getElementById('card-name').value = cardName
    ccgProvision.innerText = `Provisions: ${this.value}`
}
})


///calling in my database models///
    factionDB = await axios.get(`http://localhost:3001/factions`)
    console.log(factionDB)
    let factions = factionDB.data
    const factionDropdownOptions = document.querySelector('#faction-card-picker')
    for (let i=0; i<factions.length; i++) {
        let factionName = factions[i].name
        let factionId = factions[i]._id
        factionDropdownOptions.innerHTML += `<option value="${factionId}">${factionName}</option><\n>`
    }
    factionDropdownOptions.addEventListener('change', selectFaction)
            

    function selectFaction (event) {
    const faction = event.target.value
    const ccgFactionName = event.target.options[event.target.selectedIndex].text
    document.getElementById('faction-choice').value = faction
    ccgFaction.innerText = `${ccgFactionName}`
}

    raceDB = await axios.get(`http://localhost:3001/races`)
    console.log(raceDB)
    let races = raceDB.data
    const raceDropdownOptions = document.querySelector(`#race-card-picker`)
    for (let i=0; i<races.length; i++) {
        let raceName = races[i].name
        let raceId = races[i]._id
        raceDropdownOptions.innerHTML += `<option value="${raceId}">${raceName}</option><\n>`
    }
   raceDropdownOptions.addEventListener('change', selectRace)
          
   
    function selectRace (event) {
    const race = event.target.value
    const ccgRaceName = event.target.options[event.target.selectedIndex].text
    document.getElementById('race-choice').value = race
    ccgRace.innerText = `${ccgRaceName}`
}


    typeDB = await axios.get(`http://localhost:3001/types`)
    console.log(typeDB)
    let types = typeDB.data
    const typeDropdownOptions = document.querySelector(`#type-card-picker`)
    for(let i=0; i<types.length; i++) {
        let typeName = types[i].name
        let typeId = types[i]._id
        typeDropdownOptions.innerHTML += `<option value="${typeId}">${typeName}</option><\n>`
    }
    typeDropdownOptions.addEventListener('change', selectType)
            

    function selectType (event) {
    const type = event.target.value
    const ccgTypeName = event.target.options[event.target.selectedIndex].text
    document.getElementById('type-choice').value = type
    ccgType.innerText = `Card Type: ${ccgTypeName}`
}

    interactionDB = await axios.get(`http://localhost:3001/interactions`)
    console.log(interactionDB)
    let interaction = interactionDB.data
    const interactionDropdownOptions = document.querySelector(`#cf-card-picker`)
    for(let i=0; i<interaction.length; i++) {
        let interactionName = interaction[i].name
        let interactionId = interaction[i]._id
        interactionDropdownOptions.innerHTML += `<option value="${interactionId}">${interactionName}</option><\n>`
    }
    interactionDropdownOptions.addEventListener('change', selectInteraction)
            

    function selectInteraction (event) {
    const interaction = event.target.value
    const ccgInteraction = event.target.options[event.target.selectedIndex].text
    document.getElementById('function-choice').value = interaction
    ccgCardFunction.innerText = `Playability: ${ccgInteraction}`
}

    tagDB = await axios.get(`http://localhost:3001/tags`)
    console.log(tagDB)
    let tags = tagDB.data
    const tagDropdownOptions = document.querySelector(`#tag-card-picker`)
    for(let i=0; i<tags.length; i++) {
        let tagName = tags[i].name
        let tagId = tags[i]._id
        tagDropdownOptions.innerHTML += `<option value="${tagId}">${tagName}</option><\n>`
    }
    tagDropdownOptions.addEventListener('change', selectTag)
      

    let tagArray = []

    function selectTag(event) {
    const tag = event.target.value
    tagArray.push(tag)
    console.log(tagArray)
//Joining the tagArray into a comma-separated string for FormData//
    const tagString = tagArray.join(',')
    const ccgTags = event.target.options[event.target.selectedIndex].text
    document.getElementById('tag-choice').value = tagString
    ccgTag.insertAdjacentHTML ("beforeend", `${ccgTags} `)
    }
})

//function to submit my object to BACKEND//
async function handleSubmit(event) {
    event.preventDefault()

    const data = new FormData(event.target)

    const name = data.get('card-name')
    const ability = data.get('freeform')
    const faction = data.get('faction-choice')
    const race = data.get('race-choice')
    const cardType = data.get('type-choice')
    const cardFunction = data.get('function-choice')
    const tag = data.get('tag-choice').split(',')
    const power = data.get('card-power')
    const provision = data.get('card-provision')
    const imgURL = data.get('img-picker')

    console.log({ name, ability, faction, race, cardType, cardFunction, tag, power, provision, imgURL })


    try {
        const card = await axios.post(`http://localhost:3001/cards`, {
            name: name,
            faction: faction,
            race: race,
            cardFunction: cardFunction,
            ability: ability,
            tag: tag,
            cardType: cardType,
            power: power,
            provision: provision,
            imgURL: `https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80`
        })

        console.log(card)
    } catch (error) {
        console.error(error)
    }
}
const form = document.querySelector('.custom-card-editor')
form.addEventListener('submit', handleSubmit)
