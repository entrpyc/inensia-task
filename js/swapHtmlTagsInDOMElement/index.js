import { swapTagName } from './helpers.js';

function swapHtmlTagsInDOMElement(DOMElement) {  
  // find paragraphs and spans
  const paragraphs = DOMElement.getElementsByTagName('p')
  const spans = DOMElement.getElementsByTagName('span')

  const h1 = []
  const h2 = []

  // swap tag names
  while (paragraphs.length) {
    let swappedTag = swapTagName(paragraphs[0], 'h1')
    h1.push(swappedTag)
  }

  while (spans.length) {
    let swappedTag = swapTagName(spans[0], 'h2')
    h2.push(swappedTag)
  }
  
  // return array of new tags
  return [...h1, ...h2]
}


// dev
const res = swapHtmlTagsInDOMElement(document.body)
console.log(res)