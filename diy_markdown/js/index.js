import myMarkDown from './lib/myMarkdown.js'
let input1 = `

# hello , *world*!

- 1*11*1
- 2222
- 3333

## 编译原理
`;
let textArea = document.querySelector('#input-area')
let showDiv = document.querySelector('#show-div')
let md = new myMarkDown()
textArea.value = input1
reanderImediate()
textArea.oninput= reanderImediate
function reanderImediate(){
  showDiv.innerHTML = ''
  const ast = md.parsed(textArea.value)
const dom = md.render(ast)
console.log(dom)
showDiv.appendChild(dom)
}
