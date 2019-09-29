const template = document.createElement('template')
template.innerHTML = `
<style>
  :host {
    background:#002418;
    font-size: 1.2em;
    color:white;
    width:500px;
    height:200px;
    padding:10px;
    border:6px solid #9b3b00;
    border-bottom:12px solid #9b3b00;
    overflow:hidden;
    margin:10px;
    float:left;
    border-radius: 3px;
  }
  p {
    overflow-wrap: break-word;
    width: 500px;
    margin: 0;
    padding: 0;
  }
  </style>

  <p id ='text'>Hola</p>
  <s id = 'speed'></s>
`
class BartBoard extends window.HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._p = this.shadowRoot.querySelector('#text')
    this._intervalID = null
    this._letter = 0
    this._text = 'Hola'
    this._speed = 25
  }

  static get observedAttributes () {
    return ['text', 'speed']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'text') {
      this._text = newValue
    } else if (name === 'speed') {
      this._speed = newValue
    }
    console.log(this._speed)
  }

  connectedCallback () {
    // this._updateRendering()
    this.addEventListener('mousedown', this._onWrite)
    this.addEventListener('mouseup', this._onStopWriting)
    this.addEventListener('mouseleave', this.stopWriting)
  }

  disconnectedCallback () {
    this.removeEventListener('mousedown', this._onWrite)
    this.removeEventListener('mouseup', this.stopWriting)
    this.removeEventListener('mouseleave', this.stpWriting)
    this.stopWriting()
  }

  _onWrite (event) {
    if (this._p.textContent !== '') {
      this._p.textContent = ' '
    }
    this._intervalID = setInterval(() => {
      if (this._p.offsetHeight >= this.offsetHeight) {
        const event = new window.CustomEvent('filled')
        this.dispatchEvent(event)
        this.stopWriting()
        return
      }
      this._p.textContent += this._text.charAt(this._letter++)
      if (this._letter >= this._text.length) {
        this._p.textContent += ' '
        this._letter = 0
      }
    }, this._speed)
  }

  stopWriting (event) {
    this._letter = 0
    clearTimeout(this._intervalID)
  }

  wipeBoard () {
    this._p.textContent = ''
    this._letter = 0
  }
}

window.customElements.define('bart-board', BartBoard)

export { BartBoard }
/*
const BartBoard = function (text = 'The only good commie is a dead commie') {
  let bbDiv = document.createElement('div')
  bbDiv.classList.add('blackboard')
  bbDiv.innerText = text
  document.querySelector('#board').appendChild(bbDiv)
}

export { BartBoard }
*/
