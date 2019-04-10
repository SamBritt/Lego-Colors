
let builder = (createElement, eType, eValue, eId) => {
    let element = document.createElement(createElement);
    if(eType){
        element.setAttribute("type", eType)
    }
    if(eValue){
        element.setAttribute("value", eValue)
    }
    if(eId){
        element.setAttribute("id", eId)
    }
    return element;
}