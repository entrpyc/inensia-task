import { swapHtmlTags } from '../swapHtmlTagsInDOMElement/index.js';

export function ui({ nextPage, sourceCode, runButton }) {
  const container = document.createElement('div')
  container.className = 'ui-container'

  const navigationContainer = document.createElement('div')
  navigationContainer.className = 'ui-navigation-container'

  
  if(runButton) navigationContainer.appendChild(task1Demo())
  navigationContainer.appendChild(sourceCodeLink(sourceCode))
  if(nextPage) navigationContainer.appendChild(nextTaskButton(nextPage))
  
  container.appendChild(logo())
  container.appendChild(navigationContainer)
  document.body.appendChild(container)
}

export function nextTaskButton(link) {
  const nextPageButton = document.createElement('a')
  nextPageButton.className = 'ui-button ui'
  nextPageButton.innerText = 'NEXT TASK'
  nextPageButton.href = link

  return nextPageButton
}

export function sourceCodeLink(source) {
  const sourceCodeLink = document.createElement('a')
  sourceCodeLink.className = 'ui-button ui'
  sourceCodeLink.innerText = 'Source code link'
  sourceCodeLink.href = source

  return sourceCodeLink
}

export function logo() {
  const logo = document.createElement('img')
  logo.className = 'ui-logo'
  logo.innerText = 'Source code link'
  logo.src = './images/inensia-logo.png'

  return logo
}

function task1Demo() {
  const runScriptButton = document.createElement('button')
  runScriptButton.className = 'ui-button ui run'
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