export function swapTagName(tag, name) {
  // create new elemet
  const newTag = document.createElement(name)
  // copy innerHTML
  newTag.innerHTML = tag.innerHTML

  // copy attributes

  // copy events
  
  // update DOM
  tag.parentNode?.replaceChild(newTag, tag)
}