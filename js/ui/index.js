import { swapHtmlTags } from '../swapHtmlTagsInDOMElement/index.js';

function task1Demo() {
  const runScriptButton = document.createElement('button')
  runScriptButton.className = 'ui-button'
  runScriptButton.innerText = 'RUN'
  runScriptButton.addEventListener("click", () => {
    const scope = document.getElementById('row')
    const tagsRename = [
      {
        target: 'p',
        newValue: 'h1'
      },
      {
        target: 'span',
        newValue: 'h2'
      },
    ]

    const res = swapHtmlTags({ scope, tagsRename })
    console.log(res)
  })

  return runScriptButton
}

export function nextTask(link) {
  const container = document.createElement('div')
  container.className = 'ui-container'

  if(link === './task-2.html') {
    const runScriptButton = task1Demo()
    container.appendChild(runScriptButton)
  }

  const nextPageButton = document.createElement('a')
  nextPageButton.className = 'ui-button'
  nextPageButton.innerText = 'NEXT TASK'
  nextPageButton.href = link

  container.appendChild(nextPageButton)
  document.body.appendChild(container)

  sourceCode()
}

export function sourceCode() {
  const container = document.createElement('div')
  container.className = 'ui-container top'

  const sourceCodeLink = document.createElement('a')
  sourceCodeLink.className = 'ui-link'
  sourceCodeLink.innerText = 'Source code link'
  sourceCodeLink.href = 'https://github.com/entrpyc/inensia-task'

  container.appendChild(sourceCodeLink)
  document.body.appendChild(container)
}