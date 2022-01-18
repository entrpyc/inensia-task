/**
 * @param {HTMLElement} el - Target tag
 * @param {HTMLElement} newEl - New tag
 * @returns the new tag
 */
export function copyAttributes(el, newEl) {
  if(!el.attributes?.length) return

  for (let i = 0; i < el.attributes.length; i++) {
    newEl.setAttribute(el.attributes[i].nodeName, el.attributes[i].nodeValue)
  }
}

/**
 * @param {HTMLElement} tag - Target tag
 * @param {string} name - New name
 * @returns the new tag
 */
export function swapTagName(tag, name) {
  // create new element
  const newTag = document.createElement(name)

  // copy innerHTML and attributes
  newTag.innerHTML = tag.innerHTML
  copyAttributes(tag, newTag)
  
  // update DOM
  tag.parentNode?.replaceChild(newTag, tag)

  return newTag
}