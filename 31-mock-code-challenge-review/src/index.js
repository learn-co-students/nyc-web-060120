document.addEventListener('DOMContentLoaded', () => {
  const baseUrl = "http://localhost:3000/dogs"

  const getDogs = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(dogs => {
      renderDogs(dogs)
    })
  }

  const renderDogs = dogs => {
    const tableBody = document.querySelector('#table-body')
    tableBody.innerHTML = ''

    dogs.forEach(dog => {
      renderDog(dog, tableBody)
    })
  }

  const renderDog = (dog, tableBody) => {
    const dogRow = document.createElement('tr')
    dogRow.dataset.id = dog.id

    dogRow.innerHTML = `
      <td>${dog.name}</td>
      <td>${dog.breed}</td>
      <td>${dog.sex}</td>
      <td>
        <button>Edit</button>
      </td>
    `

    const editButton = dogRow.querySelector('button')

    editButton.addEventListener('click', e => {
      const dogForm = document.querySelector('form')
      dogForm.dataset.id = dog.id
      dogForm.name.value = dog.name
      dogForm.breed.value = dog.breed
      dogForm.sex.value = dog.sex
    })

    tableBody.append(dogRow)    
  }

  const submitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      const dogForm = e.target

      // get data out of form
      // construct patch request
      // render the new dog info on the page

      const id = dogForm.dataset.id
      const name = dogForm.name.value 
      const breed = dogForm.breed.value 
      const sex = dogForm.sex.value 

      const body = { name, breed, sex }
      // const body = { name: name, breed: breed, sex: sex }

      updateDog(id, body)
    })
  }

  const updateDog = (id, body) => {
    fetch(`${baseUrl}/${id}`,{
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(getDogs)
  }

  // this is how I would do it using event delegation
  // const delegateClicks = () => {
  //   document.addEventListener('click', e => {
  //     if(e.target.textContent === 'Edit'){
  //       // get the dog data from the DOM somehow

  //       const dogRow = e.target.closest('tr')
  //       const name = dogRow.children[0].textContent
  //       const breed = dogRow.children[1].textContent
  //       const sex = dogRow.children[2].textContent

  //       const dogForm = document.querySelector('form')
        // dogForm.dataset.id = dogRow.dataset.id
        // dogForm.name.value = name
        // dogForm.breed.value = breed
        // dogForm.sex.value = sex
  //     }
  //   })
  // }

  
  getDogs()
  submitHandler()
  // delegateClicks()
})


/*
Deliverables

* On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs.
* The dog should be put on the table as a table row. The HTML might look something like this <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>

√1. get request to get all the dogs
√2. create a tr element with the correspond innerHTML for each dog
√3. append each tr to the table body


* Make a dog editable. Clicking on the edit button next to a dog should populate the top form with that dog's current information.

A. event delegation
  - single click listener on the document
  - conditional logic inside
  - pull dog data off of the DOM and pass it to the form

√B. discrete listeners for each edit button
  - multiple listeners
  - listener *remembers* the dog that was present when it was made
  √- pass dog info to corresponding input in form


*On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id to update the dog information (including name, breed and sex attributes).


*Once the form is submitted, the table should reflect the updated dog information. There are many ways to do this. You could search for the table fields you need to edit and update each of them in turn, but we suggest making a new get request for all dogs and rerendering all of them in the table. Make sure this GET happens after the PATCH so you can get the most up-to-date dog information.

*/









/*  Princeton's 5 steps
1. makes global variables
2. DOMContentLoaded
3. fetch data
4. rendering the data
5. event handling
*/
