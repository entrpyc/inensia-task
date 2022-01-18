import { swapHtmlTags } from './index.js';

const container = document.createElement('div')
const runScriptButton = document.createElement('button')
runScriptButton.className = 'run-script-button'
container.className = 'button-container'
runScriptButton.innerText = 'Run function'
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

container.appendChild(runScriptButton)
document.body.appendChild(container)