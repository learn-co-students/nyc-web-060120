console.log("Events")

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
