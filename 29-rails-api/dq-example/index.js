/*
What is fetch?

- getting data from an API so you can do stuff with it - run a function, append to DOM etc.
- a client for making requests against an external service
- allows us to "POST" data - adding data to the database, "persisting" data
  - (conventionally, POST requests are used to create new records in the db)
- allows to make the whole assortment of HTTP request types - POST, PATCH, GET, DELETE - to retrieve, create, update, and destroy data


Check out the JSON you get from making a GET request to this url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX (fetch) request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.

*/

document.addEventListener("DOMContentLoaded", e => {
  const clickHandler = () => {
    const button = document.querySelector('button')
    button.addEventListener("click", e => {
      getUserInfo()
    })
  }

  const getUserInfo = () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0]
      renderUser(user)
    })
  }

  const renderUser = user => {
    console.log(user)
    const profilePicture = user.picture.large
    document.querySelector("#profile_picture").src = profilePicture

    const title = user.name.title
    const first = user.name.first
    const last = user.name.last

    document.querySelector("#fullname").textContent = `${title} ${first} ${last}`

  }
  
  clickHandler()
})