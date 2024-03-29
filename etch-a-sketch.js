const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
const numOfPixelButton = document.querySelector("#number");

function createGrid(columnsAndRows){
    let widthAndHeight = 100.0 / columnsAndRows;

    for (let row = 0; row < columnsAndRows * 2; row++){
        for (let column = 0; column < columnsAndRows; column++){
            const square = document.createElement("div");
    
            square.setAttribute("style", `padding-top: ${widthAndHeight / 2}%; width: ${widthAndHeight / 2}%`);
            square.classList.add("square");
            container.appendChild(square);
        }
    }
}

function paint(){
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) => {
            e.target.style.background = "#747474";
        });
    });
}

function deleteGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

// Starting grid
createGrid(30);
paint();

// Button events
resetButton.addEventListener("click", (e) => {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.style.background = "#D7D7D7";
    });
});

numOfPixelButton.addEventListener("click", (e) => {
    let numOfPixels = prompt("How many columns should the canvas have?");
    deleteGrid();
    createGrid(numOfPixels);
    paint();
});