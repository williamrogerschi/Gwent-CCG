let factionDB = new Array

window.addEventListener('load', async (event) => {
    event.preventDefault()
    console.log("Loading")
    factionDB = await axios.get(`http://localhost:3001/factions`)
    let factions = factionDB.data
    const factionDropdownOptions = document.querySelector('#card-faction-picker')
    for (let i=0; i<factions.length; i++) {
        let factionObj = await axios.get(`http://localhost:3001/factions/${factions[i].name}`)
        let faction = factionObj.data.name
        // let model = frames[i].modelName
        factionDropdownOptions.innerHTML += `<option value="${faction}">${faction}</option><\n>`
    }
}
)