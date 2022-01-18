import { swapTagName } from './helpers.js';

/**
 * Swaps tag names inside a given HTMLElement
 * @param {Object} props
 * @param {HTMLElement} props.scope - Parent element
 * @param {Object[]} props.tagsRename - Tags that will be swapped
 * @param {string} props.tagsRename[].target - Name of the tag
 * @param {string} props.tagsRename[].newValue - New tag name
 * @returns an array of the swapped tags
 */
export function swapHtmlTags({ scope, tagsRename }) {
  const newTagsArray = []

  tagsRename.forEach(tag => {
    const { target, newValue } = tag

    // find paragraphs and spans
    const paragraphs = scope.getElementsByTagName(target)
  
    // swap tag names
    while (paragraphs.length) {
      let swappedTag = swapTagName(paragraphs[0], newValue)
      newTagsArray.push(swappedTag)
    }
  })
  
  // return array of new tags
  return newTagsArray
}