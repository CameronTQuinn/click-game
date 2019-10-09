const colorsEnum = Object.freeze({ blue: 0, red: 1, yellow: 2 })
const board = [{ color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }]
const getClickColor = function () {
  // Click color
  var keys1 = Object.keys(colorsEnum)
  const clickColor = colorsEnum[keys1[Math.floor(keys1.length * Math.random())]]
  console.log(keys1[clickColor])
  console.log(clickColor)
  const clickColorLoc = document.querySelector('#colorToClick')
  clickColorLoc.setAttribute('style', `color:${keys1[clickColor]}`)
  clickColorLoc.innerHTML = `Color to Click: ${keys1[clickColor]}`
  return keys1[clickColor]
}

const getColor = function (board) {
  let blueCount = 0
  let redCount = 0
  let yellowCount = 0
  for (let i = 0; i < board.length; i++) {
    console.log(i)
    var keys2 = Object.keys(colorsEnum)
    console.log('keys2: ' + keys2)
    const newColorOfThree = colorsEnum[keys2[Math.floor(keys2.length * Math.random())]]
    console.log('newColorOfThree: ' + newColorOfThree)
    if ((blueCount !== 3) && (redCount !== 3) && (yellowCount !== 3)) {
      if ((newColorOfThree === 0) && (blueCount !== 3)) {
        // Change tile attribute
        console.log('Something to blue')
        board[i].color = 'blue'
        console.log(board[i].color)
        blueCount++
      } else if (newColorOfThree === 1 && redCount !== 3) {
        console.log('Set something to red')
        board[i].color = 'red'
        console.log(board[i].color)
        redCount++
      } else if (newColorOfThree === 2 && yellowCount !== 3) {
        console.log('Set something to yellow')
        board[i].color = 'yellow'
        console.log(board[i].color)
        yellowCount++
      }
    } else if (((blueCount === 3) && (redCount === 3)) || ((blueCount === 3) && (yellowCount === 3)) || ((redCount === 3) && (yellowCount === 3))) {
      console.log('Two of three full')
      if ((blueCount === 3) && (redCount === 3)) {
        console.log('Something to yellow')
        board[i].color = 'yellow'
        console.log(board[i].color)
        yellowCount++
      } else if ((blueCount === 3) && (yellowCount === 3)) {
        console.log('Something to red')
        board[i].color = 'red'
        console.log(board[i].color)
        redCount++
      } else if ((redCount === 3) && (yellowCount === 3)) {
        console.log('Something to blue')
        board[i].color = 'blue'
        console.log(board[i].color)
        blueCount++
      } else {
        console.log('Something went wrong')
      }
    } else if ((blueCount === 3) || (redCount === 3) || (yellowCount === 3)) {
      console.log('One of three full')
      if (blueCount === 3) {
        console.log('Blue full')
        const newKeys = keys2.filter(function (value) {
          return value !== 'blue'
        })
        console.log('Keys: ' + newKeys)
        console.log('Newkeys length: ' + newKeys.length)
        const newColorOfTwo = colorsEnum[newKeys[Math.floor((newKeys.length - 1) * Math.random())]]
        console.log(newColorOfTwo)
        if (newColorOfTwo === 0) {
          console.log('Something to red')
          board[i].color = 'red'
          console.log(board[i].color)
          redCount++
        } else if (newColorOfTwo === 1) {
          console.log('Something to yellow')
          board[i].color = 'yellow'
          console.log(board[i].color)
          yellowCount++
        }
      } else if (redCount === 3) {
        console.log('Red full')
        const newKeys = keys2.filter(function (value) {
          return value !== 'red'
        })
        console.log('Keys: ' + newKeys)
        console.log(newKeys.length)
        const newColorOfTwo = colorsEnum[newKeys[Math.floor((newKeys.length - 1) * Math.random())]]
        console.log(newColorOfTwo)
        if (newColorOfTwo === 0) {
          console.log('Something to blue')
          board[i].color = 'blue'
          console.log(board[i].color)
          blueCount++
        } else if (newColorOfTwo === 1) {
          console.log('Something to yellow')
          board[i].color = 'yellow'
          console.log(board[i].color)
          yellowCount++
        }
      } else if (yellowCount === 3) {
        console.log('Yellow full')
        keys2 = keys2.filter(function (value) {
          return value !== 'yellow'
        })
        console.log('Keys: ' + keys2)
        const newColorOfTwo = colorsEnum[keys2[Math.floor((keys2.length - 1) * Math.random())]]
        if (newColorOfTwo === 0) {
          console.log('Something to blue')
          board[i].color = 'blue'
          console.log(board[i].color)
          blueCount++
        } else if (newColorOfTwo === 1) {
          console.log('Something to red')
          board[i].color = 'red'
          console.log(board[i].color)
          redCount++
        }
      } else {
        console.log('Something went wrong')
      }
    }
  }
  return board
}

