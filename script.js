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
function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}
function getGridSize() {
    gridSize = prompt('Enter a grid amount between 12 and 64', 16);
    makeGrid(gridSize);
}

container.addEventListener('mouseover', function(e) {
    const squares = e.target;
    if(!squares.classList.contains('square')) {
        return;
    }else if(squares.style.backgroundColor) {
        return
    } 
    else
    squares.style.backgroundColor = '#' + getRandomColor();
});


getGridSize();