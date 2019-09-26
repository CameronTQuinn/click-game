// Webpack approach (doesn't work as of yet)
import '../css/style.css'
/*
Manual JavaScript approach
const aTag = document.getElementsByTagName('a')
for (let i = 0; i < aTag.length; i++) {
  aTag[i].style.backgroundColor = 'yellow'
  aTag[i].style.color = 'black'
}
*/
/* Link CSS document approach
const css = document.createElement('LINK')
css.setAttribute('rel', 'stylesheet')
css.setAttribute('href', 'css/style.css')
document.querySelector('head').appendChild(css)
*/
