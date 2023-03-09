class AST{
  constructor(tokens){
   /*  this.ast = {
      type:'root',
      children:[]
    } */
   // this.createChildren(tokens)
  }
  createChildren(tokens){
    let ast = {
      type:'root',
      children:[]
    }
    let parent = ast;
    let _parent = parent,listContainer;
    tokens.forEach((token)=>{
      switch(token.type) {
       case 'list': if(!listContainer) {
          listContainer  = {
            type:'listContainer',
            children:[]
          }
          parent.children.push(listContainer)
        }
        parent = listContainer;
        //listContainer.children.push(token);
        break;
       default: listContainer = null; parent = _parent;break; 
      }
      this.createNode(token,parent)
    })
    return ast;
  }
  createNode(token,parent) {
    parent.children.push({
      ...token
    })
  }
  createAST(tokens){

  }
}
export default AST