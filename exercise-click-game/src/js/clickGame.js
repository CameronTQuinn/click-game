const colorsEnum = Object.freeze({ blue: 0, red: 1, yellow: 2 })
const board = { one: '', two: '', three: '', four: '', five: '', six: '', seven: '', eight: '', nine: '' }
const getClickColor = function () {
  // Click color
  var keys1 = Object.keys(colorsEnum)
  const clickColor = colorsEnum[keys1[Math.floor(keys1.length * Math.random())]]
  console.log(keys1[clickColor])
  console.log(clickColor)
  return clickColor
  /*
  // Give tiles colors
  var keys2 = Object.keys(gameBoard)
  console.log(keys2)
  const randKey1 = keys2[Math.floor(keys2.length * Math.random())]
  const place = gameBoard[randKey]
  console.log(place)
  console.log(randKey)
  */
}

const getColor = function () {
  let blueCount = 0
  let redCount = 0
  let yellowCount = 0
  for (let i = 0; i < 8; i++) {
    var keys2 = Object.keys(colorsEnum)
    const newColor = colorsEnum[keys2[Math.floor(keys2.length * Math.random())]]
    if (newColor === 0 && blueCount !== 3) {
      // Change tile attribute
      board.i = 'blue'
      blueCount++
    } else if (newColor === 1 && redCount !== 3) {
      board.i = 'red'
      redCount++
    } else if (newColor === 3 && yellowCount !== 3) {
      board.i = 'yellow'
      yellowCount++
    }
  }
  return board
}

const tileAssign = function (board) {
  // Assign tiles
  getColor(board)
  for (var color in board) {
    // Color board
  }
}

const main = function () {
  getClickColor()
  tileAssign(board)
}

export { main }
