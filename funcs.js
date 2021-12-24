function moveToCenter(HTMLelement){
    if(typeof HTMLelement == "object"){
        HTMLelement.style=`position:absolute; top:${(window.innerHeight / 2) - (HTMLelement.offsetHeight / 2)}px; left:${(window.innerWidth / 2) - (HTMLelement.offsetWidth / 2)}px;`;
    }else{
        throw new Error("Wrong argument type!");
    }
}
