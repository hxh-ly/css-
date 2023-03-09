import Rules from "./Rules.js"
class Tokenizer{
  constructor(){}
  newline(src){
    let rs = Rules.block.newLine.exec(src)
    if(rs) {
      return {
        type:'newline',
        row:rs[0]
      }
    }
  }
  inLineText(src){
    let rs = Rules.inLine.text.exec(src)
    if(rs) {
      return {
        type:'text',
        row:rs[0],
        text:rs[0] // 做一些格式化
      }
    }
  }
  em(src){
    let rs = Rules.inLine.em.exec(src)
    if(rs) {
      return {
        type:'em',
        row:rs[0],
        text:rs[1]
      }
    }
  }
  
  heading(src){
    let rs = Rules.block.heading.exec(src)
    if(rs) {
      let text = rs[2].trim()
      return {
        type:'heading',
        row:rs[0],
        depth:rs[1].length,
        text:text,
        children:[]
      }
    }
  }
  list(src){
    let rs = Rules.block.list.exec(src)
    if(rs) {
      return {
        type:'list',
        row:rs[0],
        text:rs[2]&&rs[2].trim(),
        children:[]
      }
    }
  }
}
export default Tokenizer