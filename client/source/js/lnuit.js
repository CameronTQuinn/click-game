/**
 * API for this module. Just using the module pattern
 * @type {{addStyleFile: addStyleFile, addClassToAllLinks: addClassToAllLinks}}
 */
module.exports = {
  addStyleFile: addStyleFile,
  addClassToAllLinks: addClassToAllLinks
}

/**
 * This function adds a stylesheet file to the DOM
 * @param {String} styleSheetPath - a relative path to the stylesheet file
 * @param {Node} appendToThisNode - The nod that the link element should be added
 */
function addStyleFile (styleSheetPath, appendToThisNode) {
    // set default to document.head
  appendToThisNode = appendToThisNode || document.head

    // create the element and add the attributes needed
  var node = document.createElement('link')
  node.setAttribute('href', styleSheetPath)
  node.setAttribute('rel', 'stylesheet')
  appendToThisNode.appendChild(node)
}

/**
 * Fetch all a-link and put a class on them
 * @param {String} className - The classname to add
 */
function addClassToAllLinks (className) {
    // get all links
  var links = document.querySelectorAll('a')
  var length = links.length
  var i

  for (i = 0; i < length; i += 1) {
    var link = links[i]
        // just add the classname to it
    link.classList.add(className)
  }
}
