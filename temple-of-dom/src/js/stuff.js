const parseDOM = function () {
  var elementNumber = 0
  var attributeNumber = 0
  var commentNumber = 0
  var textNodeNumber = 0
  const start = document.documentElement
  const recParse = function (start) {
    var nodes
    if (start.childNodes) {
      nodes = start.childNodes
      loop(nodes)
    }
  }
  const loop = function (nodes) {
    var node
    for (let i = 0; i < nodes.length; i++) {
      node = nodes[i]
      if (node.nodeType === Node.ELEMENT_NODE) {
        elementNumber++
        if (node.childNodes) {
          recParse(node)
        }
      } else if (node.nodeType === Node.ATTRIBUTE_NODE) {
        attributeNumber++
        if (node.childNodes) {
          recParse(node)
        }
      } else if (node.nodeType === Node.COMMENT_NODE) {
        commentNumber++
        if (node.childNodes) {
          recParse(node)
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        textNodeNumber++
        if (node.childNodes) {
          recParse(node)
        }
      }
    }
  }
  recParse(start)
  console.log('Elements' + ' ' + elementNumber)
  console.log('Attributes' + ' ' + attributeNumber)
  console.log('Comments' + ' ' + commentNumber)
  console.log('Text nodes:' + ' ' + textNodeNumber)
}

export { parseDOM }