const tileAssign = function (board) {
  // Assign tiles
  console.log('Got to tileAssign')
  board = getColor(board)
  console.log('Called getColor')
  const c1r1 = document.querySelector('#board > div:nth-child(2)')
  c1r1.setAttribute('class', `column-left border ${board[0].color}`)
  const c2r1 = document.querySelector('#board > div:nth-child(3)')
  c2r1.setAttribute('class', `column-center border ${board[1].color}`)
  const c3r1 = document.querySelector('#board > div:nth-child(1)')
  c3r1.setAttribute('class', `column-right border ${board[2].color}`)
  const c1r2 = document.querySelector('#board > div:nth-child(5)')
  c1r2.setAttribute('class', `column-left border ${board[3].color}`)
  const c2r2 = document.querySelector('#board > div:nth-child(6)')
  c2r2.setAttribute('class', `column-center border ${board[4].color}`)
  const c3r2 = document.querySelector('#board > div:nth-child(4)')
  c3r2.setAttribute('class', `column-right border ${board[5].color}`)
  const c1r3 = document.querySelector('#board > div:nth-child(8)')
  c1r3.setAttribute('class', `column-left border ${board[6].color}`)
  const c2r3 = document.querySelector('#board > div:nth-child(9)')
  c2r3.setAttribute('class', `column-center border ${board[7].color}`)
  const c3r3 = document.querySelector('#board > div:nth-child(7)')
  c3r3.setAttribute('class', `column-right border ${board[8].color}`)
}

const game = function (clickColor) {
  // If color clicked is click color then turn it to grey
  // If player gets all three, WIN!
  // If player runs out of Time, LOSE!
  let count = 0 
  const c1r1 = document.querySelector('#board > div:nth-child(2)')
  count = c1r1.addEventListener('click', function (event) { onClick(event, count, clickColor, 'left') })
  const c2r1 = document.querySelector('#board > div:nth-child(3)')
  count = c2r1.addEventListener('click', function (event) { onClick(event, count, clickColor, 'center') })
  const c3r1 = document.querySelector('#board > div:nth-child(1)')
  count = c3r1.addEventListener('click', function (event) { onClick(event, count, clickColor, 'right') })
  const c1r2 = document.querySelector('#board > div:nth-child(5)')
  count = c1r2.addEventListener('click', function (event) { onClick(event, count, clickColor, 'left') })
  const c2r2 = document.querySelector('#board > div:nth-child(6)')
  count = c2r2.addEventListener('click', function (event) { onClick(event, count, clickColor, 'center') })
  const c3r2 = document.querySelector('#board > div:nth-child(4)')
  count = c3r2.addEventListener('click', function (event) { onClick(event, count, clickColor, 'right') })
  const c1r3 = document.querySelector('#board > div:nth-child(8)')
  count = c1r3.addEventListener('click', function (event) { onClick(event, count, clickColor, 'left') })
  const c2r3 = document.querySelector('#board > div:nth-child(9)')
  count = c2r3.addEventListener('click', function (event) { onClick(event, count, clickColor, 'center') })
  const c3r3 = document.querySelector('#board > div:nth-child(7)')
  count = c3r3.addEventListener('click', function (event) { onClick(event, count, clickColor, 'right') })
}

const onClick = function (event, count, clickColor, pos) {
  console.log(pos)
  const tar = event.target
  console.log(tar.id)
  const modify = document.getElementById(`${event.target.id}`)
  if (modify.class === `column-${pos} border ${clickColor}`) {
    console.log('Went in here')
    event.target.id.setAttribute('class', `column-${pos} border grey`)
  }
  count++
  return count
}

const main = function () {
  const clickColor = getClickColor()
  tileAssign(board)
  game(clickColor)
}

export { main }
