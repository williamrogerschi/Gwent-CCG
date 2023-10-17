let factionDB = new Array
let raceDB = new Array
let typeDB = new Array
let interactionDB = new Array

window.addEventListener('load', async (event) => {
    event.preventDefault()
    console.log("Loading")

    factionDB = await axios.get(`http://localhost:3001/factions`)
    console.log(factionDB)
    let factions = factionDB.data
    const factionDropdownOptions = document.querySelector('#faction-card-picker')
    for (let i=0; i<factions.length; i++) {
        let factionName = factions[i].name
        factionDropdownOptions.innerHTML += `<option value="${factionName}">${factionName}</option><\n>`
    }

    raceDB = await axios.get(`http://localhost:3001/races`)
    console.log(raceDB)
    let races = raceDB.data
    const raceDropdownOptions = document.querySelector(`#race-card-picker`)
    for (let i=0; i<races.length; i++) {
        let raceName = races[i].name
        raceDropdownOptions.innerHTML += `<option value="${raceName}">${raceName}</option><\n>`
    }

    typeDB = await axios.get(`http://localhost:3001/types`)
    console.log(typeDB)
    let types = typeDB.data
    const typeDropdownOptions = document.querySelector(`#type-card-picker`)
    for(let i=0; i<types.length; i++) {
        let typeName = types[i].name
        typeDropdownOptions.innerHTML += `<option value="${typeName}">${typeName}</option><\n>`
    }

    interactionDB = await axios.get(`http://localhost:3001/interactions`)
    console.log(interactionDB)
    let interaction = interactionDB.data
    const interactionDropdownOptions = document.querySelector(`#cf-card-picker`)
    for(let i=0; i<interaction.length; i++) {
        let interactionName = interaction[i].name
        interactionDropdownOptions.innerHTML += `<option value="${interactionName}">${interactionName}</option><\n>`
    }

    tagDB = await axios.get(`http://localhost:3001/tags`)
    console.log(tagDB)
    let tags = tagDB.data
    const tagDropdownOptions = document.querySelector(`#tag-card-picker`)
    for(let i=0; i<tags.length; i++) {
        let tagName = tags[i].name
        tagDropdownOptions.innerHTML += `<option value="${tagName}">${tagName}</option><\n>`
    }
}
)