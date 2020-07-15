
let currentPosition = { x: 0, y: 0}
let prevTile;
NodeList.prototype.find = Array.prototype.find


function createGrid(){
  const board = document.querySelector("#board")

  for (let i=0; i < 10; i++){
    for (let j=0; j < 10; j++){
      board.insertAdjacentHTML("beforeend", `
        <div class="tile" data-x=${j} data-y=${i}></div>
      `)
    }
  }
}

function renderBot(targetPosition){
  const tiles = document.querySelectorAll(".tile")

  const newTile = tiles.find(function(tile){
    return parseInt(tile.dataset.x) === targetPosition.x && parseInt(tile.dataset.y) === targetPosition.y
  })

  if (!newTile){
    alert("Clang! Hit a wall")
    return false
  } else {
    if (prevTile){
      prevTile.id = ""
    } 

    newTile.id = "robot"
    prevTile = newTile

    return true
  }

}

function move(direction){
  let x = currentPosition.x;
  let y = currentPosition.y;
  switch(direction){
    case "left":
      x--
      break;
    case "right":
      x++
      break;
    case "up":
      y--
      break;
    case "down":
      y++
      break;
  }

  const moved = renderBot({ x, y })
  if (moved){
    currentPosition = { x, y }
  }
}



