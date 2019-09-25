function ex01 () {
  const myText = document.createTextNode('Hello World!')
  const pTag = document.querySelector('#step01_hello')
  pTag.appendChild(myText)
}

function ex02 () {
  const e = document.createElement('H2')
  const t = document.createTextNode('This is a sub headline')
  const hTag = document.querySelector('#step02')
  hTag.appendChild(e).appendChild(t)
}

function ex03 () {
  const e = document.createElement('H2')
  const t = document.createTextNode('This is a sub headline')
  const hTag = document.querySelector('#step03')
  hTag.insertBefore(e, hTag.childNodes[3])
  e.appendChild(t)
}

function ex04 () {
  const pTag = document.querySelector('#step04').childNodes[1]
  pTag.style.color = 'red'
}

function ex05 () {
  const greyBox = document.querySelector('div.greybox')
  function createPopUp () {
    const e = document.createElement('p')
    const t = document.createTextNode('You clicked!')
    const hTag = document.querySelector('#step05')
    hTag.appendChild(e).appendChild(t)
  }
  greyBox.addEventListener('click', createPopUp)
}

export { ex01, ex02, ex03, ex04, ex05 }
