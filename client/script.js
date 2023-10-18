let factionDB = new Array
let raceDB = new Array
let typeDB = new Array
let interactionDB = new Array
let base = `http://localhost:3001/`


window.addEventListener('DOMContentLoaded', async (event) => {
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

    //trying to log the selection//
    factionDropdownOptions.addEventListener('change', selectFaction)
            
    function selectFaction (event) {
    const faction = event.target.value
    document.getElementById('faction-choice').value = faction
}

    raceDB = await axios.get(`http://localhost:3001/races`) //FormData this is what we would do to get it onto our card local
    console.log(raceDB)
    let races = raceDB.data
    const raceDropdownOptions = document.querySelector(`#race-card-picker`)
    for (let i=0; i<races.length; i++) {
        let raceName = races[i].name
        raceDropdownOptions.innerHTML += `<option value="${raceName}">${raceName}</option><\n>`
    }

   raceDropdownOptions.addEventListener('change', selectRace)
            
    function selectRace (event) {
    const race = event.target.value
    document.getElementById('race-choice').value = race
}


    typeDB = await axios.get(`http://localhost:3001/types`)
    console.log(typeDB)
    let types = typeDB.data
    const typeDropdownOptions = document.querySelector(`#type-card-picker`)
    for(let i=0; i<types.length; i++) {
        let typeName = types[i].name
        typeDropdownOptions.innerHTML += `<option value="${typeName}">${typeName}</option><\n>`
    }

    typeDropdownOptions.addEventListener('change', selectType)
            
    function selectType (event) {
    const type = event.target.value
    document.getElementById('type-choice').value = type
}

    interactionDB = await axios.get(`http://localhost:3001/interactions`)
    console.log(interactionDB)
    let interaction = interactionDB.data
    const interactionDropdownOptions = document.querySelector(`#cf-card-picker`)
    for(let i=0; i<interaction.length; i++) {
        let interactionName = interaction[i].name
        interactionDropdownOptions.innerHTML += `<option value="${interactionName}">${interactionName}</option><\n>`
    }

    interactionDropdownOptions.addEventListener('change', selectInteraction)
            
    function selectInteraction (event) {
    const interaction = event.target.value
    document.getElementById('function-choice').value = interaction
}

    tagDB = await axios.get(`http://localhost:3001/tags`)
    console.log(tagDB)
    let tags = tagDB.data
    const tagDropdownOptions = document.querySelector(`#tag-card-picker`)
    for(let i=0; i<tags.length; i++) {
        let tagName = tags[i].name
        tagDropdownOptions.innerHTML += `<option value="${tagName}">${tagName}</option><\n>`
    }

    tagDropdownOptions.addEventListener('change', selectTag)
      
    let tagArray = []
    function selectTag (event) {
    const tag = event.target.value
    tagArray.push(tag)
    console.log(tagArray)
    document.getElementById('tag-choice').value = tagArray
    }
})

// function for the dropdown for multiple tags being selected //
// document.addEventListener("DOMContentLoaded", function (event) {
//     event.preventDefault()
//     const dropdown = document.querySelector(".tag-card-picker")
//     const dropdownContent = dropdown.querySelector(".dropdown-content")
//     const checkboxes = dropdownContent.querySelectorAll("input[type='checkbox']")
//     const dropbtn = dropdown.querySelector(".dropbtn")
//     const selectedItems = []

//     dropbtn.addEventListener("click", function (event) {
//         event.preventDefault()
//         dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block"
//     })

//     checkboxes.forEach(function (checkbox) {
//         checkbox.addEventListener("change", function () {
//             const itemValue = checkbox.value
//             if (checkbox.checked) {
//                 selectedItems.push(itemValue)
//             } else {
//                 const index = selectedItems.indexOf(itemValue)
//                 if (index !== -1) {
//                     selectedItems.splice(index, 1)
//                 }
//             }
//             // Log the selected items
//             console.log("Selected items: " + selectedItems.join(", "))
//         })
//     })
//     // Close the dropdown when clicking outside
//     window.addEventListener("click", function (event) {
//         if (!event.target.matches('.dropbtn')) {
//             dropdownContent.style.display = 'none'
//         }
//     })
//     // Prevent closing the dropdown when clicking inside it
//     dropdownContent.addEventListener("click", function (event) {
//         event.stopPropagation()
//     })
// })





//function to submit my object to BACKEND//

async function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const name = data.get('card-name');
    const ability = data.get('freeform');
    const faction = data.get('faction-choice');
    const race = data.get('race-choice');
    const cardType = data.get('type-choice');
    const cardFunction = data.get('function-choice');
    const tag = data.get('tag-choice');
    const power = data.get('card-power');
    const provision = data.get('card-provision');
    const imgURL = data.get('img-picker');

    console.log({ name, ability, faction, race, cardType, cardFunction, tag, power, provision, imgURL })
    console.log(data);


    try {
        const card = await axios.post(`http://localhost:3001/cards`, {
            name: name,
            faction: faction[0],
            race: race,
            cardFunction: cardFunction,
            ability: ability,
            tag: tag,
            cardType: cardType,
            power: power,
            provision: provision,
            imgURL: imgURL,
            // name: 'Sam',
            // faction:'Monsters' ,
            // race: 'Elf',
            // cardFunction: 'Zeal',
            // ability: 'Hello',
            // tag: 'Warrior',
            // cardType: 'Bronze',
            // power: 10,
            // provision: 12,
            // imgURL: '',
        })

        console.log(card)
    } catch (error) {
        console.error(error)
    }
}

const form = document.querySelector('.custom-card-editor')
form.addEventListener('submit', handleSubmit)


//creating function for my card submission//
// async function handleSubmit (event) {
//     event.preventDefault()
  

//     const data = new FormData(event.target)
  
//     const name = data.get('card-name')
//     const ability = data.get('freeform')
//     const faction = data.get('faction-choice')
//     const race = data.get('race-choice')
//     const cardType = data.get('type-choice')
//     const cardFunction = data.get('function-choice')
//     const tag = data.get('tag-choice')
//     const power = data.get('card-power')
//     const provision = data.get('card-provision')
//     const imgURL = data.get('img-picker')
  
//     console.log({ name, ability, faction, race, cardType, cardFunction, tag, power, provision, imgURL })

//     await axios.post(`${base}cards`, {FormData})
//     .then(function(res) {
//         console.log(res)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
// }

//   const form = document.querySelector('.custom-card-editor')
//   form.addEventListener('submit', handleSubmit)
