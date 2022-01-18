export function copyAttributes(el, newEl) {
  if(!el.attributes?.length) return

  for (let i = 0; i < el.attributes.length; i++) {
    newEl.setAttribute(el.attributes[i].nodeName, el.attributes[i].nodeValue)
  }
}

export function swapTagName(tag, name) {
  // create new element
  const newTag = document.createElement(name)

  // copy innerHTML
  newTag.innerHTML = tag.innerHTML

  // copy attributes
  copyAttributes(tag, newTag)
  
  // update DOM
  tag.parentNode?.replaceChild(newTag, tag)

  return newTag
}