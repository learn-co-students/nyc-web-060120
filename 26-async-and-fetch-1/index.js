console.log("async and fetch")

// Asynchronousity

const iAmSync = () => {
  for (let i = 0; i < 20000000; i++) {
    let d = new Date()
  }

  console.log("All done")
}

const iAmAsync = () => {
  setTimeout(() => {
    console.log("inside timeout")
  }, 5000)

  console.log("outside timeout")
}

// Fetch

const url = "https://pokeapi.co/api/v2/pokemon/pikachu/"

// const thing = fetch(url)

// console.log("Pokemon: ", thing)

fetch(url)
.then(response => response.json())
.then(pokemon => console.log(pokemon))
.catch(error => {
  console.log("There's been an error: ", error)
})
.finally(data => {
  console.log("Mystery!!", data)
})


console.log("hey there")

const otherUrl = "https://notaurl.com/dogs"
const id = 35

const data = {
  name: "Perky",
  breed: "poodle",
  age: 12,
  favoriteToys: ["stick", "ball", "manure"]
}

// POST to /dogs/:id to create a new dog record

// fetch(`${otherUrl}/${id}`, {
//   method: "POST",
//   headers: {
//     "content-type": "application/json",
//     "accept": "application/json"
//   },
//   body: JSON.stringify(data)
// })
// .then(response => response.json())
// .then(dog => {
//   const name = dog.name
//   alert("Yo, your dog's name is " + name)
//   // render the data to the page as HTML
//   // or at least make a call to a function that does that eg., renderDog(dog)
// })