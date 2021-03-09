const container = document.getElementById('container');

function makeGrid(gridSize) {
    for(let i=0; i<gridSize; i++) {
        const row = document.createElement('div');
        container.appendChild(row);

        for(let j=0; j<gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('id', 'square');
            square.style.width = `${400 / gridSize}px`;
            square.style.height = `${400 / gridSize}px`;
            row.appendChild(square);
        }
    }
}

function getGridSize() {
    gridSize = prompt('Enter a grid amount between 12 and 64', 16);
    makeGrid(gridSize);
}
getGridSize();