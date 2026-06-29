const container = document.querySelector("#container");
const button = document.querySelector("#resizeBtn");

function createGrid(size) {

    container.innerHTML = ""; // clear old grid

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

// default grid
createGrid(16);

// button click → new grid
button.addEventListener("click", () => {

    let size = prompt("Enter grid size (max 100):");

    size = Number(size);

    if (size > 100) {
        alert("Max size is 100!");
        return;
    }

    if (!size || size <= 0) {
        alert("Enter a valid number!");
        return;
    }

    createGrid(size);
});