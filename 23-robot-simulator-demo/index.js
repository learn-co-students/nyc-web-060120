document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  // √1. add a listener to capture keyboard press 
  // √2. if the key is up/down/left/right, create an li and add it to the DOM
  // 3. add a click listener on the move button that moves the robot according to the li at the top of the list
  // 4. remove the li from the list

  const movesContainer = document.querySelector('#moves-container')
  const moveButton = document.querySelector('#move-button')

  function createLi(direction){
    const li = document.createElement("li")
    li.textContent = direction
    movesContainer.append(li)
  }
  
  document.addEventListener("keydown", function(e){

    if(e.key === "ArrowLeft"){
      createLi("left")
    } else if(e.key === "ArrowRight"){
      createLi("right")
    } else if(e.key === "ArrowDown"){
      createLi("down")
    } else if(e.key === "ArrowUp"){
      createLi("up")
    } else if(e.key === "Backspace"){
      // if directions are present 
      //get the last child of the ul
      // remove it
      
      if(directionsPresent()){ 
        movesContainer.lastChild.remove()
      } else {
        callUserAClown()
      }
    }
  })

  moveButton.addEventListener("click", function(e){
    // √check to make sure there are directions available on the DOM
    // √get the first li
    // √remove the first list from the DOM
    // √take the first direction and call Move with it

    if(directionsPresent()){ 
      const directionLi = document.querySelector('li')
      const direction = directionLi.textContent
      directionLi.remove()
      move(direction)
    } else {
      callUserAClown()
    }
  })

  function callUserAClown(){
    alert("No directions are present, you clown. 🤡")
  }

  function directionsPresent(){
    return !!document.querySelector('li')
  }
})
