const display = document.getElementById("display-container");

let createForm = () => {
    let docFrag = document.createDocumentFragment()
    let form = builder("form", undefined, undefined, "legoForm");
    docFrag.appendChild(form)
    ////
    let creatorLabel = builder("label");
    creatorLabel.htmlFor = "creator";
    creatorLabel.textContent = "Creator: "
    docFrag.appendChild(creatorLabel)
    docFrag.appendChild(builder("input", "text", undefined, "creator"));
    ////
    let colorLabel = builder("label");
    colorLabel.htmlFor = "color";
    colorLabel.textContent = "Color: "
    docFrag.appendChild(colorLabel)
    docFrag.appendChild(builder("input", "text", undefined, "color"));
    ////
    let shapeLabel = builder("label");
    shapeLabel.htmlFor = "shape";
    shapeLabel.textContent = "Shape: "
    docFrag.appendChild(shapeLabel)
    docFrag.appendChild(builder("input", "text", undefined, "shape"));
    ////
    let creationLabel = builder("label");
    creationLabel.htmlFor = "creation";
    creationLabel.textContent = "Creation: "
    docFrag.appendChild(creationLabel)
    docFrag.appendChild(builder("input", "text", undefined, "creation"));
    ////
    let selectLabel = builder("label")
    selectLabel.textContent = "Colors: ";
    docFrag.appendChild(selectLabel)
    let select = builder("select", undefined, undefined, "selectColor");
    let colors = ["Red", "Green", "Yellow", "Blue", "Orange", "Black"];
    for(let i = 0; i < colors.length; i++){
        let option = builder("option", undefined, i + 1, undefined);
        option.textContent = colors[i];
        select.appendChild(option);
    }
    docFrag.appendChild(select);
    ////
    let saveButton = builder("button", "button", undefined, "saveButton");
    saveButton.addEventListener("click", handleSave);
    saveButton.textContent = "Save"
    docFrag.appendChild(saveButton)

    display.appendChild(docFrag)
}
