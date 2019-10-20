const colorsEnum = Object.freeze({ blue: 0, red: 1, yellow: 2 })
const board = [{ color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }, { color: '' }]
const getClickColor = function () {
  // Click color
  var keys1 = Object.keys(colorsEnum)
  const clickColor = colorsEnum[keys1[Math.floor(keys1.length * Math.random())]]
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
    var keys2 = Object.keys(colorsEnum)
    const newColorOfThree = colorsEnum[keys2[Math.floor(keys2.length * Math.random())]]
    if ((blueCount !== 3) && (redCount !== 3) && (yellowCount !== 3)) {
      if ((newColorOfThree === 0) && (blueCount !== 3)) {
        // Change tile attribute
        board[i].color = 'blue'
        blueCount++
      } else if (newColorOfThree === 1 && redCount !== 3) {
        board[i].color = 'red'
        redCount++
      } else if (newColorOfThree === 2 && yellowCount !== 3) {
        board[i].color = 'yellow'
        yellowCount++
      }
    } else if (((blueCount === 3) && (redCount === 3)) || ((blueCount === 3) && (yellowCount === 3)) || ((redCount === 3) && (yellowCount === 3))) {
      if ((blueCount === 3) && (redCount === 3)) {
        board[i].color = 'yellow'
        yellowCount++
      } else if ((blueCount === 3) && (yellowCount === 3)) {
        board[i].color = 'red'
        redCount++
      } else if ((redCount === 3) && (yellowCount === 3)) {
        board[i].color = 'blue'
        blueCount++
      } else {
        console.log('Something went wrong')
      }
    } else if ((blueCount === 3) || (redCount === 3) || (yellowCount === 3)) {
      if (blueCount === 3) {
        const newKeys = keys2.filter(function (value) {
          return value !== 'blue'
        })
        const newColorOfTwo = colorsEnum[newKeys[Math.floor((newKeys.length - 1) * Math.random())]]
        if (newColorOfTwo === 0) {
          board[i].color = 'red'
          redCount++
        } else if (newColorOfTwo === 1) {
          board[i].color = 'yellow'
          yellowCount++
        }
      } else if (redCount === 3) {
        const newKeys = keys2.filter(function (value) {
          return value !== 'red'
        })
        const newColorOfTwo = colorsEnum[newKeys[Math.floor((newKeys.length - 1) * Math.random())]]
        if (newColorOfTwo === 0) {
          board[i].color = 'blue'
          blueCount++
        } else if (newColorOfTwo === 1) {
          board[i].color = 'yellow'
          yellowCount++
        }
      } else if (yellowCount === 3) {
        keys2 = keys2.filter(function (value) {
          return value !== 'yellow'
        })
        const newColorOfTwo = colorsEnum[keys2[Math.floor((keys2.length - 1) * Math.random())]]
        if (newColorOfTwo === 0) {
          board[i].color = 'blue'
          blueCount++
        } else if (newColorOfTwo === 1) {
          board[i].color = 'red'
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
  board = getColor(board)
  const c1r1 = document.querySelector('#board > div:nth-child(2)')
  c1r1.setAttribute('class', `column-left border ${board[0].color}`)
  c1r1.setAttribute('id', 'tile0')
  const c2r1 = document.querySelector('#board > div:nth-child(3)')
  c2r1.setAttribute('class', `column-center border ${board[1].color}`)
  c2r1.setAttribute('id', 'tile1')
  const c3r1 = document.querySelector('#board > div:nth-child(1)')
  c3r1.setAttribute('class', `column-right border ${board[2].color}`)
  c3r1.setAttribute('id', 'tile2')
  const c1r2 = document.querySelector('#board > div:nth-child(5)')
  c1r2.setAttribute('class', `column-left border ${board[3].color}`)
  c1r2.setAttribute('id', 'tile3')
  const c2r2 = document.querySelector('#board > div:nth-child(6)')
  c2r2.setAttribute('class', `column-center border ${board[4].color}`)
  c2r2.setAttribute('id', 'tile4')
  const c3r2 = document.querySelector('#board > div:nth-child(4)')
  c3r2.setAttribute('class', `column-right border ${board[5].color}`)
  c3r2.setAttribute('id', 'tile5')
  const c1r3 = document.querySelector('#board > div:nth-child(8)')
  c1r3.setAttribute('class', `column-left border ${board[6].color}`)
  c1r3.setAttribute('id', 'tile6')
  const c2r3 = document.querySelector('#board > div:nth-child(9)')
  c2r3.setAttribute('class', `column-center border ${board[7].color}`)
  c2r3.setAttribute('id', 'tile7')
  const c3r3 = document.querySelector('#board > div:nth-child(7)')
  c3r3.setAttribute('class', `column-right border ${board[8].color}`)
  c3r3.setAttribute('id', 'tile8')
}

const game = function (clickColor) {
  // If color clicked is click color then turn it to grey
  // If player gets all three, WIN!
  // If player runs out of Time, LOSE!
  let count = 0
  let time = 20
  const timeDisplay = document.createElement('h2')
  const appendAt = document.getElementById('time')
  timeDisplay.setAttribute('style', 'color:red')
  appendAt.appendChild(timeDisplay)
  const timer = setInterval(function () {
    if (time === 0) {
      restartGame(false)
      clearInterval(timer)
      time = 20
    } else {
      time--
      console.log(time)
      timeDisplay.innerHTML = `${time}`
    }
  }, 1000)
  const c1r1 = document.querySelector('#board > div:nth-child(2)')
  c1r1.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'left') })
  const c2r1 = document.querySelector('#board > div:nth-child(3)')
  c2r1.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'center') })
  const c3r1 = document.querySelector('#board > div:nth-child(1)')
  c3r1.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'right') })
  const c1r2 = document.querySelector('#board > div:nth-child(5)')
  c1r2.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'left') })
  const c2r2 = document.querySelector('#board > div:nth-child(6)')
  c2r2.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'center') })
  const c3r2 = document.querySelector('#board > div:nth-child(4)')
  c3r2.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'right') })
  const c1r3 = document.querySelector('#board > div:nth-child(8)')
  c1r3.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'left') })
  const c2r3 = document.querySelector('#board > div:nth-child(9)')
  c2r3.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'center') })
  const c3r3 = document.querySelector('#board > div:nth-child(7)')
  c3r3.addEventListener('click', function (event) { count = onClick(event, timer, time, count, clickColor, 'right') })
}

