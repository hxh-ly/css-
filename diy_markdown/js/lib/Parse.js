import Lexer  from "./Lexer.js"
import AST from "./AST.js"
class Parse {
  constructor(){
    this.lexer = new Lexer()
  }
  parse(input1){
    const tokens = this.lexer.lex(input1)
    //console.log('肯定是token多了',tokens)
    let ast =  (new AST()).createChildren(tokens)
    return ast
  }
}
export default Parse