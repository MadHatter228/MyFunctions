
function moveToCenter(HTMLelement) {
    if (typeof HTMLelement == "object") {
        HTMLelement.style = `position:absolute; top:${(window.innerHeight / 2) - (HTMLelement.offsetHeight / 2)}px; left:${(window.innerWidth / 2) - (HTMLelement.offsetWidth / 2)}px;`;
    } else {
        throw new Error("Wrong argument type [HTMLelement]!");
    }
}
function initElement(HTMLelement, propertys = {}, attributes = {}, ...classes) {
    if (typeof HTMLelement == "object" && typeof propertys == "object" && typeof attributes == "object") {
        for (let property in propertys) {
            HTMLelement[property] = propertys[property];
        }
        for (let attribute in attributes) {
            HTMLelement.setAttribute(attribute, attributes[attribute]);
        }
        for (let className of classes) {
            HTMLelement.classList.add(className);
        }
    } else {
        throw new Error("Wrong some argument type!");
    }
}
function randomInt(min = 0, max = 100) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}