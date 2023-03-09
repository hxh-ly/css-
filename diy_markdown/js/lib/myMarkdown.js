import Parse from "./Parse.js"
import Renderer from './Renderer.js'
class myMarkDown
{
  constructor(){
    this.parse = new Parse()
    this.renderer = new Renderer()
  }
  parsed(input1){
    let ast = this.parse.parse(input1)
    return ast
  }
  render(ast){
    return this.renderer.render(ast)
  }
}
export default  myMarkDown