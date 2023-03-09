import Tokenizer from "./Tokenizer.js"
class Lexer {
  constructor(){
    this.tokenizer = new Tokenizer()
  }
  lex(src){
    let tokens = []
    src  = this.preprocess(src)
    this.parseBlock(src,tokens)
    return tokens
  }
  inlineToken(src,tokens){
    let token;
    while(src) {
      if(token = this.tokenizer.em(src)) {
        src = src.substring(token.row.length)
        tokens.push(token)
        continue;
      }
      if(token = this.tokenizer.inLineText(src)) {
        src = src.substring(token.row.length)
        tokens.push(token)
        continue;
      }
    }
  }
  preprocess(src){
    return src.replace(/\r\n/g,'\n').replace(/\t/g,'    ')
  }
  parseBlock(src,tokens=[]){
    let token
    while(src) {
      if(token = this.tokenizer.newline(src)){
        //去掉
       // console.log(token)
        src = src.substring(token.row.length)
        //push
        tokens.push(token)
        continue;
      }
       if(token = this.tokenizer.heading(src)){
        this.inlineToken(token.text,token.children)
        //console.log(token)
        src= src.substring(token.row.length)
        tokens.push(token)
        continue
      }
      if(token = this.tokenizer.list(src)){
        this.inlineToken(token.text,token.children)
       // console.log(token)
        src= src.substring(token.row.length)
        tokens.push(token)
        continue
      }
      if(src){
        src = ''
      }
      /*if(){} */
    }
    //console.log(this.tokens)
  }
}
export default Lexer