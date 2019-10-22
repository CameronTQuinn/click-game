import './clickGame.js'
const clickGame = document.createElement('click-game')
const appendAt = document.querySelector('body')
appendAt.appendChild(clickGame)
clickGame.createGame()
