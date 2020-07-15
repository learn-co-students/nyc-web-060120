console.log("Delegating is just getting someone else to do something you don't want to do.")


document.addEventListener("DOMContentLoaded", function(e){
  const movieList = {document.getElementById('movie-list')}
  console.log(movieList)
  const goonies = {
    title: "The Goonies",
    score: 0,
    genre: "Adventure",
    year: 1986,
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/519s0-tD4jL._AC_.jpg"
  }
  
  function renderMovie(movieObj){
    const movieLi = document.createElement("li")
    movieLi.className = "movie"
    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt=""
          src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button>&times;</button>
    `
    
    movieList.append(movieLi)
  }
  
  movieList.addEventListener("click", function(e){
    if(e.target.matches('.up-vote')){
      const clickedButton = e.target
      const parentLi = clickedButton.parentElement
      const scoreSpan = parentLi.querySelector('span')
      scoreSpan.textContent = parseInt(scoreSpan.textContent, 10) + 1
    }
  })



  // √get all the up-vote buttons from the DOM
  // √loop through all the buttons and add click listeners to them
  // √on click, update the text of the appropriate score span

  // const upVoteButtons = document.getElementsByClassName("up-vote")
  // // const upVoteButtons = document.querySelectorAll(".up-vote")

  // const upVoteButtonsArray = Array.from(upVoteButtons)


  // upVoteButtonsArray.forEach(function(button){
  //   button.addEventListener("click", function(e){
      // const clickedButton = e.target
      // const parentLi = clickedButton.parentElement
      // const scoreSpan = parentLi.querySelector('span')
      // scoreSpan.textContent = parseInt(scoreSpan.textContent, 10) + 1
  //   }) // closing addEventListener
  // }) // closing forEach

  renderMovie(goonies)
}) // closing DOMContentLoaded

