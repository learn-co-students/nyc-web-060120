console.log("Forms and Databases are, like, super rad 💯!")


document.addEventListener("DOMContentLoaded", function(e){
  const movieList = document.getElementById('movie-list')
  const baseUrl = "http://localhost:3000/movies"

  // // standing in for a DB
  // const movies = [
  //   {
  //     title: 'The Goonies',
  //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
  //     year: 1985,
  //     genre: 'Adventure',
  //     score: 100
  //   },
  //   { 
  //     title: 'Free Willy',
  //     imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
  //     year: 1993,
  //     genre: 'Family',
  //     score: 0  
  //   },
  //   { 
  //     title: 'Top Gun',
  //     imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
  //     year: 1986,
  //     genre: 'Adventure',
  //     score: 0  
  //   },
  //   { 
  //     title: 'Mean Girls',
  //     imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
  //     year: 2004,
  //     genre: 'Comedy',
  //     score: 0  
  //   },
  //   { 
  //     title: 'Parasite',
  //     imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
  //     year: 2019,
  //     genre: 'Horror',
  //     score: 0  
  //   },
  //   {
  //     title: "What About Bob?",
  //     year: 1991,
  //     genre: 'Comedy',
  //     score: 0,
  //     imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
  //   },
  //   {
  //     title: "The Matrix",
  //     year: 1999,
  //     genre: 'Science Fiction',
  //     score: 0,
  //     imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
  //   },
  //   {
  //     title: "Jaws",
  //     year: 1984,
  //     genre: 'Horror',
  //     score: 0,
  //     imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
  //   },
  // ]

  
  function renderMovie(movieObj){
    const movieLi = document.createElement("li")
    movieLi.className = "movie"

    movieLi.dataset.id = movieObj.id

    movieLi.innerHTML = `
      <h3>${movieObj.title}</h3>
      <img alt=""
          src="${movieObj.imageUrl}" />
      <h4>Year: ${movieObj.year}</h4>
      <h4>Genre: ${movieObj.genre}</h4>
      <h4>Score: <span>${movieObj.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete" data-fav-color="turquoise">&times;</button>
    `
    
    movieList.append(movieLi)
  }

  const renderMovies = movieArray => {
    movieArray.forEach(movieObj => {
      renderMovie(movieObj)
    })
  }
  
  const clickHandler = () => {
    document.addEventListener("click", function(e){
      if(e.target.matches('.up-vote')){

        // DOM Manipulation Jazz
        const clickedButton = e.target
        const parentLi = clickedButton.parentElement
        const scoreSpan = parentLi.querySelector('span')
        const newScore = parseInt(scoreSpan.textContent, 10) + 1
        scoreSpan.textContent = newScore

        const id = parentLi.dataset.id

        // DB Jazz
        fetch(`${baseUrl}/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            "accept": "application/json"
          },
          body: JSON.stringify({ score: newScore })
        })

      } else if(e.target.dataset.purpose === "delete"){

        const deleteButton = e.target
        deleteButton.parentElement.remove()

      } else if(e.target.matches('#show-form')){
        const button = e.target
        button.textContent = "Hide Form"
        button.id = 'hide-form'

        const newMovieForm = document.createElement('form')

        newMovieForm.innerHTML = `
          <label>Title: </label>
          <input type="text" name="title">
          <br>
          <label>Year: </label>
          <input type="text" name="year">
          <br>
          <label>Genre: </label>
          <input type="text" name="genre">
          <br>
          <label>Image URL: </label>
          <input type="text" name="imageUrl">
          <br>
          <input type="submit" value="Add Movie">
        `

        button.insertAdjacentElement("afterend", newMovieForm)
      } else if(e.target.matches("#hide-form")){
        const button = e.target
        button.textContent = "Show Form"
        button.id = 'show-form'

        const newMovieForm = document.querySelector('form')
        newMovieForm.remove()
      }
    })
  }

  const submitHandler = () => {
    document.addEventListener("submit", e => {
      e.preventDefault()
      const newMovieForm = e.target

      const title = newMovieForm.title.value
      const year = newMovieForm.year.value
      const genre = newMovieForm.genre.value
      const imageUrl = newMovieForm.imageUrl.value
      const score = 0

      const movieObj = { title, year, genre, imageUrl, score }

      newMovieForm.reset()

      fetch(baseUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "accept": "application/json"
        },
        body: JSON.stringify(movieObj)
      })
      .then(response => response.json())
      .then(newMoveiObj => {
        renderMovie(newMoveiObj)
      })
      
      // renderMovie(movieObj)
    })
  }

  const getMovies = () => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(moviesCollection => {
      renderMovies(moviesCollection)
    })
  }
  
  submitHandler()
  clickHandler() 
  // renderMovies(movies)
  getMovies()
}) 




/* USER STORIES

√1. As a user when I click the show form button, a form should appear that allows me to enter movie details.

// √click listening (existing event delegation???)
// √create a form element with the corresponding HTML inside
// √append that form to the DOM

√2. As user, when I click the show form button, the text inside the button should change to "Hide Form"

3. As a user, when I fill in movie details in the form and click "Submit", the movie should appear on the web page at the bottom of the movie list and persist across page reloads

// √create a submit handler
// √get the data out of the form
// √use that data to render a new movie to the DOM
// make a post request to create a new movie

√4. As a user, after I submit the form, the form should be cleared out.

√5. As a user, when I click the "Hide Form" button, the form should disappear and the text inside the button should be changed back to "Show Form".

√6. As a user, I expect to see a list of movies appear when I open the web site

// get request to /movies
// iterate through each movie and render it to the DOM

√7. As a user, when I click up vote on a movie, the score should increment and the new score should persist after a page reload

// on button click, do a patch request to movies/:id with the new score



*/











































