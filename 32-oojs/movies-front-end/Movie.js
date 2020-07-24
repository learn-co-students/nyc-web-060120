/* 
1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - genre
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Genre: Science Fiction, Score: 9"
*/  

console.log("mooovies are cool")

class Movie {
  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.year = movieObj.year
    this.imageUrl = movieObj.imageUrl
    this.genre = movieObj.genre
    this.score = movieObj.score
  }

  prettyPrint(){
    return `Title: ${this.title}, year: ${this.year}, Genre: ${this.genre}, Score: ${this.score}`
  }

  createMovieLi(){
    const movieLi = document.createElement("li")
    movieLi.className = "movie"

    movieLi.dataset.id = this.id

    movieLi.innerHTML = `
      <h3>${this.title}</h3>
      <img alt=""
          src="${this.imageUrl}" />
      <h4>Year: ${this.year}</h4>
      <h4>Genre: ${this.genre}</h4>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete" data-fav-color="turquoise">&times;</button>
    `

    return movieLi
  }
  
  render(movieList){
    const movieLi = this.createMovieLi()
    movieList.append(movieLi)
  }

  static createMovies(moviesCollection){
    const movies = moviesCollection.map(movieObj => {
      return new Movie(movieObj)
    })

    return movies
  }

  static renderMovies(movies, movieList){
    movies.forEach(movie => {
      movie.render(movieList)
    })
  }
}