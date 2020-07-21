const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers/`
const POKEMONS_URL = `${BASE_URL}/pokemons/`

document.addEventListener('DOMContentLoaded', (e)=> {
    fetchTrainers()
})

function fetchTrainers() {
    fetch(TRAINERS_URL)
    .then( res => res.json() )
    .then( trainers => renderAllTrainers(trainers) )
}

function renderAllTrainers( trainers ) {
    trainers.forEach( trainer => renderTrainer( trainer ) )
}

function renderTrainer( trainer ) {
    const main = document.getElementById('main')
    
    let div = document.createElement('div')
    div.classList += 'card'
    div.dataset.id = trainer.id
    main.appendChild(div)

    let p = document.createElement('p')
    p.textContent = trainer.name
    div.appendChild(p)

    let addPokemonButton = document.createElement('button')
    addPokemonButton.dataset.trainerId = trainer.id
    addPokemonButton.textContent = 'Add Pokemon'
    // since I already have access to these variables in this function 
    // I can pass them into the event listener
    addPokemonButton.addEventListener('click', (e)=> addPokemonToTeam( e, trainer, pokemonList ) )
    div.appendChild(addPokemonButton)

    let pokemonList = document.createElement('ul')
    div.appendChild(pokemonList)

    trainer.pokemons.forEach( pokemon => renderPokemon( pokemon, pokemonList ) )
}

function renderPokemon( pokemon, pokemonList ) {
    let li = document.createElement('li')
    li.textContent = `${pokemon.nickname} (${pokemon.species})`
    pokemonList.appendChild(li)

    let releaseButton = document.createElement('button')
    releaseButton.dataset.pokemonId = pokemon.id
    releaseButton.classList += 'release'
    releaseButton.textContent = 'Release'
    releaseButton.addEventListener('click', ()=> releasePokemonFromTeam( pokemon, li ) )
    li.appendChild(releaseButton)
}

function addPokemonToTeam( e, trainer, pokemonList ) {
    // I can write an object for the request to clean
    // up my fetch request a bit
    let postRequest = {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            accepts: 'application/json'
        },
        body: JSON.stringify({ trainer_id: trainer.id })
    }

    fetch(POKEMONS_URL, postRequest)
    .then( res => res.json() )
    .then( pokemon => {
        if ( pokemon.errors )
            makesAlerts( pokemon.errors )
        else
            renderPokemon( pokemon, pokemonList )
    })
}

function releasePokemonFromTeam( pokemon, li ) {
    fetch(POKEMONS_URL + pokemon.id, { method: 'delete' })
    .then( res => res.json() )
    .then( pokemon => {
        if ( pokemon.errors )
            makesAlerts( pokemon.errors )
        else {
            li.remove()
            makesAlerts( pokemon.messages )
        }
    })
}

function makesAlerts( messages ) {
    messages.forEach( message => alert(message) )
}