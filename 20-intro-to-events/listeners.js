console.log("listening")

// As a user, when I click on the welcome image I want to see a turquoise border around that image
// √1. get the image node from the DOM
// √2. listen for clicks on the node
// 3. change the style of that node

const welcomeImage = document.getElementById('welcome-image')

welcomeImage.addEventListener('click', function(e){
  console.dir(e.target)
  const image = e.target
  image.style.border = "solid thick turquoise"

})



// when the mouse moves over the welcome image I want to see a picture of a baby sloth, and i want the picture to change back when the mouse moves off the image

welcomeImage.addEventListener("mouseenter", function(e){
  const image = e.target
  image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Canadian_lynx_by_Keith_Williams.jpg/238px-Canadian_lynx_by_Keith_Williams.jpg"
})

welcomeImage.addEventListener("mouseleave", function(e){
  const image = e.target
  image.src = "https://media.giphy.com/media/UDjF1zMreMld6/giphy.gif"
})




























































// image.style.border = "solid thick turquoise"
