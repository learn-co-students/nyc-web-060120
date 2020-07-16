console.log("listening")

// when a user clicks on the welcome image I want to see a turquoise border around that image

// √get the node in question - the welcome image
// √add a click listener to it
// when that node is clicked we need to change its border

const welcomeImage = document.querySelector('#welcome-image')

welcomeImage.addEventListener("click", function(event){
  const image = event.target
  image.style.border = "solid thick turquoise"
})


// when the mouse moves over the welcome image i want to see a picture of a baby sloth, and i want the picture to change back when the mouse moves off the image

// mouseenter, mouseleave - 2x listeners

welcomeImage.addEventListener("mouseenter", function(event){
  event.target.src = "https://www.happiest.net/wp-content/uploads/2019/09/baby-sloths-5-720x400.png"
})

welcomeImage.addEventListener("mouseleave", function(event){
  event.target.src = "https://media.giphy.com/media/UDjF1zMreMld6/giphy.gif"
})


























































// image.style.border = "solid thick turquoise"
