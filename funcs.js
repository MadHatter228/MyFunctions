
function moveToCenter(HTMLelement) {
    if (typeof HTMLelement == "object") {
        HTMLelement.style = `position:absolute; top:${(window.innerHeight / 2) - (HTMLelement.offsetHeight / 2)}px; left:${(window.innerWidth / 2) - (HTMLelement.offsetWidth / 2)}px;`;
    } else {
        throw new Error("Wrong argument type [HTMLelement]!");
    }
}
function initElement(HTMLelement, params = { attrs:{}, props:{}, classes:[], newParent: { node: null, method: "append" } }) {
    if(!HTMLelement.tagName){
        if(typeof(HTMLelement) == "string"){
            HTMLelement = document.createElement(HTMLelement);
        }else{
            return new Error("Wrong first argument!");
        }
        for(let attr in params.attrs){
            HTMLelement.setAttribute(attr,params.attrs[attr]);
        }
        for(let prop in params.props){
            HTMLelement[prop] = params.props[prop];
        }
        for(let className of params.classes){
            HTMLelement.classList.add(className);
        }
        if(params.newParent.node && params.newParent.node.tagName){
            params.newParent[params.newParent.method](HTMLelement);
        }
    }
}
function randomInt(min = 0, max = 100) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function newTag(obj){
    let newEl = document.createElement(obj.tag);
    if(obj.attrs){
        for(let attr in obj.attrs){
            newEl.setAttribute(attr, obj.attrs[attr]);
        }
    }
    if(obj.props){
        for(let prop in obj.props){
            newEl[prop] = obj.props[prop];
        }
    }
    if(obj.classes){
        for(let className of obj.classes){
            newEl.classList.add(className);
        }
    }
    if(obj.appendTarget){
        obj.appendTarget[obj.appendMode](newEl);
    }
}