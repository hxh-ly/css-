class Renderer{
  constructor(){}
  render(ast){
    let root = document.createElement('div')
    //console.log('多少个ast',ast)
    this.renderNode(ast.children,root)
    return root;
  }
  renderNode(children,rootDiv) {
    children.forEach(token => {
      let el;
      switch(token.type) {
        case 'heading': el = document.createElement(`h${token.depth}`); rootDiv.appendChild(el); this.renderNode(token.children,el);break;
        case 'text':; el = document.createElement(`span`); el.innerText = token.text;  rootDiv.appendChild(el);break;
        case 'em':;el = document.createElement(`em`); el.innerText = token.text;  rootDiv.appendChild(el);break;
        case 'listContainer':;el = document.createElement(`ul`);  rootDiv.appendChild(el); this.renderNode(token.children,el);break;
        case 'list':;el = document.createElement(`li`); rootDiv.appendChild(el); this.renderNode(token.children,el);break;
        case 'newline':;el = document.createElement(`p`);  rootDiv.appendChild(el);break;
      }
    });
  }
}
export default Renderer