console.log("DOM Manipulation is so cool.")

// √1. create a new li element for the goonies
// √2. add the class "movie" to the li
// √3. add all of that other html inside of our li element
// √4. attach this new li to the DOM
    // 4a. get the ul from the DOM
    // 4b. append the li to it


const movieList = document.getElementById('movie-list')
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

renderMovie(goonies)
