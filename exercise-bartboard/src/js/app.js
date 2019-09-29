import './bart-board.js'
const bb1 = document.createElement('bart-board')
bb1.setAttribute('text', 'All work and no play makes Jack a dull boy')
document.querySelector('#board').appendChild(bb1)
bb1.addEventListener('filled', () => {
  console.log('Filled!')
  bb1.wipeBoard()
})
