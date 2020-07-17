document.addEventListener("DOMContentLoaded", () => {
    let addToy = false;
    const addBtn = document.querySelector("#new-toy-btn");
    const toyFormContainer = document.querySelector(".container");
    const toyUrl = 'http://localhost:3000/toys'
    const toyCollection = document.getElementById('toy-collection')
    const toyForm = document.querySelector('.add-toy-form')
  
  //fetch function
  
  function fetchToys(){
      fetch(toyUrl)
      .then(resp => resp.json())
      .then(toys => toys.forEach(toy => renderToy(toy)))
  }
  
  //render function
  
  function renderToy(toy){
    const card = document.createElement('div')
    card.className = 'card'
    card.id = toy.id
    //  below i wrap the 'likes' amount in a span tag to make it easier to grab later
    card.innerHTML += `
    <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p><span>${toy.likes}</span> Likes </p>
      <button class="like-btn">Like <3</button>
    `
    toyCollection.append(card)
  }
  
  
  ///post function -- we define this here and invoke the function inside the add button event listener below
  
  function postToys(name, image){
    fetch(toyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'image': image,
        'likes': 0
      })
    })
    .then(resp => resp.json())
    .then(toy => renderToy(toy))
  
  }
  
  //increaseLikes-- we define this here and invoke the function inside the document's event listener below

  function increaseLikes(event){
    // here i grab the particular card's id, as the parentNode of each button is the card div
    let id = event.target.parentNode.id
    // here I target the current number of likes of the given card
    let span = event.target.previousElementSibling.children[0]
    // convert to a number and reflect the increase
    let count = Number(span.innerText) + 1
    
    //  here we update our database with the new like info
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      'body': JSON.stringify({
        'likes': count
      })
    })
    .then(resp => resp.json())
    // here we update the HTML a user sees on the page
    .then(span.innerHTML = count)
  }
  
  
  //event listeners
  document.addEventListener('click', (event) => {
    if (event.target.className === 'like-btn'){
      increaseLikes(event)
    }
  })
  
  
    addBtn.addEventListener("click", () => {
      // hide & seek with the form--clicking the add button toggles this variable between false false and true,
    //   and when it's true, we can see the new toy form. If it's false, we simply don't display its contents(the else statement below)
      addToy = !addToy;
      if (addToy) {
        toyFormContainer.style.display = "block";
        toyForm.addEventListener('submit', (event) => {
          event.preventDefault()
        //  I manually added the below id names to the inputs on the form in the index.html file
        // to make it easier to grab them
          let toyName = document.getElementById('toy-name').value
          let toyImage = document.getElementById('toy-image').value

          postToys(toyName, toyImage)
        })
       
      } else {
        toyFormContainer.style.display = "none";
      }
    });
  
    // we invoke the flow of information from our database to the page here
    fetchToys()
  });
  