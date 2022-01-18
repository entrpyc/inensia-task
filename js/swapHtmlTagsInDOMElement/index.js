import { swapTagName } from './helpers.js';

function swapHtmlTagsInDOMElement(DOMElement) {  
  // find paragraphs and spans
  const paragraphs = DOMElement.getElementsByTagName('p')
  const spans = DOMElement.getElementsByTagName('span')

  // swap tag names
  while (paragraphs.length) {
    swapTagName(paragraphs[0], 'h1')
  }
  
  // return array of new tags
}


// dev
swapHtmlTagsInDOMElement(document.body)