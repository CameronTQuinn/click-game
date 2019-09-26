// Tiny-tunes exercises
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

function ex06 () {
  const fragment = document.createDocumentFragment()
  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    fragment.appendChild(li)
  }
  const ul = document.querySelector('#list06')
  ul.appendChild(fragment)
}

function ex07 () {
  const fragment = document.createDocumentFragment()
  const linkList = ['https://en.wikipedia.org/wiki/Edward_Teller', 'https://en.wikipedia.org/wiki/Richard_Nixon', 'https://en.wikipedia.org/wiki/Neil_Armstrong', 'https://en.wikipedia.org/wiki/North_American_X-15', 'https://en.wikipedia.org/wiki/Tsar_Bomba']
  for (let i = 0; i < linkList.length; i++) {
    const li = document.createElement('li')
    const text = document.createTextNode(linkList[i])
    li.appendChild(text)
    fragment.appendChild(li)
  }
  const ul = document.querySelector('#list07')
  ul.appendChild(fragment)
}

function ex08 () {
  function appendItem () {
    const inputValue = document.querySelector('input').value
    if (inputValue !== '') {
      const text = document.createTextNode(inputValue)
      const li = document.createElement('li')
      li.appendChild(text)
      const toDoList = document.querySelector('#todolist')
      toDoList.appendChild(li)
    }
  }
  const startList = document.querySelector('button')
  startList.addEventListener('click', appendItem)
}

function ex09 () {
  const input1 = document.querySelectorAll('#textboxes09 input')[0]
  const input2 = document.querySelectorAll('#textboxes09 input')[1]
  document.querySelector('#textboxes09').addEventListener('blur', checkSame, true)
  function checkSame () {
    if (((input1.value !== '') && (input2.value !== '')) && (input1.value.trim() !== input2.value.trim())) {
      window.alert('Passwords must match')
    }
  }
}

export { ex01, ex02, ex03, ex04, ex05, ex06, ex07, ex08, ex09 }