const onClick = function (event, timer, time, count, clickColor, pos) {
  console.log(count)
  console.log(pos)
  const tar = event.target
  console.log(tar)
  console.log(tar.id)
  console.log(tar.class)
  const modify = document.getElementById(`${tar.id}`)
  console.log(modify)
  console.log(modify.getAttribute('class'))
  if (modify.getAttribute('class') === `column-${pos} border ${clickColor}`) {
    console.log('Went in here')
    tar.setAttribute('class', `column-${pos} border grey`)
    count++
  }
  if (count === 3) {
    console.log('Done')
    clearInterval(timer)
    restartGame(true, time)
  }
  return count
}

const restartGame = function (value, time) {
  const appendAt = document.getElementsByClassName('container')[0]
  if (value === true) {
    const winLabel = document.createElement('h2')
    winLabel.innerHTML = 'You have won!'
    winLabel.setAttribute('style', 'color:purple')
    const winButton = document.createElement('button')
    winButton.innerHTML = 'Play again?'
    winButton.addEventListener('click', (event) => {
      window.location.reload(false)
    })
    appendAt.appendChild(winLabel).appendChild(winButton)
    // Display leaderboard
    sessionStorage.setItem(`${time}`)
    const itemsInStorage = Object.keys(sessionStorage)
    const times = []
    for (let i = 0; i < itemsInStorage.length; i++) {
    // Get each player and time from storage
      const itemFromStorage = sessionStorage.getItem(itemsInStorage[i])
      const obj = { nickname: itemsInStorage[i], time: itemFromStorage }
      times.push(obj)
    }
    // Sort players according to time
    const orderedListOfTimes = times.sort((a, b) => { return a.time - b.time })
    // Create leaderboard
    const leaderBoardElement = document.createElement('h2')
    leaderBoardElement.innerHTML = '<h2>Leaderboard</h2>'
    appendAt.appendChild(leaderBoardElement)
    for (let i = 0; i < orderedListOfTimes.length; i++) {
      const displayPlayer = document.createElement('h3')
      displayPlayer.innerHTML = `Times: ${i}`
      appendAt.appendChild(displayPlayer)
    }
  } else if (value === false) {
    // Display that they have failed
    const failMessage = document.createElement('h2')
    failMessage.setAttribute('style', 'color:red')
    failMessage.innerHTML = 'You ran out of time!'
    const failButton = document.createElement('button')
    failButton.innerHTML = 'Play again?'
    failButton.addEventListener('click', (event) => {
      window.location.reload(false)
    })
    appendAt.appendChild(failMessage).appendChild(failButton)
  }
}

const main = function () {
  const clickColor = getClickColor()
  tileAssign(board)
  game(clickColor)
}

export { main }
