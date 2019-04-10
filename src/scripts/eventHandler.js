let handleSave = () => {
    console.log("hey")
    let creator = document.getElementById("creator");
    let color = document.getElementById("color");
    let shape = document.getElementById("shape");
    let creation = document.getElementById("creation");
    let colors = document.getElementById("selectColor");
    let colorsValue = colors.options[colors.selectedIndex].text;



    let legoToSave = {
        "creator": creator.value,
        "color": color.value,
        "shape": shape.value,
        "creation": creation.value,
        "colors": colorsValue
    }
    postLegos(legoToSave)
}